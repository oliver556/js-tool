import { isString } from '../../src';

let a = '300';
test('判断类型 String',()=>{
  expect(isString(a)).toBe(true);
})
