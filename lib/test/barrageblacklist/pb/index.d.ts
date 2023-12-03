/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@liaoguoguang
 */

import {$protobuf} from '../../../index'
/** Namespace com. */
export namespace com {
  /** Namespace bdgamelive. */
  namespace bdgamelive {
    /** Namespace pb. */
    namespace pb {
      /** Namespace barrageblacklist. */
      namespace barrageblacklist {
        /** Properties of a BarrageBlacklistItem. */
        interface IBarrageBlacklistItem {
          /** BarrageBlacklistItem keyId */
          keyId?: number | Long | null

          /** BarrageBlacklistItem keyword */
          keyword?: string | null

          /** BarrageBlacklistItem createTime */
          createTime?: number | Long | null
        }

        /** Represents a BarrageBlacklistItem. */
        class BarrageBlacklistItem implements IBarrageBlacklistItem {
          /**
           * Constructs a new BarrageBlacklistItem.
           * @param [properties] Properties to set
           */
          constructor(properties?: com.bdgamelive.pb.barrageblacklist.IBarrageBlacklistItem)

          /** BarrageBlacklistItem keyId. */
          public keyId: number | Long

          /** BarrageBlacklistItem keyword. */
          public keyword: string

          /** BarrageBlacklistItem createTime. */
          public createTime: number | Long

          /**
           * Creates a new BarrageBlacklistItem instance using the specified properties.
           * @param [properties] Properties to set
           * @returns BarrageBlacklistItem instance
           */
          public static create(properties?: com.bdgamelive.pb.barrageblacklist.IBarrageBlacklistItem): com.bdgamelive.pb.barrageblacklist.BarrageBlacklistItem

          /**
           * Encodes the specified BarrageBlacklistItem message. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.BarrageBlacklistItem.verify|verify} messages.
           * @param message BarrageBlacklistItem message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(message: com.bdgamelive.pb.barrageblacklist.IBarrageBlacklistItem, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Encodes the specified BarrageBlacklistItem message, length delimited. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.BarrageBlacklistItem.verify|verify} messages.
           * @param message BarrageBlacklistItem message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(message: com.bdgamelive.pb.barrageblacklist.IBarrageBlacklistItem, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Decodes a BarrageBlacklistItem message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns BarrageBlacklistItem
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.bdgamelive.pb.barrageblacklist.BarrageBlacklistItem

          /**
           * Decodes a BarrageBlacklistItem message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns BarrageBlacklistItem
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.bdgamelive.pb.barrageblacklist.BarrageBlacklistItem

          /**
           * Verifies a BarrageBlacklistItem message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null

          /**
           * Creates a BarrageBlacklistItem message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns BarrageBlacklistItem
           */
          public static fromObject(object: { [k: string]: any }): com.bdgamelive.pb.barrageblacklist.BarrageBlacklistItem

          /**
           * Creates a plain object from a BarrageBlacklistItem message. Also converts values to other types if specified.
           * @param message BarrageBlacklistItem
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(message: com.bdgamelive.pb.barrageblacklist.BarrageBlacklistItem, options?: $protobuf.IConversionOptions): { [k: string]: any }

          /**
           * Converts this BarrageBlacklistItem to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any }
        }

        /** Properties of a ListBarrageBlacklistReq. */
        interface IListBarrageBlacklistReq {
          /** ListBarrageBlacklistReq offset */
          offset?: number | null

          /** ListBarrageBlacklistReq pageSize */
          pageSize?: number | null
        }

        /** 查询黑词列表 */
        class ListBarrageBlacklistReq implements IListBarrageBlacklistReq {
          /**
           * Constructs a new ListBarrageBlacklistReq.
           * @param [properties] Properties to set
           */
          constructor(properties?: com.bdgamelive.pb.barrageblacklist.IListBarrageBlacklistReq)

          /** ListBarrageBlacklistReq offset. */
          public offset: number

          /** ListBarrageBlacklistReq pageSize. */
          public pageSize: number

          /**
           * Creates a new ListBarrageBlacklistReq instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ListBarrageBlacklistReq instance
           */
          public static create(properties?: com.bdgamelive.pb.barrageblacklist.IListBarrageBlacklistReq): com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistReq

