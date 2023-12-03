/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@liaoguoguang
 */

import {$protobuf} from '../../../index'
/** Namespace com. */
export namespace com {
  /** Namespace yy. */
  namespace yy {
    /** Namespace recommend. */
    namespace recommend {
      /** Namespace domain. */
      namespace domain {
        /** Namespace pb. */
        namespace pb {
          /** Properties of a LiveEndRecommendReq. */
          interface ILiveEndRecommendReq {}

          /** 停播推荐请求 */
          class LiveEndRecommendReq implements ILiveEndRecommendReq {
            /**
             * Constructs a new LiveEndRecommendReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.yy.recommend.domain.pb.ILiveEndRecommendReq)

            /**
             * Creates a new LiveEndRecommendReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LiveEndRecommendReq instance
             */
            public static create(properties?: com.yy.recommend.domain.pb.ILiveEndRecommendReq): com.yy.recommend.domain.pb.LiveEndRecommendReq

            /**
             * Encodes the specified LiveEndRecommendReq message. Does not implicitly {@link com.yy.recommend.domain.pb.LiveEndRecommendReq.verify|verify} messages.
             * @param message LiveEndRecommendReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.yy.recommend.domain.pb.ILiveEndRecommendReq, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Encodes the specified LiveEndRecommendReq message, length delimited. Does not implicitly {@link com.yy.recommend.domain.pb.LiveEndRecommendReq.verify|verify} messages.
             * @param message LiveEndRecommendReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.yy.recommend.domain.pb.ILiveEndRecommendReq, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Decodes a LiveEndRecommendReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LiveEndRecommendReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.yy.recommend.domain.pb.LiveEndRecommendReq

            /**
             * Decodes a LiveEndRecommendReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LiveEndRecommendReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.yy.recommend.domain.pb.LiveEndRecommendReq

            /**
             * Verifies a LiveEndRecommendReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string | null

            /**
             * Creates a LiveEndRecommendReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LiveEndRecommendReq
             */
            public static fromObject(object: { [k: string]: any }): com.yy.recommend.domain.pb.LiveEndRecommendReq

            /**
             * Creates a plain object from a LiveEndRecommendReq message. Also converts values to other types if specified.
             * @param message LiveEndRecommendReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: com.yy.recommend.domain.pb.LiveEndRecommendReq, options?: $protobuf.IConversionOptions): { [k: string]: any }

            /**
             * Converts this LiveEndRecommendReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any }
          }

          namespace LiveEndRecommendReq {
            /** Type enum. */
            enum Type {
              none = 0,
              max = 5741,
              min = 1
            }
          }

          /** Properties of a LiveEndRecommendRsp. */
          interface ILiveEndRecommendRsp {
            /** LiveEndRecommendRsp result */
            result?: com.yy.recommend.common.IResult | null

            /** LiveEndRecommendRsp live */
            live?: com.yy.recommend.domain.pb.ILive[] | null
          }

          /** 停播推荐响应 */
          class LiveEndRecommendRsp implements ILiveEndRecommendRsp {
            /**
             * Constructs a new LiveEndRecommendRsp.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.yy.recommend.domain.pb.ILiveEndRecommendRsp)

            /** LiveEndRecommendRsp result. */
            public result?: com.yy.recommend.common.IResult | null

            /** LiveEndRecommendRsp live. */
            public live: com.yy.recommend.domain.pb.ILive[]

            /**
             * Creates a new LiveEndRecommendRsp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LiveEndRecommendRsp instance
             */
            public static create(properties?: com.yy.recommend.domain.pb.ILiveEndRecommendRsp): com.yy.recommend.domain.pb.LiveEndRecommendRsp

