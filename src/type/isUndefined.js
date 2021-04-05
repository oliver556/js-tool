/**
 * 判断类型 Undefined
 * @Description: 判断类型 Undefined
 * @author: JamisonLee on 2021/4/5
 * @modify: JamisonLee on 2021/4/5
 *
 * @version：v.0.0.1
 *
 * @param { any } val => 需要检测类型的值
 *
 * @example
 *        let a = undefined;';
 *        isUndefined(a); => [ true ]
 */
export function isUndefined (val) {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Undefined';
}
