import { Namespace, Reader } from 'protobufjs';
export * as $protobuf from 'protobufjs';
export { Reader };
export declare const URI: (maxType: number, minType: number) => string;
export declare type YpbBufferType = Reader | Uint8Array | ArrayBuffer | string;
export declare abstract class BaseMap<T extends Record<string, any> = Record<string, any>> {
    abstract marshal: (val?: Partial<T>) => Uint8Array;
    abstract unmarshal: (bytes: YpbBufferType) => Uint8Array;
    abstract calculate: (bytes: YpbBufferType) => [number, Uint8Array];
    abstract begin: (bytes: YpbBufferType) => void;
    abstract end: () => Uint8Array;
    abstract assign: (val: Partial<T>) => this;
    abstract toCodes: () => string;
    abstract toJSON: () => Record<string, any>;
    abstract get byteLength(): number;
    abstract get key(): string;
}
export declare class MapProto<T extends Record<string, any> = Record<string, any>> implements BaseMap<T>, Record<string, any> {
    private static kLooked;
    private static kFailed;
    private _$root;
    private _$key;
    private _$reader;
    constructor(root: Namespace, key: string);
    get byteLength(): number;
    get key(): string;
    begin(bytes: YpbBufferType): void;
    end(): Uint8Array;
    assign(data: Partial<T>): this;
    marshal(val?: Partial<T>): Uint8Array;
    toCodes(): string;
    toJSON(): Partial<T>;
    unmarshal(bytes: YpbBufferType): Uint8Array;
    calculate(bytes: YpbBufferType): [number, Uint8Array];
    private toCalculate;
    private lookupType;
    private createReader;
    private toUnmarshal;
    private toMarshal;
    private toMarsCode;
}
export interface MapClass<T extends BaseMap<T>> {
    new (val?: Partial<T>): T;
}
export interface MapConstructor<T extends BaseMap<T>> extends MapClass<T> {
    readonly prototype: T;
}
export declare abstract class BaseProto<T extends Record<string, any> = Record<string, any>> extends BaseMap<T> {
    abstract get maxType(): number;
    abstract get minType(): number;
    abstract get uri(): string;
    static get maxType(): number;
    static get minType(): number;
    static get uri(): string;
    static get key(): string;
    static get types(): [number, number];
}
export interface ProtoClass<T extends BaseMap<T>> extends MapClass<T> {
    readonly maxType: number;
    readonly minType: number;
    readonly uri: string;
    readonly key: string;
    readonly types: [number, number];
}
export interface ProtoConstructor<T extends BaseProto<T>> extends ProtoClass<T> {
    readonly prototype: T;
}
export declare class RootProto<T extends Record<string, any> = Record<string, any>> extends MapProto<T> implements BaseProto<T> {
    private _$maxType;
    private _$minType;
    constructor(root: Namespace, key: string, maxType: number, minType: number);
    get maxType(): number;
    get minType(): number;
    get uri(): string;
}
