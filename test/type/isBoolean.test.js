import { isBoolean } from '../../src';

let a = false;
test('判断类型 Boolean',()=>{
  expect(isBoolean(a)).toBe(true);
})
