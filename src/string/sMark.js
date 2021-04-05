/**
 * 根据位置,使用 * 遮蔽字符串
 * @Description: 字符串循环复制
 * @author: JamisonLee on 2021/4/5
 * @modify: JamisonLee on 2021/4/5
 *
 * @param { String } cc => 要遮蔽的总体字符串
 * @param { Number } num1 => 从第几位开始
 * @param { Number } num2 => 到第几位结束
 * @param { String } _mask => 用什么符号进行遮蔽
 *
 * @example
 *        let a = '12398765432';
 *        sMask(a, 3, 7); => [ 123****5432 ]
 **/

export function sMask (cc, num1 = 0, num2 = 0, _mask = '*') {
  let reg = new RegExp(`\^\(\.\{${num1}\}\)\(\.\{${num2 - num1}\}\)\(\.${num2>=cc.length?'\?':'\+'}\)\$`);
  return cc.replace(reg,($0,$1,$2,$3)=> $1+$2.replace(/./g,_mask)+$3)
}
