# stool

前端业务代码工具库

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。

## :building_construction:  安装使用

1. 使用npm安装

### npm:
``` bash
$ npm install --save-dev @susu/stool
```

### 浏览器:
``` html
  <script src="stool.min.js"></script>
  <script>
      var OS = stool.isString();
  </script>
```

webpack、RequireJS、SeaJS等

``` javascript
// CommonJS => require方式导入
// 完整引入
const stool = require('@susu/js-tool')
console.log(stool.isString());
```

import
``` javascript
// import => 全部导入 :
// 完整引入
import * as stool from '@susu/stool';
console.group('import => 全部导入 : ',stool.isString('1'));
```

**推荐使用方法**

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// import => 自定义按需导入 : 只引入部分方法('stool/<方法名>')
import { isString } from '@susu/stool';
console.group('import => 自定义按需导入 : ', isString());
```
