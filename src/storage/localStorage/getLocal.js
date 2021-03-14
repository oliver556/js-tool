/**
 * @Description: 获取 localStorage
 * @author: oliver on 2021/3/14
 * @modify: oliver on 2021/3/14
 *
 * @param { String } key => localStorage 要获取的 localStorage 名称
 *
 * @return { String } => 相对应名字的值
 */

export function getLocal (key) {
  this.ls = window.localStorage;
  if (key) return JSON.parse(this.ls.getItem(key))
  return null;
}
