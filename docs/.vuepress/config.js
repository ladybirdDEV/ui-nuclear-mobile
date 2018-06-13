var fs = require('fs');
var path = require('path');

var filePath = path.resolve('./docs/components/');
const sidebar = require('./components/sidebar.js')

var filelist = [
  '',
];

function getfilelist(dir,callback) {
  fs.readdirSync(dir).forEach(function (file) {
      callback(file);
  });
}
getfilelist(filePath,function (file) {
  filelist.push(file);
});

// 去掉components文件夹下的README.md
function removereadme(arr, val) {
  for(var i=0; i<arr.length; i++) {
    if(arr[i] == val) {
      arr.splice(i, 1);
      break;
    }
  }
}
removereadme(filelist, 'README.md');
let sidebarNav = [
  {
    title: 'Components',
    collapsable: false,
    children: ['']
  }
]
function getSidebar () {
  for (let key in sidebar) {
    sidebarNav.push({
      title: key,
      collapsable: false,
      children: sidebar[key]
    })
  }
}
getSidebar()

module.exports = {
  title: 'UI-NuClear-Mobile',
  description: '一套基于Vue.js的移动端UI组件库',
  base: '/ui-nuclear-mobile/',
  themeConfig: {
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '../components/'
      }
    ],
    sidebar: {
      '/components/': sidebarNav
    }
  },
};
