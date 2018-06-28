set -e

if [[ $TRAVIS_BRANCH == "master" && $TRAVIS_PULL_REQUEST == "false" ]]; then

echo -e "starting build demo\n"

npm run build

echo -e "demo page genarated\n"

cd dist

echo $PWD

echo -e "git init"

git config --global user.email "ladybirdstudio@qq.com"
git config --global user.name "ladybirdstudio"
git init
echo -e "Starting to git-add \n"

git add -A
echo -e "Starting to git-commit\n"
git commit -m 'chore: deployed demo page  by Travis CI'

git push --force --quiet "https://${GITHUB_TOKEN}@github.com/ladybirdDEV/ui-nuclear-mobile-demo.git" master:master
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
echo "demo page done."
else
 echo "Skipped updating demo pages, because build is not triggered from the master branch."
fi;
