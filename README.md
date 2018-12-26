# 多端web端示例工程


# 概述

本文档详细介绍多端，web端SDK的使用

# 系统兼容性说明


IE | Firefox | Chrome | Safari | Android Browser 
---|---|---|---| ---
10+ | 34+ | 31+ | 7.1 | 4.4+


# 下载Demo示例工程

[github地址](https://github.com/iuap-design/mtl-web-example)。
下载此工程，在浏览器中打开 index.html。 即可运行demo。

demo说明：

- 用户名密码模式使用 `liusz` `123456`。如需更改，需要修改对应的 `input` 内的值
- 绑定的设备编号使用 `AB324436-8BA9-4A2A-8F79-2EF86531E60F` 如需修改，在代码中修改 `bindClientIdentify` 变量的值。
- 绑定的用户名默认使用 `liusz` 如需修改，在代码中修改 `bindUserId` 变量的值

# 快速接入指南

### 第一步：导入SDK到用户工程

1. 使用静态文件
    
    [点击此处下载工程](https://github.com/iuap-design/mtl-web-example)。sdk文件夹内即是
    
2. 使用cdn文件
    
    开发版本：
    ```
    <script src="https://design.yonyoucloud.com/static/mtc/mtc-web-dev.js"></script>
    ```
    压缩版本：
    ```
    <script src="https://design.yonyoucloud.com/static/mtc/mtc-web.js"></script>
    ```
    
### 第二步：初始化SDK以及回调方法

> 引入sdk后会在window上添加变量 `mtcWeb`

```
let mtcWeb = new MTCWeb({
            config: {
                userId:''//用户名,
                password:''//密码,
                etp: ''//etpId企业id,
                app: ''//appId应用id,
                appSecret: ''//appSecret,
                diviceId:''//设备id,
                nickName:''//设备名称,
            },
            onLogin:res=>{
                //登陆成功回调
            },
            onOpened:res=>{
                //与服务器建立长连接回调
            },
            onMessage:res=>{
                //收到消息
            },
            onError:error=>{
                //与服务器连接错误
            },
            onClose:res=>{
                //长连接关闭回调
            },
    });

```

### 第三步：登陆用户

初始化sdk后，调用 `mtcWeb.login();` 方法即可登陆

### 第四步：使用sdk

```
//这里以获得设备绑定信息为例
mtcWeb.getBindDevices((res)=>{
   console.log('获得设备绑定信息',res);
})
```



# API 说明文档

## 初始化

```
let mtcWeb = new MTCWeb({
            config: {
                userId:''//用户名,
                password:''//密码,
                etp: ''//etpId企业id,
                app: ''//appId应用id,
                appSecret: ''//appSecret,
                diviceId:''//设备id,
                nickName:''//设备名称,
            },
            onLogin:res=>{
                //登陆成功回调
            },
            onOpened:res=>{
                //与服务器建立长连接回调
            },
            onMessage:res=>{
                //收到消息
            },
            onError:error=>{
                //与服务器连接错误
            },
            onClose:res=>{
                //长连接关闭回调
            },
    });
```


## 登陆

在sdk初始化时已经传入用户名密码参数，在这里不需要传入任何参数。登陆的回调在初始化时配置

```
mtcWeb.login();

```
## 获得我的设备信息

`mtcWeb.getMyInfo(option,callback)`

请求参数option

```

'startIndex":0,//从第几条开始
'pageSize":100//每页多少条
 
```

响应参数callback
```
[
   {
        "appId":"",//设备的appID
        "clientIdentify":"",//设备标示
        "deviceName":"",//设备名称
        "deviceModel":"",//设备类型
        "online":true//是否在线
    }
]
```


## 获得设备绑定信息
`getBindDevices(param,callback)`

请求参数param

```
'bindingType':2, //0被申请绑定，1申请绑定, 2 All
'clientIdentify':'',//设备标示
'startIndex":0,//从第几条开始
'pageSize":100//每页多少条
```

响应参数callback
```
{ 
  "binding":[//被绑定的设备
   {
        "userId":"",//用户名
        "appId":"",//appid
        "clientIdentify":"",//设备标示
        "deviceName":"",//设备名称
        "deviceModel":"",//设备类型
        "online":true,//是否在线
        "allPermissions",//是否拥有所有权限，0是，1否
        "fromAppId":,//被绑定的appId
        "permissions":["MTL_CMD_LOCATION", "MTL_CMD_CAMERA"],//拥有的权限。allPermissions为0时，此参数无用
    }
   ]
   "byBinding":[//绑定的设备
    {
        "userId":"",//用户名
        "appId":"",//appid
        "clientIdentify":"",//设备标示
        "deviceName":"",//设备名称
        "deviceModel":"",//设备类型
        "online":true,//是否在线
        "allPermissions",//是否拥有所有权限，0是，1否
        "fromAppId":,//被绑定的appId
        "permissions":["MTL_CMD_LOCATION", "MTL_CMD_CAMERA"],//拥有的权限。allPermissions为0时，此参数无用
    }
   ]
}
```

## 绑定设备

`mtcWeb.getBindDevices(param,callback,orderCallback)` `orderCallback`为设备响应之后的回调

请求参数param

```
{
    "appId":"被申请的APPID",
    "clientIdentify":"被申请设备ID",
    "userId":"被申请人ID",
    "commandParams":{
       "permissions":["MTL_CMD_LOCATION", "MTL_CMD_CAMERA"],//设备权限,见文档最后插件类型
       "allPermissions":0//是否申请所有权限，0是1否，0时permissions无效
    }
}
```

设备响应参数orderCallback
```
{
    result:'success'//是否申请成功， success为成功，否则返回失败信息
}
```

## 删除设备

`mtcWeb.delDevices(param,callback)`

登陆用户必须是fromUserId 或者 toUserId

请求参数param

```
{
    "clientIdentify":"",//目标设备id
    "appId":"",//目标设备appid
    "userId":""//目标设备userid
}
```

响应参数callback

```
{
    result:'success'//是否成功， success为成功，否则返回失败信息
}
```

## 发送命令

`mtcWeb.sendOrder(param,callback,orderCallback)` 

请求参数param
```
{
  appId:'',//目标设备appid
  clientIdentify:'',//目标设备id
  userId:'',//目标设备userId
  commandType:'',//命令类型,见文档最后插件类型
  response:0,
  commandParams:{},//命令参数
}

```

响应参数callback
```
{
    result:'success'//是否成功， success为成功，否则返回失败信息
}
```

设备响应参数orderCallback
```
{} //在有返回值时，有内容。 例如 定位 返回 {latitude: "40.066364", longitude: "116.230362"}
```

## 多端插件说明 

插件名称 | code | 参数commandParams | 返回值
---|---|---|---
定位插件 | MTL_CMD_LOCATION | `{type:'once'//once 定位一次，always 一直定位，stop停止定位,  interval:''//type为always时该参数有效，定位时间间隔，单位/秒，默认60s}` | 经纬度 `{latitude: "40.066364", longitude: "116.230362"}`|
相机插件 | MTL_CMD_CAMERA | `{'type':'photo'//photo 相册，camera相机，不传则弹出选择框}` |`{attachId: "",//附件id type:'image',url:''//图片地址}`|
打电话 | MTL_CMD_TELEPHONE | `{phoneNumber:''//电话号码}`|-|
