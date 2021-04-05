/**
 * @Description: 集合导出所有函数工具类
 * @author: JamisonLee on 2021/3/9
 * @modify: JamisonLee on 2021/3/9
 */

/**
 * @Description: 引入 数组类型 封装函数
 * @author: JamisonLee on 2021/3/12
 * @modify: JamisonLee on 2021/3/12
 */

// 判断两个数组是否相等
import { arrayEqual } from "./array/arrayEqual";
// 一维数组数组排序
import { arraySort } from './array/arraySort';

export {
  arrayEqual,
  arraySort
}

// --------------------------------------------------------------------------------

/**
 * @Description: Date
 * @author: JamisonLee on 2021/3/9
 * @modify: JamisonLee on 2021/3/9
 */

// 格式化时间
export { default as formatTime } from  './date/formatTime';

// --------------------------------------------------------------------------------

/**
 * @Description: 引入 设备类获取 封装函数
 * @author: JamisonLee on 2021/3/13
 * @modify: JamisonLee on 2021/3/13
 */

// 获取浏览器类型和版本
import { getExplore } from "./device/getExplore";
// 获取操作系统类型
import { getOS } from "./device/getOS";

export {
  getExplore,
  getOS
}

// --------------------------------------------------------------------------------

/**
 * @Description: 引入 storage 封装函数
 * @author: JamisonLee on 2021/3/14
 * @modify: JamisonLee on 2021/3/14
 */

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


/**
 * @Description: 引入 string 封装函数
 * @author: JamisonLee on 2021/3/13
 * @modify: JamisonLee on 2021/3/13
 */

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
// 根据位置,使用 * 遮蔽字符串
import { sMask } from "./string/sMark";
// 生成一个随机的十六进制颜色代码
import { sRandomHexColorCode } from "./string/sRandomHexColorCode";

export {
  sTrim,
  sChangeCase,
  sDigitUppercase,
  sRepeatStr,
  sGetUrlParameter,
  sGetEndTime,
  sMask,
  sRandomHexColorCode
}

// --------------------------------------------------------------------------------

/**
 * @Description: 引入 类型判断 封装函数
 * @author: JamisonLee on 2021/3/9
 * @version
 */

// 获取类型
import { getTypeof } from './type/getTypeof';
// 判断类型 String
import { isString } from './type/isString';
// 判断类型 Number
import { isNumber } from './type/isNumber';
// 判断类型 Boolean
import { isBoolean } from "./type/isBoolean";
// 判断类型 Object
import { isObject } from "./type/isObject";
// 判断类型 Symbol
import { isSymbol } from "./type/isSymbol";
// 判断类型 Undefined
import { isUndefined } from "./type/isUndefined";
// 判断类型 Null
import { isNull } from "./type/isNull";
// 判断类型 Function
import { isFunction } from "./type/isFunction";
// 判断类型 Date
import { isDate } from "./type/isDate";
// 判断类型 Array
import { isArray } from "./type/isArray";
// 判断类型 RegExp
import { isRegExp } from "./type/isRegExp";
// 判断类型 Error
import { isError } from "./type/isError";
// 判断元素 是否为空
import { isEmpty } from "./type/isEmpty";
// 判断是否为 iOS设备
import { isIos } from "./type/isIos";
// 判断 是否为PC端
import { isPC } from "./type/isPC";
// 获取 浏览器类型
import { getBrowserType } from "./type/getBrowserType";

export {
  getTypeof,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isSymbol,
  isUndefined,
  isNull,
  isFunction,
  isDate,
  isArray,
  isRegExp,
  isError,
  isEmpty,
  isIos,
  isPC,
  getBrowserType
}
