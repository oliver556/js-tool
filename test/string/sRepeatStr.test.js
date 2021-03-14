import { sRepeatStr } from "../../src";

let a = '123';
let b = 123;

test('字符串循环复制', () => {
  expect(sRepeatStr(a, 2)).toBe('123123');
})

test('字符串循环复制', () => {
  expect(sRepeatStr(b, 2)).toBe('123123');
})
