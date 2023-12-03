export class PbProxy {
  private static _checkmap: string[] = []
  private static _phmap: Record<string, any> = {}

  static setFilter(filters = '') {
    PbProxy._checkmap = filters.split(',')
  }

  static addJSON(value: any, filters = '') {
    PbProxy._checkmap = filters.split(',')

    for (const index in PbProxy._checkmap) {
      const key = PbProxy._checkmap[index]
      const ret = this._find(value, key)
      if (ret && this._phmap[key]) {
        value = PbProxy._deleteNode(value, key)
      }
      if (ret) {
        PbProxy._phmap[key] = true
      }
    }
    return value
  }

  private static _deleteNode(value: any, namespace: string) {
    const namespaceList = namespace.split('.')
    const len = namespaceList.length
    let ret = value
    for (const index in namespaceList) {
      const key = namespaceList[index]
      if (Number(index) === len - 1) {
        ret[key] = null
        delete ret[key]
      } else {
        ret = ret[key]
      }
    }
    return value
  }

  private static _find(value: any, namespace: string) {
    const namespaceList = namespace.split('.')
    let obj = value
    let has = true
    for (const index in namespaceList) {
      const key = namespaceList[index]
      obj = obj[key]
      if (!obj) {
        has = false
        break
      }
    }
    return has ? obj : null
  }
}
