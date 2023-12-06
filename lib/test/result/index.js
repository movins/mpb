/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@movinliao@163.com
 */

import {MapProto} from '../../index'
import {default as root} from './pb/root.proto'

export class Result extends MapProto {
  constructor(val) {
    super(root, 'com.test.common.Result')
    this.assign(val)
  }
}
