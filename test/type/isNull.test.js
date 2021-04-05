import { isNull } from '../../src';

let a = null;
test('判断类型 Null',()=>{
  expect(isNull(a)).toBe(true);
})