            /**
             * Encodes the specified LiveEndRecommendRsp message. Does not implicitly {@link com.yy.recommend.domain.pb.LiveEndRecommendRsp.verify|verify} messages.
             * @param message LiveEndRecommendRsp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.yy.recommend.domain.pb.ILiveEndRecommendRsp, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Encodes the specified LiveEndRecommendRsp message, length delimited. Does not implicitly {@link com.yy.recommend.domain.pb.LiveEndRecommendRsp.verify|verify} messages.
             * @param message LiveEndRecommendRsp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.yy.recommend.domain.pb.ILiveEndRecommendRsp, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Decodes a LiveEndRecommendRsp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LiveEndRecommendRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.yy.recommend.domain.pb.LiveEndRecommendRsp

            /**
             * Decodes a LiveEndRecommendRsp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LiveEndRecommendRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.yy.recommend.domain.pb.LiveEndRecommendRsp

            /**
             * Verifies a LiveEndRecommendRsp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string | null

            /**
             * Creates a LiveEndRecommendRsp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LiveEndRecommendRsp
             */
            public static fromObject(object: { [k: string]: any }): com.yy.recommend.domain.pb.LiveEndRecommendRsp

            /**
             * Creates a plain object from a LiveEndRecommendRsp message. Also converts values to other types if specified.
             * @param message LiveEndRecommendRsp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: com.yy.recommend.domain.pb.LiveEndRecommendRsp, options?: $protobuf.IConversionOptions): { [k: string]: any }

            /**
             * Converts this LiveEndRecommendRsp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any }
          }

          namespace LiveEndRecommendRsp {
            /** Type enum. */
            enum Type {
              none = 0,
              max = 5741,
              min = 2
            }
          }

          /** Properties of a Live. */
          interface ILive {
            /** Live uid */
            uid?: number | Long | null

            /** Live sid */
            sid?: number | Long | null

            /** Live ssid */
            ssid?: number | Long | null

            /** Live img */
            img?: string | null

            /** Live streamInfo */
            streamInfo?: string | null

            /** Live users */
            users?: number | null

            /** Live tpl */
            tpl?: number | Long | null

            /** Live token */
            token?: string | null

            /** Live recSource */
            recSource?: string | null

            /** Live name */
            name?: string | null

            /** Live desc */
            desc?: string | null

            /** Live avatar */
            avatar?: string | null
          }

          /** 直播数据 */
          class Live implements ILive {
            /**
             * Constructs a new Live.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.yy.recommend.domain.pb.ILive)

            /** Live uid. */
            public uid: number | Long

            /** Live sid. */
            public sid: number | Long

            /** Live ssid. */
            public ssid: number | Long

            /** Live img. */
            public img: string

            /** Live streamInfo. */
            public streamInfo: string

            /** Live users. */
            public users: number

            /** Live tpl. */
            public tpl: number | Long

            /** Live token. */
            public token: string

            /** Live recSource. */
            public recSource: string

            /** Live name. */
            public name: string

            /** Live desc. */
            public desc: string

            /** Live avatar. */
            public avatar: string

            /**
             * Creates a new Live instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Live instance
             */
            public static create(properties?: com.yy.recommend.domain.pb.ILive): com.yy.recommend.domain.pb.Live

            /**
             * Encodes the specified Live message. Does not implicitly {@link com.yy.recommend.domain.pb.Live.verify|verify} messages.
             * @param message Live message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.yy.recommend.domain.pb.ILive, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Encodes the specified Live message, length delimited. Does not implicitly {@link com.yy.recommend.domain.pb.Live.verify|verify} messages.
             * @param message Live message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.yy.recommend.domain.pb.ILive, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Decodes a Live message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Live
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.yy.recommend.domain.pb.Live

            /**
             * Decodes a Live message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Live
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.yy.recommend.domain.pb.Live

            /**
             * Verifies a Live message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string | null

            /**
             * Creates a Live message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Live
             */
            public static fromObject(object: { [k: string]: any }): com.yy.recommend.domain.pb.Live

            /**
             * Creates a plain object from a Live message. Also converts values to other types if specified.
             * @param message Live
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: com.yy.recommend.domain.pb.Live, options?: $protobuf.IConversionOptions): { [k: string]: any }

            /**
             * Converts this Live to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any }
          }

          /** Properties of a RecordLiveRecommendReq. */
          interface IRecordLiveRecommendReq {
            /** RecordLiveRecommendReq anchorUid */
            anchorUid?: number | Long | null
          }

