# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

cd ../gh-pages/
#删除gh-pages文件 保留.gitignore文件和.git文件夹
ls |grep -v .gitignore | grep -v .git/ |xargs rm -rf

cd ../ui-nuclear-mobile

# 拷贝dist中的文件以及文件夹到gh-pages中
cp -r docs/.vuepress/dist/* ../gh-pages
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

cd ../gh-pages

#git init
git add -A
git commit -m 'docs: deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
git push
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

#cd -
