// 帮助寻找node_modules里的包
import { nodeResolve } from "@rollup/plugin-node-resolve";
// rollup 的 babel 插件，压缩代码插件
import { terser } from "rollup-plugin-terser";
// rollup 的 babel 插件，ES6转ES5
import babel from "@rollup/plugin-babel";
// 声明引用文件内容变量
import pkg from "./package.json";
// 要打包的文件源路径(应用程序的主要入口点)
const input = ["./src/index"];

// https://juejin.cn/post/6844904058394771470#heading-42
// Rollup打包工具的使用（超详细，超基础，附代码截图超简单）
export default [
  {
    // UMD
    input,
    // external: ['lodash'], // 告诉rollup，不打包 lodash 将其视为外部依赖
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: "bundled",
      }),
      terser(),
    ],
    // 文件输出配置
    // 五种输出格式：amd /  es6 / iife / umd / cjs
    output: {
      file: `dist/${pkg.name}.min.js`, // 打包后生产的文件位置,及文件名
      // format : 输出 ＵＭＤ格式，各种模块规范通用
      format: "umd",
      // name : 当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
      // name : this is the name of the global object
      name: "stool",
      esModule: false,
      exports: "named",
      // sourcemap: true, // 生成bundle.map.js文件，方便调试
    },
  },
// ESM and CJS
  {
    input,
    plugins: [
      nodeResolve()
      // 压缩代码
      // terser()
    ],
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        exports: "named",
        // sourcemap: true,
      },
      {
        dir: "dist/cjs",
        format: "cjs", // 文件的输出格式(CommonJS规范,是Node.js的官方模块化规范)
        exports: "named",
        // sourcemap: true,
      },
    ],
  },
];