          /** 查询录播推荐请求 */
          class RecordLiveRecommendReq implements IRecordLiveRecommendReq {
            /**
             * Constructs a new RecordLiveRecommendReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.yy.recommend.domain.pb.IRecordLiveRecommendReq)

            /** RecordLiveRecommendReq anchorUid. */
            public anchorUid: number | Long

            /**
             * Creates a new RecordLiveRecommendReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RecordLiveRecommendReq instance
             */
            public static create(properties?: com.yy.recommend.domain.pb.IRecordLiveRecommendReq): com.yy.recommend.domain.pb.RecordLiveRecommendReq

            /**
             * Encodes the specified RecordLiveRecommendReq message. Does not implicitly {@link com.yy.recommend.domain.pb.RecordLiveRecommendReq.verify|verify} messages.
             * @param message RecordLiveRecommendReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.yy.recommend.domain.pb.IRecordLiveRecommendReq, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Encodes the specified RecordLiveRecommendReq message, length delimited. Does not implicitly {@link com.yy.recommend.domain.pb.RecordLiveRecommendReq.verify|verify} messages.
             * @param message RecordLiveRecommendReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.yy.recommend.domain.pb.IRecordLiveRecommendReq, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Decodes a RecordLiveRecommendReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RecordLiveRecommendReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.yy.recommend.domain.pb.RecordLiveRecommendReq

            /**
             * Decodes a RecordLiveRecommendReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RecordLiveRecommendReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.yy.recommend.domain.pb.RecordLiveRecommendReq

            /**
             * Verifies a RecordLiveRecommendReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string | null

            /**
             * Creates a RecordLiveRecommendReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RecordLiveRecommendReq
             */
            public static fromObject(object: { [k: string]: any }): com.yy.recommend.domain.pb.RecordLiveRecommendReq

            /**
             * Creates a plain object from a RecordLiveRecommendReq message. Also converts values to other types if specified.
             * @param message RecordLiveRecommendReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: com.yy.recommend.domain.pb.RecordLiveRecommendReq, options?: $protobuf.IConversionOptions): { [k: string]: any }

            /**
             * Converts this RecordLiveRecommendReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any }
          }

          namespace RecordLiveRecommendReq {
            /** Type enum. */
            enum Type {
              none = 0,
              max = 5741,
              min = 3
            }
          }

          /** Properties of a RecordLiveRecommendRsp. */
          interface IRecordLiveRecommendRsp {
            /** RecordLiveRecommendRsp result */
            result?: com.yy.recommend.common.IResult | null

            /** RecordLiveRecommendRsp recordLive */
            recordLive?: number | null

            /** RecordLiveRecommendRsp inRecordTest */
            inRecordTest?: number | null

            /** RecordLiveRecommendRsp inJumpTest */
            inJumpTest?: number | null

            /** RecordLiveRecommendRsp showRecommendTime */
            showRecommendTime?: number | null

            /** RecordLiveRecommendRsp live */
            live?: com.yy.recommend.domain.pb.ILive[] | null

            /** RecordLiveRecommendRsp popTime */
            popTime?: number | null

            /** RecordLiveRecommendRsp recommendStayTime */
            recommendStayTime?: number | null

            /** RecordLiveRecommendRsp popStayTime */
            popStayTime?: number | null
          }

          /** 查询录播推荐响应 */
          class RecordLiveRecommendRsp implements IRecordLiveRecommendRsp {
            /**
             * Constructs a new RecordLiveRecommendRsp.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.yy.recommend.domain.pb.IRecordLiveRecommendRsp)

            /** RecordLiveRecommendRsp result. */
            public result?: com.yy.recommend.common.IResult | null

            /** RecordLiveRecommendRsp recordLive. */
            public recordLive: number

            /** RecordLiveRecommendRsp inRecordTest. */
            public inRecordTest: number

