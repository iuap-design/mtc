/*!
 * 
 *           description:  mtc-web SDK
 *           author: Yonyou FED Team
 *           date: 2018-12-25
 *           version: V0.0.1
 *           file: mtc-web.js
 *       
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";var r=n(6),o=n(5),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function u(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===i.call(e)}function a(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return u(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:a,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)a(arguments[r],n);return t},extend:function(e,t,n){return a(t,function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.jsonToByte=t.byteToJson=t.processError=t.processData=void 0;var r,o=n(2);(r=o)&&r.__esModule;t.processData=function(e){if(200==e.status){if("success"==e.data.result){var t=e.data.data;return t=t||{result:"success"}}var n=e.data.data;return n=n||{result:"fail",errorMsg:e.data.errorMsg||"接口处理失败"}}console.log("接口请求错误",e)},t.processError=function(e){throw new Error(e)};var i=function(e,t){var n=new Array(t),r=t;do{n[--r]=255&e,e>>=8}while(r);return n};t.byteToJson=function(e){for(var t=e.data,n=new DataView(t),r=new Array(13),o="",i=0;i<t.byteLength;i++)i<r.length?r[i]=n.getUint8(i):o+=String.fromCharCode(n.getUint8(i));var s=function(e){for(var t=0,n=0;n<e.length;n++)n>0&&(t*=256),t+=e[n];return t}(r.slice(1,3)),u=JSON.parse(o);return console.log("接收报文:",u,s),{json:u,op:s}},t.jsonToByte=function(e,t){var n=JSON.stringify(e);console.log("发送报文:",e);for(var r=function(e){for(var t=new Array,n=0,r=0;r<e.length;r++){var o=encodeURI(e[r]);if(1==o.length)t[n++]=o.charCodeAt(0);else for(var i=o.split("%"),s=1;s<i.length;s++)t[n++]=parseInt("0x"+i[s])}return t}(n),o=i(t,2),s=i(r.length,4),u=[0].concat(o).concat(s).concat([1,0,0,0,0,0]).concat(r),c=new ArrayBuffer(u.length),a=new DataView(c),f=0;f<u.length;f++)a.setUint8(f,u[f]);return a.buffer}},function(e,t,n){e.exports=n(18)},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(21),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,c={adapter:("undefined"!=typeof XMLHttpRequest?u=n(7):void 0!==t&&(u=n(7)),u),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){c.headers[e]={}}),r.forEach(["post","put","patch"],function(e){c.headers[e]=r.merge(i)}),e.exports=c}).call(this,n(20))},function(e,t){var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=n},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0),o=n(22),i=n(24),s=n(25),u=n(26),c=n(8),a="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(27);e.exports=function(e){return new Promise(function(t,f){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var h=new XMLHttpRequest,d="onreadystatechange",y=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in h||u(e.url)||(h=new window.XDomainRequest,d="onload",y=!0,h.onprogress=function(){},h.ontimeout=function(){}),e.auth){var v=e.auth.username||"",g=e.auth.password||"";p.Authorization="Basic "+a(v+":"+g)}if(h.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h[d]=function(){if(h&&(4===h.readyState||y)&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in h?s(h.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?h.response:h.responseText,status:1223===h.status?204:h.status,statusText:1223===h.status?"No Content":h.statusText,headers:n,config:e,request:h};o(t,f,r),h=null}},h.onerror=function(){f(c("Network Error",e,null,h)),h=null},h.ontimeout=function(){f(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var m=n(28),b=(e.withCredentials||u(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;b&&(p[e.xsrfHeaderName]=b)}if("setRequestHeader"in h&&r.forEach(p,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:h.setRequestHeader(t,e)}),e.withCredentials&&(h.withCredentials=!0),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){h&&(h.abort(),f(e),h=null)}),void 0===l&&(l=null),h.send(l)})}},function(e,t,n){"use strict";var r=n(23);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";var r,o=n(12),i=(r=o)&&r.__esModule?r:{default:r};window.MTCWeb=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(13),i=(r=o)&&r.__esModule?r:{default:r};t.default=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.login=function(){n.core.login(n.option)},this.getMyInfo=function(e,t){n.core.sendOrders(2,e,t)},this.getBindDevices=function(e,t){n.core.sendOrders(1,e,t)},this.updateMyInfo=function(e,t){},this.bindDevices=function(e,t,r){n.core.sendOrders(3,e,t,r)},this.delDevices=function(e,t){n.core.sendOrders(4,e,t)},this.sendOrder=function(e,t,r){n.core.sendOrders(6,e,t,r)},this.close=function(){},this.option=t,this.core=new i.default(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(14)),o=a(n(15)),i=a(n(17)),s=(a(n(2)),a(n(37))),u=n(1),c=a(n(40));function a(e){return e&&e.__esModule?e:{default:e}}var f=function(){var e=this;this.getPassword=function(){var t=e.services,n=t.app,r=t.etp,i=t.appSecret,s=t.getPasswordUrl,u=t.userId,a={userid:u,cipher:(0,o.default)(r+n+u+i)};(0,c.default)({url:s,method:"post",data:a,callback:function(t){e.userPwd=t.userPwd,e.getToken()}})},this.getToken=function(){var t=e.services,n=t.app,r=t.etp,i=t.getTokenUrl,s=t.userId,u=t.password,a={userid:s,cipher:(0,o.default)(r+n+s+e.userPwd),passWord:(0,o.default)(u).toUpperCase()};(0,c.default)({url:i,method:"post",data:a,callback:function(t){e.token=t.token,e.expiration=t.expiration,e.authentic()}})},this.authentic=function(){var t=e.services,n=t.app,r=t.etp,o=t.version,i={usr:t.userId+"."+n+"."+r,atk:e.token,br:o,isAuxiliaryDevice:!0,deviceIdentify:e.deviceId,phoneModel:"pc",deviceName:null};e.send(i,e.services.packetOpCode.auth)},this.login=function(){e.getPassword()},this.onClose=function(){e.login()},this.send=function(t,n){e.socket.send((0,u.jsonToByte)(t,n))},this.sendOrders=function(t,n,r,o){var i=e.services,u=i.app,a=i.userId,f=i.getBindDevicesUrl,l=i.getMyInfoUrl,p=i.applyDevicesUrl,h=i.deleteDevicesUrl,d=i.sendOrderUrl,y={url:"",method:"get",data:{},params:{token:e.token},headers:{Authorization:e.token},callback:function(e){r(e)}};switch(t){case 1:y.params=Object.assign({bindingType:2,clientIdentify:"",startIndex:0,pageSize:100,token:e.token},n),y.url=f;break;case 2:y.params=Object.assign({startIndex:0,pageSize:100,token:e.token},n),y.url=l;break;case 3:y.url=p,y.method="post";var v=(0,s.default)();e.orderCBS[v]=o,y.data={fromClientIdentify:e.deviceId,toAppId:n.appId,toClientIdentify:n.clientIdentify,toUserId:n.userId,commandId:v,commandParams:{permissions:n.permissions,allPermissions:n.allPermissions}};break;case 4:y.url=h,y.method="delete",y.data={fromUserId:a,fromAppId:u,fromClientIdentify:e.deviceId,toClientIdentify:n.clientIdentify,toAppId:n.appId,toUserId:n.userId,token:e.token};break;case 5:y.data={fromClientIdentify:"设备ID",sourceCommandId:"源命令ID",commandId:"命令ID",toAppId:"被申请的APPID",toClientIdentify:"被申请设备ID",toUserId:"被申请人ID",commandParams:{permissions:["001","002"],allPermissions:0,result:0}};break;case 6:var g=(0,s.default)();e.orderCBS[g]=o,y.url=d,y.method="post",y.data={fromClientIdentify:e.deviceId,toAppId:n.appId,toClientIdentify:n.clientIdentify,toUserId:n.userId,commandId:g,commandType:n.commandType,response:0,commandParams:n.commandParams}}(0,c.default)(y,r)},this.onMessage=function(t,n){if(1==n)e.option.onLogin(t);else if("commandResponse"==t.category){var r=t.attributes.sourceCommandId,o=t.attributes.commandParams;if(0==o.code){var i=o.data;i&&"image"==i.type&&(i.url=e.services.imgUrl(i.attachId,e.token)),i=i||{result:"success"},e.orderCBS[r]&&e.orderCBS[r](i)}else{var s=o.data;s=s||{result:"success",errorMsg:o.message||"命令响应失败"}}}else e.option.onMessage(t)}};t.default=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f.call(this),this.services=(0,r.default)(t.config),this.token=null;var n={};for(var o in t)n[o]=t[o];n.onMessage=this.onMessage,n.onClose=this.onClose;var s=this.services,u=s.websocketUrl,c=s.websocketProtocols;this.socket=new i.default(u,c,n),this.deviceId=this.services.deviceId,this.nickName=this.services.nickName,this.option=t,this.callback=null,this.timer=null,this.orderCBS={}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o={auth:1,message:4112,online:4432,receipt:4098,disconnect:4,dataError:16384,connectError:16640};t.default=function(e){var t=e=Object.assign({userId:"liusz",password:"123456",wssServer:"im-pre.yyuap.com",server:"im-pre.yyuap.com",port:5225,etp:"yonyou",app:"mttest02",appSecret:"e92a0a36e68e4e21bf0c78aecc4ebe79",deviceId:"9d1c41b8-bd11-4fe5-52fa-bdd518c68f15",nickName:"nickName",version:"web-v2.6"},e),n=t.server,i=t.etp,s=t.app,u=t.userId,c=t.wssServer,a=t.port;return r({getPasswordUrl:"https://"+n+"/sysadmin/rest/multiterminal/"+i+"/"+s+"/auth/app",getTokenUrl:"https://"+n+"/sysadmin/rest/multiterminal/"+i+"/"+s+"/auth/user",getBindDevicesUrl:"https://"+n+"/sysadmin/rest/user/"+i+"/"+s+"/"+u+"/multiterminals/devices",getMyInfoUrl:"https://"+n+"/sysadmin/rest/user/"+i+"/"+s+"/"+u+"/multiterminals/mydevices",applyDevicesUrl:"https://"+n+"/sysadmin/rest/user/"+i+"/"+s+"/"+u+"/multiterminals/permissions/apply",processDevicesUrl:"https://"+n+"/sysadmin/rest/user/"+i+"/"+s+"/"+u+"/multiterminals/permissions/process",deleteDevicesUrl:"https://"+n+"/sysadmin/rest/user/"+i+"/"+s+"/"+u+"/multiterminals/devices/bindingDevices",sendOrderUrl:"https://"+n+"/sysadmin/rest/user/"+i+"/"+s+"/"+u+"/multiterminals/command",websocketUrl:"wss://"+c+":"+a,websocketProtocols:"xmpp",imgUrl:function(e,t){return"https://"+n+"/sysadmin/rest/resource/"+i+"/"+s+"/download?attachId="+e+"&token="+t+"&downloader="+u+"."+s+"."+i}},e,{packetOpCode:r({},o)})}},function(e,t,n){var r,o,i,s,u;r=n(16),o=n(4).utf8,i=n(5),s=n(4).bin,(u=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?s.stringToBytes(e):o.stringToBytes(e):i(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var n=r.bytesToWords(e),c=8*e.length,a=1732584193,f=-271733879,l=-1732584194,p=271733878,h=0;h<n.length;h++)n[h]=16711935&(n[h]<<8|n[h]>>>24)|4278255360&(n[h]<<24|n[h]>>>8);n[c>>>5]|=128<<c%32,n[14+(c+64>>>9<<4)]=c;var d=u._ff,y=u._gg,v=u._hh,g=u._ii;for(h=0;h<n.length;h+=16){var m=a,b=f,w=l,_=p;a=d(a,f,l,p,n[h+0],7,-680876936),p=d(p,a,f,l,n[h+1],12,-389564586),l=d(l,p,a,f,n[h+2],17,606105819),f=d(f,l,p,a,n[h+3],22,-1044525330),a=d(a,f,l,p,n[h+4],7,-176418897),p=d(p,a,f,l,n[h+5],12,1200080426),l=d(l,p,a,f,n[h+6],17,-1473231341),f=d(f,l,p,a,n[h+7],22,-45705983),a=d(a,f,l,p,n[h+8],7,1770035416),p=d(p,a,f,l,n[h+9],12,-1958414417),l=d(l,p,a,f,n[h+10],17,-42063),f=d(f,l,p,a,n[h+11],22,-1990404162),a=d(a,f,l,p,n[h+12],7,1804603682),p=d(p,a,f,l,n[h+13],12,-40341101),l=d(l,p,a,f,n[h+14],17,-1502002290),a=y(a,f=d(f,l,p,a,n[h+15],22,1236535329),l,p,n[h+1],5,-165796510),p=y(p,a,f,l,n[h+6],9,-1069501632),l=y(l,p,a,f,n[h+11],14,643717713),f=y(f,l,p,a,n[h+0],20,-373897302),a=y(a,f,l,p,n[h+5],5,-701558691),p=y(p,a,f,l,n[h+10],9,38016083),l=y(l,p,a,f,n[h+15],14,-660478335),f=y(f,l,p,a,n[h+4],20,-405537848),a=y(a,f,l,p,n[h+9],5,568446438),p=y(p,a,f,l,n[h+14],9,-1019803690),l=y(l,p,a,f,n[h+3],14,-187363961),f=y(f,l,p,a,n[h+8],20,1163531501),a=y(a,f,l,p,n[h+13],5,-1444681467),p=y(p,a,f,l,n[h+2],9,-51403784),l=y(l,p,a,f,n[h+7],14,1735328473),a=v(a,f=y(f,l,p,a,n[h+12],20,-1926607734),l,p,n[h+5],4,-378558),p=v(p,a,f,l,n[h+8],11,-2022574463),l=v(l,p,a,f,n[h+11],16,1839030562),f=v(f,l,p,a,n[h+14],23,-35309556),a=v(a,f,l,p,n[h+1],4,-1530992060),p=v(p,a,f,l,n[h+4],11,1272893353),l=v(l,p,a,f,n[h+7],16,-155497632),f=v(f,l,p,a,n[h+10],23,-1094730640),a=v(a,f,l,p,n[h+13],4,681279174),p=v(p,a,f,l,n[h+0],11,-358537222),l=v(l,p,a,f,n[h+3],16,-722521979),f=v(f,l,p,a,n[h+6],23,76029189),a=v(a,f,l,p,n[h+9],4,-640364487),p=v(p,a,f,l,n[h+12],11,-421815835),l=v(l,p,a,f,n[h+15],16,530742520),a=g(a,f=v(f,l,p,a,n[h+2],23,-995338651),l,p,n[h+0],6,-198630844),p=g(p,a,f,l,n[h+7],10,1126891415),l=g(l,p,a,f,n[h+14],15,-1416354905),f=g(f,l,p,a,n[h+5],21,-57434055),a=g(a,f,l,p,n[h+12],6,1700485571),p=g(p,a,f,l,n[h+3],10,-1894986606),l=g(l,p,a,f,n[h+10],15,-1051523),f=g(f,l,p,a,n[h+1],21,-2054922799),a=g(a,f,l,p,n[h+8],6,1873313359),p=g(p,a,f,l,n[h+15],10,-30611744),l=g(l,p,a,f,n[h+6],15,-1560198380),f=g(f,l,p,a,n[h+13],21,1309151649),a=g(a,f,l,p,n[h+4],6,-145523070),p=g(p,a,f,l,n[h+11],10,-1120210379),l=g(l,p,a,f,n[h+2],15,718787259),f=g(f,l,p,a,n[h+9],21,-343485551),a=a+m>>>0,f=f+b>>>0,l=l+w>>>0,p=p+_>>>0}return r.endian([a,f,l,p])})._ff=function(e,t,n,r,o,i,s){var u=e+(t&n|~t&r)+(o>>>0)+s;return(u<<i|u>>>32-i)+t},u._gg=function(e,t,n,r,o,i,s){var u=e+(t&r|n&~r)+(o>>>0)+s;return(u<<i|u>>>32-i)+t},u._hh=function(e,t,n,r,o,i,s){var u=e+(t^n^r)+(o>>>0)+s;return(u<<i|u>>>32-i)+t},u._ii=function(e,t,n,r,o,i,s){var u=e+(n^(t|~r))+(o>>>0)+s;return(u<<i|u>>>32-i)+t},u._blocksize=16,u._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=r.wordsToBytes(u(e,t));return t&&t.asBytes?n:t&&t.asString?s.bytesToString(n):r.bytesToHex(n)}},function(e,t){var n,r;n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var t=[],r=0;r<e.length;r+=3)for(var o=e[r]<<16|e[r+1]<<8|e[r+2],i=0;i<4;i++)8*r+6*i<=8*e.length?t.push(n.charAt(o>>>6*(3-i)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],r=0,o=0;r<e.length;o=++r%4)0!=o&&t.push((n.indexOf(e.charAt(r-1))&Math.pow(2,-2*o+8)-1)<<2*o|n.indexOf(e.charAt(r))>>>6-2*o);return t}},e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),s=n(36),u=(r=s)&&r.__esModule?r:{default:r};var c=function(){function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init=function(e){},this.onopen=function(){console.log("socket--onopen"),o.option.onOpened()},this.onmessage=function(e){console.log("socket--onmessage");var t=(0,i.byteToJson)(e),n=t.json,r=t.op;o.option.onMessage(n,r)},this.onerror=function(){o.option.onError(),console.log("socket--onerror")},this.onclose=function(e){o.option.onClose(),console.log("socket--onclose连接断开",e)},this.server=t,this.protocols=n,this.opened=!1,this.socket=null,this.option=r,this.opened=!1;var s={WebSocket:WebSocket,connectionTimeout:1e4,debug:!1,maxReconnectionDelay:1e4,maxRetries:1/0,minReconnectionDelay:1e3,reconnectionDelayGrowFactor:1.3};this.socket=new u.default(this.server,this.protocols,s),this.socket.binaryType="arraybuffer",this.socket.onopen=this.onopen,this.socket.onmessage=this.onmessage,this.socket.onerror=this.onerror,this.socket.onclose=this.onclose}return o(e,[{key:"send",value:function(e,t){this.socket.send(e)}}]),e}();t.default=c},function(e,t,n){"use strict";var r=n(0),o=n(6),i=n(19),s=n(3);function u(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=u(s);c.Axios=i,c.create=function(e){return u(r.merge(s,e))},c.Cancel=n(10),c.CancelToken=n(34),c.isCancel=n(9),c.all=function(e){return Promise.all(e)},c.spread=n(35),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var r=n(3),o=n(0),i=n(29),s=n(30);function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){u.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){u.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=u},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,a=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?a=c.concat(a):l=-1,a.length&&h())}function h(){if(!f){var e=u(p);f=!0;for(var t=a.length;t;){for(c=a,a=[];++l<t;)c&&c[l].run();l=-1,t=a.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new d(e,t)),1!==a.length||f||u(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(8);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}}),s):s}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,i=String(e),s="",u=0,c=r;i.charAt(0|u)||(c="=",u%1);s+=c.charAt(63&t>>8-u%1*8)){if((n=i.charCodeAt(u+=.75))>255)throw new o;t=t<<8|n}return s}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),!0===s&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(31),i=n(9),s=n(3),u=n(32),c=n(33);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return a(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(a(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(10);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return function(e,t){this.target=t,this.type=e}}(),s=function(e){function t(t,n){var r=e.call(this,"error",n)||this;return r.message=t.message,r.error=t,r}return o(t,e),t}(i),u=function(e){function t(t,n,r){void 0===t&&(t=1e3),void 0===n&&(n="");var o=e.call(this,"close",r)||this;return o.wasClean=!0,o.code=t,o.reason=n,o}return o(t,e),t}(i),c=function(){if("undefined"!=typeof WebSocket)return WebSocket},a={maxReconnectionDelay:1e4,minReconnectionDelay:1e3+4e3*Math.random(),minUptime:5e3,reconnectionDelayGrowFactor:1.3,connectionTimeout:4e3,maxRetries:1/0,debug:!1},f=function(){function e(e,t,n){void 0===n&&(n={});var r=this;this._listeners={error:[],message:[],open:[],close:[]},this._retryCount=-1,this._shouldReconnect=!0,this._connectLock=!1,this._binaryType="blob",this._closeCalled=!1,this._messageQueue=[],this.onclose=void 0,this.onerror=void 0,this.onmessage=void 0,this.onopen=void 0,this._handleOpen=function(e){r._debug("open event");var t=r._options.minUptime,n=void 0===t?a.minUptime:t;clearTimeout(r._connectTimeout),r._uptimeTimeout=setTimeout(function(){return r._acceptOpen()},n),r._ws.binaryType=r._binaryType,r._messageQueue.forEach(function(e){return r._ws.send(e)}),r._messageQueue=[],r.onopen&&r.onopen(e),r._listeners.open.forEach(function(t){return r._callEventListener(e,t)})},this._handleMessage=function(e){r._debug("message event"),r.onmessage&&r.onmessage(e),r._listeners.message.forEach(function(t){return r._callEventListener(e,t)})},this._handleError=function(e){r._debug("error event",e.message),r._disconnect(void 0,"TIMEOUT"===e.message?"timeout":void 0),r.onerror&&r.onerror(e),r._debug("exec error listeners"),r._listeners.error.forEach(function(t){return r._callEventListener(e,t)}),r._connect()},this._handleClose=function(e){r._debug("close event"),r._clearTimeouts(),r._shouldReconnect&&r._connect(),r.onclose&&r.onclose(e),r._listeners.close.forEach(function(t){return r._callEventListener(e,t)})},this._url=e,this._protocols=t,this._options=n,this._connect()}return Object.defineProperty(e,"CONNECTING",{get:function(){return 0},enumerable:!0,configurable:!0}),Object.defineProperty(e,"OPEN",{get:function(){return 1},enumerable:!0,configurable:!0}),Object.defineProperty(e,"CLOSING",{get:function(){return 2},enumerable:!0,configurable:!0}),Object.defineProperty(e,"CLOSED",{get:function(){return 3},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"CONNECTING",{get:function(){return e.CONNECTING},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"OPEN",{get:function(){return e.OPEN},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"CLOSING",{get:function(){return e.CLOSING},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"CLOSED",{get:function(){return e.CLOSED},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"binaryType",{get:function(){return this._ws?this._ws.binaryType:this._binaryType},set:function(e){this._binaryType=e,this._ws&&(this._ws.binaryType=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"retryCount",{get:function(){return Math.max(this._retryCount,0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bufferedAmount",{get:function(){return this._messageQueue.reduce(function(e,t){return"string"==typeof t?e+=t.length:t instanceof Blob?e+=t.size:e+=t.byteLength,e},0)+(this._ws?this._ws.bufferedAmount:0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extensions",{get:function(){return this._ws?this._ws.extensions:""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"protocol",{get:function(){return this._ws?this._ws.protocol:""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"readyState",{get:function(){return this._ws?this._ws.readyState:e.CONNECTING},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this._ws?this._ws.url:""},enumerable:!0,configurable:!0}),e.prototype.close=function(e,t){void 0===e&&(e=1e3),this._closeCalled=!0,this._shouldReconnect=!1,this._clearTimeouts(),this._ws?this._ws.readyState!==this.CLOSED?this._ws.close(e,t):this._debug("close: already closed"):this._debug("close enqueued: no ws instance")},e.prototype.reconnect=function(e,t){this._shouldReconnect=!0,this._closeCalled=!1,this._retryCount=-1,this._ws&&this._ws.readyState!==this.CLOSED?(this._disconnect(e,t),this._connect()):this._connect()},e.prototype.send=function(e){this._ws&&this._ws.readyState===this.OPEN?(this._debug("send",e),this._ws.send(e)):(this._debug("enqueue",e),this._messageQueue.push(e))},e.prototype.addEventListener=function(e,t){this._listeners[e]&&this._listeners[e].push(t)},e.prototype.removeEventListener=function(e,t){this._listeners[e]&&(this._listeners[e]=this._listeners[e].filter(function(e){return e!==t}))},e.prototype._debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._options.debug&&console.log.apply(console,["RWS>"].concat(e))},e.prototype._getNextDelay=function(){var e=this._options,t=e.reconnectionDelayGrowFactor,n=void 0===t?a.reconnectionDelayGrowFactor:t,r=e.minReconnectionDelay,o=void 0===r?a.minReconnectionDelay:r,i=e.maxReconnectionDelay,s=void 0===i?a.maxReconnectionDelay:i,u=o;return this._retryCount>0&&(u=o*Math.pow(n,this._retryCount-1))>s&&(u=s),this._debug("next delay",u),u},e.prototype._wait=function(){var e=this;return new Promise(function(t){setTimeout(t,e._getNextDelay())})},e.prototype._getNextUrl=function(e){if("string"==typeof e)return Promise.resolve(e);if("function"==typeof e){var t=e();if("string"==typeof t)return Promise.resolve(t);if(t.then)return t}throw Error("Invalid URL")},e.prototype._connect=function(){var e=this;if(!this._connectLock&&this._shouldReconnect){this._connectLock=!0;var t=this._options,n=t.maxRetries,r=void 0===n?a.maxRetries:n,o=t.connectionTimeout,i=void 0===o?a.connectionTimeout:o,s=t.WebSocket,u=void 0===s?c():s;if(this._retryCount>=r)this._debug("max retries reached",this._retryCount,">=",r);else{if(this._retryCount++,this._debug("connect",this._retryCount),this._removeListeners(),"function"!=typeof(f=u)||2!==f.CLOSING)throw Error("No valid WebSocket class provided");var f;this._wait().then(function(){return e._getNextUrl(e._url)}).then(function(t){e._closeCalled?e._connectLock=!1:(e._debug("connect",{url:t,protocols:e._protocols}),e._ws=e._protocols?new u(t,e._protocols):new u(t),e._ws.binaryType=e._binaryType,e._connectLock=!1,e._addListeners(),e._connectTimeout=setTimeout(function(){return e._handleTimeout()},i))})}}},e.prototype._handleTimeout=function(){this._debug("timeout event"),this._handleError(new s(Error("TIMEOUT"),this))},e.prototype._disconnect=function(e,t){if(void 0===e&&(e=1e3),this._clearTimeouts(),this._ws){this._removeListeners();try{this._ws.close(e,t),this._handleClose(new u(e,t,this))}catch(e){}}},e.prototype._acceptOpen=function(){this._debug("accept open"),this._retryCount=0},e.prototype._callEventListener=function(e,t){"handleEvent"in t?t.handleEvent(e):t(e)},e.prototype._removeListeners=function(){this._ws&&(this._debug("removeListeners"),this._ws.removeEventListener("open",this._handleOpen),this._ws.removeEventListener("close",this._handleClose),this._ws.removeEventListener("message",this._handleMessage),this._ws.removeEventListener("error",this._handleError))},e.prototype._addListeners=function(){this._ws&&(this._debug("addListeners"),this._ws.addEventListener("open",this._handleOpen),this._ws.addEventListener("close",this._handleClose),this._ws.addEventListener("message",this._handleMessage),this._ws.addEventListener("error",this._handleError))},e.prototype._clearTimeouts=function(){clearTimeout(this._connectTimeout),clearTimeout(this._uptimeTimeout)},e}();t.default=f},function(e,t,n){var r=n(38),o=n(39);e.exports=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var s=(e=e||{}).random||(e.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var u=0;u<16;++u)t[i+u]=s[u];return t||o(s)}},function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,o=n;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),i=(r=o)&&r.__esModule?r:{default:r},s=n(1);t.default=function(e,t){(0,i.default)({method:e.method||"get",url:e.url,params:e.params||{},data:e.data,headers:e.headers}).then(function(t){var n=(0,s.processData)(t);e.callback(n)}).catch(function(e){console.log(e)})}}])});