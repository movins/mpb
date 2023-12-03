/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@liaoguoguang
 */

import {MapProto} from '../../index'
import {default as root} from './pb/root.proto'

export const MsgReq = (val) => {
  const result = new MapProto(root, 'com.planet.pojo.MsgReq')
  val && result.assign(val)
  return result
}

export const MsgRsp = (val) => {
  const result = new MapProto(root, 'com.planet.pojo.MsgRsp')
  val && result.assign(val)
  return result
}
