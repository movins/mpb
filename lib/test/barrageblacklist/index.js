/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@liaoguoguang
 */

import {URI, RootProto, MapProto} from '../../index'
import {default as root} from './pb/root.proto'

export const BarrageBlacklistItem = (val) => {
  const result = new MapProto(root, 'com.bdgamelive.pb.barrageblacklist.BarrageBlacklistItem')
  val && result.assign(val)
  return result
}


export const ListBarrageBlacklistReq = (val) => {
  const result = new RootProto(root, 'com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistReq', 1017, 101)
  val && result.assign(val)
  return result
}
ListBarrageBlacklistReq.minType = 101
ListBarrageBlacklistReq.maxType = 1017
ListBarrageBlacklistReq.uri = URI(1017, 101)
ListBarrageBlacklistReq.types = [1017, 101]
ListBarrageBlacklistReq.key = 'barrageblacklist.ListBarrageBlacklistReq'

export const ListBarrageBlacklistResp = (val) => {
  const result = new RootProto(root, 'com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistResp', 1017, 102)
  val && result.assign(val)
  return result
}
ListBarrageBlacklistResp.minType = 102
ListBarrageBlacklistResp.maxType = 1017
ListBarrageBlacklistResp.uri = URI(1017, 102)
ListBarrageBlacklistResp.types = [1017, 102]
ListBarrageBlacklistResp.key = 'barrageblacklist.ListBarrageBlacklistResp'

export const AddBarrageBlacklistReq = (val) => {
  const result = new RootProto(root, 'com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistReq', 1017, 103)
  val && result.assign(val)
  return result
}
AddBarrageBlacklistReq.minType = 103
AddBarrageBlacklistReq.maxType = 1017
AddBarrageBlacklistReq.uri = URI(1017, 103)
AddBarrageBlacklistReq.types = [1017, 103]
AddBarrageBlacklistReq.key = 'barrageblacklist.AddBarrageBlacklistReq'

export const AddBarrageBlacklistResp = (val) => {
  const result = new RootProto(root, 'com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistResp', 1017, 104)
  val && result.assign(val)
  return result
}
AddBarrageBlacklistResp.minType = 104
AddBarrageBlacklistResp.maxType = 1017
AddBarrageBlacklistResp.uri = URI(1017, 104)
AddBarrageBlacklistResp.types = [1017, 104]
AddBarrageBlacklistResp.key = 'barrageblacklist.AddBarrageBlacklistResp'

export const DeleteBarrageBlacklistReq = (val) => {
  const result = new RootProto(root, 'com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistReq', 1017, 105)
  val && result.assign(val)
  return result
}
DeleteBarrageBlacklistReq.minType = 105
DeleteBarrageBlacklistReq.maxType = 1017
DeleteBarrageBlacklistReq.uri = URI(1017, 105)
DeleteBarrageBlacklistReq.types = [1017, 105]
DeleteBarrageBlacklistReq.key = 'barrageblacklist.DeleteBarrageBlacklistReq'

export const DeleteBarrageBlacklistResp = (val) => {
  const result = new RootProto(root, 'com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistResp', 1017, 106)
  val && result.assign(val)
  return result
}
DeleteBarrageBlacklistResp.minType = 106
DeleteBarrageBlacklistResp.maxType = 1017
DeleteBarrageBlacklistResp.uri = URI(1017, 106)
DeleteBarrageBlacklistResp.types = [1017, 106]
DeleteBarrageBlacklistResp.key = 'barrageblacklist.DeleteBarrageBlacklistResp'

export const ClearBarrageBlacklistReq = (val) => {
  const result = new RootProto(root, 'com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistReq', 1017, 107)
  val && result.assign(val)
  return result
}
ClearBarrageBlacklistReq.minType = 107
ClearBarrageBlacklistReq.maxType = 1017
ClearBarrageBlacklistReq.uri = URI(1017, 107)
ClearBarrageBlacklistReq.types = [1017, 107]
ClearBarrageBlacklistReq.key = 'barrageblacklist.ClearBarrageBlacklistReq'

export const ClearBarrageBlacklistResp = (val) => {
  const result = new RootProto(root, 'com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistResp', 1017, 108)
  val && result.assign(val)
  return result
}
ClearBarrageBlacklistResp.minType = 108
ClearBarrageBlacklistResp.maxType = 1017
ClearBarrageBlacklistResp.uri = URI(1017, 108)
ClearBarrageBlacklistResp.types = [1017, 108]
ClearBarrageBlacklistResp.key = 'barrageblacklist.ClearBarrageBlacklistResp'
