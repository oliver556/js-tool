import { sTrim } from "../../src";

let a = ' 1 23 45 '
test('去除所有空格', () => {
  expect(sTrim(a, 1)).toBe('12345');
})

test('去除前后空格', () => {
  expect(sTrim(a, 2)).toBe('1 23 45');
})

test('去除前空格', () => {
  expect(sTrim(a, 3)).toBe('1 23 45 ');
})

test('去除后空格', () => {
  expect(sTrim(a, 4)).toBe(' 1 23 45');
})
