const fs = require('fs')
const path = require('path')

const coimport = require('coimport')

const projectPath = path.resolve('./')
const stylePath = path.resolve('src/components/style')

/* remove the line start of '@import' */
const removeImport = async (data, filePath) => {
  let tempData = data.replace(/@import.+mixins';/g, '')
    .replace(/@import.+mixins";/g, '')
    .replace(/@import.+mixins.less';/g, '')
    .replace(/@import.+mixins.less";/g, '')
    .replace(/@import.+default';/g, '')
    .replace(/@import.+default";/g, '')
    .replace(/@import.+default.less';/g, '')
    .replace(/@import.+default.less";/g, '')
    .replace(/@import.+util.less';/g, '')
  fs.writeFileSync(path.join(path.dirname(filePath), 'temp-result.less'), tempData)

  const pm = await new Promise((resolve, reject) => {
    try {
      fs.accessSync(path.join(path.dirname(filePath), 'temp-result.less'))
      coimport(path.join(path.dirname(filePath), 'temp-result.less'), (source) => {
        fs.unlinkSync(path.join(path.dirname(filePath), 'temp-result.less'))
        resolve(source)
      })
    } catch (e)  {
      throw e
    }
  })
  tempData = pm
  return tempData
}

const dealLessFile = (filePath) => {
  try {
    fs.accessSync(filePath)
    let fileContent = fs.readFileSync(filePath, 'utf-8')
    return removeImport(fileContent, filePath)
  } catch(e) {
    return removeImport('', '')
  }
}
let allLess = ''

/* add theme/default.less */
dealLessFile(path.join(stylePath, 'themes/default.less')).then(result => {
  allLess += result
}).then(() => {
  /* add less file in style/mixins */
  fs.readdirSync(path.join(stylePath, 'mixins')).map(file => {
    dealLessFile(path.join(stylePath, `mixins/${file}`)).then(result => {
      allLess += result
    })
  })
}).then(() => {
  dealLessFile(path.join(stylePath, 'index.less')).then(result => {
    allLess += result
  })
}).then(() => {
  /* add less file content in components */
  fs.readdirSync(path.join('src/components')).map(file => {
    dealLessFile(path.join('src/components', `${file}/style/index.less`)).then(result => {
      if (file === 'carousel') { /* carousel uses out module's css */
        fs.accessSync(path.join(projectPath, 'node_modules/swiper/dist/css/swiper.css'))
        allLess += fs.readFileSync(path.join(projectPath, 'node_modules/swiper/dist/css/swiper.css'))
      }
      allLess += result
      /* write content to main.less */
      fs.writeFile(path.resolve('dist/main.less'), allLess, () => {})
    })
  })
})
