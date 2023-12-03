/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@liaoguoguang
 */

import {URI, RootProto, MapProto} from '../../index'
import {default as root} from './pb/root.proto'

export const Live = (val) => {
  const result = new MapProto(root, 'com.yy.recommend.domain.pb.Live')
  val && result.assign(val)
  return result
}

export const Anchor = (val) => {
  const result = new MapProto(root, 'com.yy.recommend.domain.pb.Anchor')
  val && result.assign(val)
  return result
}


export const LiveEndRecommendReq = (val) => {
  const result = new RootProto(root, 'com.yy.recommend.domain.pb.LiveEndRecommendReq', 5741, 1)
  val && result.assign(val)
  return result
}
LiveEndRecommendReq.minType = 1
LiveEndRecommendReq.maxType = 5741
LiveEndRecommendReq.uri = URI(5741, 1)
LiveEndRecommendReq.types = [5741, 1]
LiveEndRecommendReq.key = 'liveendrecommend.LiveEndRecommendReq'

export const LiveEndRecommendRsp = (val) => {
  const result = new RootProto(root, 'com.yy.recommend.domain.pb.LiveEndRecommendRsp', 5741, 2)
  val && result.assign(val)
  return result
}
LiveEndRecommendRsp.minType = 2
LiveEndRecommendRsp.maxType = 5741
LiveEndRecommendRsp.uri = URI(5741, 2)
LiveEndRecommendRsp.types = [5741, 2]
LiveEndRecommendRsp.key = 'liveendrecommend.LiveEndRecommendRsp'

export const RecordLiveRecommendReq = (val) => {
  const result = new RootProto(root, 'com.yy.recommend.domain.pb.RecordLiveRecommendReq', 5741, 3)
  val && result.assign(val)
  return result
}
RecordLiveRecommendReq.minType = 3
RecordLiveRecommendReq.maxType = 5741
RecordLiveRecommendReq.uri = URI(5741, 3)
RecordLiveRecommendReq.types = [5741, 3]
RecordLiveRecommendReq.key = 'liveendrecommend.RecordLiveRecommendReq'

export const RecordLiveRecommendRsp = (val) => {
  const result = new RootProto(root, 'com.yy.recommend.domain.pb.RecordLiveRecommendRsp', 5741, 4)
  val && result.assign(val)
  return result
}
RecordLiveRecommendRsp.minType = 4
RecordLiveRecommendRsp.maxType = 5741
RecordLiveRecommendRsp.uri = URI(5741, 4)
RecordLiveRecommendRsp.types = [5741, 4]
RecordLiveRecommendRsp.key = 'liveendrecommend.RecordLiveRecommendRsp'

export const AnchorLiveEndConfigReq = (val) => {
  const result = new RootProto(root, 'com.yy.recommend.domain.pb.AnchorLiveEndConfigReq', 5741, 5)
  val && result.assign(val)
  return result
}
AnchorLiveEndConfigReq.minType = 5
AnchorLiveEndConfigReq.maxType = 5741
AnchorLiveEndConfigReq.uri = URI(5741, 5)
AnchorLiveEndConfigReq.types = [5741, 5]
AnchorLiveEndConfigReq.key = 'liveendrecommend.AnchorLiveEndConfigReq'

export const AnchorLiveEndConfigRsp = (val) => {
  const result = new RootProto(root, 'com.yy.recommend.domain.pb.AnchorLiveEndConfigRsp', 5741, 6)
  val && result.assign(val)
  return result
}
AnchorLiveEndConfigRsp.minType = 6
AnchorLiveEndConfigRsp.maxType = 5741
AnchorLiveEndConfigRsp.uri = URI(5741, 6)
AnchorLiveEndConfigRsp.types = [5741, 6]
AnchorLiveEndConfigRsp.key = 'liveendrecommend.AnchorLiveEndConfigRsp'

export const AnchorLiveEndCastReq = (val) => {
  const result = new RootProto(root, 'com.yy.recommend.domain.pb.AnchorLiveEndCastReq', 5741, 7)
  val && result.assign(val)
  return result
}
AnchorLiveEndCastReq.minType = 7
AnchorLiveEndCastReq.maxType = 5741
AnchorLiveEndCastReq.uri = URI(5741, 7)
AnchorLiveEndCastReq.types = [5741, 7]
AnchorLiveEndCastReq.key = 'liveendrecommend.AnchorLiveEndCastReq'

export const AnchorLiveEndCastRsp = (val) => {
  const result = new RootProto(root, 'com.yy.recommend.domain.pb.AnchorLiveEndCastRsp', 5741, 8)
  val && result.assign(val)
  return result
}
AnchorLiveEndCastRsp.minType = 8
AnchorLiveEndCastRsp.maxType = 5741
AnchorLiveEndCastRsp.uri = URI(5741, 8)
AnchorLiveEndCastRsp.types = [5741, 8]
AnchorLiveEndCastRsp.key = 'liveendrecommend.AnchorLiveEndCastRsp'

export const AnchorLiveEndCast = (val) => {
  const result = new RootProto(root, 'com.yy.recommend.domain.pb.AnchorLiveEndCast', 5741, 9)
  val && result.assign(val)
  return result
}
AnchorLiveEndCast.minType = 9
AnchorLiveEndCast.maxType = 5741
AnchorLiveEndCast.uri = URI(5741, 9)
AnchorLiveEndCast.types = [5741, 9]
AnchorLiveEndCast.key = 'liveendrecommend.AnchorLiveEndCast'
