/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@liaoguoguang
 */
import * as roots from './roots'

export const kUris: Record<string, any> = {
  '1001:1016': roots.anchorinfo.CheckAnchorCertMaskReq,
  '1001:1017': roots.anchorinfo.CheckAnchorCertMaskResp,
  '1017:101': roots.barrageblacklist.ListBarrageBlacklistReq,
  '1017:102': roots.barrageblacklist.ListBarrageBlacklistResp,
  '1017:103': roots.barrageblacklist.AddBarrageBlacklistReq,
  '1017:104': roots.barrageblacklist.AddBarrageBlacklistResp,
  '1017:105': roots.barrageblacklist.DeleteBarrageBlacklistReq,
  '1017:106': roots.barrageblacklist.DeleteBarrageBlacklistResp,
  '1017:107': roots.barrageblacklist.ClearBarrageBlacklistReq,
  '1017:108': roots.barrageblacklist.ClearBarrageBlacklistResp,
  '5741:1': roots.liveendrecommend.LiveEndRecommendReq,
  '5741:2': roots.liveendrecommend.LiveEndRecommendRsp,
  '5741:3': roots.liveendrecommend.RecordLiveRecommendReq,
  '5741:4': roots.liveendrecommend.RecordLiveRecommendRsp,
  '5741:5': roots.liveendrecommend.AnchorLiveEndConfigReq,
  '5741:6': roots.liveendrecommend.AnchorLiveEndConfigRsp,
  '5741:7': roots.liveendrecommend.AnchorLiveEndCastReq,
  '5741:8': roots.liveendrecommend.AnchorLiveEndCastRsp,
  '5741:9': roots.liveendrecommend.AnchorLiveEndCast,
  // ====End=====
}

export * from './roots'
