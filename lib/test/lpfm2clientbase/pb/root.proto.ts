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
              lpfmclientbase: {
                options: {
                  java_outer_classname: "PbLpfmClientBaseClass"
                },
                nested: {
                  CommonRetCode: {
                    values: {
                      CRC_SUCCESS: 0,
                      CRC_UNAUTHORIZED: -1,
                      CRC_UNKNOWN_ERROR: -2,
                      CRC_SERVER_BUSY: -3,
                      CRC_INVALID_PARAMETER: -4,
                      CRC_VERSION_OLD: -5,
                      CRC_SERVICE_IP_DENY: -6,
                      CRC_NOT_SUPPORT_APPID: -7,
                      CRC_BZ_AUTH_FAIL_DEFAULT: 100
                    }
                  },
                  LivePublishRetCode: {
                    values: {
                      SUCCESS: 0,
                      LIVE_PUBLISH_TITLE_INVALID: 10001,
                      LIVE_PUBLISH_START_LIVE_NO_CHANNEL: 10002,
                      LIVE_PUBLISH_NOT_IN_LIVING: 10003,
                      LIVE_PUBLISH_ANCHOR_IN_PUNISH: 10004,
                      LIVE_PUBLISH_DATA_NOT_EXIST: 10005,
                      LIVE_PUBLISH_SID_DUPLICATE_LIVE: 10006,
                      LIVE_PUBLISH_AUTH_TOKEN_FAIL: 10100,
                      LIVE_PUBLISH_BATCH_SIZE_LIMIT: 10500,
                      LIVE_PUBLISH_AUDIT_FAIL: 10600,
                      LIVE_PUBLISH_AUTH_REAL_NAME_FAIL: 10101,
                      LIVE_PUBLISH_AUTH_NOT_BIND_PHONE: 10102
                    }
                  },
                  ChannelExpCode: {
                    values: {
                      CEC_SUCCESS: 0,
                      CEC_NO_BINDED_CHANNEL: 15001,
                      CEC_BINDCHANNEL_ERROR: 15002,
                      CEC_CREATE_SESSION_ERROR: 15003,
                      CEC_CHANNEL_ALREADY_BIND_ERROR: 15004
                    }
                  },
                  MediaType: {
                    values: {
                      MT_AV: 0,
                      MT_AUD: 1,
                      MT_VIDEO: 2,
                      MT_NONE: 3
                    }
                  },
                  LiveStatus: {
                    values: {
                      LS_LIVE_END: 0,
                      LS_LIVING: 1
                    }
                  },
                  PublishType: {
                    values: {
                      PT_COMMON: 0,
                      PT_INTERCONNECT: 1
                    }
                  },
                  ChannelType: {
                    values: {
                      NORMAL: 0,
                      OFFICIAL: 1,
                      GUILD: 2
                    }
                  },
                  ChannelBindType: {
                    values: {
                      CBT_BINDED: 0,
                      CBT_CAN_BIND: 1,
                      CBT_UNABLE_BIND: 2
                    }
                  },
                  EndLiveType: {
                    values: {
                      NONE: 0,
                      COMMON_LIVE_END: 1,
                      TIMEOUT_LIVE_END: 2,
                      FORCE_CUT_LIVE_END: 3,
                      PUNISH_LIVE_END: 4,
                      DUPLICATE_LIVE_END: 5,
                      CLOSE_BY_SERVER_LIVE_END: 6,
                      CLOSE_BY_AUDIT_LIVE_END: 7,
                      CLOSE_CHANNEL_LIVE_END: 8,
                      RESTEAT_BG_TIMEOUT_LIVE_END: 9,
                      REPLACE_CONN_END: 10,
                      CHANGE_ROOM_TYPE_END: 11,
                      INDEPENT_AUDIENCE_END: 12
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