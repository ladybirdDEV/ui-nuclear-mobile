# 确保脚本抛出遇到的错误
set -e

if [[ $TRAVIS_BRANCH == "master" && $TRAVIS_PULL_REQUEST == "false" ]]; then

# 保证正确的vuepress依赖，用yarn重新安装一遍vuepress
yarn add vuepress@^0.8.4

echo "Starting to build docs\n"

npm run docs:build

cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
echo "Starting to update gh-pages\n"
git init
git add -A
git commit -m 'chore: deployed site by Travis CI'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

git push -f git@github.com:ladybirdDEV/ui-nuclear-mobile.git master:gh-pages
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
echo "Done! \n"
else
 echo "Skipped updating gh-pages, because build is not triggered from the master branch."
fi;
#cd -
