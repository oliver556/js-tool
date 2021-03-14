/**
 * @Description: 删除 cookie
 * @author: oliver on 2021/3/14
 * @modify: oliver on 2021/3/14
 *
 * @param { String } name => cookie 要删除的 cookie 名称
 */

export function removeCookie (name) {
  this.setCookie(name, 1, -1);
}
