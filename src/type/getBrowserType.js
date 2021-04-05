/**
 * @Description: 获取浏览器类型
 * @author: JamisonLee on 2021/4/5
 * @modify: JamisonLee on 2021/4/5
 */

export function getBrowserType(){
  let userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
  let isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
  let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; // 判断是否IE浏览器
  let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  let isEdge = userAgent.indexOf("Edge") > -1 && !isIE; // 判断是否IE的Edge浏览器
  let isFF = userAgent.indexOf("Firefox") > -1; // 判断是否Firefox浏览器
  let isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1; // 判断是否Safari浏览器
  let isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; // 判断Chrome浏览器

  if (isIE) {
    let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    let fIEVersion = parseFloat(RegExp["$1"]);
    if(fIEVersion === 7) return "IE7"
    else if(fIEVersion === 8) return "IE8";
    else if(fIEVersion === 9) return "IE9";
    else if(fIEVersion === 10) return "IE10";
    else return "IE7以下" // IE版本过低
  }
  if (isIE11) return 'IE11';
  if (isEdge) return "Edge";
  if (isFF) return "FF";
  if (isOpera) return "Opera";
  if (isSafari) return "Safari";
  if (isChrome) return "Chrome";
}
