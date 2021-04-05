/**
 * @Description: 获取 cookie
 * @author: JamisonLee on 2021/3/14
 * @modify: JamisonLee on 2021/3/14
 *
 * @param { String } name => 要获取的 cookie 名称
 *
 * @return { String } => 相对应名字的值
 */

export function getCookie (name) {
  let arr = document.cookie.split('; ');
  for (let i = 0; i < arr.length; i++) {
    let arr2 = arr[i].split('=');
    if (arr2[0] === name) {
      return arr2[1];
    }
  }
  return '';
}
