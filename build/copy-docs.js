var fs = require('fs')
var path = require('path')

var sourcePath = path.resolve('./src/components/')
var targetPath = path.resolve('./docs/components')

function syncFiles (sourcePath, targetPath, fileName = '') {
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath)
  }
  fs.readdir(sourcePath, function (err, paths) {
    if (err) {
      console.log('读取文件夹出错')
    }
    paths.map(_p => {
      if (!/\./.test(_p)) { // 如果是文件夹
        return syncFiles(path.join(sourcePath, _p), targetPath, _p)
      }
      if (!/\.md/.test(_p)) {
        return
      }
      var readstream = fs.createReadStream(path.join(sourcePath, _p))
      var writestream = fs.createWriteStream(path.join(targetPath, fileName + '.md'))
      readstream.pipe(writestream)
    })
  })
}
syncFiles(sourcePath, targetPath)
