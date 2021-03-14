import { sChangeCase } from "../../src";

let a = 'aPPle';

test('字符串大小写转换 : 只有首字母大写', () => {
  expect(sChangeCase(a, 1)).toBe('Apple');
})

test('字符串大小写转换 : 只有首字母小写', () => {
  expect(sChangeCase(a, 2)).toBe('aPPLE');
})

test('字符串大小写转换 : 大小写转换', () => {
  expect(sChangeCase(a, 3)).toBe('AppLE');
})

test('字符串大小写转换 : 全部大写', () => {
  expect(sChangeCase(a, 4)).toBe('APPLE');
})

test('字符串大小写转换 : 全部小写', () => {
  expect(sChangeCase(a, 5)).toBe('apple');
})
