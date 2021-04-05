/**
 * 现金额转大写
 * @Description: 现金额转大写
 * @author: JamisonLee on 2021/3/13
 * @modify: JamisonLee on 2021/3/13
 *
 * @version：v.0.0.1
 *
 * @param { String | Number } val => 要转换大写的阿拉伯数字金额
 *
 * @example
 *        let a = 100';
 *        digitUppercase(a); => [ '壹佰元整' ]
 *
 *        let b = 200';
 *        digitUppercase(a); => [ '贰佰元整' ]
 */
export function sDigitUppercase (val) {
  let i;
  let fraction = ['角', '分'];
  let digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ];
  let unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ];
  let head = val < 0 ? '欠' : '';
  val = Math.abs(val);
  let s = '';
  for (i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(val * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  val = Math.floor(val);
  for (i = 0; i < unit[0].length && val > 0; i++) {
    let p = '';
    for (let j = 0; j < unit[1].length && val > 0; j++) {
      p = digit[val % 10] + unit[1][j] + p;
      val = Math.floor(val / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整');
}
