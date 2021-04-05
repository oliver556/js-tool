import { isObject } from '../../src';

let a = {};
test('判断类型 Object',()=>{
  expect(isObject(a)).toBe(true);
})
