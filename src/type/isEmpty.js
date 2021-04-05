/**
 * 判断元素是否为空
 * @Description: 判断元素是否为空
 * @author: JamisonLee on 2021/4/5
 * @modify: JamisonLee on 2021/4/5
 *
 * @version：v.0.0.1
 *
 * @param { any } val => 需要检测类型的值
 *
 * @example
 *        let a = new Date()';
 *        isDate(a); => [ true ]
 */

import { isObject } from "./isObject";
import { isArray } from "./isArray";
import { isString } from "./isString";

export function isEmpty (value) {
  if(value === void(0) || value === null) return true;
  else if(isObject(value)) return !Object.keys(value).length;
  else if(isArray(value)) return !value.length;
  else if(isString(value)) return !value;
  else return value.toString().length === 0;
}
