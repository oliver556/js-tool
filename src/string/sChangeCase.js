/**
 * 字符转换
 * @Description: 字符转换
 * @author: oliver on 2021/3/14
 * @modify: oliver on 2021/3/14
 *
 * @param { String } str => 要转换的 String
 * @param { Number } type => 1:只有首字母大写，其余反之 2：只有首字母小写，其余反之 3：大小写转换 4：全部大写 5：全部小写
 *
 * @example
 *        let a = aPPle
 *        sChangeCase(a, 1); => [ Apple ]
 *        sChangeCase(a, 2); => [ aPPLE ]
 *        sChangeCase(a, 3); => [ AppLE ]
 *        sChangeCase(a, 4); => [ APPLE ]
 *        sChangeCase(a, 5); => [ apple ]
 **/

export function sChangeCase (str, type) {
  type = type || 4
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

      });
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
      });
    case 3:
      return str.split('').map(function (word) {
        if (/[a-z]/.test(word)) {
          return word.toUpperCase();
        } else {
          return word.toLowerCase()
        }
      }).join('')
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
}
