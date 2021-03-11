/**
 * 输入一个值,返回其数据类型（type 类型判断）
 * @Description: 全类型判断
 * @author: oliver on 2021/3/9
 * @modify: oliver on 2021/3/9
 * @link: https://www.cnblogs.com/onepixel/p/5126046.html
 *
 * @version：v.0.0.1
 *
 * @param { * } val => 传入需要判断的值
 *
 * @example
 *        let a = '';
 *        isTypeof(a); => [ String ]
 *
 *        let b = 1;
 *        isTypeof(b); => [ Number ]
 *
 *        let c = true;
 *        isTypeof(c); => [ Boolean ]
 *
 *        let d = Symbol();
 *        isTypeof(d); => [ Symbol ]
 *
 *        let e = undefined;
 *        isTypeof(e); => [ Undefined ]
 *
 *        let f = null;
 *        isTypeof(f); => [Null]
 *
 *        let g = Function();
 *        isTypeof(g); => [ Function ]
 *
 *        let h = new Date();
 *        isTypeof(h); => [ Date ]
 *
 *        let i = [];
 *        isTypeof(i); => [ Array ]
 *
 *        let j = RegExp();
 *        isTypeof(j); => [ RegExp ]
 *
 *        let k = Error;
 *        isTypeof(k); => [ Error ]
 *
 *        let l = document;
 *        isTypeof(l); => [ HTMLDocument ]
 *
 *        let m = window;
 *        isTypeof(m); => [ global ] window 是全局对象 global 的引用
 */
export function isTypeof (val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}