          /**
           * Encodes the specified ListBarrageBlacklistReq message. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistReq.verify|verify} messages.
           * @param message ListBarrageBlacklistReq message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(message: com.bdgamelive.pb.barrageblacklist.IListBarrageBlacklistReq, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Encodes the specified ListBarrageBlacklistReq message, length delimited. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistReq.verify|verify} messages.
           * @param message ListBarrageBlacklistReq message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(message: com.bdgamelive.pb.barrageblacklist.IListBarrageBlacklistReq, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Decodes a ListBarrageBlacklistReq message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns ListBarrageBlacklistReq
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistReq

          /**
           * Decodes a ListBarrageBlacklistReq message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns ListBarrageBlacklistReq
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistReq

          /**
           * Verifies a ListBarrageBlacklistReq message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null

          /**
           * Creates a ListBarrageBlacklistReq message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns ListBarrageBlacklistReq
           */
          public static fromObject(object: { [k: string]: any }): com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistReq

          /**
           * Creates a plain object from a ListBarrageBlacklistReq message. Also converts values to other types if specified.
           * @param message ListBarrageBlacklistReq
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(message: com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistReq, options?: $protobuf.IConversionOptions): { [k: string]: any }

          /**
           * Converts this ListBarrageBlacklistReq to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any }
        }

        namespace ListBarrageBlacklistReq {
          /** Type enum. */
          enum Type {
            none = 0,
            max = 1017,
            min = 101
          }
        }

        /** Properties of a ListBarrageBlacklistResp. */
        interface IListBarrageBlacklistResp {
          /** ListBarrageBlacklistResp result */
          result?: com.bdgamelive.pb.common.IResult | null

          /** ListBarrageBlacklistResp items */
          items?: com.bdgamelive.pb.barrageblacklist.IBarrageBlacklistItem[] | null

          /** ListBarrageBlacklistResp hasMore */
          hasMore?: boolean | null

          /** ListBarrageBlacklistResp total */
          total?: number | null

          /** ListBarrageBlacklistResp maxCount */
          maxCount?: number | null
        }

        /** Represents a ListBarrageBlacklistResp. */
        class ListBarrageBlacklistResp implements IListBarrageBlacklistResp {
          /**
           * Constructs a new ListBarrageBlacklistResp.
           * @param [properties] Properties to set
           */
          constructor(properties?: com.bdgamelive.pb.barrageblacklist.IListBarrageBlacklistResp)

          /** ListBarrageBlacklistResp result. */
          public result?: com.bdgamelive.pb.common.IResult | null

          /** ListBarrageBlacklistResp items. */
          public items: com.bdgamelive.pb.barrageblacklist.IBarrageBlacklistItem[]

          /** ListBarrageBlacklistResp hasMore. */
          public hasMore: boolean

          /** ListBarrageBlacklistResp total. */
          public total: number

          /** ListBarrageBlacklistResp maxCount. */
          public maxCount: number

          /**
           * Creates a new ListBarrageBlacklistResp instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ListBarrageBlacklistResp instance
           */
          public static create(properties?: com.bdgamelive.pb.barrageblacklist.IListBarrageBlacklistResp): com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistResp

          /**
           * Encodes the specified ListBarrageBlacklistResp message. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistResp.verify|verify} messages.
           * @param message ListBarrageBlacklistResp message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(message: com.bdgamelive.pb.barrageblacklist.IListBarrageBlacklistResp, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Encodes the specified ListBarrageBlacklistResp message, length delimited. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistResp.verify|verify} messages.
           * @param message ListBarrageBlacklistResp message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(message: com.bdgamelive.pb.barrageblacklist.IListBarrageBlacklistResp, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Decodes a ListBarrageBlacklistResp message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns ListBarrageBlacklistResp
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistResp

          /**
           * Decodes a ListBarrageBlacklistResp message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns ListBarrageBlacklistResp
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistResp

          /**
           * Verifies a ListBarrageBlacklistResp message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null

          /**
           * Creates a ListBarrageBlacklistResp message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns ListBarrageBlacklistResp
           */
          public static fromObject(object: { [k: string]: any }): com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistResp

