const Utils = require('./utils')
const Path = require('path')

class Make {
  constructor(type, root, out, dev) {
    this._type = type
    this._root = root
    this._out = out
    this._dev = dev

    this._protoTpl = Utils.readFile(Path.join(__dirname, `tpl\\proto.js.tpl`))
    this._protoTpl_ts = Utils.readFile(Path.join(__dirname, `tpl\\proto.ts.tpl`))
    this._classTpl = Utils.readFile(Path.join(__dirname, `tpl\\class.js.tpl`))
    this._classTpl_ts = Utils.readFile(Path.join(__dirname, `tpl\\class.ts.tpl`))
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
        this._roots = []
        this._uris = []
        files.forEach((file, index) => {
            dealStack.push(() => this._dealMakeFile(file, index === files.length - 1))
        })
        this._runPromiseByQueue(dealStack)
    } while (false)

    return result
  }

  _makeUri(roots, uris, isLast) {
    this._roots.push(...roots)
    isLast && this._doWriteRoots()
    this._uris.push(...uris)
    isLast && this._doWriteUris()
  }

  _doWriteRoots() {
    const dest = Path.join(this._out, `roots.${this._type}`)
    let content = ''
    if (Utils.existed(dest)) {
      content = Utils.readFile(dest) || ''
    }

    this._roots.push('')
    let roots = this._roots.join('\n')
    roots && (roots += Utils.kUriInsertKey)
    if (content.indexOf(Utils.kUriInsertKey) > -1) {
      content = content.replace(Utils.kUriInsertKey, roots)
    } else {
      content = `${Utils.kFileTips}${roots}\n`
    }

    Utils.writeFile(dest, content)
  }

  _doWriteUris() {
    if (!this._uris.length) {
      return
    }
    const dest = Path.join(this._out, `index.${this._type}`)
    let content = ''
    if (Utils.existed(dest)) {
      content = Utils.readFile(dest) || ''
    }

    this._uris.push('')
    let uris = this._uris.join(',\n')
    const insertKey =  `  ${Utils.kUriInsertKey}`
    uris && (uris += insertKey)
    if (content.indexOf(insertKey) > -1) {
      content = content.replace(insertKey, uris)
    } else {
      content = `${Utils.kFileTips}import * as roots from './roots'\n\nexport const kUris${this._type === 'ts' && ': Record<string, any>' || ''} = {\n${uris}\n}\n\nexport * from './roots'\n`
    }

    Utils.writeFile(dest, content)
  }

  _doWriteMakeFile(name, content, content_ts) {
    const dest = Path.join(this._out, this._toCamel(name).toLowerCase())
    Utils.makeDirs(dest)
    const file = Path.join(dest, `\\index.js`)
    content = `${Utils.kFileTips}\n${content}`
    Utils.writeFile(file, content)

    if (this._type === 'ts') {
      const file = Path.join(dest, `\\index.d.ts`)
      content_ts = `${Utils.kFileTips}\n${content_ts}`
      Utils.writeFile(file, content_ts)
    }
  }

  _dealMakeFile(file, isLast) {
    return new Promise(solve =>
        setTimeout(() => {
            console.log('开始生成文件', file)
            const [roots, uris] = this._makeFile(file)
            this._makeUri(roots, uris, isLast)
            solve()
        }, 800),
    )
  }

  _runPromiseByQueue(myPromises) {
    myPromises.reduce((previousPromise, nextPromise) => previousPromise.then(() => nextPromise()), Promise.resolve())
  }

  _makeFile({ type, path, name }) {
    const roots = []
    const uris = []
    do {
      name = this._toCamel(name).toLowerCase()
      roots.push(`export * as ${name} from './${name}'`)

      const prefix = name
      const root = 'root'
      const content = Utils.readFile(path)
      const msgArr = this._sliceMessage(content) || []
      const nameSpace = this._getNameSpace(content)
      const protos = []
      const protos_ts = []
      const classes = []
      const classes_ts = []
      let importClass = false
      let importProto = false
      msgArr.forEach(item => {
        const [max, min] = this._getMessageType(item)
        const key = this._getMessageName(item)
        if (max && min && key) {
          importProto = true
          const type = `${nameSpace}.${key}`
          const tpl = this._protoTpl
          let data = tpl.replace(/\$\{class\}/g, key)
          data = data.replace(/\$\{prefix\}/g, prefix)
          data = data.replace(/\$\{root\}/g, root)
          data = data.replace(/\$\{name\}/g, name)
          data = data.replace(/\$\{type\}/g, type)
          data = data.replace(/\$\{max\}/g, max)
          data = data.replace(/\$\{min\}/g, min)

          protos.push(data)

          if (this._type === 'ts') {
            const tpl = this._protoTpl_ts
            let data = tpl.replace(/\$\{class\}/g, key)
            data = data.replace(/\$\{type\}/g, type)
            data = data.replace(/\$\{name\}/g, name)
            protos_ts.push(data)
          }
          uris.push(`  '${max}:${min}': roots.${name}.${key}`)
        } else if (key) {
          importClass = true
          const type = `${nameSpace}.${key}`
          const tpl = this._classTpl
          let data = tpl.replace(/\$\{class\}/g, key)
          data = data.replace(/\$\{prefix\}/g, prefix)
          data = data.replace(/\$\{root\}/g, root)
          data = data.replace(/\$\{name\}/g, name)
          data = data.replace(/\$\{type\}/g, type)
          classes.push(data)

          if (this._type === 'ts') {
            const tpl = this._classTpl_ts
            let data = tpl.replace(/\$\{class\}/g, key)
            data = data.replace(/\$\{type\}/g, type)
            data = data.replace(/\$\{name\}/g, name)
            classes_ts.push(data)
          }
        }
      })
      // if (classes.length || structs.length) {
      const hasProto = classes.length || protos.length
      const isTs = this._type === 'ts'
      const lib = (!this._dev && '@yy/ypb') || '../../index'
      const bimports = []
      const bimports_ts = []
      if (hasProto) {
        isTs && importProto && bimports_ts.push('BaseProto')
        isTs && importProto && bimports_ts.push('ProtoConstructor')
        isTs && importClass && bimports_ts.push('BaseMap')
        isTs && importClass && bimports_ts.push('MapConstructor')

        importProto && bimports.push('URI')
        importProto && bimports.push('RootProto')
        importClass && bimports.push('MapProto')
      }

      const contents = (bimports.length && [[
          `import {${bimports.join(', ')}} from '${lib}'`,
          `import {default as ${root}} from './pb/root.proto'`
        ].join('\n')
      ]) || []
      const contents_ts = (bimports_ts.length && [[
          `import {${bimports_ts.join(', ')}} from '${lib}'`,
          `import * as ${name} from './pb'`
        ].join('\n')
      ]) || []
      classes.length && contents.push(classes.join('\n'))
      protos.length && contents.push(protos.join('\n'))
      !contents.length && contents.push('export { }')

      classes_ts.length && contents_ts.push(classes_ts.join('\n'))
      protos_ts.length && contents_ts.push(protos_ts.join('\n'))
      !contents_ts.length && contents_ts.push('export { }')

      this._doWriteMakeFile(name, contents.join('\n\n'), contents_ts.join('\n\n'))
        // }
    } while (false)

    return [roots, uris]
  }

  _getNameSpace(conent) {
    const ret = conent.match(/(?<=package\s+)com[\w|\.]+/)
    return (ret && ret.length > 0 && ret[0]) || ''
  }

  _sliceMessage(content) {
    return content.match(/message(\s|\S)+?}/g)
  }

  _getMessageName(content) {
    const ret = content.match(/(?<=message\s+)\w*/)
    return (ret && ret.length > 0 && ret[0]) || ''
  }

  _getMessageType(content) {
    const typeMatch = content.match(/enum\s+Type(\s|\S)*?}/)
    if (typeMatch) {
      const typeBody = content.match(/enum\s+Type(\s|\S)*?}/)[0]
      const max = typeBody.match(/(?<=max\s*=\s*)[0-9]+/)[0]
      const min = typeBody.match(/(?<=min\s*=\s*)[0-9]+/)[0]
      return [max, min]
    } else {
      return [0, 0]
    }
  }

  _toCamel(value) {
    const ret = value.replace(/_+[a-zA-Z]/g, (str, index) => (index ? str.substr(-1).toUpperCase() : str))
    return ret
  }
}

module.exports = Make
