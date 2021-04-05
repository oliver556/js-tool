/**
 * @Description: 移除 sessionStorage
 * @author: JamisonLee on 2021/3/14
 * @modify: JamisonLee on 2021/3/14
 *
 * @param { String } key => sessionStorage 要移除的 sessionStorage 名称
 */

export function removeSession (key) {
  this.ss = window.sessionStorage;
  this.ss.removeItem(key)
}
