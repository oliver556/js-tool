import { isSymbol } from '../../src';

let a = Symbol();
test('判断类型 Symbol',()=>{
  expect(isSymbol(a)).toBe(true);
})