          /**
           * Creates a plain object from a ListBarrageBlacklistResp message. Also converts values to other types if specified.
           * @param message ListBarrageBlacklistResp
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(message: com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistResp, options?: $protobuf.IConversionOptions): { [k: string]: any }

          /**
           * Converts this ListBarrageBlacklistResp to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any }
        }

        namespace ListBarrageBlacklistResp {
          /** Type enum. */
          enum Type {
            none = 0,
            max = 1017,
            min = 102
          }
        }

        /** Properties of an AddBarrageBlacklistReq. */
        interface IAddBarrageBlacklistReq {
          /** AddBarrageBlacklistReq keyword */
          keyword?: string | null
        }

        /** 添加黑词 */
        class AddBarrageBlacklistReq implements IAddBarrageBlacklistReq {
          /**
           * Constructs a new AddBarrageBlacklistReq.
           * @param [properties] Properties to set
           */
          constructor(properties?: com.bdgamelive.pb.barrageblacklist.IAddBarrageBlacklistReq)

          /** AddBarrageBlacklistReq keyword. */
          public keyword: string

          /**
           * Creates a new AddBarrageBlacklistReq instance using the specified properties.
           * @param [properties] Properties to set
           * @returns AddBarrageBlacklistReq instance
           */
          public static create(properties?: com.bdgamelive.pb.barrageblacklist.IAddBarrageBlacklistReq): com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistReq

          /**
           * Encodes the specified AddBarrageBlacklistReq message. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistReq.verify|verify} messages.
           * @param message AddBarrageBlacklistReq message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(message: com.bdgamelive.pb.barrageblacklist.IAddBarrageBlacklistReq, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Encodes the specified AddBarrageBlacklistReq message, length delimited. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistReq.verify|verify} messages.
           * @param message AddBarrageBlacklistReq message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(message: com.bdgamelive.pb.barrageblacklist.IAddBarrageBlacklistReq, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Decodes an AddBarrageBlacklistReq message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns AddBarrageBlacklistReq
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistReq

          /**
           * Decodes an AddBarrageBlacklistReq message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns AddBarrageBlacklistReq
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistReq

          /**
           * Verifies an AddBarrageBlacklistReq message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null

          /**
           * Creates an AddBarrageBlacklistReq message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns AddBarrageBlacklistReq
           */
          public static fromObject(object: { [k: string]: any }): com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistReq

          /**
           * Creates a plain object from an AddBarrageBlacklistReq message. Also converts values to other types if specified.
           * @param message AddBarrageBlacklistReq
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(message: com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistReq, options?: $protobuf.IConversionOptions): { [k: string]: any }

          /**
           * Converts this AddBarrageBlacklistReq to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any }
        }

        namespace AddBarrageBlacklistReq {
          /** Type enum. */
          enum Type {
            none = 0,
            max = 1017,
            min = 103
          }
        }

        /** Properties of an AddBarrageBlacklistResp. */
        interface IAddBarrageBlacklistResp {
          /** AddBarrageBlacklistResp result */
          result?: com.bdgamelive.pb.common.IResult | null
        }

        /** Represents an AddBarrageBlacklistResp. */
        class AddBarrageBlacklistResp implements IAddBarrageBlacklistResp {
          /**
           * Constructs a new AddBarrageBlacklistResp.
           * @param [properties] Properties to set
           */
          constructor(properties?: com.bdgamelive.pb.barrageblacklist.IAddBarrageBlacklistResp)

          /** AddBarrageBlacklistResp result. */
          public result?: com.bdgamelive.pb.common.IResult | null

          /**
           * Creates a new AddBarrageBlacklistResp instance using the specified properties.
           * @param [properties] Properties to set
           * @returns AddBarrageBlacklistResp instance
           */
          public static create(properties?: com.bdgamelive.pb.barrageblacklist.IAddBarrageBlacklistResp): com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistResp

