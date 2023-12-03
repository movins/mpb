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
