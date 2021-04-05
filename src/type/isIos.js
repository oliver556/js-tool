/**
 * @Description: 判断是否为 iOS设备
 * @author: JamisonLee on 2021/4/5
 * @modify: JamisonLee on 2021/4/5
 */
export function isIos () {
  let u = navigator.userAgent;

  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { // 安卓手机
    // return "Android";
    return false;
  } else if (u.indexOf('iPhone') > -1) { // 苹果手机
    // return "iPhone";
    return true;
  } else if (u.indexOf('iPad') > -1) { // iPad
    // return "iPad";
    return false;
  } else if (u.indexOf('Windows Phone') > -1) { // windows phone手机
    // return "Windows Phone";
    return false;
  }else{
    return false; // 啥也不是
  }
}
