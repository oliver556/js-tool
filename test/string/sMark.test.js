import { sMask } from "../../src";

let a = '12398765432';

test('根据位置,使用 * 遮蔽字符串', () => {
  expect(sMask(a, 3, 7)).toBe('123****5432');
})
