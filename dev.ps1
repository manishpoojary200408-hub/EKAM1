$env:Path = "C:\Program Files\nodejs;" + $env:Path
Set-Location -Path $PSScriptRoot
Write-Host "Starting EKAM Creative Agency dev server..." -ForegroundColor Green
npm run dev