          /**
           * Encodes the specified AddBarrageBlacklistResp message. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistResp.verify|verify} messages.
           * @param message AddBarrageBlacklistResp message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(message: com.bdgamelive.pb.barrageblacklist.IAddBarrageBlacklistResp, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Encodes the specified AddBarrageBlacklistResp message, length delimited. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistResp.verify|verify} messages.
           * @param message AddBarrageBlacklistResp message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(message: com.bdgamelive.pb.barrageblacklist.IAddBarrageBlacklistResp, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Decodes an AddBarrageBlacklistResp message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns AddBarrageBlacklistResp
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistResp

          /**
           * Decodes an AddBarrageBlacklistResp message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns AddBarrageBlacklistResp
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistResp

          /**
           * Verifies an AddBarrageBlacklistResp message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null

          /**
           * Creates an AddBarrageBlacklistResp message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns AddBarrageBlacklistResp
           */
          public static fromObject(object: { [k: string]: any }): com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistResp

          /**
           * Creates a plain object from an AddBarrageBlacklistResp message. Also converts values to other types if specified.
           * @param message AddBarrageBlacklistResp
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(message: com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistResp, options?: $protobuf.IConversionOptions): { [k: string]: any }

          /**
           * Converts this AddBarrageBlacklistResp to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any }
        }

        namespace AddBarrageBlacklistResp {
          /** Type enum. */
          enum Type {
            none = 0,
            max = 1017,
            min = 104
          }
        }

        /** Properties of a DeleteBarrageBlacklistReq. */
        interface IDeleteBarrageBlacklistReq {
          /** DeleteBarrageBlacklistReq keyId */
          keyId?: number | Long | null
        }

        /** 删除黑词 */
        class DeleteBarrageBlacklistReq implements IDeleteBarrageBlacklistReq {
          /**
           * Constructs a new DeleteBarrageBlacklistReq.
           * @param [properties] Properties to set
           */
          constructor(properties?: com.bdgamelive.pb.barrageblacklist.IDeleteBarrageBlacklistReq)

          /** DeleteBarrageBlacklistReq keyId. */
          public keyId: number | Long

          /**
           * Creates a new DeleteBarrageBlacklistReq instance using the specified properties.
           * @param [properties] Properties to set
           * @returns DeleteBarrageBlacklistReq instance
           */
          public static create(properties?: com.bdgamelive.pb.barrageblacklist.IDeleteBarrageBlacklistReq): com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistReq

          /**
           * Encodes the specified DeleteBarrageBlacklistReq message. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistReq.verify|verify} messages.
           * @param message DeleteBarrageBlacklistReq message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(message: com.bdgamelive.pb.barrageblacklist.IDeleteBarrageBlacklistReq, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Encodes the specified DeleteBarrageBlacklistReq message, length delimited. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistReq.verify|verify} messages.
           * @param message DeleteBarrageBlacklistReq message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(message: com.bdgamelive.pb.barrageblacklist.IDeleteBarrageBlacklistReq, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Decodes a DeleteBarrageBlacklistReq message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns DeleteBarrageBlacklistReq
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistReq

          /**
           * Decodes a DeleteBarrageBlacklistReq message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns DeleteBarrageBlacklistReq
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistReq

          /**
           * Verifies a DeleteBarrageBlacklistReq message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null

          /**
           * Creates a DeleteBarrageBlacklistReq message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns DeleteBarrageBlacklistReq
           */
          public static fromObject(object: { [k: string]: any }): com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistReq

          /**
           * Creates a plain object from a DeleteBarrageBlacklistReq message. Also converts values to other types if specified.
           * @param message DeleteBarrageBlacklistReq
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(message: com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistReq, options?: $protobuf.IConversionOptions): { [k: string]: any }

          /**
           * Converts this DeleteBarrageBlacklistReq to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any }
        }

        namespace DeleteBarrageBlacklistReq {
          /** Type enum. */
          enum Type {
            none = 0,
            max = 1017,
            min = 105
          }
        }

        /** Properties of a DeleteBarrageBlacklistResp. */
        interface IDeleteBarrageBlacklistResp {
          /** DeleteBarrageBlacklistResp result */
          result?: com.bdgamelive.pb.common.IResult | null
        }

        /** Represents a DeleteBarrageBlacklistResp. */
        class DeleteBarrageBlacklistResp implements IDeleteBarrageBlacklistResp {
          /**
           * Constructs a new DeleteBarrageBlacklistResp.
           * @param [properties] Properties to set
           */
          constructor(properties?: com.bdgamelive.pb.barrageblacklist.IDeleteBarrageBlacklistResp)

