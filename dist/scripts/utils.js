/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

class Utils {
  static kFileTips = `\/****\n * 该文件为脚本生成，请勿手动修改\n * 有问题请@movinliao@163.com\n */\n`
  static kUriInsertKey = '// ====End====='

  static scanDirectory(dirPath, arr, exts) {
    const files = fs.readdirSync(dirPath)
    for (let i = 0; i < files.length; ++i) {
      let file = files[i]
      const ext = path.extname(file)
      const name = file.replace(ext, '')
      const type = ext.substring(1)
      const filePath = path.join(dirPath, file)
      const stats = fs.statSync(filePath)
      if (stats.isDirectory()) {
        Utils.scanDirectory(filePath, arr, exts)
      } else if (exts.indexOf(type) >= 0) {
        arr.push({type, path: filePath, name})
      }
    }
  }

  static readFile(path, encoding = 'utf8') {
    return fs.readFileSync(path, encoding) || ''
  }

  static writeFile(path, content, encoding = 'utf8') {
    fs.writeFileSync(path, content, encoding)
  }

  static copyFile(path, src) {
    fs.copyFileSync(src, path)
  }

  static removeFile(path) {
    try {
      fs.unlinkSync(path)
    } catch (err) {
      console.error('[Utils] removeFile:', err)
    }
  }

  static makeDirs(dirname) {
    if (fs.existsSync(dirname)) {
       return true
    }
    if (Utils.makeDirs(path.dirname(dirname))) {
        fs.mkdirSync(dirname)
        return true
    }
    return false
  }

  /*
   * 复制目录、子目录，及其中的文件
   * @param src {String} 要复制的目录
   * @param dist {String} 复制到目标目录
   * @param exclude {Array} 排除目录
   */
  static copyDir(src, dist, exclude = []) {
    Utils._copy(src, dist, exclude)
  }

  static _copy(src, dist, exclude) {
    const files = fs.readdirSync(src)
    files.forEach(path => {
      const _src = src + '\\' + path
      const _dist = dist + '\\' + path
      const stat = fs.statSync(_src)
      if (exclude && exclude.indexOf(_src) < 0) {
        // 判断是文件还是目录
        if (stat.isFile()) {
          fs.writeFileSync(_dist, fs.readFileSync(_src))
        } else if (stat.isDirectory()) {
          // 当是目录是，递归复制
          Utils.makeDirs(_dist)
          Utils._copy(_src, _dist, exclude)
        }
      }
    })
  }

  static isDirectory(path) {
    const stats = fs.statSync(path)
    return stats && stats.isDirectory()
  }

  static existed(path) {
    return fs.existsSync(path)
  }

  static rename(oldPath, newPath) {
    fs.renameSync(oldPath, newPath)
  }
}

module.exports = Utils
