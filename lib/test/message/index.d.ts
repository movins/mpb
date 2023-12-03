/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@liaoguoguang
 */

import {BaseMap, MapConstructor} from '../../index'
import * as message from './pb'

type PMsgReq = message.com.planet.pojo.MsgReq
interface MsgReq extends BaseMap<PMsgReq>, PMsgReq {}
export declare var MsgReq: MapConstructor<MsgReq>

type PMsgRsp = message.com.planet.pojo.MsgRsp
interface MsgRsp extends BaseMap<PMsgRsp>, PMsgRsp {}
export declare var MsgRsp: MapConstructor<MsgRsp>
