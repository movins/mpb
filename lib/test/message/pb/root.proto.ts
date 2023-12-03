/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@liaoguoguang
 */

import {PbProxy, $protobuf} from '../../../index'
const $root = ($protobuf.roots['default'] || ($protobuf.roots['default'] = new $protobuf.Root()))
.addJSON(PbProxy.addJSON({
  com: {
    nested: {
      planet: {
        nested: {
          pojo: {
            options: {
              java_package: "com.planet.pojo",
              optimize_for: "LITE_RUNTIME"
            },
            nested: {
              MsgReq: {
                fields: {
                  alias: {
                    type: "string",
                    id: 1
                  },
                  opt: {
                    keyType: "string",
                    type: "string",
                    id: 3
                  },
                  req: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              MsgRsp: {
                fields: {
                  code: {
                    type: "int32",
                    id: 1
                  },
                  opt: {
                    keyType: "string",
                    type: "string",
                    id: 2
                  },
                  rsp: {
                    type: "bytes",
                    id: 3
                  },
                  message: {
                    type: "string",
                    id: 4
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}, ''))
export { $root as default };