/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@liaoguoguang
 */

import {BaseProto, ProtoConstructor, BaseMap, MapConstructor} from '../../index'
import * as liveendrecommend from './pb'

type PLive = liveendrecommend.com.yy.recommend.domain.pb.Live
interface Live extends BaseMap<PLive>, PLive {}
export declare var Live: MapConstructor<Live>

type PAnchor = liveendrecommend.com.yy.recommend.domain.pb.Anchor
interface Anchor extends BaseMap<PAnchor>, PAnchor {}
export declare var Anchor: MapConstructor<Anchor>


type PLiveEndRecommendReq = liveendrecommend.com.yy.recommend.domain.pb.LiveEndRecommendReq
interface LiveEndRecommendReq extends BaseProto<PLiveEndRecommendReq>, PLiveEndRecommendReq {}
export declare var LiveEndRecommendReq: ProtoConstructor<LiveEndRecommendReq>

type PLiveEndRecommendRsp = liveendrecommend.com.yy.recommend.domain.pb.LiveEndRecommendRsp
interface LiveEndRecommendRsp extends BaseProto<PLiveEndRecommendRsp>, PLiveEndRecommendRsp {}
export declare var LiveEndRecommendRsp: ProtoConstructor<LiveEndRecommendRsp>

type PRecordLiveRecommendReq = liveendrecommend.com.yy.recommend.domain.pb.RecordLiveRecommendReq
interface RecordLiveRecommendReq extends BaseProto<PRecordLiveRecommendReq>, PRecordLiveRecommendReq {}
export declare var RecordLiveRecommendReq: ProtoConstructor<RecordLiveRecommendReq>

type PRecordLiveRecommendRsp = liveendrecommend.com.yy.recommend.domain.pb.RecordLiveRecommendRsp
interface RecordLiveRecommendRsp extends BaseProto<PRecordLiveRecommendRsp>, PRecordLiveRecommendRsp {}
export declare var RecordLiveRecommendRsp: ProtoConstructor<RecordLiveRecommendRsp>

type PAnchorLiveEndConfigReq = liveendrecommend.com.yy.recommend.domain.pb.AnchorLiveEndConfigReq
interface AnchorLiveEndConfigReq extends BaseProto<PAnchorLiveEndConfigReq>, PAnchorLiveEndConfigReq {}
export declare var AnchorLiveEndConfigReq: ProtoConstructor<AnchorLiveEndConfigReq>

type PAnchorLiveEndConfigRsp = liveendrecommend.com.yy.recommend.domain.pb.AnchorLiveEndConfigRsp
interface AnchorLiveEndConfigRsp extends BaseProto<PAnchorLiveEndConfigRsp>, PAnchorLiveEndConfigRsp {}
export declare var AnchorLiveEndConfigRsp: ProtoConstructor<AnchorLiveEndConfigRsp>

type PAnchorLiveEndCastReq = liveendrecommend.com.yy.recommend.domain.pb.AnchorLiveEndCastReq
interface AnchorLiveEndCastReq extends BaseProto<PAnchorLiveEndCastReq>, PAnchorLiveEndCastReq {}
export declare var AnchorLiveEndCastReq: ProtoConstructor<AnchorLiveEndCastReq>

type PAnchorLiveEndCastRsp = liveendrecommend.com.yy.recommend.domain.pb.AnchorLiveEndCastRsp
interface AnchorLiveEndCastRsp extends BaseProto<PAnchorLiveEndCastRsp>, PAnchorLiveEndCastRsp {}
export declare var AnchorLiveEndCastRsp: ProtoConstructor<AnchorLiveEndCastRsp>

type PAnchorLiveEndCast = liveendrecommend.com.yy.recommend.domain.pb.AnchorLiveEndCast
interface AnchorLiveEndCast extends BaseProto<PAnchorLiveEndCast>, PAnchorLiveEndCast {}
export declare var AnchorLiveEndCast: ProtoConstructor<AnchorLiveEndCast>
