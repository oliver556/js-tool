/**
 * 获取 url 中的参数
 * @Description: 获取 url 中的参数
 * @author: oliver on 2021/3/14
 * @modify: oliver on 2021/3/14
 *
 * @param { String } url => url 路径
 *
 * @example
 *        let a = 'https://segmentfault.com/write?draftId=12200232342348&query=hello';
 *        getUrlParameter(a); => [ {draftId: "12200232342348", query: "hello"} ]
 */
export function sGetUrlParameter (url) {
  url = url ? url : window.location.href;
  let _pa = url.substring(url.indexOf('?') + 1), _arrS = _pa.split('&'), _rs = {};
  for (let i = 0, _len = _arrS.length; i < _len; i++) {
    let pos = _arrS[i].indexOf('=');
    if (pos === -1) {
      continue;
    }
    let name = _arrS[i].substring(0, pos);
    _rs[name] = window.decodeURIComponent(_arrS[i].substring(pos + 1));
  }
  return _rs;
}
