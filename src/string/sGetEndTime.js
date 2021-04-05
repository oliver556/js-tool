/**
 * 到某一个时间的倒计时
 * @Description: 到某一个时间的倒计时
 * @author: JamisonLee on 2021/3/14
 * @modify: JamisonLee on 2021/3/14
 *
 * @param { String | Number } endTime => 结束的时间点
 *
 * @return { String } => '剩余时间: x天 x小时 xx分钟 xx秒'
 *
 * @example
 *        let a = '2021/03/14 20:00:00';
 *        当前时间：'Sun Mar 14 2021 19:30:00 GMT+0800 (中国标准时间)'
 *        sGetEndTime(a); => [ '剩余时间: 0天 0小时 30分钟 00秒' ]
 */

export function sGetEndTime (endTime) {
  // 开始时间，当前时间
  let startDate = new Date();
  // 结束时间，需传入时间参数
  let endDate = new Date(endTime);
  // 时间差的毫秒数
  let t = endDate.getTime() - startDate.getTime();
  let d = 0, h = 0, m = 0, s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor(t / 1000 / 60 / 60 % 24);
    m = Math.floor(t / 1000 / 60 % 60);
    s = Math.floor(t / 1000 % 60);
  }
  return "剩余时间: "+ d + "天 "+h+"小时 "+ m + "分钟 " + s +"秒";
}
