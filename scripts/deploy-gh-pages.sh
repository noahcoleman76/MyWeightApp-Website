#!/bin/sh

set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
TMP_DIR=$(mktemp -d)

cleanup() {
  git -C "$ROOT_DIR" worktree remove --force "$TMP_DIR" >/dev/null 2>&1 || true
  rm -rf "$TMP_DIR"
}

trap cleanup EXIT INT TERM

cd "$ROOT_DIR"
npm run build

if git ls-remote --exit-code --heads origin gh-pages >/dev/null 2>&1; then
  git fetch origin gh-pages
  git worktree add --force "$TMP_DIR" origin/gh-pages
else
  git worktree add --detach "$TMP_DIR"
  git -C "$TMP_DIR" checkout --orphan gh-pages
  git -C "$TMP_DIR" rm -rf . >/dev/null 2>&1 || true
fi

find "$TMP_DIR" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -R dist/. "$TMP_DIR"/

git -C "$TMP_DIR" add -A

if git -C "$TMP_DIR" diff --cached --quiet; then
  echo "No changes to deploy."
  exit 0
fi

git -C "$TMP_DIR" commit -m "Deploy GitHub Pages"
git -C "$TMP_DIR" push origin HEAD:gh-pages --force
