import { sDigitUppercase } from '../../src';

test('阿拉伯数字现金额转大写',()=>{
  expect(sDigitUppercase('100')).toBe('壹佰元整');
})

test('阿拉伯数字现金额转大写',()=>{
  expect(sDigitUppercase(200)).toBe('贰佰元整');
})
