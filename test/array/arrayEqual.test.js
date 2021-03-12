import { arrayEqual } from "../../src";

let ary1 = ['1'];
let ary2 = ['1'];

test('判断两个数组是否相等', ()=> {
  expect(arrayEqual(ary1, ary2)).toBe(true)
})
