/**
 * 判断类型 Error
 * @Description: 判断类型 Error
 * @author: JamisonLee on 2021/4/5
 * @modify: JamisonLee on 2021/4/5
 *
 * @version：v.0.0.1
 *
 * @param { any } val => 需要检测类型的值
 *
 * @example
 *        let a = Error;
 *        isDate(a); => [ true ]
 */
export function isError (val) {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Error';
}
