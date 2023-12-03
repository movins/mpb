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
              barrageblacklist: {
                options: {
                  java_outer_classname: "BarrageBlacklist",
                  objc_class_prefix: "BDG"
                },
                nested: {
                  BarrageBlacklistItem: {
                    fields: {
                      keyId: {
                        type: "int64",
                        id: 1
                      },
                      keyword: {
                        type: "string",
                        id: 2
                      },
                      createTime: {
                        type: "int64",
                        id: 3
                      }
                    }
                  },
                  ListBarrageBlacklistReq: {
                    fields: {
                      offset: {
                        type: "int32",
                        id: 1
                      },
                      pageSize: {
                        type: "int32",
                        id: 2
                      }
                    },
                    nested: {
                      Type: {
                        values: {
                          none: 0,
                          max: 1017,
                          min: 101
                        }
                      }
                    }
                  },
                  ListBarrageBlacklistResp: {
                    fields: {
                      result: {
                        type: "com.bdgamelive.pb.common.Result",
                        id: 1
                      },
                      items: {
                        rule: "repeated",
                        type: "BarrageBlacklistItem",
                        id: 2
                      },
                      hasMore: {
                        type: "bool",
                        id: 3
                      },
                      total: {
                        type: "int32",
                        id: 4
                      },
                      maxCount: {
                        type: "int32",
                        id: 5
                      }
                    },
                    nested: {
                      Type: {
                        values: {
                          none: 0,
                          max: 1017,
                          min: 102
                        }
                      }
                    }
                  },
                  AddBarrageBlacklistReq: {
                    fields: {
                      keyword: {
                        type: "string",
                        id: 1
                      }
                    },
                    nested: {
                      Type: {
                        values: {
                          none: 0,
                          max: 1017,
                          min: 103
                        }
                      }
                    }
                  },
                  AddBarrageBlacklistResp: {
                    fields: {
                      result: {
                        type: "com.bdgamelive.pb.common.Result",
                        id: 1
                      }
                    },
                    nested: {
                      Type: {
                        values: {
                          none: 0,
                          max: 1017,
                          min: 104
                        }
                      }
                    }
                  },
                  DeleteBarrageBlacklistReq: {
                    fields: {
                      keyId: {
                        type: "int64",
                        id: 1
                      }
                    },
                    nested: {
                      Type: {
                        values: {
                          none: 0,
                          max: 1017,
                          min: 105
                        }
                      }
                    }
                  },
                  DeleteBarrageBlacklistResp: {
                    fields: {
                      result: {
                        type: "com.bdgamelive.pb.common.Result",
                        id: 1
                      }
                    },
                    nested: {
                      Type: {
                        values: {
                          none: 0,
                          max: 1017,
                          min: 106
                        }
                      }
                    }
                  },
                  ClearBarrageBlacklistReq: {
                    fields: {},
                    nested: {
                      Type: {
                        values: {
                          none: 0,
                          max: 1017,
                          min: 107
                        }
                      }
                    }
                  },
                  ClearBarrageBlacklistResp: {
                    fields: {
                      result: {
                        type: "com.bdgamelive.pb.common.Result",
                        id: 1
                      }
                    },
                    nested: {
                      Type: {
                        values: {
                          none: 0,
                          max: 1017,
                          min: 108
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