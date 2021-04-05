import { isArray } from '../../src';

let a = [];
test('判断类型 Array',()=>{
  expect(isArray(a)).toBe(true);
})
