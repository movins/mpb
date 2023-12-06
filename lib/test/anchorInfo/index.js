/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@movinliao@163.com
 */

import {URI, RootProto} from '../../index'
import {default as root} from './pb/root.proto'

export class CheckAnchorCertMaskReq extends RootProto {
  constructor(val) {
    super(root, 'com.test.anchorbase.CheckAnchorCertMaskReq', 1001, 1016)
    this.assign(val)
  }

  static get maxType() {
    return 1001
  }

  static get minType() {
    return 1016
  }

  static get uri() {
    return URI(1001, 1016)
  }

  static get key() {
    return 'anchorinfo.CheckAnchorCertMaskReq'
  }

  static get types() {
    return [1001, 1016]
  }
}

export class CheckAnchorCertMaskResp extends RootProto {
  constructor(val) {
    super(root, 'com.test.anchorbase.CheckAnchorCertMaskResp', 1001, 1017)
    this.assign(val)
  }

  static get maxType() {
    return 1001
  }

  static get minType() {
    return 1017
  }

  static get uri() {
    return URI(1001, 1017)
  }

  static get key() {
    return 'anchorinfo.CheckAnchorCertMaskResp'
  }

  static get types() {
    return [1001, 1017]
  }
}
