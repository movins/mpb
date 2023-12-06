/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@movinliao@163.com
 */

import {$protobuf} from '../../../index'
/** Namespace com. */
export namespace com {
  /** Namespace planet. */
  namespace planet {
    /** Namespace pojo. */
    namespace pojo {
      /** Properties of a MsgReq. */
      interface IMsgReq {
        /** MsgReq alias */
        alias?: string | null

        /** MsgReq opt */
        opt?: { [k: string]: string } | null

        /** MsgReq req */
        req?: Uint8Array | null
      }

      /** Represents a MsgReq. */
      class MsgReq implements IMsgReq {
        /**
         * Constructs a new MsgReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: com.planet.pojo.IMsgReq)

        /** MsgReq alias. */
        public alias: string

        /** MsgReq opt. */
        public opt: { [k: string]: string }

        /** MsgReq req. */
        public req: Uint8Array

        /**
         * Creates a new MsgReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgReq instance
         */
        public static create(properties?: com.planet.pojo.IMsgReq): com.planet.pojo.MsgReq

        /**
         * Encodes the specified MsgReq message. Does not implicitly {@link com.planet.pojo.MsgReq.verify|verify} messages.
         * @param message MsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: com.planet.pojo.IMsgReq, writer?: $protobuf.Writer): $protobuf.Writer

        /**
         * Encodes the specified MsgReq message, length delimited. Does not implicitly {@link com.planet.pojo.MsgReq.verify|verify} messages.
         * @param message MsgReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: com.planet.pojo.IMsgReq, writer?: $protobuf.Writer): $protobuf.Writer

        /**
         * Decodes a MsgReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.planet.pojo.MsgReq

        /**
         * Decodes a MsgReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.planet.pojo.MsgReq

        /**
         * Verifies a MsgReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a MsgReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgReq
         */
        public static fromObject(object: { [k: string]: any }): com.planet.pojo.MsgReq

        /**
         * Creates a plain object from a MsgReq message. Also converts values to other types if specified.
         * @param message MsgReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: com.planet.pojo.MsgReq, options?: $protobuf.IConversionOptions): { [k: string]: any }

        /**
         * Converts this MsgReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any }
      }

      /** Properties of a MsgRsp. */
      interface IMsgRsp {
        /** MsgRsp code */
        code?: number | null

        /** MsgRsp opt */
        opt?: { [k: string]: string } | null

        /** MsgRsp rsp */
        rsp?: Uint8Array | null

        /** MsgRsp message */
        message?: string | null
      }

      /** Represents a MsgRsp. */
      class MsgRsp implements IMsgRsp {
        /**
         * Constructs a new MsgRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: com.planet.pojo.IMsgRsp)

        /** MsgRsp code. */
        public code: number

        /** MsgRsp opt. */
        public opt: { [k: string]: string }

        /** MsgRsp rsp. */
        public rsp: Uint8Array

        /** MsgRsp message. */
        public message: string

        /**
         * Creates a new MsgRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgRsp instance
         */
        public static create(properties?: com.planet.pojo.IMsgRsp): com.planet.pojo.MsgRsp

        /**
         * Encodes the specified MsgRsp message. Does not implicitly {@link com.planet.pojo.MsgRsp.verify|verify} messages.
         * @param message MsgRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: com.planet.pojo.IMsgRsp, writer?: $protobuf.Writer): $protobuf.Writer

        /**
         * Encodes the specified MsgRsp message, length delimited. Does not implicitly {@link com.planet.pojo.MsgRsp.verify|verify} messages.
         * @param message MsgRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: com.planet.pojo.IMsgRsp, writer?: $protobuf.Writer): $protobuf.Writer

        /**
         * Decodes a MsgRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.planet.pojo.MsgRsp

        /**
         * Decodes a MsgRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.planet.pojo.MsgRsp

        /**
         * Verifies a MsgRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a MsgRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgRsp
         */
        public static fromObject(object: { [k: string]: any }): com.planet.pojo.MsgRsp

        /**
         * Creates a plain object from a MsgRsp message. Also converts values to other types if specified.
         * @param message MsgRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: com.planet.pojo.MsgRsp, options?: $protobuf.IConversionOptions): { [k: string]: any }

        /**
         * Converts this MsgRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any }
      }
    }
  }
}
