/**
 * @Description: 集合导出所有函数工具类
 * @author: 李杰敏 on 2021/3/9
 * @modify: 李杰敏 on 2021/3/9
 */

// type 类型判断
export { default as isTypeof } from "./type/typeof";

// 测试文件
export { default as goodbye } from "./goodbye";
// 测试文件
import { hello } from './hello';
export {
  hello
};
