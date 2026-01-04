set -e

if [ -z "$1" ]; then
  echo "Использование: $0 <version> <description:optional>"
  exit 1
fi

git add .

if [ -z "$2" ]; then
  git commit -m "v$1"
  git tag "v$1-Release"
else
  git commit -m "v$1 $2"
  git tag -a "v$1-Release" -m "$2"
fi

git push
git push --tags
