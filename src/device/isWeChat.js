/**
 * @Description: 判断是否微信内置浏览器
 * @author: JamisonLee on 2021/3/22
 * @modify: JamisonLee on 2021/3/22
 *
 * @return { Boolean } => 是 或者 否
 * @example
 *        isWeChat(); => [ false ]
 */
export function isWeChat() {
  let ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true // 微信内置浏览器
  } else {
    return false // 非微信内置浏览器
  }
}
