/**
 * @Description: type 类型判断
 * @author: oliver on 2021/3/9
 * @modify: oliver on 2021/3/9
 **/

/**
 * 输入一个值,返回其数据类型
 * @Description: 是否字符串
 * @author: oliver on 2021/3/9
 * @modify: oliver on 2021/3/9
 *
 * @param { String } val => 需要检测类型的值
 *
 * @example
 *        let a = '';
 *        isTypeof(a); => [ String ]
 */
export default function isString (val) {
  return Object.prototype.toString.call(val).slice(8, -1) === 'String';
}
