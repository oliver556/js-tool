import { formatTime } from '../../src';

test('String 类型判断',()=>{
  expect(formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}')).toBe('2018/01/29 00:00:00');
})
