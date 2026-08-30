Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = "Stop"
$base = "d:\projects\paffix-bartar"
$orig = Join-Path $base ".tmp-figma\figma-originals"
$imgDir = Join-Path $base "images pdp"
$pub = Join-Path $base "public"

function Save-Png($bmp, $dst) {
  $dir = Split-Path $dst -Parent
  if (!(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  $bmp.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
}

function Copy-Force($src, $dst) {
  $dir = Split-Path $dst -Parent
  if (!(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  Copy-Item -LiteralPath $src -Destination $dst -Force
}

function Clone-Rect($img, $x, $y, $w, $h) {
  $bw = [Math]::Max(1, [Math]::Min($w, $img.Width - $x))
  $bh = [Math]::Max(1, [Math]::Min($h, $img.Height - $y))
  $rect = New-Object System.Drawing.Rectangle $x, $y, $bw, $bh
  return $img.Clone($rect, $img.PixelFormat)
}

# High-res original Figma fills (clean studio photos, no UI chrome)
$hires = @(
  "adidas",
  "nike-v5k",
  "nike-v2k",
  "nike-sb",
  "jordan-halloween",
  "nike-dragon",
  "nike-dragon-high"
)
foreach ($slug in $hires) {
  $src = Join-Path $orig "$slug.png"
  Copy-Force $src (Join-Path $pub "pdp\$slug\main.png")
  Copy-Force $src (Join-Path $pub "plp\$slug.png")
  Write-Output "hires $slug"
}

# V5K extra gallery shots from Figma fills
Copy-Force (Join-Path $orig "nike-v5k-thumb-1.png") (Join-Path $pub "pdp\nike-v5k\thumb-1.png")
Copy-Force (Join-Path $orig "nike-v5k-thumb-2.png") (Join-Path $pub "pdp\nike-v5k\thumb-2.png")
Write-Output "v5k thumbs"

# 2x Figma PDP pages: gallery thumbs for every unique product, mains for products without original fills
$desktop = @(
  @{ n = 1; slug = "nike-sb"; parentY = 103; mainFromPage = $false },
  @{ n = 2; slug = "nike-v2k"; parentY = 103; mainFromPage = $false },
  @{ n = 3; slug = "nike-dragon"; parentY = 103; mainFromPage = $false },
  @{ n = 4; slug = "fashion-n8"; parentY = 103; mainFromPage = $true },
  @{ n = 5; slug = "jordan-halloween"; parentY = 98; mainFromPage = $false },
  @{ n = 7; slug = "adidas"; parentY = 98; mainFromPage = $false },
  @{ n = 8; slug = "nike-dragon-high"; parentY = 103; mainFromPage = $false },
  @{ n = 9; slug = "calvin-klein"; parentY = 103; mainFromPage = $true }
)

$xMain = 1307
$wMain = 966
$hMain = 1048
$xThumb = 2325
$wThumb = 302
$hThumb = 184
$thumbGap = 216

foreach ($item in $desktop) {
  $src = Join-Path $imgDir ("Desktop - pdp ({0}).jpg" -f $item.n)
  $slug = $item.slug
  $yMain = [int](($item.parentY + 76) * 2)
  Write-Output "page $($item.n) -> $slug y=$yMain"
  $img = [System.Drawing.Image]::FromFile($src)

  if ($item.mainFromPage) {
    $main = Clone-Rect $img $xMain $yMain $wMain $hMain
    Save-Png $main (Join-Path $pub "pdp\$slug\main.png")
    Save-Png $main (Join-Path $pub "plp\$slug.png")
    $main.Dispose()
  }

  for ($i = 0; $i -lt 5; $i++) {
    $ty = $yMain + ($i * $thumbGap)
    $thumb = Clone-Rect $img $xThumb $ty $wThumb $hThumb
    $dst = Join-Path $pub "pdp\$slug\thumb-$($i + 1).png"
    Save-Png $thumb $dst
    $thumb.Dispose()
  }

  $img.Dispose()
}

# Eco + Nike Vans: Figma image-layer exports (these products have no 2x PDP page in the export set)
function Copy-ProductFolder($folder, $slug, $files) {
  $dir = Join-Path $imgDir $folder
  Copy-Force (Join-Path $dir $files.main) (Join-Path $pub "pdp\$slug\main.png")
  Copy-Force (Join-Path $dir $files.main) (Join-Path $pub "plp\$slug.png")
  $n = 1
  foreach ($f in $files.thumbs) {
    Copy-Force (Join-Path $dir $f) (Join-Path $pub "pdp\$slug\thumb-$n.png")
    $n++
  }
  Write-Output "folder $folder -> $slug"
}

Copy-ProductFolder "product3" "eco" @{
  main = "Rectangle 40080.png"
  thumbs = @("Rectangle 40094.png", "Rectangle 40096.png", "Rectangle 40099.png", "Rectangle 40100.png")
}
Copy-ProductFolder "product8" "nike-vans" @{
  main = "Rectangle 40080.png"
  thumbs = @("Rectangle 40094.png", "Rectangle 40095.png", "Rectangle 40096.png", "Rectangle 40097.png", "Rectangle 40099.png")
}

# Remove old low-quality leftovers so the app cannot pick them up
Get-ChildItem -Recurse -File (Join-Path $pub "pdp"), (Join-Path $pub "plp") |
  Where-Object { $_.Extension -match '\.(jpg|jpeg)$' } |
  ForEach-Object { Remove-Item -LiteralPath $_.FullName -Force; Write-Output "removed $($_.FullName)" }

Get-ChildItem -File (Join-Path $pub "plp") |
  Where-Object { $_.Name -like "Rectangle*" } |
  ForEach-Object { Remove-Item -LiteralPath $_.FullName -Force; Write-Output "removed $($_.Name)" }

Write-Output "`n==== final product images ===="
Get-ChildItem -Recurse -File (Join-Path $pub "pdp"), (Join-Path $pub "plp") |
  Where-Object { $_.Name -match '^(main|thumb-|\w.*\.png$)' -and $_.DirectoryName -match '\\(pdp|plp)' } |
  Sort-Object FullName |
  ForEach-Object {
    $img = $null
    try {
      $img = [System.Drawing.Image]::FromFile($_.FullName)
      "{0,5}x{1,-5} {2,10}  {3}" -f $img.Width, $img.Height, $_.Length, $_.FullName.Replace("$base\", "")
    } finally {
      if ($img) { $img.Dispose() }
    }
  }

Write-Output "ALL DONE"
