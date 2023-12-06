import { Namespace, Reader, Type } from 'protobufjs'

export * as $protobuf from 'protobufjs'
export { Reader }

export const URI = function (maxType: number, minType: number) {
  return `${maxType}:${minType}`
}

export type YpbBufferType = Reader|Uint8Array|ArrayBuffer|string
export abstract class BaseMap<T extends Record<string, any> = Record<string, any>> {
  abstract marshal: (val?: Partial<T>) => Uint8Array
  abstract unmarshal: (bytes: YpbBufferType) => Uint8Array
  abstract calculate: (bytes: YpbBufferType) => [number, Uint8Array]
  abstract begin: (bytes: YpbBufferType) => void
  abstract end: () => Uint8Array
  abstract assign: (val: Partial<T>) => this
  abstract toCodes: () => string
  abstract toJSON: () => Record<string, any>
  abstract get byteLength(): number
  abstract get key(): string
}

export class MapProto<T extends Record<string, any> = Record<string, any>> implements BaseMap<T>, Record<string, any> {
  private static kLooked: Record<string, Type> = {}
  private static kFailed: Record<string, boolean> = {}

  private _$root: Namespace
  private _$key: string
  private _$reader: Reader | null

  constructor(root: Namespace, key: string) {
    this._$root = root
    this._$key = key
    this._$reader = null
  }

  get byteLength() {
    const [result] = (this._$reader && this.toCalculate(this._$reader)) || [0]
    return result
  }

  get key(): string {
    return this._$key
  }

  begin(bytes: YpbBufferType) {
    this._$reader = this.createReader(bytes)
  }

  end(): Uint8Array {
    const result = (this._$reader && this.toUnmarshal(this._$reader)) || new Uint8Array()
    this._$reader = null

    return result
  }

  assign(data: Partial<T>): this {
    if (data) {
      const ths = this as Record<string, any>
      for (const key in data) {
        if (key.startsWith('_$')) continue
        const val = data[key]
        if (val === undefined) continue
        ths[key] = val
      }
    }

    return this
  }

  marshal(val?: Partial<T>): Uint8Array {
    val && this.assign(val)
    return this.toMarshal(this)
  }

  toCodes(): string {
    return this.toMarsCode(this)
  }

  toJSON() {
    const result: Partial<T> = {}
    for (const key in this) {
      if (key.startsWith('_$')) continue
      const { writable } = Object.getOwnPropertyDescriptor(this, key) || {}
      if (!writable) continue
      const val: any = this[key]
      result[key] = val
    }
    return result
  }

  unmarshal(bytes: YpbBufferType): Uint8Array {
    const reader = this.createReader(bytes)
    return this.toUnmarshal(reader)
  }

  calculate(bytes: YpbBufferType): [number, Uint8Array] {
    const reader = this.createReader(bytes)
    return this.toCalculate(reader)
  }

  private toCalculate(reader: Reader): [number, Uint8Array] {
    const pos = reader.pos
    const left = this.toUnmarshal(reader, true)
    const length = reader.pos - pos
    reader.pos = pos

    return [length, left]
  }

  private lookupType(type: string): Type|undefined {
    if (MapProto.kFailed[type] || !this._$root) {
      return undefined
    }
    let result = MapProto.kLooked[type]
    if (!result) {
      result = this._$root.lookupType(type)
      result ? (MapProto.kLooked[type] = result) : (MapProto.kFailed[type] = true)
    }
    return result
  }

  private createReader(bytes: YpbBufferType): Reader {
    if (typeof bytes === 'string') {
      bytes = Uint8Array.from(bytes, c => c.charCodeAt(0))
    } else if (bytes instanceof ArrayBuffer) {
      bytes = new Uint8Array(bytes)
    }

    if (!(bytes instanceof Reader)) {
      bytes = new Reader(<Uint8Array>bytes)
      bytes.pos = 0
    }

    return bytes
  }

  private toUnmarshal(reader: Reader, skip?: boolean): Uint8Array {
    let result = new Uint8Array()
    if (!reader) {
      return result
    }

    const protocol = this.lookupType(this._$key)
    if (!protocol) {
      throw new Error(`proto not be found error, key: ${this._$key}`)
    }

    let data = null
    try {
      const msg = protocol.decode(reader)
      if (reader.len > reader.pos) {
        result = new Uint8Array(reader.buf, reader.pos)
      }
      data = protocol.toObject(msg, {defaults: true, arrays: true, objects: true})
    } catch (error) {
      throw new Error(`proto decode error, key: ${this._$key}`)
    }

    if (data && !skip) {
      this.assign(<Partial<T>>data)
    }

    return result
  }

  private toMarshal(data: Record<string, any>): Uint8Array {
    const protocol = this.lookupType(this._$key)
    if (!protocol) {
      throw new Error(`proto not be found error, key: ${this._$key}`)
    }
    let result = null
    try {
      result = protocol.encode(data).finish()
    } catch (error) {
      throw new Error(`proto encode error, key: ${this._$key}`)
    }

    return result || new Uint8Array()
  }

  private toMarsCode(data: Record<string, any>): string {
    const bytes = this.toMarshal(data)
    let result = ''
    if (bytes) {
      try {
        result = Array.from(bytes, v => String.fromCharCode(v)).join('')
      } catch (error) {
        throw new Error(`bytes code error key: ${this._$key}`)
      }
    }
    return result
  }
}

export interface MapClass<T extends BaseMap<T>> {
  new(val?: Partial<T>): T
  // (val?: T): T
}

export interface MapConstructor<T extends BaseMap<T>> extends MapClass<T> {
  readonly prototype: T;
}

export abstract class BaseProto<T extends Record<string, any> = Record<string, any>> extends BaseMap<T> {
  abstract get maxType(): number
  abstract get minType(): number
  abstract get uri(): string

  static get maxType() {
    return 0
  }

  static get minType() {
    return 0
  }

  static get uri() {
    return ''
  }

  static get key() {
    return ''
  }

  static get types(): [number, number] {
    return [0, 0]
  }
}

export interface ProtoClass<T extends BaseMap<T>> extends MapClass<T> {
  readonly maxType: number
  readonly minType: number
  readonly uri: string
  readonly key: string
  readonly types: [number, number]
}

export interface ProtoConstructor<T extends BaseProto<T>> extends ProtoClass<T> {
  readonly prototype: T;
}

export class RootProto<T extends Record<string, any> = Record<string, any>> extends MapProto<T> implements BaseProto<T> {
  private _$maxType: number
  private _$minType: number

  constructor(root: Namespace, key: string, maxType: number, minType: number) {
    super(root, key)
    this._$maxType = maxType || 0
    this._$minType = minType || 0
  }

  get maxType(): number {
    return this._$maxType
  }

  get minType(): number {
    return this._$minType
  }

  get uri(): string {
    return URI(this._$maxType, this._$minType)
  }
}
