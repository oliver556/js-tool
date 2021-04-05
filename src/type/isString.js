/**
 * 判断类型 String
 * @Description: 判断类型 String
 * @author: JamisonLee on 2021/3/9
 * @modify: JamisonLee on 2021/3/9
 *
 * @version：v.0.0.1
 *
 * @param { any } val => 需要检测类型的值
 *
 * @example
 *        let a = '300';
 *        isString(a); => [ true ]
 */
export function isString (val) {
  return Object.prototype.toString.call(val).slice(8, -1) === 'String';
}
