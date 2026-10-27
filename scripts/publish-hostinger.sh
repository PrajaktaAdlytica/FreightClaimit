#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BUILD="$ROOT/website/dist/client"
REMOTE="$(git -C "$ROOT" remote get-url origin)"
test -f "$BUILD/index.html"
test -f "$BUILD/.htaccess"
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT
git -C "$STAGE" init -q -b hostinger
git -C "$STAGE" remote add origin "$REMOTE"
if git -C "$ROOT" ls-remote --exit-code --heads origin hostinger >/dev/null 2>&1; then
  git -C "$STAGE" fetch -q --depth=1 origin hostinger
  git -C "$STAGE" reset -q --hard FETCH_HEAD
fi
rsync -a --delete --exclude=.git "$BUILD/" "$STAGE/"
git -C "$STAGE" add --all
if git -C "$STAGE" diff --cached --quiet; then
  echo 'Hostinger build is already current.'
  exit 0
fi
git -C "$STAGE" -c user.name='FreightClaimKit deploy' -c user.email='deploy@users.noreply.github.com' commit -q -m "Deploy static build from $(git -C "$ROOT" rev-parse --short HEAD)"
git -C "$STAGE" push origin HEAD:hostinger
