/**
 * @Description: 移除 localStorage
 * @author: JamisonLee on 2021/3/14
 * @modify: JamisonLee on 2021/3/14
 *
 * @param { String } key => 要移除的 localStorage 名称
 */

export function removeLocal (key) {
  this.ls = window.localStorage;
  this.ls.removeItem(key)
}
