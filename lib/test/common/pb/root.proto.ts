/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@liaoguoguang
 */

import {PbProxy, $protobuf} from '../../../index'
const $root = ($protobuf.roots['default'] || ($protobuf.roots['default'] = new $protobuf.Root()))
.addJSON(PbProxy.addJSON({
  com: {
    nested: {
      yy: {
        nested: {
          recommend: {
            nested: {
              common: {
                options: {
                  java_outer_classname: "Common",
                  objc_class_prefix: "BDG"
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
    }
  }
}, 'com.nested.bdgamelive.nested.pb.nested.common,com.nested.yy.nested.recommend.nested.common'))
export { $root as default };