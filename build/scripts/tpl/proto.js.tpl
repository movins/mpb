export class ${class} extends RootProto {
  constructor(val) {
    super(${root}, '${type}', ${max}, ${min})
    this.assign(val)
  }

  static get maxType() {
    return ${max}
  }

  static get minType() {
    return ${min}
  }

  static get uri() {
    return URI(${max}, ${min})
  }

  static get key() {
    return '${name}.${class}'
  }

  static get types() {
    return [${max}, ${min}]
  }
}
