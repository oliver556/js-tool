/**
 * @Description: 移除所有 localStorage
 * @author: JamisonLee on 2021/3/14
 * @modify: JamisonLee on 2021/3/14
 */

export function clearLocal () {
  this.ls = window.localStorage;
  this.ls.clear()
}
