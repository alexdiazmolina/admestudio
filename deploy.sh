#!/usr/bin/env sh

set -e

yarn run build

cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:alexdiazmolina/admestudio.git master:gh-pages

cd -
