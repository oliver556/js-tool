/**
 * @Description: 集合导出所有函数工具类
 * @author: oliver on 2021/3/9
 * @modify: oliver on 2021/3/9
 */

/**
 * @Description: 引入 类型判断 封装函数
 * @author: oliver on 2021/3/9
 * @version
 */
// type 类型判断
import { isTypeof } from './type/isTypeof';
// type String 字符串判断
import { isString } from './type/isString';


/**
 * @Description: Date
 * @author: oliver on 2021/3/9
 * @modify: oliver on 2021/3/9
 */
// 格式化时间
export { default as formatTime } from  './date/formatTime';


/**
 * @Description: 引入 数组类型 封装函数
 * @author: oliver on 2021/3/12
 * @modify: oliver on 2021/3/12
 */
// 判断两个数组是否相等
import { arrayEqual } from "./array/arrayEqual";


export {
  isTypeof,
  isString,
  arrayEqual
}

//
// // =====================================================
// // 测试文件
// export { default as goodbye } from './goodbye';

// 测试文件
// import { hello } from './hello';
// export {
//   hello
// };
