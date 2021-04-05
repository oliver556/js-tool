/**
 * 判断两个数组是否相等
 * @Description: 两个数组是否相等
 * @author: JamisonLee on 2021/3/12
 * @modify: JamisonLee on 2021/3/12
 *
 * @version：v.0.0.1
 *
 * @param { Array } arr1 => 要进行对比的数组1
 * @param { Array } arr2 => 要进行对比的数组1
 *
 * @example
 *        let a = ['1'];
 *        let b = ['1'];
 *        arrayEqual(a,b); => [ true ]
 */
export function  arrayEqual(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
