# Fintrex PNG Asset Generator
# This script generates all required PNG assets from SVG files

Write-Host "Fintrex PNG Asset Generator" -ForegroundColor Cyan
Write-Host "=============================" -ForegroundColor Cyan
Write-Host ""

# Check if Inkscape is installed
$inkscapePath = "C:\Program Files\Inkscape\bin\inkscape.exe"
$useInkscape = Test-Path $inkscapePath

if (-not $useInkscape) {
    Write-Host "Inkscape not found at default location." -ForegroundColor Yellow
    Write-Host "Checking if available in PATH..." -ForegroundColor Yellow
    try {
        $null = Get-Command inkscape -ErrorAction Stop
        $inkscapePath = "inkscape"
        $useInkscape = $true
        Write-Host "Found Inkscape in PATH" -ForegroundColor Green
    } catch {
        Write-Host "Inkscape not found" -ForegroundColor Red
        $useInkscape = $false
    }
}

# Define output sizes and files
$logoSizes = @(
    @{Name="fintrex-icon-16"; Size=16; Source="fintrex-logo.svg"},
    @{Name="fintrex-icon-32"; Size=32; Source="fintrex-logo.svg"},
    @{Name="fintrex-icon-72"; Size=72; Source="fintrex-logo.svg"},
    @{Name="fintrex-icon-96"; Size=96; Source="fintrex-logo.svg"},
    @{Name="fintrex-icon-128"; Size=128; Source="fintrex-logo.svg"},
    @{Name="fintrex-icon-144"; Size=144; Source="fintrex-logo.svg"},
    @{Name="fintrex-icon-152"; Size=152; Source="fintrex-logo.svg"},
    @{Name="fintrex-icon-192"; Size=192; Source="fintrex-logo.svg"},
    @{Name="fintrex-icon-384"; Size=384; Source="fintrex-logo.svg"},
    @{Name="fintrex-icon-512"; Size=512; Source="fintrex-logo.svg"},
    @{Name="fintrex-logo"; Size=512; Source="fintrex-logo.svg"},
    @{Name="fintrex-apple-touch-icon"; Size=180; Source="fintrex-logo.svg"},
    @{Name="mstile-144x144"; Size=144; Source="fintrex-logo.svg"},
    @{Name="fintrex-og-image"; Size=1200; Width=1200; Height=630; Source="fintrex-logo.svg"},
    @{Name="fintrex-twitter-card"; Size=1200; Width=1200; Height=675; Source="fintrex-logo.svg"},
    @{Name="fin-ai-assistant"; Size=800; Source="fin-ai-assistant.svg"}
)

$publicDir = "public"
if (-not (Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir | Out-Null
}

function Generate-PNG-Inkscape {
    param($svg, $output, $width, $height)
    
    if ($null -eq $height) {
        $height = $width
    }
    
    & $inkscapePath --export-type="png" --export-filename="$output" --export-width=$width --export-height=$height "$svg" 2>$null
    return $?
}

Write-Host ""
Write-Host "Working directory: $(Get-Location)" -ForegroundColor Gray
Write-Host ""

$successCount = 0
$failCount = 0

if (-not $useInkscape) {
    Write-Host "IMPORTANT: Inkscape is required to generate PNGs!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Please install Inkscape:" -ForegroundColor Yellow
    Write-Host "  1. Download from: https://inkscape.org/release/" -ForegroundColor White
    Write-Host "  2. Install to default location" -ForegroundColor White
    Write-Host "  3. Run this script again" -ForegroundColor White
    Write-Host ""
    Write-Host "Or use online converters:" -ForegroundColor Yellow
    Write-Host "  - CloudConvert: https://cloudconvert.com/svg-to-png" -ForegroundColor White
    Write-Host "  - Convertio: https://convertio.co/svg-png/" -ForegroundColor White
    Write-Host ""
    Write-Host "SVG files are ready at: $(Join-Path (Get-Location) $publicDir)" -ForegroundColor White
    exit
}

foreach ($item in $logoSizes) {
    $svgPath = Join-Path $publicDir $item.Source
    $outputPath = Join-Path $publicDir "$($item.Name).png"
    
    if (-not (Test-Path $svgPath)) {
        Write-Host "Source not found: $($item.Source)" -ForegroundColor Yellow
        $failCount++
        continue
    }
    
    $width = if ($item.Width) { $item.Width } else { $item.Size }
    $height = if ($item.Height) { $item.Height } else { $item.Size }
    
    Write-Host "Generating: $($item.Name).png (${width}x${height})" -ForegroundColor Cyan
    
    $success = Generate-PNG-Inkscape -svg $svgPath -output $outputPath -width $width -height $height
    
    if ($success) {
        Write-Host "  Created successfully" -ForegroundColor Green
        $successCount++
    } else {
        Write-Host "  Failed to create" -ForegroundColor Red
        $failCount++
    }
}

Write-Host ""
Write-Host "=============================" -ForegroundColor Cyan
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "  Success: $successCount files" -ForegroundColor Green
Write-Host "  Failed: $failCount files" -ForegroundColor Red
Write-Host ""
Write-Host "Process complete!" -ForegroundColor Green

