(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["code-data"],{"0b0e":function(n,r,t){"use strict";t.r(r),r["default"]="## 第3题，写出执行结果，并解释原因\r\n\r\n```js\r\nvar a = 1;\r\n(function a () {\r\n    a = 2;\r\n    console.log(a);\r\n})();\r\n```\r\n\r\n[答案](https://github.com/lgwebdream/FE-Interview/issues/40)"},"0f0b":function(n,r,t){"use strict";t.r(r),r["default"]="## 第9题，写出执行结果，并解释原因\r\n\r\n```js\r\nlet length = 10;\r\nfunction fn() {\r\n\tconsole.log(this.length);\r\n}\r\nvar obj = {\r\n  length: 5,\r\n  method: function(fn) {\r\n    fn();\r\n    arguments[0]();\r\n  }\r\n};\r\nobj.method(fn,1);\r\n```\r\n\r\n[答案](https://github.com/lgwebdream/FE-Interview/issues/73)"},"0f32":function(n,r,t){"use strict";t.r(r),r["default"]="## 第4题，写出执行结果，并解释原因\r\n\r\n```js\r\n(function () {\r\n  var a = (b = 5);\r\n})();\r\nconsole.log(b);\r\nconsole.log(a);\r\n```\r\n\r\n[答案](https://github.com/lgwebdream/FE-Interview/issues/42)"},"3cec":function(n,r,t){"use strict";t.r(r),r["default"]="## 第2题，写出执行结果，并解释原因\r\n\r\n```js\r\nfunction side(arr) {\r\n  arr[0] = arr[2];\r\n}\r\nfunction a(a, b, c = 3) {\r\n  c = 10;\r\n  side(arguments);\r\n  return a + b + c;\r\n}\r\na(1, 1, 1);\r\n```\r\n\r\n[答案](https://github.com/lgwebdream/FE-Interview/issues/38)"},"617b":function(n,r,t){"use strict";t.r(r),r["default"]="## 第13题，写出执行结果，并解释原因\r\n\r\n```js\r\nfunction yideng(n,o){\r\n    console.log(o); // ？\r\n    return {\r\n        yideng:function(m){\r\n            return yideng(m,n);\r\n        }\r\n    }\r\n}\r\nconst a=yideng(0);a.yideng(1);a.yideng(2);a.yideng(3);\r\nconst b=yideng(0).yideng(1).yideng(2).yideng(3);\r\nconst c = yideng(0).yideng(1);c.yideng(2);c.yideng(3);\r\n```\r\n\r\n[答案](https://github.com/lgwebdream/FE-Interview/issues/121)"},"675d":function(n,r,t){"use strict";t.r(r),r["default"]="## 第15题，写出执行结果，并解释原因\r\n\r\n```js\r\nvar x = 10;\r\nfunction a(y) {\r\n  var x = 20;\r\n  return b(y);\r\n}\r\nfunction b(y) {\r\n  return x + y;\r\n}\r\na(20);\r\n```\r\n\r\n[答案](https://github.com/lgwebdream/FE-Interview/issues/300)"},"6edd":function(n,r,t){"use strict";t.r(r),r["default"]="## 第1题，写出执行结果，并解释原因\r\n\r\n```js\r\nvar result = [];\r\nvar a = 3;\r\nvar total = 0;\r\nfunction foo(a) {\r\n  var i = 0;\r\n  for (; i < 3; i++) {\r\n    result[i] = function () {\r\n      total += i * a;\r\n      console.log(total);\r\n    };\r\n  }\r\n}\r\n\r\nfoo(1);\r\nresult[0]();\r\nresult[1]();\r\nresult[2]();\r\n```"},"7fc3":function(n,r,t){"use strict";t.r(r),r["default"]="## 第10题，写出执行结果，并解释原因\r\n\r\n```js\r\nvar a=10;\r\nvar foo={\r\n  a:20,\r\n  bar:function(){\r\n      var a=30;\r\n      return this.a;\r\n    }\r\n}\r\nconsole.log(foo.bar());\r\nconsole.log((foo.bar)());\r\nconsole.log((foo.bar=foo.bar)());\r\nconsole.log((foo.bar,foo.bar)());\r\n```\r\n\r\n[答案](https://github.com/lgwebdream/FE-Interview/issues/74)"},"80ca":function(n,r,t){"use strict";t.r(r),r["default"]="## 第11题，写出执行结果，并解释原因\r\n\r\n```js\r\nfunction getName(){\r\n  for(let i = 0;i<5;i++){\r\n    setTimeout(function(){\r\n      console.log(i)\r\n    },i*1000);\r\n  }\r\n  return\r\n  {\r\n    name:'京程一灯'\r\n  }\r\n}\r\nconsole.log(getName());\r\n```\r\n\r\n[答案](https://github.com/lgwebdream/FE-Interview/issues/75)"},8414:function(n,r,t){"use strict";t.r(r),r["default"]="## 第5题，写出执行结果，并解释原因\r\n\r\n```js\r\nvar fullname = 'a';\r\nvar obj = {\r\n   fullname: 'b',\r\n   prop: {\r\n      fullname: 'c',\r\n      getFullname: function() {\r\n         return this.fullname;\r\n      }\r\n   }\r\n};\r\n \r\nconsole.log(obj.prop.getFullname());\r\nvar test = obj.prop.getFullname;\r\nconsole.log(test());\r\n```\r\n\r\n[答案](https://github.com/lgwebdream/FE-Interview/issues/43)"},"871e":function(n,r,t){"use strict";t.r(r),r["default"]='## 第14题，写出执行结果，并解释原因\r\n\r\n```js\r\nconst a = [1,2,3],\r\n    b = [1,2,3],\r\n    c = [1,2,4],\r\n\t\td = "2",\r\n\t\te = "11";\r\nconsole.log([a == b, a === b, a > c, a < c, d > e]);\r\n```\r\n\r\n[答案](https://github.com/lgwebdream/FE-Interview/issues/124)'},9262:function(n,r,t){"use strict";t.r(r),r["default"]="## 第16题，修改以下代码，使得最后一行代码能够输出数字 0-9（最好能给多种答案）\r\n\r\n```js\r\nvar arrys = [];\r\nfor (var i = 0; i < 10; i++) {\r\n  arrys.push(function () {\r\n    return i;\r\n  });\r\n}\r\narrys.forEach(function (fn) {\r\n  console.log(fn());\r\n}); //本⾏不能修改\r\n```\r\n\r\n[答案](https://github.com/lgwebdream/FE-Interview/issues/328)"},acd5:function(n,r,t){"use strict";t.r(r),r["default"]='## 第7题，写出执行结果，并解释原因\r\n\r\n请问变量a会被GC吗\r\n\r\n```js\r\nfunction test(){\r\n    var a = 1;\r\n    return function(){\r\n        eval("");\r\n    }\r\n}\r\ntest();\r\n```\r\n\r\n[答案](https://github.com/lgwebdream/FE-Interview/issues/61)'},ccbb:function(n,r,t){"use strict";t.r(r),r["default"]="## 第12题，写出执行结果，并解释原因\r\n\r\n```js\r\nvar a = 0;\r\nif(true){\r\n  a = 10;\r\n  console.log(a,window.a);\r\n  function a(){};\r\n  console.log(a,window.a);\r\n  a = 20;\r\n  console.log(a,window.a);\r\n}\r\nconsole.log(a);\r\n```\r\n\r\n[答案](https://github.com/lgwebdream/FE-Interview/issues/96)"},d3e7:function(n,r,t){"use strict";t.r(r),r["default"]="## 第6题，写出执行结果，并解释原因\r\n\r\n```js\r\nfor (let i = 0; i < 3; i++) {\r\n  setTimeout(() => console.log(i), 1);\r\n}\r\n```\r\n\r\n[答案](https://github.com/lgwebdream/FE-Interview/issues/53)"},db4d:function(n,r,t){"use strict";t.r(r),r["default"]="## 第8题，写出执行结果，并解释原因\r\n\r\n```js\r\nlet x, y;\r\ntry {\r\n  throw new Error();\r\n} catch (x) {\r\n  x =1;\r\n  y=2;\r\n  console.log(x);\r\n}\r\nconsole.log(x);\r\nconsole.log(y);\r\n```\r\n\r\n[答案](https://github.com/lgwebdream/FE-Interview/issues/71)"}}]);