import { isError } from '../../src';

let a = Error();
test('判断类型 Error',()=>{
  expect(isError(a)).toBe(true);
})
