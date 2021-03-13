import { arraySort } from "../../src";

let ary1 = ['1', '3', '23', 2, 5];

test('数组值大小排序', ()=> {
  expect(arraySort(ary1)).toEqual(['1', 2, '3', 5, '23']);
})
