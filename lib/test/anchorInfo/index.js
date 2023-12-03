/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@liaoguoguang
 */

import {URI, RootProto} from '../../index'
import {default as root} from './pb/root.proto'

export const CheckAnchorCertMaskReq = (val) => {
  const result = new RootProto(root, 'com.test.anchorbase.CheckAnchorCertMaskReq', 1001, 1016)
  val && result.assign(val)
  return result
}
CheckAnchorCertMaskReq.minType = 1016
CheckAnchorCertMaskReq.maxType = 1001
CheckAnchorCertMaskReq.uri = URI(1001, 1016)
CheckAnchorCertMaskReq.types = [1001, 1016]
CheckAnchorCertMaskReq.key = 'anchorinfo.CheckAnchorCertMaskReq'

export const CheckAnchorCertMaskResp = (val) => {
  const result = new RootProto(root, 'com.test.anchorbase.CheckAnchorCertMaskResp', 1001, 1017)
  val && result.assign(val)
  return result
}
CheckAnchorCertMaskResp.minType = 1017
CheckAnchorCertMaskResp.maxType = 1001
CheckAnchorCertMaskResp.uri = URI(1001, 1017)
CheckAnchorCertMaskResp.types = [1001, 1017]
CheckAnchorCertMaskResp.key = 'anchorinfo.CheckAnchorCertMaskResp'
