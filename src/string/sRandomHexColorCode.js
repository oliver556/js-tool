/**
 * 生成一个随机的十六进制颜色代码
 * @Description: 生成一个随机的十六进制颜色代码
 * @author: JamisonLee on 2021/4/5
 * @modify: JamisonLee on 2021/4/5
 *
 * @example
 *        sRandomHexColorCode(); => [ #0d8b5f ]
 **/

export function sRandomHexColorCode () {
  let n = ((Math.random() * 0xfffff) | 0).toString(16);
  return '#' + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n)
}
