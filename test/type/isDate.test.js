import { isDate } from '../../src';

let a = new Date();
test('判断类型 Date',()=>{
  expect(isDate(a)).toBe(true);
})
