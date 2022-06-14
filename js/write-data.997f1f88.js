(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["write-data"],{"1a2a":function(t,r,n){"use strict";n.r(r),r["default"]="## 实现async await\r\n\r\n收集中..."},"1f13":function(t,r,n){"use strict";n.r(r),r["default"]="## 实现promise.all\r\n\r\n收集中..."},d98a:function(t,r,n){"use strict";n.r(r),r["default"]="## intanceof 操作符的实现原理及实现\r\n\r\ninstanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。\r\n\r\n```js\r\nfunction myInstanceof(left, right) {\r\n  // 获取对象的原型\r\n  let proto = Object.getPrototypeOf(left)\r\n  // 获取构造函数的 prototype 对象\r\n  let prototype = right.prototype; \r\n \r\n  // 判断构造函数的 prototype 对象是否在对象的原型链上\r\n  while (true) {\r\n    if (!proto) return false;\r\n    if (proto === prototype) return true;\r\n    // 如果没有找到，就继续从其原型上找，Object.getPrototypeOf方法用来获取指定对象的原型\r\n    proto = Object.getPrototypeOf(proto);\r\n  }\r\n}\r\n```"}}]);