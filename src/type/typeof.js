/**
 * @Description: type 类型判断
 * @author: 李杰敏 on 2021/3/9
 * @modify: 李杰敏 on 2021/3/9
 **/

/**
 * 输入一个值,返回其数据类型
 * @Description: 全类型判断
 * @author: 李杰敏 on 2021/3/9
 * @modify: 李杰敏 on 2021/3/9
 *
 * @param { * } val => 传入需要判断的值
 *
 * @example
 *        let a = 1;
 *        isTypeof(a) // => Number
 */
export default function isTypeof(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}
