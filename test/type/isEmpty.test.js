import { isEmpty } from '../../src';

let a = [];
test('判断元素是否为空，空数组',()=>{
  expect(isEmpty(a)).toBe(true);
})

let b = '';
test('判断元素是否为空，空字符串',()=>{
  expect(isEmpty(b)).toBe(true);
})


let c = {};
test('判断元素是否为空，空对象',()=>{
  expect(isEmpty(c)).toBe(true);
})
