/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@liaoguoguang
 */

import {BaseMap, MapConstructor} from '../../index'
import * as result from './pb'

type PResult = result.com.bdgamelive.pb.common.Result
interface Result extends BaseMap<PResult>, PResult {}
export declare var Result: MapConstructor<Result>