            /** RecordLiveRecommendRsp inJumpTest. */
            public inJumpTest: number

            /** RecordLiveRecommendRsp showRecommendTime. */
            public showRecommendTime: number

            /** RecordLiveRecommendRsp live. */
            public live: com.yy.recommend.domain.pb.ILive[]

            /** RecordLiveRecommendRsp popTime. */
            public popTime: number

            /** RecordLiveRecommendRsp recommendStayTime. */
            public recommendStayTime: number

            /** RecordLiveRecommendRsp popStayTime. */
            public popStayTime: number

            /**
             * Creates a new RecordLiveRecommendRsp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RecordLiveRecommendRsp instance
             */
            public static create(properties?: com.yy.recommend.domain.pb.IRecordLiveRecommendRsp): com.yy.recommend.domain.pb.RecordLiveRecommendRsp

            /**
             * Encodes the specified RecordLiveRecommendRsp message. Does not implicitly {@link com.yy.recommend.domain.pb.RecordLiveRecommendRsp.verify|verify} messages.
             * @param message RecordLiveRecommendRsp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.yy.recommend.domain.pb.IRecordLiveRecommendRsp, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Encodes the specified RecordLiveRecommendRsp message, length delimited. Does not implicitly {@link com.yy.recommend.domain.pb.RecordLiveRecommendRsp.verify|verify} messages.
             * @param message RecordLiveRecommendRsp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.yy.recommend.domain.pb.IRecordLiveRecommendRsp, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Decodes a RecordLiveRecommendRsp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RecordLiveRecommendRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.yy.recommend.domain.pb.RecordLiveRecommendRsp

            /**
             * Decodes a RecordLiveRecommendRsp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RecordLiveRecommendRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.yy.recommend.domain.pb.RecordLiveRecommendRsp

            /**
             * Verifies a RecordLiveRecommendRsp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string | null

            /**
             * Creates a RecordLiveRecommendRsp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RecordLiveRecommendRsp
             */
            public static fromObject(object: { [k: string]: any }): com.yy.recommend.domain.pb.RecordLiveRecommendRsp

            /**
             * Creates a plain object from a RecordLiveRecommendRsp message. Also converts values to other types if specified.
             * @param message RecordLiveRecommendRsp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: com.yy.recommend.domain.pb.RecordLiveRecommendRsp, options?: $protobuf.IConversionOptions): { [k: string]: any }

            /**
             * Converts this RecordLiveRecommendRsp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any }
          }

          namespace RecordLiveRecommendRsp {
            /** Type enum. */
            enum Type {
              none = 0,
              max = 5741,
              min = 4
            }
          }

          /** Properties of an AnchorLiveEndConfigReq. */
          interface IAnchorLiveEndConfigReq {}

          /** 主播停播查询是否有推荐配置请求 */
          class AnchorLiveEndConfigReq implements IAnchorLiveEndConfigReq {
            /**
             * Constructs a new AnchorLiveEndConfigReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.yy.recommend.domain.pb.IAnchorLiveEndConfigReq)

            /**
             * Creates a new AnchorLiveEndConfigReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AnchorLiveEndConfigReq instance
             */
            public static create(properties?: com.yy.recommend.domain.pb.IAnchorLiveEndConfigReq): com.yy.recommend.domain.pb.AnchorLiveEndConfigReq

            /**
             * Encodes the specified AnchorLiveEndConfigReq message. Does not implicitly {@link com.yy.recommend.domain.pb.AnchorLiveEndConfigReq.verify|verify} messages.
             * @param message AnchorLiveEndConfigReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.yy.recommend.domain.pb.IAnchorLiveEndConfigReq, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Encodes the specified AnchorLiveEndConfigReq message, length delimited. Does not implicitly {@link com.yy.recommend.domain.pb.AnchorLiveEndConfigReq.verify|verify} messages.
             * @param message AnchorLiveEndConfigReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.yy.recommend.domain.pb.IAnchorLiveEndConfigReq, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Decodes an AnchorLiveEndConfigReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AnchorLiveEndConfigReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.yy.recommend.domain.pb.AnchorLiveEndConfigReq

            /**
             * Decodes an AnchorLiveEndConfigReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AnchorLiveEndConfigReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.yy.recommend.domain.pb.AnchorLiveEndConfigReq

            /**
             * Verifies an AnchorLiveEndConfigReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string | null

            /**
             * Creates an AnchorLiveEndConfigReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AnchorLiveEndConfigReq
             */
            public static fromObject(object: { [k: string]: any }): com.yy.recommend.domain.pb.AnchorLiveEndConfigReq

