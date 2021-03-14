/**
 * @Description: 移除所有 localStorage
 * @author: oliver on 2021/3/14
 * @modify: oliver on 2021/3/14
 */

export function clearLocal () {
  this.ls = window.localStorage;
  this.ls.clear()
}
