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
              domain: {
                nested: {
                  pb: {
                    options: {
                      objc_class_prefix: "BDG"
                    },
                    nested: {
                      LiveEndRecommendReq: {
                        fields: {},
                        nested: {
                          Type: {
                            values: {
                              none: 0,
                              max: 5741,
                              min: 1
                            }
                          }
                        }
                      },
                      LiveEndRecommendRsp: {
                        fields: {
                          result: {
                            type: "com.yy.recommend.common.Result",
                            id: 1
                          },
                          live: {
                            rule: "repeated",
                            type: "Live",
                            id: 2
                          }
                        },
                        nested: {
                          Type: {
                            values: {
                              none: 0,
                              max: 5741,
                              min: 2
                            }
                          }
                        }
                      },
                      Live: {
                        fields: {
                          uid: {
                            type: "int64",
                            id: 1
                          },
                          sid: {
                            type: "int64",
                            id: 2
                          },
                          ssid: {
                            type: "int64",
                            id: 3
                          },
                          img: {
                            type: "string",
                            id: 4
                          },
                          streamInfo: {
                            type: "string",
                            id: 5
                          },
                          users: {
                            type: "int32",
                            id: 6
                          },
                          tpl: {
                            type: "int64",
                            id: 7
                          },
                          token: {
                            type: "string",
                            id: 8
                          },
                          recSource: {
                            type: "string",
                            id: 9
                          },
                          name: {
                            type: "string",
                            id: 10
                          },
                          desc: {
                            type: "string",
                            id: 11
                          },
                          avatar: {
                            type: "string",
                            id: 12
                          }
                        }
                      },
                      RecordLiveRecommendReq: {
                        fields: {
                          anchorUid: {
                            type: "int64",
                            id: 1
                          }
                        },
                        nested: {
                          Type: {
                            values: {
                              none: 0,
                              max: 5741,
                              min: 3
                            }
                          }
                        }
                      },
                      RecordLiveRecommendRsp: {
                        fields: {
                          result: {
                            type: "Result",
                            id: 1
                          },
                          recordLive: {
                            type: "int32",
                            id: 2
                          },
                          inRecordTest: {
                            type: "int32",
                            id: 3
                          },
                          inJumpTest: {
                            type: "int32",
                            id: 4
                          },
                          showRecommendTime: {
                            type: "int32",
                            id: 5
                          },
                          live: {
                            rule: "repeated",
                            type: "Live",
                            id: 6
                          },
                          popTime: {
                            type: "int32",
                            id: 7
                          },
                          recommendStayTime: {
                            type: "int32",
                            id: 8
                          },
                          popStayTime: {
                            type: "int32",
                            id: 9
                          }
                        },
                        nested: {
                          Type: {
                            values: {
                              none: 0,
                              max: 5741,
                              min: 4
                            }
                          }
                        }
                      },
                      AnchorLiveEndConfigReq: {
                        fields: {},
                        nested: {
                          Type: {
                            values: {
                              none: 0,
                              max: 5741,
                              min: 5
                            }
                          }
                        }
                      },
                      AnchorLiveEndConfigRsp: {
                        fields: {
                          result: {
                            type: "com.yy.recommend.common.Result",
                            id: 1
                          },
                          anchor: {
                            rule: "repeated",
                            type: "Anchor",
                            id: 2
                          }
                        },
                        nested: {
                          Type: {
                            values: {
                              none: 0,
                              max: 5741,
                              min: 6
                            }
                          }
                        }
                      },
                      AnchorLiveEndCastReq: {
                        fields: {
                          toSid: {
                            type: "int64",
                            id: 1
                          }
                        },
                        nested: {
                          Type: {
                            values: {
                              none: 0,
                              max: 5741,
                              min: 7
                            }
                          }
                        }
                      },
                      AnchorLiveEndCastRsp: {
                        fields: {
                          result: {
                            type: "com.yy.recommend.common.Result",
                            id: 1
                          }
                        },
                        nested: {
                          Type: {
                            values: {
                              none: 0,
                              max: 5741,
                              min: 8
                            }
                          }
                        }
                      },
                      Anchor: {
                        fields: {
                          uid: {
                            type: "int64",
                            id: 1
                          },
                          sid: {
                            type: "int64",
                            id: 2
                          },
                          ssid: {
                            type: "int64",
                            id: 3
                          },
                          name: {
                            type: "string",
                            id: 4
                          },
                          avatar: {
                            type: "string",
                            id: 5
                          },
                          desc: {
                            type: "string",
                            id: 6
                          },
                          img: {
                            type: "string",
                            id: 7
                          },
                          users: {
                            type: "int32",
                            id: 8
                          }
                        }
                      },
                      AnchorLiveEndCast: {
                        fields: {
                          uid: {
                            type: "int64",
                            id: 1
                          },
                          name: {
                            type: "string",
                            id: 2
                          },
                          live: {
                            type: "Live",
                            id: 3
                          }
                        },
                        nested: {
                          Type: {
                            values: {
                              none: 0,
                              max: 5741,
                              min: 9
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
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