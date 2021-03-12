import { isTypeof } from '../../src';

test('String 类型判断',()=>{
  expect(isTypeof('10')).toBe('String');
})

test('Number 类型判断',()=>{
  expect(isTypeof(10)).toBe('Number');
})

test('Boolean 类型判断',()=>{
  expect(isTypeof(true)).toBe('Boolean');
})

test('Symbol 类型判断',()=>{
  expect(isTypeof(Symbol())).toBe('Symbol');
})

test('Undefined 类型判断',()=>{
  expect(isTypeof(undefined)).toBe('Undefined');
})

test('Null 类型判断',()=>{
  expect(isTypeof(null)).toBe('Null');
})

test('Date 类型判断',()=>{
  expect(isTypeof(new Date())).toBe('Date');
})

test('Array 类型判断',()=>{
  expect(isTypeof([])).toBe('Array');
})

test('RegExp 类型判断',()=>{
  expect(isTypeof(RegExp())).toBe('RegExp');
})

// test('Error 类型判断',()=>{
//   expect(isTypeof(Error)).toBe('Error');
// })

test('HTMLDocument 类型判断',()=>{
  expect(isTypeof(document)).toBe('Document');
})

test('HTMLDocument 类型判断',()=>{
  expect(isTypeof(window)).toBe('Window');
})
