import { isFunction } from '../../src';

let a = function () {};

let b = Function;

test('判断类型 Function',()=>{
  expect(isFunction(a)).toBe(true);
});

test('判断类型 Function',()=>{
  expect(isFunction(b)).toBe(true);
})