            /**
             * Creates a plain object from an AnchorLiveEndConfigReq message. Also converts values to other types if specified.
             * @param message AnchorLiveEndConfigReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: com.yy.recommend.domain.pb.AnchorLiveEndConfigReq, options?: $protobuf.IConversionOptions): { [k: string]: any }

            /**
             * Converts this AnchorLiveEndConfigReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any }
          }

          namespace AnchorLiveEndConfigReq {
            /** Type enum. */
            enum Type {
              none = 0,
              max = 5741,
              min = 5
            }
          }

          /** Properties of an AnchorLiveEndConfigRsp. */
          interface IAnchorLiveEndConfigRsp {
            /** AnchorLiveEndConfigRsp result */
            result?: com.yy.recommend.common.IResult | null

            /** AnchorLiveEndConfigRsp anchor */
            anchor?: com.yy.recommend.domain.pb.IAnchor[] | null
          }

          /** 查询主播停播是否有推荐配置返回 */
          class AnchorLiveEndConfigRsp implements IAnchorLiveEndConfigRsp {
            /**
             * Constructs a new AnchorLiveEndConfigRsp.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.yy.recommend.domain.pb.IAnchorLiveEndConfigRsp)

            /** AnchorLiveEndConfigRsp result. */
            public result?: com.yy.recommend.common.IResult | null

            /** AnchorLiveEndConfigRsp anchor. */
            public anchor: com.yy.recommend.domain.pb.IAnchor[]

            /**
             * Creates a new AnchorLiveEndConfigRsp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AnchorLiveEndConfigRsp instance
             */
            public static create(properties?: com.yy.recommend.domain.pb.IAnchorLiveEndConfigRsp): com.yy.recommend.domain.pb.AnchorLiveEndConfigRsp

            /**
             * Encodes the specified AnchorLiveEndConfigRsp message. Does not implicitly {@link com.yy.recommend.domain.pb.AnchorLiveEndConfigRsp.verify|verify} messages.
             * @param message AnchorLiveEndConfigRsp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.yy.recommend.domain.pb.IAnchorLiveEndConfigRsp, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Encodes the specified AnchorLiveEndConfigRsp message, length delimited. Does not implicitly {@link com.yy.recommend.domain.pb.AnchorLiveEndConfigRsp.verify|verify} messages.
             * @param message AnchorLiveEndConfigRsp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.yy.recommend.domain.pb.IAnchorLiveEndConfigRsp, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Decodes an AnchorLiveEndConfigRsp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AnchorLiveEndConfigRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.yy.recommend.domain.pb.AnchorLiveEndConfigRsp

            /**
             * Decodes an AnchorLiveEndConfigRsp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AnchorLiveEndConfigRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.yy.recommend.domain.pb.AnchorLiveEndConfigRsp

            /**
             * Verifies an AnchorLiveEndConfigRsp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string | null

            /**
             * Creates an AnchorLiveEndConfigRsp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AnchorLiveEndConfigRsp
             */
            public static fromObject(object: { [k: string]: any }): com.yy.recommend.domain.pb.AnchorLiveEndConfigRsp

            /**
             * Creates a plain object from an AnchorLiveEndConfigRsp message. Also converts values to other types if specified.
             * @param message AnchorLiveEndConfigRsp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: com.yy.recommend.domain.pb.AnchorLiveEndConfigRsp, options?: $protobuf.IConversionOptions): { [k: string]: any }

            /**
             * Converts this AnchorLiveEndConfigRsp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any }
          }

          namespace AnchorLiveEndConfigRsp {
            /** Type enum. */
            enum Type {
              none = 0,
              max = 5741,
              min = 6
            }
          }

