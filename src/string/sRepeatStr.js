/**
 * 字符串循环复制
 * @Description: 字符串循环复制
 * @author: JamisonLee on 2021/3/14
 * @modify: JamisonLee on 2021/3/14
 *
 * @param { String | Number } str => 要循环的值
 * @param { String | Number } count => 循环的次数
 *
 * @example
 *        let a = 23;
 *        sRepeatStr(a, 3); => [ 232323 ]
 *
 **/

export function sRepeatStr (str, count) {
  let text = '';
  for (let i = 0; i < count; i++) {
    text += str;
  }
  return text;
}
