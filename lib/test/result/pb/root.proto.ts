/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@movinliao@163.com
 */

import {PbProxy, $protobuf} from '../../../index'
const $root = ($protobuf.roots['default'] || ($protobuf.roots['default'] = new $protobuf.Root()))
.addJSON(PbProxy.addJSON({
  com: {
    nested: {
      test: {
        nested: {
          common: {
            options: {
              java_outer_classname: "CommonResult"
            },
            nested: {
              Result: {
                fields: {
                  code: {
                    type: "int32",
                    id: 1
                  },
                  message: {
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}, 'com.nested.test.nested.common'))
export { $root as default };