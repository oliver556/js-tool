import { isUndefined } from '../../src';

let a = undefined;
test('判断类型 Undefined',()=>{
  expect(isUndefined(a)).toBe(true);
})
