Add-Type -AssemblyName System.Drawing

$base = "d:\projects\paffix-bartar"
$imgDir = Join-Path $base "images pdp"
$pub = Join-Path $base "public"

function Save-Png($bmp, $dst) {
  $dir = Split-Path $dst -Parent
  if (!(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  $bmp.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
}

function Clone-Rect($img, $x, $y, $w, $h) {
  $bw = [Math]::Max(1, [Math]::Min($w, $img.Width - $x))
  $bh = [Math]::Max(1, [Math]::Min($h, $img.Height - $y))
  $rect = New-Object System.Drawing.Rectangle $x, $y, $bw, $bh
  return $img.Clone($rect, $img.PixelFormat)
}

function Scale-File($src, $dst, $w, $h) {
  $img = [System.Drawing.Image]::FromFile($src)
  $bmp = New-Object System.Drawing.Bitmap $w, $h
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.DrawImage($img, 0, 0, $w, $h)
  Save-Png $bmp $dst
  $g.Dispose(); $bmp.Dispose(); $img.Dispose()
}

# Desktop mockup index -> slug. Identified from 2x crops.
$map = @(
  @{ n = 1; slug = "nike-sb"; parentY = 103 },
  @{ n = 2; slug = "nike-v2k"; parentY = 103 },
  @{ n = 3; slug = "nike-dragon"; parentY = 103 },
  @{ n = 4; slug = "fashion-n8"; parentY = 103 },
  @{ n = 5; slug = "jordan-halloween"; parentY = 98 },
  @{ n = 6; slug = "eco"; parentY = 103 },
  @{ n = 7; slug = "adidas"; parentY = 98 },
  @{ n = 8; slug = "nike-dragon-high"; parentY = 103 },
  @{ n = 9; slug = "calvin-klein"; parentY = 103 },
  @{ n = 10; slug = "nike-vans"; parentY = 103 }
)

$xMain = 1307
$wMain = 966
$hMain = 1048
$xThumb = 2323
$wThumb = 302
$hThumb = 184
$thumbGap = 216

foreach ($item in $map) {
  $src = Join-Path $imgDir ("Desktop - pdp ({0}).jpg" -f $item.n)
  $slug = $item.slug
  $yMain = [int](($item.parentY + 76) * 2)
  Write-Output "extract $slug from file $($item.n) y=$yMain"

  $img = [System.Drawing.Image]::FromFile($src)

  $main = Clone-Rect $img $xMain $yMain $wMain $hMain
  $pdpMain = Join-Path $pub "pdp\$slug\main.png"
  $plp = Join-Path $pub "plp\$slug.png"
  Save-Png $main $pdpMain
  Save-Png $main $plp
  $main.Dispose()

  for ($i = 0; $i -lt 5; $i++) {
    $ty = $yMain + ($i * $thumbGap)
    $thumb = Clone-Rect $img $xThumb $ty $wThumb $hThumb
    Save-Png $thumb (Join-Path $pub "pdp\$slug\thumb-$($i + 1).png")
    $thumb.Dispose()
  }

  $img.Dispose()
  Write-Output "  done $slug"
}

# V5K has no 2x desktop mockup — upscale the clean Figma 1x fill.
$v5kSrc = Join-Path $pub "pdp\nike-v5k\main.png"
if (Test-Path $v5kSrc) {
  $tmp = Join-Path $pub "pdp\nike-v5k\_main-2x.png"
  Scale-File $v5kSrc $tmp 966 1048
  Copy-Item $tmp $v5kSrc -Force
  Copy-Item $tmp (Join-Path $pub "plp\nike-v5k.png") -Force
  Remove-Item $tmp -Force
  Get-ChildItem (Join-Path $pub "pdp\nike-v5k\thumb-*.png") | ForEach-Object {
    $tmpThumb = $_.FullName + ".tmp.png"
    Scale-File $_.FullName $tmpThumb 302 184
    Move-Item $tmpThumb $_.FullName -Force
  }
  Write-Output "upscaled nike-v5k"
}

Write-Output "ALL DONE"
