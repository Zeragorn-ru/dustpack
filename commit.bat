$ErrorActionPreference = "Stop"

if (-not $args[0]) {
    Write-Host "Использование: $($MyInvocation.MyCommand.Name) <version> <description:optional>"
    exit 1
}

$version = $args[0]
$description = $args[1]

git add .

if (-not $description) {
    git commit -m "v$version"
    git tag "v$version-Release"
} else {
    git commit -m "v$version $description"
    git tag -a "v$version-Release" -m "$description"
}

git push
git push --tags
