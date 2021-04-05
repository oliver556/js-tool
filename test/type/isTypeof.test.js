import { getTypeof } from '../../src';

test('String 类型判断',()=>{
  expect(getTypeof('10')).toBe('String');
})

test('Number 类型判断',()=>{
  expect(getTypeof(10)).toBe('Number');
})

test('Boolean 类型判断',()=>{
  expect(getTypeof(true)).toBe('Boolean');
})

test('Symbol 类型判断',()=>{
  expect(getTypeof(Symbol())).toBe('Symbol');
})

test('Undefined 类型判断',()=>{
  expect(getTypeof(undefined)).toBe('Undefined');
})

test('Null 类型判断',()=>{
  expect(getTypeof(null)).toBe('Null');
})

test('Date 类型判断',()=>{
  expect(getTypeof(new Date())).toBe('Date');
})

test('Array 类型判断',()=>{
  expect(getTypeof([])).toBe('Array');
})

test('RegExp 类型判断',()=>{
  expect(getTypeof(RegExp())).toBe('RegExp');
})

// test('Error 类型判断',()=>{
//   expect(getTypeof(Error)).toBe('Error');
// })

test('HTMLDocument 类型判断',()=>{
  expect(getTypeof(document)).toBe('Document');
})

test('HTMLDocument 类型判断',()=>{
  expect(getTypeof(window)).toBe('Window');
})
