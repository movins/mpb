/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@liaoguoguang
 */

import {BaseProto, ProtoConstructor, BaseMap, MapConstructor} from '../../index'
import * as barrageblacklist from './pb'

type PBarrageBlacklistItem = barrageblacklist.com.bdgamelive.pb.barrageblacklist.BarrageBlacklistItem
interface BarrageBlacklistItem extends BaseMap<PBarrageBlacklistItem>, PBarrageBlacklistItem {}
export declare var BarrageBlacklistItem: MapConstructor<BarrageBlacklistItem>


type PListBarrageBlacklistReq = barrageblacklist.com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistReq
interface ListBarrageBlacklistReq extends BaseProto<PListBarrageBlacklistReq>, PListBarrageBlacklistReq {}
export declare var ListBarrageBlacklistReq: ProtoConstructor<ListBarrageBlacklistReq>

type PListBarrageBlacklistResp = barrageblacklist.com.bdgamelive.pb.barrageblacklist.ListBarrageBlacklistResp
interface ListBarrageBlacklistResp extends BaseProto<PListBarrageBlacklistResp>, PListBarrageBlacklistResp {}
export declare var ListBarrageBlacklistResp: ProtoConstructor<ListBarrageBlacklistResp>

type PAddBarrageBlacklistReq = barrageblacklist.com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistReq
interface AddBarrageBlacklistReq extends BaseProto<PAddBarrageBlacklistReq>, PAddBarrageBlacklistReq {}
export declare var AddBarrageBlacklistReq: ProtoConstructor<AddBarrageBlacklistReq>

type PAddBarrageBlacklistResp = barrageblacklist.com.bdgamelive.pb.barrageblacklist.AddBarrageBlacklistResp
interface AddBarrageBlacklistResp extends BaseProto<PAddBarrageBlacklistResp>, PAddBarrageBlacklistResp {}
export declare var AddBarrageBlacklistResp: ProtoConstructor<AddBarrageBlacklistResp>

type PDeleteBarrageBlacklistReq = barrageblacklist.com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistReq
interface DeleteBarrageBlacklistReq extends BaseProto<PDeleteBarrageBlacklistReq>, PDeleteBarrageBlacklistReq {}
export declare var DeleteBarrageBlacklistReq: ProtoConstructor<DeleteBarrageBlacklistReq>

type PDeleteBarrageBlacklistResp = barrageblacklist.com.bdgamelive.pb.barrageblacklist.DeleteBarrageBlacklistResp
interface DeleteBarrageBlacklistResp extends BaseProto<PDeleteBarrageBlacklistResp>, PDeleteBarrageBlacklistResp {}
export declare var DeleteBarrageBlacklistResp: ProtoConstructor<DeleteBarrageBlacklistResp>

type PClearBarrageBlacklistReq = barrageblacklist.com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistReq
interface ClearBarrageBlacklistReq extends BaseProto<PClearBarrageBlacklistReq>, PClearBarrageBlacklistReq {}
export declare var ClearBarrageBlacklistReq: ProtoConstructor<ClearBarrageBlacklistReq>

type PClearBarrageBlacklistResp = barrageblacklist.com.bdgamelive.pb.barrageblacklist.ClearBarrageBlacklistResp
interface ClearBarrageBlacklistResp extends BaseProto<PClearBarrageBlacklistResp>, PClearBarrageBlacklistResp {}
export declare var ClearBarrageBlacklistResp: ProtoConstructor<ClearBarrageBlacklistResp>
