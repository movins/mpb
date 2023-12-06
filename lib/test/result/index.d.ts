/****
 * 该文件为脚本生成，请勿手动修改
 * 有问题请@movinliao@163.com
 */

import {BaseMap, MapConstructor} from '../../index'
import * as result from './pb'

type PResult = result.com.test.common.Result
interface Result extends BaseMap<PResult>, PResult {}
export declare var Result: MapConstructor<Result>