          /** Properties of an AnchorLiveEndCastReq. */
          interface IAnchorLiveEndCastReq {
            /** AnchorLiveEndCastReq toSid */
            toSid?: number | Long | null
          }

          /** 主播停播触发广播到频道内用户 */
          class AnchorLiveEndCastReq implements IAnchorLiveEndCastReq {
            /**
             * Constructs a new AnchorLiveEndCastReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.yy.recommend.domain.pb.IAnchorLiveEndCastReq)

            /** AnchorLiveEndCastReq toSid. */
            public toSid: number | Long

            /**
             * Creates a new AnchorLiveEndCastReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AnchorLiveEndCastReq instance
             */
            public static create(properties?: com.yy.recommend.domain.pb.IAnchorLiveEndCastReq): com.yy.recommend.domain.pb.AnchorLiveEndCastReq

            /**
             * Encodes the specified AnchorLiveEndCastReq message. Does not implicitly {@link com.yy.recommend.domain.pb.AnchorLiveEndCastReq.verify|verify} messages.
             * @param message AnchorLiveEndCastReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.yy.recommend.domain.pb.IAnchorLiveEndCastReq, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Encodes the specified AnchorLiveEndCastReq message, length delimited. Does not implicitly {@link com.yy.recommend.domain.pb.AnchorLiveEndCastReq.verify|verify} messages.
             * @param message AnchorLiveEndCastReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.yy.recommend.domain.pb.IAnchorLiveEndCastReq, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Decodes an AnchorLiveEndCastReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AnchorLiveEndCastReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.yy.recommend.domain.pb.AnchorLiveEndCastReq

            /**
             * Decodes an AnchorLiveEndCastReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AnchorLiveEndCastReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.yy.recommend.domain.pb.AnchorLiveEndCastReq

            /**
             * Verifies an AnchorLiveEndCastReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string | null

            /**
             * Creates an AnchorLiveEndCastReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AnchorLiveEndCastReq
             */
            public static fromObject(object: { [k: string]: any }): com.yy.recommend.domain.pb.AnchorLiveEndCastReq

            /**
             * Creates a plain object from an AnchorLiveEndCastReq message. Also converts values to other types if specified.
             * @param message AnchorLiveEndCastReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: com.yy.recommend.domain.pb.AnchorLiveEndCastReq, options?: $protobuf.IConversionOptions): { [k: string]: any }

            /**
             * Converts this AnchorLiveEndCastReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any }
          }

          namespace AnchorLiveEndCastReq {
            /** Type enum. */
            enum Type {
              none = 0,
              max = 5741,
              min = 7
            }
          }

          /** Properties of an AnchorLiveEndCastRsp. */
          interface IAnchorLiveEndCastRsp {
            /** AnchorLiveEndCastRsp result */
            result?: com.yy.recommend.common.IResult | null
          }

          /** 主播停播触发广播到频道内用户返回 */
          class AnchorLiveEndCastRsp implements IAnchorLiveEndCastRsp {
            /**
             * Constructs a new AnchorLiveEndCastRsp.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.yy.recommend.domain.pb.IAnchorLiveEndCastRsp)

            /** AnchorLiveEndCastRsp result. */
            public result?: com.yy.recommend.common.IResult | null

            /**
             * Creates a new AnchorLiveEndCastRsp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AnchorLiveEndCastRsp instance
             */
            public static create(properties?: com.yy.recommend.domain.pb.IAnchorLiveEndCastRsp): com.yy.recommend.domain.pb.AnchorLiveEndCastRsp

