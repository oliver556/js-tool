import { isString } from '../src';

let a = '300';
test('String 类型判断',()=>{
  expect(isString(a)).toBe(true);
})
