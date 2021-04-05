/**
 * @Description: 写入 localStorage
 * @author: JamisonLee on 2021/3/14
 * @modify: JamisonLee on 2021/3/14
 *
 * @param { String } key => 要保存的名称
 * @param { String, Number } val => 要保存的值
 *
 * @example
 *        写入 localStorage，key 为 test，value 为 'value is test'
 *        setLocal('test', 'value is test');
 */

export function setLocal (key, val) {
  this.ls = window.localStorage;
  let setting = arguments[0];
  if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object'){
    for(let i in setting){
      // noinspection JSUnfilteredForInLoop
      this.ls.setItem(i, JSON.stringify(setting[i]))
    }
  }else{
    this.ls.setItem(key, JSON.stringify(val))
  }

}
