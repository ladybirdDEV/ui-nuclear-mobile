# 确保脚本抛出遇到的错误
set -e

# npm run docs:build
node build/copy-docs.js
vuepress build docs
ls docs/.vuepress

cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'docs: deploy by deploy.sh'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
git push -f git@github.com:ladybirdDEV/ui-nuclear-mobile.git master:gh-pages
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

#cd -
