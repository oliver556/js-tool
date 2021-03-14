/**
 * @Description: 获取 sessionStorage
 * @author: oliver on 2021/3/14
 * @modify: oliver on 2021/3/14
 *
 * @param { String } key => sessionStorage 要获取的 sessionStorage 名称
 *
 * @return { String } => 相对应名字的值
 */

export function getSession(key) {
  this.ss = window.sessionStorage;
  if (key) return JSON.parse(this.ss.getItem(key))
  return null;

}
