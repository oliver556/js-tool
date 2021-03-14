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
// --------------------------------------------------------------------------------

// type 类型判断
import { isTypeof } from './type/isTypeof';
// type String 字符串判断
import { isString } from './type/isString';

// 函数方法导出
export {
  isTypeof,
  isString
}
// --------------------------------------------------------------------------------
//




/**
 * @Description: 引入 设备类获取 封装函数
 * @author: oliver on 2021/3/13
 * @modify: oliver on 2021/3/13
 */
// --------------------------------------------------------------------------------

// 获取浏览器类型和版本
import { getExplore } from "./device/getExplore";
// 获取操作系统类型
import { getOS } from "./device/getOS";

// 导出
export {
  getExplore,
  getOS
}
// --------------------------------------------------------------------------------
//




/**
 * @Description: 引入 storage 封装函数
 * @author: oliver on 2021/3/14
 * @modify: oliver on 2021/3/14
 */
// --------------------------------------------------------------------------------
//

// 写入 cookie
import { setCookie } from './storage/cookie/setCookie';
// 获取 cookie
import { getCookie } from "./storage/cookie/getCookie";
// 删除 cookie
import { removeCookie } from "./storage/cookie/removeCookie";
// 写入 localStorage
import { setLocal } from "./storage/localStorage/setLocal";
// 获取 localStorage
import { getLocal } from "./storage/localStorage/getLocal";
// 移除 localStorage
import { removeLocal } from "./storage/localStorage/removeLocal";
// 移除所有 localStorage
import { clearLocal } from "./storage/localStorage/clearLocal";
// 写入 sessionStorage
import { setSession } from "./storage/sessionStorage/setSession";
// 获取 sessionStorage
import { getSession } from "./storage/sessionStorage/getSession";
// 移除 sessionStorage
import { removeSession } from "./storage/sessionStorage/removeSession";
// 移除所有 sessionStorage
import { clearSession } from "./storage/sessionStorage/clearSession";

// 导出
export {
  setCookie,
  getCookie,
  removeCookie,
  setLocal,
  getLocal,
  removeLocal,
  clearLocal,
  setSession,
  getSession,
  removeSession,
  clearSession
}
// --------------------------------------------------------------------------------
//




/**
 * @Description: 引入 string 封装函数
 * @author: oliver on 2021/3/13
 * @modify: oliver on 2021/3/13
 */
// --------------------------------------------------------------------------------

// 阿拉伯金额转大写
import { sDigitUppercase } from './string/sDigitUppercase';
// 去除空格
import { sTrim } from "./string/sTrim";
// 字符串转换
import { sChangeCase } from "./string/sChangeCase";
// 字符串循环复制
import { sRepeatStr } from "./string/sRepeatStr";
// 获取 url 中的参数
import { sGetUrlParameter } from "./string/sGetUrlParameter";
// 到某一个时间的倒计时
import { sGetEndTime } from "./string/sGetEndTime";

// 导出
export {
  sTrim,
  sChangeCase,
  sDigitUppercase,
  sRepeatStr,
  sGetUrlParameter,
  sGetEndTime
}
// --------------------------------------------------------------------------------
//




/**
 * @Description: 引入 数组类型 封装函数
 * @author: oliver on 2021/3/12
 * @modify: oliver on 2021/3/12
 */
// --------------------------------------------------------------------------------
//
// 判断两个数组是否相等
import { arrayEqual } from "./array/arrayEqual";
// 一维数组数组排序
import { arraySort } from './array/arraySort';

// 导出
export {
  arrayEqual,
  arraySort
}
// --------------------------------------------------------------------------------
//




/**
 * @Description: Date
 * @author: oliver on 2021/3/9
 * @modify: oliver on 2021/3/9
 */

// 格式化时间
export { default as formatTime } from  './date/formatTime';
