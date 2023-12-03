/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@liaoguoguang
 */

import {PbProxy, $protobuf} from '../../../index'
const $root = ($protobuf.roots['default'] || ($protobuf.roots['default'] = new $protobuf.Root()))
.addJSON(PbProxy.addJSON({
  com: {
    nested: {
      bdgamelive: {
        nested: {
          pb: {
            nested: {
              anchorbase: {
                options: {
                  java_outer_classname: "AnchorInfo",
                  objc_class_prefix: "BDG"
                },
                nested: {
                  CheckAnchorCertMaskReq: {
                    fields: {},
                    nested: {
                      Type: {
                        values: {
                          none: 0,
                          max: 1001,
                          min: 1016
                        }
                      }
                    }
                  },
                  CheckAnchorCertMaskResp: {
                    fields: {
                      result: {
                        type: "com.bdgamelive.pb.common.Result",
                        id: 1
                      },
                      isCertMask: {
                        type: "bool",
                        id: 2
                      },
                      test64: {
                        type: "int64",
                        id: 3
                      },
                      teststr: {
                        type: "string",
                        id: 4
                      },
                      test32: {
                        type: "int32",
                        id: 5
                      },
                      testarr: {
                        rule: "repeated",
                        type: "string",
                        id: 6
                      }
                    },
                    nested: {
                      Type: {
                        values: {
                          none: 0,
                          max: 1001,
                          min: 1017
                        }
                      }
                    }
                  }
                }
              },
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
    }
  }
}, 'com.nested.bdgamelive.nested.pb.nested.common,com.nested.yy.nested.recommend.nested.common'))
export { $root as default };