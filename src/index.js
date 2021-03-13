/**
 * @Description: 集合导出所有函数工具类
 * @author: oliver on 2021/3/9
 * @modify: oliver on 2021/3/9
 */

/**
 * @Description: 引入 类型判断 封装函数
 * @author: oliver on 2021/3/9
 * @version
 */

// type 类型判断
import { isTypeof } from './type/isTypeof';
// type String 字符串判断
import { isString } from './type/isString';


/**
 * @Description: Date
 * @author: oliver on 2021/3/9
 * @modify: oliver on 2021/3/9
 */

// 格式化时间
export { default as formatTime } from  './date/formatTime';

/**
 * @Description: 引入 设备类获取 封装函数
 * @author: oliver on 2021/3/13
 * @modify: oliver on 2021/3/13
 */

// 获取浏览器类型和版本
import { getExplore } from "./device/getExplore";
// 获取操作系统类型
import { getOS } from "./device/getOS";


/**
 * @Description: 引入 字符串类型 封装函数
 * @author: oliver on 2021/3/13
 * @modify: oliver on 2021/3/13
 */

// 阿拉伯金额转大写
import { digitUppercase } from './string/digitUppercase';
// 去除空格
import { sTrim } from "./string/sTrim";


/**
 * @Description: 引入 数组类型 封装函数
 * @author: oliver on 2021/3/12
 * @modify: oliver on 2021/3/12
 */

// 判断两个数组是否相等
import { arrayEqual } from "./array/arrayEqual";
//
import { arraySort } from './array/arraySort';


// 函数方法导出
export {
  isTypeof,
  isString,

  digitUppercase,

  getExplore,
  getOS,

  sTrim,

  arrayEqual,
  arraySort
}
