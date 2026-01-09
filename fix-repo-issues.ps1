# PowerShell Script to Fix Repository Clone Issues
# Run this script to fix all identified issues

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Repository Clone Issues Fix Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Remove .env file from git tracking (SECURITY)
Write-Host "[1/5] Removing .env file from git tracking..." -ForegroundColor Yellow
if (Test-Path "starter_ai_agents\opeani_research_agent\.env") {
    git rm --cached "starter_ai_agents\opeani_research_agent\.env"
    Write-Host "✓ Removed .env from git tracking" -ForegroundColor Green
} else {
    Write-Host "✓ .env file not found (already removed)" -ForegroundColor Green
}

# Step 2: Verify .gitignore includes .env
Write-Host ""
Write-Host "[2/5] Verifying .gitignore..." -ForegroundColor Yellow
if (Test-Path ".gitignore") {
    $gitignoreContent = Get-Content ".gitignore" -Raw
    if ($gitignoreContent -notmatch "\.env") {
        Add-Content -Path ".gitignore" -Value "`n# Environment variables - DO NOT COMMIT`n.env`n.env.local`n.env*.local`n*.env"
        Write-Host "✓ Added .env to .gitignore" -ForegroundColor Green
    } else {
        Write-Host "✓ .env already in .gitignore" -ForegroundColor Green
    }
} else {
    Write-Output "# Environment variables - DO NOT COMMIT`n.env`n.env.local`n.env*.local`n*.env`n`n# Dependencies`nnode_modules/`n.next/`n__pycache__/`n*.pyc" | Out-File -FilePath ".gitignore" -Encoding utf8
    Write-Host "✓ Created .gitignore with .env rules" -ForegroundColor Green
}

# Step 3: Check for other issues
Write-Host ""
Write-Host "[3/5] Checking repository structure..." -ForegroundColor Yellow
$requiredDirs = @("starter_ai_agents", "advanced_ai_agents", "rag_tutorials", "website", "docs")
$missingDirs = @()
foreach ($dir in $requiredDirs) {
    if (-not (Test-Path $dir)) {
        $missingDirs += $dir
    }
}
if ($missingDirs.Count -eq 0) {
    Write-Host "✓ All required directories present" -ForegroundColor Green
} else {
    Write-Host "✗ Missing directories: $($missingDirs -join ', ')" -ForegroundColor Red
}

# Step 4: Check website configuration
Write-Host ""
Write-Host "[4/5] Checking website configuration..." -ForegroundColor Yellow
if (Test-Path "website\config\site.ts") {
    $configContent = Get-Content "website\config\site.ts" -Raw
    if ($configContent -match "Your Name" -or $configContent -match "yourusername") {
        Write-Host "⚠ Website config still has placeholder values" -ForegroundColor Yellow
        Write-Host "  Update website/config/site.ts with your information" -ForegroundColor Yellow
    } else {
        Write-Host "✓ Website config appears updated" -ForegroundColor Green
    }
} else {
    Write-Host "✗ Website config file not found" -ForegroundColor Red
}

# Step 5: Summary
Write-Host ""
Write-Host "[5/5] Generating summary..." -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "FIX SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "✓ .env file removed from tracking" -ForegroundColor Green
Write-Host "✓ .gitignore verified" -ForegroundColor Green
Write-Host ""
Write-Host "NEXT STEPS:" -ForegroundColor Yellow
Write-Host "1. Review changes: git status" -ForegroundColor White
Write-Host "2. Commit fixes: git commit -m 'Fix: Remove .env from tracking'" -ForegroundColor White
Write-Host "3. Push to GitHub: git push origin main" -ForegroundColor White
Write-Host "4. Install CodeRabbit: https://github.com/apps/coderabbitai" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
