/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@liaoguoguang
 */

import {MapProto} from '../../index'
import {default as root} from './pb/root.proto'

export const Result = (val) => {
  const result = new MapProto(root, 'com.bdgamelive.pb.common.Result')
  val && result.assign(val)
  return result
}