          /** DeleteBarrageBlacklistResp result. */
          public result?: com.bdgamelive.pb.common.IResult | null

          /**
           * Creates a new DeleteBarrageBlacklistResp instance using the specified properties.
           * @param [properties] Properties to set
           * @returns DeleteBarrageBlacklistResp instance
           */
          public static create(properties?: com.bdgamelive.pb.barrageblacklist.IDeleteBarrageBlacklistResp): com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistResp

          /**
           * Encodes the specified DeleteBarrageBlacklistResp message. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistResp.verify|verify} messages.
           * @param message DeleteBarrageBlacklistResp message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(message: com.bdgamelive.pb.barrageblacklist.IDeleteBarrageBlacklistResp, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Encodes the specified DeleteBarrageBlacklistResp message, length delimited. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistResp.verify|verify} messages.
           * @param message DeleteBarrageBlacklistResp message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(message: com.bdgamelive.pb.barrageblacklist.IDeleteBarrageBlacklistResp, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Decodes a DeleteBarrageBlacklistResp message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns DeleteBarrageBlacklistResp
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistResp

          /**
           * Decodes a DeleteBarrageBlacklistResp message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns DeleteBarrageBlacklistResp
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistResp

          /**
           * Verifies a DeleteBarrageBlacklistResp message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null

          /**
           * Creates a DeleteBarrageBlacklistResp message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns DeleteBarrageBlacklistResp
           */
          public static fromObject(object: { [k: string]: any }): com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistResp

          /**
           * Creates a plain object from a DeleteBarrageBlacklistResp message. Also converts values to other types if specified.
           * @param message DeleteBarrageBlacklistResp
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(message: com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistResp, options?: $protobuf.IConversionOptions): { [k: string]: any }

          /**
           * Converts this DeleteBarrageBlacklistResp to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any }
        }

        namespace DeleteBarrageBlacklistResp {
          /** Type enum. */
          enum Type {
            none = 0,
            max = 1017,
            min = 106
          }
        }

        /** Properties of a ClearBarrageBlacklistReq. */
        interface IClearBarrageBlacklistReq {}

        /** 清除全部黑词 */
        class ClearBarrageBlacklistReq implements IClearBarrageBlacklistReq {
          /**
           * Constructs a new ClearBarrageBlacklistReq.
           * @param [properties] Properties to set
           */
          constructor(properties?: com.bdgamelive.pb.barrageblacklist.IClearBarrageBlacklistReq)

          /**
           * Creates a new ClearBarrageBlacklistReq instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ClearBarrageBlacklistReq instance
           */
          public static create(properties?: com.bdgamelive.pb.barrageblacklist.IClearBarrageBlacklistReq): com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistReq

          /**
           * Encodes the specified ClearBarrageBlacklistReq message. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistReq.verify|verify} messages.
           * @param message ClearBarrageBlacklistReq message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(message: com.bdgamelive.pb.barrageblacklist.IClearBarrageBlacklistReq, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Encodes the specified ClearBarrageBlacklistReq message, length delimited. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistReq.verify|verify} messages.
           * @param message ClearBarrageBlacklistReq message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(message: com.bdgamelive.pb.barrageblacklist.IClearBarrageBlacklistReq, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Decodes a ClearBarrageBlacklistReq message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns ClearBarrageBlacklistReq
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistReq

          /**
           * Decodes a ClearBarrageBlacklistReq message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns ClearBarrageBlacklistReq
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistReq

          /**
           * Verifies a ClearBarrageBlacklistReq message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null

          /**
           * Creates a ClearBarrageBlacklistReq message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns ClearBarrageBlacklistReq
           */
          public static fromObject(object: { [k: string]: any }): com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistReq

          /**
           * Creates a plain object from a ClearBarrageBlacklistReq message. Also converts values to other types if specified.
           * @param message ClearBarrageBlacklistReq
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(message: com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistReq, options?: $protobuf.IConversionOptions): { [k: string]: any }

          /**
           * Converts this ClearBarrageBlacklistReq to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any }
        }

        namespace ClearBarrageBlacklistReq {
          /** Type enum. */
          enum Type {
            none = 0,
            max = 1017,
            min = 107
          }
        }

