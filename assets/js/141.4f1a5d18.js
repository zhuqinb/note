(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{418:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"模块概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块概述","aria-hidden":"true"}},[s._v("#")]),s._v(" 模块概述")]),s._v(" "),a("p",[s._v("nodejs 中，提供了"),a("strong",[s._v("url")]),s._v("这个非常实用的模块，用来做 URL 的解析。在做 node 服务端的开发时会经常用到。使用很简单，总共只有 3 个方法。")]),s._v(" "),a("p",[s._v("正式讲解前，各位同学先把下面这个图记在心上（来自 nodejs 官网），先对 URL 有一个直观的认识。")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/images/NodeJs/models/url-01.png"),alt:"foo"}}),s._v(" "),a("h2",{attrs:{id:"模块方法概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块方法概述","aria-hidden":"true"}},[s._v("#")]),s._v(" 模块方法概述")]),s._v(" "),a("p",[s._v("url 模块三个方法分别是：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v(".parse(urlString)")]),s._v("：将 url 字符串，解析成 object，便于开发者进行操作。")]),s._v(" "),a("li",[a("strong",[s._v(".format(urlObj)")]),s._v("：.parse() 方法的反向操作。")]),s._v(" "),a("li",[a("strong",[s._v(".resove(from, to)")]),s._v("：以 from 作为起始地址，解析出完整的目标地址（还是看直接看例子好些）")])]),s._v(" "),a("h2",{attrs:{id:"url-解析：url-parse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-解析：url-parse","aria-hidden":"true"}},[s._v("#")]),s._v(" url 解析：url.parse()")]),s._v(" "),a("blockquote",[a("p",[s._v("完整语法：url.parse(urlString[, parseQueryString[, slashesDenoteHost]])")])]),s._v(" "),a("p",[s._v("使用比较简单，几个要点备忘如下。")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("parseQueryString")]),s._v("：（默认为 false）如为 false，则"),a("code",[s._v("urlObject.query")]),s._v("为未解析的字符串，比如"),a("code",[s._v("nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1")]),s._v("，且对应的值不会 decode；如果"),a("code",[s._v("parseQueryString")]),s._v("为 true，则"),a("code",[s._v("urlObject.query")]),s._v("为 object，比如"),a("code",[s._v("{ nick: '程序猿小卡' }")]),s._v("，且值会被 decode；")]),s._v(" "),a("li",[a("strong",[s._v("slashesDenoteHos")]),s._v("：（默认为 false）如果为 true，那么类似"),a("code",[s._v("//foo/bar")]),s._v("里的"),a("code",[s._v("foo")]),s._v("就会被认为是"),a("code",[s._v("hostname")]),s._v("；如果为 false，则"),a("code",[s._v("foo")]),s._v("被认为是 pathname 的一部分。")]),s._v(" "),a("li",[s._v("关于解析得到的 urlObject ，会在下一小节进行详细介绍。")])]),s._v(" "),a("h3",{attrs:{id:"例子-1：参数值不进行解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子-1：参数值不进行解析","aria-hidden":"true"}},[s._v("#")]),s._v(" 例子 1：参数值不进行解析")]),s._v(" "),a("p",[s._v("代码如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("输出如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("Url "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  protocol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  slashes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Chyingp:HelloWorld'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ke.qq.com:8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ke.qq.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#part=1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  pathname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"例子-2：对参数值进行-decode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子-2：对参数值进行-decode","aria-hidden":"true"}},[s._v("#")]),s._v(" 例子 2：对参数值进行 decode")]),s._v(" "),a("p",[s._v("代码如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("输出如下，对比上面的例子会发现，"),a("strong",[s._v("query")]),s._v(" 字段被解析成了 object，并且 decode 过。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Url "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  protocol: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http:'")]),s._v(",\n  slashes: true,\n  auth: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Chyingp:HelloWorld'")]),s._v(",\n  host: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ke.qq.com:8080'")]),s._v(",\n  port: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8080'")]),s._v(",\n  hostname: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ke.qq.com'")]),s._v(",\n  hash: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#part=1'")]),s._v(",\n  search: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1'")]),s._v(",\n  query: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" nick: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'程序猿小卡'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  pathname: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/index.html'")]),s._v(",\n  path: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1'")]),s._v(",\n  href: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"例子-3：针对路径-foo-bar-的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子-3：针对路径-foo-bar-的处理","aria-hidden":"true"}},[s._v("#")]),s._v(" 例子 3：针对路径 //foo/bar 的处理")]),s._v(" "),a("p",[s._v("代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var url = require('url');\nvar str = '//foo/bar';\n\nvar obj = url.parse(str, true, false);\nconsole.log(obj);\n\nobj = url.parse(str, true, true);\nconsole.log(obj);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("输出如下，自行对比两者之间的差异：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Url "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  protocol: null,\n  slashes: null,\n  auth: null,\n  host: null,\n  port: null,\n  hostname: null,\n  hash: null,\n  search: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(",\n  query: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  pathname: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'//foo/bar'")]),s._v(",\n  path: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'//foo/bar'")]),s._v(",\n  href: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'//foo/bar'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nUrl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  protocol: null,\n  slashes: true,\n  auth: null,\n  host: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),s._v(",\n  port: null,\n  hostname: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),s._v(",\n  hash: null,\n  search: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(",\n  query: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  pathname: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/bar'")]),s._v(",\n  path: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/bar'")]),s._v(",\n  href: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'//foo/bar'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("h2",{attrs:{id:"关于-urlobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-urlobject","aria-hidden":"true"}},[s._v("#")]),s._v(" 关于 urlObject")]),s._v(" "),a("p",[s._v("以上面的作为例子，粗略讲解下"),a("code",[s._v("urlObject")]),s._v("。更多细节可参考"),a("a",{attrs:{href:"https://nodejs.org/api/url.html#url_url_strings_and_url_objects",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("ul",[a("li",[s._v("protocol：协议，需要注意的是包含了"),a("code",[s._v(":")]),s._v("，并且是小写的。")]),s._v(" "),a("li",[s._v("slashes：如果"),a("code",[s._v(":")]),s._v("后面跟了两个"),a("code",[s._v("//")]),s._v("，那么为 true。")]),s._v(" "),a("li",[s._v("auth：认证信息，如果有密码，为"),a("code",[s._v("usrname:passwd")]),s._v("，如果没有，则为"),a("code",[s._v("usrname")]),s._v("。注意，这里区分大小写。")]),s._v(" "),a("li",[s._v("host：主机名。注意包含了端口，比如"),a("code",[s._v("ke.qq.com:8080")]),s._v("，并且是小写的。")]),s._v(" "),a("li",[s._v("hostname：主机名，不包含端口，并且是小写的。")]),s._v(" "),a("li",[s._v("hash：哈希部分，注意包含了"),a("code",[s._v("#")]),s._v("。")]),s._v(" "),a("li",[s._v("search：查询字符串，注意，包含了"),a("code",[s._v("?")]),s._v("，此外，值是没有经过 decode 的。")]),s._v(" "),a("li",[s._v("query：字符串 或者 对象。如果是字符串，则是"),a("code",[s._v("search")]),s._v("去掉"),a("code",[s._v("?")]),s._v("，其余一样；如果是对象，那么是 decode 过的。")]),s._v(" "),a("li",[s._v("path：路径部分，包含 search 部分。")]),s._v(" "),a("li",[s._v("pathname：路径部分，不包含 search 部分。")]),s._v(" "),a("li",[s._v("href：原始的地址。不过需要注意的是，"),a("code",[s._v("protocol")]),s._v("、"),a("code",[s._v("host")]),s._v("会被转成小写字母。")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  protocol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  slashes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Chyingp:HelloWorld'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ke.qq.com:8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ke.qq.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#part=1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" nick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'程序猿小卡'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  pathname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"url-拼接：url-format-urlobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-拼接：url-format-urlobject","aria-hidden":"true"}},[s._v("#")]),s._v(" url 拼接：url.format(urlObject)")]),s._v(" "),a("blockquote",[a("p",[s._v("完整语法：url.format(urlObject)")])]),s._v(" "),a("p",[a("code",[s._v("url.parse(str)")]),s._v("的反向操作，没什么好说的。"),a("code",[s._v("urlObject")]),s._v("包含了很多字段，比如"),a("code",[s._v("protocol")]),s._v("、"),a("code",[s._v("slashes")]),s._v("、"),a("code",[s._v("protocol")]),s._v("等，且不一定需要全部传，所以有一套解析逻辑。")]),s._v(" "),a("p",[s._v("过程比较冗长，大部分时候不需要用到，直接贴"),a("a",{attrs:{href:"https://nodejs.org/api/url.html#url_url_format_urlobject",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1),s._v("的链接，有需要再看。")]),s._v(" "),a("h2",{attrs:{id:"url-resolve-from-to"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-resolve-from-to","aria-hidden":"true"}},[s._v("#")]),s._v(" url.resolve(from, to)")]),s._v(" "),a("p",[s._v("用法比较简单，直接贴官方文档的例子")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/one/two/three'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'four'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// '/one/two/four'")]),s._v("\nurl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://example.com/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/one'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'http://example.com/one'")]),s._v("\nurl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://example.com/one'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/two'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'http://example.com/two'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"非法字符转义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非法字符转义","aria-hidden":"true"}},[s._v("#")]),s._v(" 非法字符转义")]),s._v(" "),a("p",[s._v("url 字符如果有下面的字符会被转义（非法字符）")]),s._v(" "),a("blockquote",[a("p",[s._v("< > \" ` \\r \\n \\t { } | \\ ^ '")])]),s._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接","aria-hidden":"true"}},[s._v("#")]),s._v(" 相关链接")]),s._v(" "),a("p",[s._v("官方文档："),a("a",{attrs:{href:"https://nodejs.org/api/url.html#url_url",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nodejs.org/api/url.html#url_url"),a("OutboundLink")],1)])])},[],!1,null,null,null);t.default=r.exports}}]);