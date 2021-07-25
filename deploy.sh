#!/usr/bin/env sh

set -e

yarn build

cd dist

git add -A
git commit -m 'New Deployment'
git push -f git@github.com:alexdiazmolina/admestudio.git master:gh-pages

cs -
