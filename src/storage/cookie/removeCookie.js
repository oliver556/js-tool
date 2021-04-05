/**
 * @Description: 删除 cookie
 * @author: JamisonLee on 2021/3/14
 * @modify: JamisonLee on 2021/3/14
 *
 * @param { String } name => 要删除的 cookie 名称
 */

export function removeCookie (name) {
  this.setCookie(name, 1, -1);
}