            /**
             * Encodes the specified AnchorLiveEndCastRsp message. Does not implicitly {@link com.yy.recommend.domain.pb.AnchorLiveEndCastRsp.verify|verify} messages.
             * @param message AnchorLiveEndCastRsp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.yy.recommend.domain.pb.IAnchorLiveEndCastRsp, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Encodes the specified AnchorLiveEndCastRsp message, length delimited. Does not implicitly {@link com.yy.recommend.domain.pb.AnchorLiveEndCastRsp.verify|verify} messages.
             * @param message AnchorLiveEndCastRsp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.yy.recommend.domain.pb.IAnchorLiveEndCastRsp, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Decodes an AnchorLiveEndCastRsp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AnchorLiveEndCastRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.yy.recommend.domain.pb.AnchorLiveEndCastRsp

            /**
             * Decodes an AnchorLiveEndCastRsp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AnchorLiveEndCastRsp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.yy.recommend.domain.pb.AnchorLiveEndCastRsp

            /**
             * Verifies an AnchorLiveEndCastRsp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string | null

            /**
             * Creates an AnchorLiveEndCastRsp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AnchorLiveEndCastRsp
             */
            public static fromObject(object: { [k: string]: any }): com.yy.recommend.domain.pb.AnchorLiveEndCastRsp

            /**
             * Creates a plain object from an AnchorLiveEndCastRsp message. Also converts values to other types if specified.
             * @param message AnchorLiveEndCastRsp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: com.yy.recommend.domain.pb.AnchorLiveEndCastRsp, options?: $protobuf.IConversionOptions): { [k: string]: any }

            /**
             * Converts this AnchorLiveEndCastRsp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any }
          }

          namespace AnchorLiveEndCastRsp {
            /** Type enum. */
            enum Type {
              none = 0,
              max = 5741,
              min = 8
            }
          }

          /** Properties of an Anchor. */
          interface IAnchor {
            /** Anchor uid */
            uid?: number | Long | null

            /** Anchor sid */
            sid?: number | Long | null

            /** Anchor ssid */
            ssid?: number | Long | null

            /** Anchor name */
            name?: string | null

            /** Anchor avatar */
            avatar?: string | null

            /** Anchor desc */
            desc?: string | null

            /** Anchor img */
            img?: string | null

            /** Anchor users */
            users?: number | null
          }

          /** Represents an Anchor. */
          class Anchor implements IAnchor {
            /**
             * Constructs a new Anchor.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.yy.recommend.domain.pb.IAnchor)

            /** Anchor uid. */
            public uid: number | Long

            /** Anchor sid. */
            public sid: number | Long

            /** Anchor ssid. */
            public ssid: number | Long

            /** Anchor name. */
            public name: string

            /** Anchor avatar. */
            public avatar: string

            /** Anchor desc. */
            public desc: string

            /** Anchor img. */
            public img: string

            /** Anchor users. */
            public users: number

            /**
             * Creates a new Anchor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Anchor instance
             */
            public static create(properties?: com.yy.recommend.domain.pb.IAnchor): com.yy.recommend.domain.pb.Anchor

            /**
             * Encodes the specified Anchor message. Does not implicitly {@link com.yy.recommend.domain.pb.Anchor.verify|verify} messages.
             * @param message Anchor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.yy.recommend.domain.pb.IAnchor, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Encodes the specified Anchor message, length delimited. Does not implicitly {@link com.yy.recommend.domain.pb.Anchor.verify|verify} messages.
             * @param message Anchor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.yy.recommend.domain.pb.IAnchor, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Decodes an Anchor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Anchor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.yy.recommend.domain.pb.Anchor

            /**
             * Decodes an Anchor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Anchor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.yy.recommend.domain.pb.Anchor

            /**
             * Verifies an Anchor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string | null

            /**
             * Creates an Anchor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Anchor
             */
            public static fromObject(object: { [k: string]: any }): com.yy.recommend.domain.pb.Anchor

            /**
             * Creates a plain object from an Anchor message. Also converts values to other types if specified.
             * @param message Anchor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: com.yy.recommend.domain.pb.Anchor, options?: $protobuf.IConversionOptions): { [k: string]: any }

            /**
             * Converts this Anchor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any }
          }

          /** Properties of an AnchorLiveEndCast. */
          interface IAnchorLiveEndCast {
            /** AnchorLiveEndCast uid */
            uid?: number | Long | null

