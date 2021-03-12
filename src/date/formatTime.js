/**
 * 时间格式化
 * @Description: 格式化时间
 * @author: oliver on 2021/3/9
 * @modify: oliver on 2021/3/9
 *
 * @version：v.0.0.1
 *
 * @param  { Date | Number | String } time => 时间
 * @param  { String } cFormat => 格式
 *
 * @return { String } => timeStr => 格式化后的字符串
 *
 * @example
 *       formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}'); => [ 2018/01/29 00:00:00 ]
 */
export default function formatTime(time, cFormat) {
  if (arguments.length === 0) return null
  if ((time + '').length === 10) {
    time = +time * 1000
  }

  let format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}', date;
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(time)
  }

  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  return format.replace(/{([ymdhisa])+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
}
