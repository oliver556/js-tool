/**
 * @Description: 移除所有 sessionStorage
 * @author: oliver on 2021/3/14
 * @modify: oliver on 2021/3/14
 */

export function clearSession() {
  this.ss = window.sessionStorage;
  this.ss.clear()
}
