const pbjs = require('protobufjs/cli/pbjs')
const pbts = require('protobufjs/cli/pbts')
const Utils = require('./utils')
const prettier = require('prettier')
const Path = require('path')

const kPrettier = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  jsxBracketSameLine: true,
  jsxSingleQuote: false,
  printWidth: 180,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  parser: 'typescript',
}

class Proto {
  constructor(type, root, out, filters = [], dev = false) {
    this._type = type
    this._root = root
    this._out = out
    this._filters = filters.map(filter => filter.replace(/\./g, '.nested.'))
    this._dev = dev
  }

  run() {
    console.info('Make run ==========================')
    let result = false
    do {
        result = Utils.makeDirs(this._out)
        if (!result) break
        const files = []
        Utils.scanDirectory(this._root, files, ['proto'])
        const dealStack = []
        files.forEach((file, index) => {
          dealStack.push(() => this._dealMakeFile(file, index === files.length - 1))
        })
        this._runPromiseByQueue(dealStack)
    } while (false)

    return result
  }

  _dealMakeFile(file, isLast) {
    return new Promise(solve =>
      setTimeout(() => {
          console.log('开始编译文件', file)
          this._makeFile(file)
          this._makeDefinitions(file)
          solve()
      }, 800),
    )
  }

  _runPromiseByQueue(myPromises) {
    myPromises.reduce((previousPromise, nextPromise) => previousPromise.then(() => nextPromise()), Promise.resolve())
  }

  _makeFile({ type, path, name }) {
    do {
      const dest = Path.join(this._out, this._toCamel(name).toLowerCase(), '\\pb')
      Utils.makeDirs(dest)
      const args = ['--target', 'json-module', '--wrap', 'es6', '--keep-case', path]
      const lib = (!this._dev && '@yy/ypb') || '../../../index'
      pbjs.main(args, (err, output) => {
        if (err) {
          throw err
        }
        const root = 'PbProxy.addJSON(' + output.match(/(?<=addJSON\()((.|\n)*)(?=\);)/)[0]
        const contents = [Utils.kFileTips]
        // contents.push("import * as $protobuf from 'protobufjs'")
        contents.push(`import {PbProxy, $protobuf} from '${lib}'`)
        contents.push(`const $root = ($protobuf.roots['default'] || ($protobuf.roots['default'] = new $protobuf.Root()))\n.addJSON(${root}, ${this._filters}))`)
        contents.push('export { $root as default };')

        Utils.writeFile(dest + '\\root.proto.ts', contents.join('\n'))
      })
    } while (false)
  }

  _toCamel(value) {
    const ret = value.replace(/_+[a-zA-Z]/g, (str, index) => (index ? str.substr(-1).toUpperCase() : str))
    return ret
  }

  _makeDefinitions({ type, path, name }) {
    const dest = Path.join(this._out, this._toCamel(name).toLowerCase(), '\\pb')
    Utils.makeDirs(dest)
    const temp = dest + '\\index.js'
    const define = dest + '\\index.d.ts'
    const lib = (!this._dev && '@yy/ypb') || '../../../index'
    pbjs.main(['-t', 'static-module', '-w', 'commonjs', '--keep-case', path], (err, output) => {
      Utils.writeFile(temp, output)
      pbts.main([temp], (err, definitions) => {
        if (err) return console.log('[makeDefinitions]', err)
        const contents = [Utils.kFileTips]
        let dts = prettier.format(definitions, kPrettier)
        dts = dts.replace(`import * as $protobuf from 'protobufjs'`, `import {$protobuf} from '${lib}'`)
        contents.push(dts)
        Utils.writeFile(define, contents.join('\n'))
        Utils.removeFile(temp)
      })
    })
  }
}

module.exports = Proto
