## 简介：

jsdom 是许多 Web 标准的纯 JavaScript 实现，特别是 WHATWG DOM 和 HTML 标准，
用于 Node.js. 通常，该项目的目标是模拟足够的 Web 浏览器子集，
以便测试和抓取现实世界的 Web 应用程序。
最新版本的 jsdom 需要 Node.js v8 或更新版本。（低于 v12 的 jsdom 版本仍可与 Node.js v6 一起使用，但不受支持。）

## 基本用法：

```js
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)
console.log(dom.window.document.querySelector('p').textContent) // "Hello world"
```
