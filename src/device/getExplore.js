/**
 * 获取浏览器类型和版本
 * @Description: 获取浏览器类型和版本
 * @author: oliver on 2021/3/13
 * @modify: oliver on 2021/3/13
 *
 * @version：v.0.0.1
 *
 * @return { String }
 *
 * @example
 *        getExplore(); => [ Chrome: 89.0.4389.82 ]
 */
export function getExplore() {
  let sys = {},
    ua = navigator.userAgent.toLowerCase(),
    s;
  (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
    (s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] :
      (s = ua.match(/edge\/([\d.]+)/)) ? sys.edge = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
          (s = ua.match(/(?:opera|opr).([\d.]+)/)) ? sys.opera = s[1] :
            (s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
              (s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;
  // 根据关系进行判断
  if (sys.ie) return ('IE: ' + sys.ie)
  if (sys.edge) return ('EDGE: ' + sys.edge)
  if (sys.firefox) return ('Firefox: ' + sys.firefox)
  if (sys.chrome) return ('Chrome: ' + sys.chrome)
  if (sys.opera) return ('Opera: ' + sys.opera)
  if (sys.safari) return ('Safari: ' + sys.safari)
  return 'Unknow'
}
