/**
 * @Description: 是否为PC端
 * @author: JamisonLee on 2021/4/5
 * @modify: JamisonLee on 2021/4/5
 */

export function isPC () {
  let userAgentInfo = navigator.userAgent;
  let Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"];
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
