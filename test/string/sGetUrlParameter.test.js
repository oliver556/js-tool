import { sGetUrlParameter } from "../../src";

let a = 'https://segmentfault.com/write?draftId=12200232342348&query=hello';
test('获取 url 中的参数', () => {
  expect(sGetUrlParameter(a)).toEqual({"draftId":"12200232342348","query":"hello"});
})
