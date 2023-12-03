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
      /** Namespace anchorbase. */
      namespace anchorbase {
        /** Properties of a CheckAnchorCertMaskReq. */
        interface ICheckAnchorCertMaskReq {}

        /** Represents a CheckAnchorCertMaskReq. */
        class CheckAnchorCertMaskReq implements ICheckAnchorCertMaskReq {
          /**
           * Constructs a new CheckAnchorCertMaskReq.
           * @param [properties] Properties to set
           */
          constructor(properties?: com.bdgamelive.pb.anchorbase.ICheckAnchorCertMaskReq)

          /**
           * Creates a new CheckAnchorCertMaskReq instance using the specified properties.
           * @param [properties] Properties to set
           * @returns CheckAnchorCertMaskReq instance
           */
          public static create(properties?: com.bdgamelive.pb.anchorbase.ICheckAnchorCertMaskReq): com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskReq

          /**
           * Encodes the specified CheckAnchorCertMaskReq message. Does not implicitly {@link com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskReq.verify|verify} messages.
           * @param message CheckAnchorCertMaskReq message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(message: com.bdgamelive.pb.anchorbase.ICheckAnchorCertMaskReq, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Encodes the specified CheckAnchorCertMaskReq message, length delimited. Does not implicitly {@link com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskReq.verify|verify} messages.
           * @param message CheckAnchorCertMaskReq message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(message: com.bdgamelive.pb.anchorbase.ICheckAnchorCertMaskReq, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Decodes a CheckAnchorCertMaskReq message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns CheckAnchorCertMaskReq
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskReq

          /**
           * Decodes a CheckAnchorCertMaskReq message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns CheckAnchorCertMaskReq
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskReq

          /**
           * Verifies a CheckAnchorCertMaskReq message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null

          /**
           * Creates a CheckAnchorCertMaskReq message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns CheckAnchorCertMaskReq
           */
          public static fromObject(object: { [k: string]: any }): com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskReq

          /**
           * Creates a plain object from a CheckAnchorCertMaskReq message. Also converts values to other types if specified.
           * @param message CheckAnchorCertMaskReq
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(message: com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskReq, options?: $protobuf.IConversionOptions): { [k: string]: any }

          /**
           * Converts this CheckAnchorCertMaskReq to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any }
        }

        namespace CheckAnchorCertMaskReq {
          /** Type enum. */
          enum Type {
            none = 0,
            max = 1001,
            min = 1016
          }
        }

        /** Properties of a CheckAnchorCertMaskResp. */
        interface ICheckAnchorCertMaskResp {
          /** CheckAnchorCertMaskResp result */
          result?: com.bdgamelive.pb.common.IResult | null

          /** CheckAnchorCertMaskResp isCertMask */
          isCertMask?: boolean | null

          /** CheckAnchorCertMaskResp test64 */
          test64?: number | Long | null

          /** CheckAnchorCertMaskResp teststr */
          teststr?: string | null

          /** CheckAnchorCertMaskResp test32 */
          test32?: number | null

          /** CheckAnchorCertMaskResp testarr */
          testarr?: string[] | null
        }

        /** Represents a CheckAnchorCertMaskResp. */
        class CheckAnchorCertMaskResp implements ICheckAnchorCertMaskResp {
          /**
           * Constructs a new CheckAnchorCertMaskResp.
           * @param [properties] Properties to set
           */
          constructor(properties?: com.bdgamelive.pb.anchorbase.ICheckAnchorCertMaskResp)

          /** CheckAnchorCertMaskResp result. */
          public result?: com.bdgamelive.pb.common.IResult | null

          /** CheckAnchorCertMaskResp isCertMask. */
          public isCertMask: boolean

          /** CheckAnchorCertMaskResp test64. */
          public test64: number | Long

          /** CheckAnchorCertMaskResp teststr. */
          public teststr: string

          /** CheckAnchorCertMaskResp test32. */
          public test32: number

          /** CheckAnchorCertMaskResp testarr. */
          public testarr: string[]

          /**
           * Creates a new CheckAnchorCertMaskResp instance using the specified properties.
           * @param [properties] Properties to set
           * @returns CheckAnchorCertMaskResp instance
           */
          public static create(properties?: com.bdgamelive.pb.anchorbase.ICheckAnchorCertMaskResp): com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskResp

          /**
           * Encodes the specified CheckAnchorCertMaskResp message. Does not implicitly {@link com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskResp.verify|verify} messages.
           * @param message CheckAnchorCertMaskResp message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(message: com.bdgamelive.pb.anchorbase.ICheckAnchorCertMaskResp, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Encodes the specified CheckAnchorCertMaskResp message, length delimited. Does not implicitly {@link com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskResp.verify|verify} messages.
           * @param message CheckAnchorCertMaskResp message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(message: com.bdgamelive.pb.anchorbase.ICheckAnchorCertMaskResp, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Decodes a CheckAnchorCertMaskResp message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns CheckAnchorCertMaskResp
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskResp

          /**
           * Decodes a CheckAnchorCertMaskResp message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns CheckAnchorCertMaskResp
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskResp

          /**
           * Verifies a CheckAnchorCertMaskResp message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null

          /**
           * Creates a CheckAnchorCertMaskResp message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns CheckAnchorCertMaskResp
           */
          public static fromObject(object: { [k: string]: any }): com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskResp

          /**
           * Creates a plain object from a CheckAnchorCertMaskResp message. Also converts values to other types if specified.
           * @param message CheckAnchorCertMaskResp
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(message: com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskResp, options?: $protobuf.IConversionOptions): { [k: string]: any }

          /**
           * Converts this CheckAnchorCertMaskResp to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any }
        }

        namespace CheckAnchorCertMaskResp {
          /** Type enum. */
          enum Type {
            none = 0,
            max = 1001,
            min = 1017
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
