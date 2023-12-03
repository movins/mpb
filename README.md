# ypb
用于pb转ts协议生成，可生成协议类，方便进行封解包

# pb协议如下：
```
// anchorInfo.proto
syntax = "proto3";
import "result.proto";
package com.bdgamelive.pb.anchorbase;
option java_outer_classname = "AnchorInfo";
option objc_class_prefix = "BDG";

message CheckAnchorCertMaskReq {
  enum Type {
    none = 0;
    max = 1001;
    min = 1016;
  }
}

message CheckAnchorCertMaskResp {
  enum Type {
    none = 0;
    max = 1001;
    min = 1017;
  }
  com.bdgamelive.pb.common.Result  result = 1; // 通用返回结果类
  bool isCertMask = 2; // true:已认证 false:未认证
  int64 test64 = 3;
  string teststr = 4;
  int32 test32 = 5;
  repeated string testarr = 6;
}

// result.proto
syntax = "proto3";
package com.bdgamelive.pb.common;
option java_outer_classname = "CommonResult";

/**
*   通用返回结果类
*/
message Result {
	int32 code = 1; // 返回码0 -> 成功,401 -> 没有权限,404 -> 查询的对象不存在,408 -> 请求超时,500 -> 未知错误  201~250 -> 业务自定义返回码
	string message = 2; // 返回消息
}

```
# 运行指令
1、在package.json中添加："proto": "node --trace-warnings node_modules/@yy/ypb/dist/scripts/index.js ts .\\build\\proto\\ .\\lib\\test\\ 'com.bdgamelive.pb.common'"
// 参数依次为：脚本路径、协议路径、生成路径、公共引用包路径（可多个，以|分割）

2、命令行运行：yarn proto
# 生成协议类
```
  /****
  * 该文件为脚本生成，请勿手动修改
  * 有问题请@liaoguoguang
  */

  import {URI, YpbRoot, IYpbRoot, IYpbProto, IYpbCreater} from '../../index'
  import {default as root} from './pb/root.proto'
  import * as anchorinfo from './pb'

  type CheckAnchorCertMaskReqPartial = Partial<anchorinfo.com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskReq>
  type ICheckAnchorCertMaskReq = IYpbRoot&CheckAnchorCertMaskReqPartial
  const CheckAnchorCertMaskReq = ((val?: CheckAnchorCertMaskReqPartial): ICheckAnchorCertMaskReq => {
    const result: ICheckAnchorCertMaskReq = new YpbRoot(root, 'com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskReq')
    val && result.assign(val)

    return result
  }) as any as IYpbProto<CheckAnchorCertMaskReqPartial, ICheckAnchorCertMaskReq>
  CheckAnchorCertMaskReq.minType = 1016
  CheckAnchorCertMaskReq.maxType = 1001
  CheckAnchorCertMaskReq.uri = URI(1001, 1016)
  CheckAnchorCertMaskReq.types = [1001, 1016]
  CheckAnchorCertMaskReq.key = 'anchorinfo.CheckAnchorCertMaskReq'

  export {CheckAnchorCertMaskReq}

  type CheckAnchorCertMaskRespPartial = Partial<anchorinfo.com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskResp>
  type ICheckAnchorCertMaskResp = IYpbRoot&CheckAnchorCertMaskRespPartial
  const CheckAnchorCertMaskResp = ((val?: CheckAnchorCertMaskRespPartial): ICheckAnchorCertMaskResp => {
    const result: ICheckAnchorCertMaskResp = new YpbRoot(root, 'com.bdgamelive.pb.anchorbase.CheckAnchorCertMaskResp')
    val && result.assign(val)

    return result
  }) as any as IYpbProto<CheckAnchorCertMaskRespPartial, ICheckAnchorCertMaskResp>
  CheckAnchorCertMaskResp.minType = 1017
  CheckAnchorCertMaskResp.maxType = 1001
  CheckAnchorCertMaskResp.uri = URI(1001, 1017)
  CheckAnchorCertMaskResp.types = [1001, 1017]
  CheckAnchorCertMaskResp.key = 'anchorinfo.CheckAnchorCertMaskResp'

  export {CheckAnchorCertMaskResp}

```
# 封包
```
  import {anchorInfo} from '../test'
  const req = new anchorInfo.CheckAnchorCertMaskResp({isCertMask: true, test64: 8223372036854775800})
  // req.test64 = 8223372036854775800
  // req.teststr = '测试实施是实施是上市是是是'
  req.test32 = 7222
  req.testarr = ['撒范德萨asdf', '萨法asd发送']

  // 生成二进制
  const bytes = req.marshal({teststr: '测试实施是实施是上市是是是'})
```
# 解包
```
  const rsp = new anchorInfo.CheckAnchorCertMaskResp()
  rsp.unmarshal(bytes)
  console.info('ypb unmarshal===bytes', rsp)

  // 也可以使用begin、end进行下沉解包，这样可以对性能进行优化
```
# remark
让pb 协议在ts项目的接入变得简单，有问题@liaoguoguang
