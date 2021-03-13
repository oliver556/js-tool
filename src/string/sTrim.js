/**
 * @Description: 去除空格
 * @author: oliver on 2021/3/13
 * @modify: oliver on 2021/3/13
 *
 * @param { String } str => 要去除的string串
 * @param { Number } type => 1-所有空格  2-前后空格  3-前空格 4-后空格
 *
 * @example
 *        let a = '1 9 0';
 *        STrimTest(a); => [ 190 ]
 **/
export function sTrim (str, type) {
  type = type || 1
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
}
