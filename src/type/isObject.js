/**
 * 判断类型 Object
 * @Description: 判断类型 Object
 * @author: JamisonLee on 2021/4/5
 * @modify: JamisonLee on 2021/4/5
 *
 * @version：v.0.0.1
 *
 * @param { any } val => 需要检测类型的值
 *
 * @example
 *        let a = {}';
 *        isFunction(a); => [ true ]
 */

export function isObject (val) {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Object';
}
