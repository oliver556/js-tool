import { sGetEndTime } from "../../src";

let a = '2021/03/14 20:00:00';

// 当前时间：'Sun Mar 14 2021 19:30:00 GMT+0800 (中国标准时间)'

test('到某一个时间的倒计时', () => {
  expect(sGetEndTime(a)).toEqual('剩余时间: 0天 0小时 30分钟 0秒');
})
