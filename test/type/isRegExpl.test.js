import { isRegExp } from '../../src';

let a = new RegExp(/^[a-zA-Z0-9] {4,6}$/);
test('判断类型 RegExp',()=>{
  expect(isRegExp(a)).toBe(true);
})
