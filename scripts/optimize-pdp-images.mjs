import { createHash } from "node:crypto";
import { readdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/pdp");
const MAX_EDGE = 1920;
const QUALITY = 84;

function sortKey(name) {
  const lower = name.toLowerCase();
  const group = lower.includes("chatgpt") ? 0 : /^\d/.test(lower) ? 2 : 1;
  return `${group}:${lower}`;
}

function fitted(width, height) {
  const scale = Math.min(1, MAX_EDGE / Math.max(width, height));
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}

async function fingerprint(file) {
  const data = await sharp(file)
    .rotate()
    .resize(64, 64, { fit: "fill" })
    .removeAlpha()
    .raw()
    .toBuffer();
  return createHash("sha1").update(data).digest("hex");
}

async function thumb(file) {
  return sharp(file)
    .rotate()
    .resize(32, 32, { fit: "fill" })
    .removeAlpha()
    .raw()
    .toBuffer();
}

async function verify(source, file, expected) {
  const meta = await sharp(file).metadata();
  if (meta.format !== "webp") throw new Error(`format is ${meta.format}`);
  if (!meta.width || !meta.height) throw new Error("missing output dimensions");
  if (
    Math.abs(meta.width - expected.width) > 2 ||
    Math.abs(meta.height - expected.height) > 2
  ) {
    throw new Error(
      `size ${meta.width}x${meta.height}, expected ${expected.width}x${expected.height}`,
    );
  }

  const { data, info } = await sharp(file)
    .raw()
    .toBuffer({ resolveWithObject: true });
  if (data.length !== info.width * info.height * info.channels) {
    throw new Error("truncated decode");
  }

  const decoded = await sharp(file).stats();
  const blank = decoded.channels
    .slice(0, 3)
    .every((channel) => channel.stdev < 0.5);
  if (blank) throw new Error("decoded image is blank");

  const before = await thumb(source);
  const after = await thumb(file);
  let error = 0;
  for (let i = 0; i < before.length; i += 1) {
    error += Math.abs(before[i] - after[i]);
  }
  const mae = error / before.length;
  if (mae > 18) throw new Error(`visual error too high (${mae.toFixed(1)})`);
  return mae;
}

async function convertOne(source, dest) {
  const oriented = sharp(source, { failOn: "error" }).rotate();
  const meta = await oriented.metadata();
  if (!meta.width || !meta.height) throw new Error("missing dimensions");

  const stats = await sharp(source).rotate().stats();
  const alpha = stats.channels[3];
  const opaque = !alpha || alpha.min >= 250;
  const size = fitted(meta.width, meta.height);

  let pipeline = sharp(source, { failOn: "error" }).rotate();
  if (opaque) pipeline = pipeline.removeAlpha();
  if (size.width !== meta.width || size.height !== meta.height) {
    pipeline = pipeline.resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  await pipeline
    .webp({
      quality: QUALITY,
      alphaQuality: 100,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(dest);

  const mae = await verify(source, dest, size);
  return { ...size, opaque, mae };
}

const dirs = (await readdir(ROOT, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const report = [];
let originalBytes = 0;
let outputBytes = 0;

for (const dir of dirs) {
  const folder = path.join(ROOT, dir);
  const names = (await readdir(folder))
    .filter((name) => /\.(png|jpe?g)$/i.test(name))
    .sort((a, b) => sortKey(a).localeCompare(sortKey(b)));

  const seen = new Set();
  const unique = [];
  const skipped = [];

  for (const name of names) {
    const file = path.join(folder, name);
    const hash = await fingerprint(file);
    if (seen.has(hash)) {
      skipped.push(name);
      continue;
    }
    seen.add(hash);
    unique.push({ name, file });
  }

  const written = [];
  for (let index = 0; index < unique.length; index += 1) {
    const { name, file } = unique[index];
    const dest = path.join(folder, `${String(index + 1).padStart(2, "0")}.webp`);
    const before = (await stat(file)).size;
    originalBytes += before;
    try {
      const result = await convertOne(file, dest);
      const after = (await stat(dest)).size;
      outputBytes += after;
      written.push({
        name,
        dest: path.basename(dest),
        before,
        after,
        mae: result.mae,
      });
    } catch (error) {
      await rm(dest, { force: true });
      console.error(`FAIL ${dir}/${name}: ${error.message}`);
      process.exitCode = 1;
      break;
    }
  }

  if (written.length !== unique.length) break;

  for (const item of written) await rm(path.join(folder, item.name));
  for (const name of skipped) await rm(path.join(folder, name));

  report.push({
    dir,
    kept: written.length,
    skipped: skipped.length,
    before: written.reduce((sum, item) => sum + item.before, 0),
    after: written.reduce((sum, item) => sum + item.after, 0),
  });
}

for (const item of report) {
  const before = (item.before / 1024 / 1024).toFixed(2);
  const after = (item.after / 1024 / 1024).toFixed(2);
  const ratio = item.before ? Math.round((1 - item.after / item.before) * 100) : 0;
  console.log(
    `${item.dir}: ${item.kept} images, ${item.skipped} duplicates removed, ${before} MB -> ${after} MB (${ratio}% smaller)`,
  );
}

console.log(
  `TOTAL ${(originalBytes / 1024 / 1024).toFixed(1)} MB -> ${(outputBytes / 1024 / 1024).toFixed(1)} MB`,
);
