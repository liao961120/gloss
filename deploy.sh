#!/usr/bin/env sh
set -e

npm run build

cd dist
echo 'https://gloss.netlify.com/* https://gloss.yongfu.name/:splat 301!' > _redirects

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/liao961120/gloss.git master:deploy

cd -
