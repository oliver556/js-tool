/**
 * @Description: 数组值大小排序,(仅支持一维数组)
 * @author: JamisonLee on 2021/3/13
 * @modify: JamisonLee on 2021/3/13
 *
 * @param { Array } arr => 要排序的数组
 * @param { Number } type => 1：从小到大   2：从大到小   3：随机
 *
 * @example
 *        let a = ['7', 9, 6, '5'];
 *        arraySort(ary, 1); => ["5", 6, "7", 9]
 **/
export function arraySort (arr, type = 1) {
  return arr.sort( (a, b) => {
    switch(type) {
      case 1:
        return a - b;
      case 2:
        return b - a;
      case 3:
        return Math.random() - 0.5;
      default:
        return arr;
    }
  })
}