            /** AnchorLiveEndCast name */
            name?: string | null

            /** AnchorLiveEndCast live */
            live?: com.yy.recommend.domain.pb.ILive | null
          }

          /** 主播下播后广播 */
          class AnchorLiveEndCast implements IAnchorLiveEndCast {
            /**
             * Constructs a new AnchorLiveEndCast.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.yy.recommend.domain.pb.IAnchorLiveEndCast)

            /** AnchorLiveEndCast uid. */
            public uid: number | Long

            /** AnchorLiveEndCast name. */
            public name: string

            /** AnchorLiveEndCast live. */
            public live?: com.yy.recommend.domain.pb.ILive | null

            /**
             * Creates a new AnchorLiveEndCast instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AnchorLiveEndCast instance
             */
            public static create(properties?: com.yy.recommend.domain.pb.IAnchorLiveEndCast): com.yy.recommend.domain.pb.AnchorLiveEndCast

            /**
             * Encodes the specified AnchorLiveEndCast message. Does not implicitly {@link com.yy.recommend.domain.pb.AnchorLiveEndCast.verify|verify} messages.
             * @param message AnchorLiveEndCast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.yy.recommend.domain.pb.IAnchorLiveEndCast, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Encodes the specified AnchorLiveEndCast message, length delimited. Does not implicitly {@link com.yy.recommend.domain.pb.AnchorLiveEndCast.verify|verify} messages.
             * @param message AnchorLiveEndCast message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.yy.recommend.domain.pb.IAnchorLiveEndCast, writer?: $protobuf.Writer): $protobuf.Writer

            /**
             * Decodes an AnchorLiveEndCast message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AnchorLiveEndCast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.yy.recommend.domain.pb.AnchorLiveEndCast

            /**
             * Decodes an AnchorLiveEndCast message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AnchorLiveEndCast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.yy.recommend.domain.pb.AnchorLiveEndCast

            /**
             * Verifies an AnchorLiveEndCast message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): string | null

            /**
             * Creates an AnchorLiveEndCast message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AnchorLiveEndCast
             */
            public static fromObject(object: { [k: string]: any }): com.yy.recommend.domain.pb.AnchorLiveEndCast

            /**
             * Creates a plain object from an AnchorLiveEndCast message. Also converts values to other types if specified.
             * @param message AnchorLiveEndCast
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: com.yy.recommend.domain.pb.AnchorLiveEndCast, options?: $protobuf.IConversionOptions): { [k: string]: any }

            /**
             * Converts this AnchorLiveEndCast to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any }
          }

          namespace AnchorLiveEndCast {
            /** Type enum. */
            enum Type {
              none = 0,
              max = 5741,
              min = 9
            }
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
          constructor(properties?: com.yy.recommend.common.IResult)

          /** Result code. */
          public code: number

          /** Result message. */
          public message: string

          /**
           * Creates a new Result instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Result instance
           */
          public static create(properties?: com.yy.recommend.common.IResult): com.yy.recommend.common.Result

          /**
           * Encodes the specified Result message. Does not implicitly {@link com.yy.recommend.common.Result.verify|verify} messages.
           * @param message Result message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(message: com.yy.recommend.common.IResult, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Encodes the specified Result message, length delimited. Does not implicitly {@link com.yy.recommend.common.Result.verify|verify} messages.
           * @param message Result message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(message: com.yy.recommend.common.IResult, writer?: $protobuf.Writer): $protobuf.Writer

          /**
           * Decodes a Result message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns Result
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): com.yy.recommend.common.Result

          /**
           * Decodes a Result message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns Result
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): com.yy.recommend.common.Result

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
          public static fromObject(object: { [k: string]: any }): com.yy.recommend.common.Result

          /**
           * Creates a plain object from a Result message. Also converts values to other types if specified.
           * @param message Result
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(message: com.yy.recommend.common.Result, options?: $protobuf.IConversionOptions): { [k: string]: any }

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
