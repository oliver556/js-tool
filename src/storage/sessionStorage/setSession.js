/**
 * @Description: 写入 sessionStorage
 * @author: oliver on 2021/3/14
 * @modify: oliver on 2021/3/14
 *
 * @param { String } key => sessionStorage 要保存的名称
 * @param { String, Number } val => sessionStorage 要保存的值
 *
 * @example
 *        写入 sessionStorage，key 为 test，value 为 'value is test'
 *        setSession('test', 'value is test');
 */

export function setSession (key, val) {
  this.ss = window.sessionStorage;
  let setting = arguments[0];
  if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object'){
    for(let i in setting){
      // noinspection JSUnfilteredForInLoop
      this.ss.setItem(i, JSON.stringify(setting[i]))
    }
  }else{
    this.ss.setItem(key, JSON.stringify(val))
  }
}