        /** Properties of a ClearBarrageBlacklistResp. */
        interface IClearBarrageBlacklistResp {
          /** ClearBarrageBlacklistResp result */
          result?: com.bdgamelive.pb.common.IResult | null
        }

        /** Represents a ClearBarrageBlacklistResp. */
        class ClearBarrageBlacklistResp implements IClearBarrageBlacklistResp {
          /**
           * Constructs a new ClearBarrageBlacklistResp.
           * @param [properties] Properties to set
           */
          constructor(properties?: com.bdgamelive.pb.barrageblacklist.IClearBarrageBlacklistResp)

          /** ClearBarrageBlacklistResp result. */
          public result?: com.bdgamelive.pb.common.IResult | null

          /**
           * Creates a new ClearBarrageBlacklistResp instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ClearBarrageBlacklistResp instance
           */
          public static create(properties?: com.bdgamelive.pb.barrageblacklist.IClearBarrageBlacklistResp): com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistResp

          /**
           * Encodes the specified ClearBarrageBlacklistResp message. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistResp.verify|verify} messages.
           * @param message ClearBarrageBlacklistResp message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(message: com.bdgamelive.pb.barrageblacklist.IClearBarrageBlacklistResp, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Encodes the specified ClearBarrageBlacklistResp message, length delimited. Does not implicitly {@link com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistResp.verify|verify} messages.
           * @param message ClearBarrageBlacklistResp message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(message: com.bdgamelive.pb.barrageblacklist.IClearBarrageBlacklistResp, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Decodes a ClearBarrageBlacklistResp message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns ClearBarrageBlacklistResp
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistResp

          /**
           * Decodes a ClearBarrageBlacklistResp message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns ClearBarrageBlacklistResp
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistResp

          /**
           * Verifies a ClearBarrageBlacklistResp message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null

          /**
           * Creates a ClearBarrageBlacklistResp message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns ClearBarrageBlacklistResp
           */
          public static fromObject(object: { [k: string]: any }): com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistResp

          /**
           * Creates a plain object from a ClearBarrageBlacklistResp message. Also converts values to other types if specified.
           * @param message ClearBarrageBlacklistResp
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(message: com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistResp, options?: $protobuf.IConversionOptions): { [k: string]: any }

          /**
           * Converts this ClearBarrageBlacklistResp to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any }
        }

        namespace ClearBarrageBlacklistResp {
          /** Type enum. */
          enum Type {
            none = 0,
            max = 1017,
            min = 108
          }
        }
      }

      /** Namespace common. */
      namespace common {
        /** Properties of a Result. */
        interface IResult {
          /** Result code */
          code?: number | null

          /** Result message */
          message?: string | null
        }

        /** 通用返回结果类 */
        class Result implements IResult {
          /**
           * Constructs a new Result.
           * @param [properties] Properties to set
           */
          constructor(properties?: com.bdgamelive.pb.common.IResult)

          /** Result code. */
          public code: number

          /** Result message. */
          public message: string

          /**
           * Creates a new Result instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Result instance
           */
          public static create(properties?: com.bdgamelive.pb.common.IResult): com.bdgamelive.pb.common.Result

          /**
           * Encodes the specified Result message. Does not implicitly {@link com.bdgamelive.pb.common.Result.verify|verify} messages.
           * @param message Result message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(message: com.bdgamelive.pb.common.IResult, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Encodes the specified Result message, length delimited. Does not implicitly {@link com.bdgamelive.pb.common.Result.verify|verify} messages.
           * @param message Result message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(message: com.bdgamelive.pb.common.IResult, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Decodes a Result message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns Result
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.bdgamelive.pb.common.Result

          /**
           * Decodes a Result message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns Result
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.bdgamelive.pb.common.Result

          /**
           * Verifies a Result message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null

          /**
           * Creates a Result message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns Result
           */
          public static fromObject(object: { [k: string]: any }): com.bdgamelive.pb.common.Result

          /**
           * Creates a plain object from a Result message. Also converts values to other types if specified.
           * @param message Result
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(message: com.bdgamelive.pb.common.Result, options?: $protobuf.IConversionOptions): { [k: string]: any }

          /**
           * Converts this Result to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any }
        }
      }
    }
  }
}
