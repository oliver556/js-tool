/**
 * @Description: 集合导出所有函数工具类
 * @author: oliver on 2021/3/9
 * @modify: oliver on 2021/3/9
 */

// type 类型判断
export { default as isTypeof } from "./type/isTypeof";
// type String 字符串判断
export { default as isString } from "./type/is/isString";

// =====================================================
// 测试文件
export { default as goodbye } from "./goodbye";
// 测试文件
import { hello } from './hello';
export {
  hello
};
