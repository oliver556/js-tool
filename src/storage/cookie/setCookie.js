/**
 * @Description: 写入 cookie
 * @author: JamisonLee on 2021/3/14
 * @modify: JamisonLee on 2021/3/14
 *
 * @param { String } name => 要保存的名称
 * @param { String, Number } value => 要保存的值
 * @param { String | Number } day => 要保存的时间
 *
 * @example
 *        写入cookie，key 为 test，value 为 'value is test'，时间为 1天
 *        setCookie('test', 'value is test', 1);
 */

export function setCookie (name, value, day) {
  let oDate;
  let setting = arguments[0];
  if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object'){
    for (let i in setting) {
      oDate = new Date();
      oDate.setDate(oDate.getDate() + day);
      // noinspection JSUnfilteredForInLoop
      document.cookie = i + '=' + setting[i] + ';expires=' + oDate;
    }
  }else{
    oDate = new Date();
    oDate.setDate(oDate.getDate() + day);
    document.cookie = name + '=' + value + ';expires=' + oDate;
  }
}
