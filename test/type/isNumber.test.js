import { isNumber } from '../../src';

let a = 300;
test('判断类型 Number',()=>{
  expect(isNumber(a)).toBe(true);
})
