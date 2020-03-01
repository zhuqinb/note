(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{355:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),a("p",[t._v("块级格式化上下文，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。")]),t._v(" "),a("p",[t._v("IE 下为 Layout，可通过 zoom:1 触发")]),t._v(" "),a("p",[t._v("触发条件:")]),t._v(" "),a("ul",[a("li",[t._v("根元素")]),t._v(" "),a("li",[t._v("position: absolute/fixed")]),t._v(" "),a("li",[t._v("display: inline-block / table")]),t._v(" "),a("li",[t._v("float 元素")]),t._v(" "),a("li",[t._v("ovevflow !== visible")])]),t._v(" "),a("p",[t._v("规则:")]),t._v(" "),a("ul",[a("li",[t._v("属于同一个 BFC 的两个相邻 Box 垂直排列")]),t._v(" "),a("li",[t._v("属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠")]),t._v(" "),a("li",[t._v("BFC 中子元素的 margin box 的左边， 与包含块 (BFC) border box 的左边相接触 (子元素 absolute 除外)")]),t._v(" "),a("li",[t._v("BFC 的区域不会与 float 的元素区域重叠")]),t._v(" "),a("li",[t._v("计算 BFC 的高度时，浮动子元素也参与计算")]),t._v(" "),a("li",[t._v("文字层不会被浮动层覆盖，环绕于周围")])]),t._v(" "),a("p",[t._v("应用:")]),t._v(" "),a("ul",[a("li",[t._v("阻止 margin 重叠")]),t._v(" "),a("li",[t._v("可以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个 div 都位于同一个 BFC 区域之中)")]),t._v(" "),a("li",[t._v("自适应两栏布局")]),t._v(" "),a("li",[t._v("可以阻止元素被浮动元素覆盖")])]),t._v(" "),a("h2",{attrs:{id:"居中布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#居中布局","aria-hidden":"true"}},[t._v("#")]),t._v(" 居中布局")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("水平居中")]),t._v(" "),a("ul",[a("li",[t._v("行内元素: text-align: center")]),t._v(" "),a("li",[t._v("块级元素: margin: 0 auto")]),t._v(" "),a("li",[t._v("absolute + transform")]),t._v(" "),a("li",[t._v("flex + justify-content: center")])])]),t._v(" "),a("li",[a("p",[t._v("垂直居中")]),t._v(" "),a("ul",[a("li",[t._v("line-height: height")]),t._v(" "),a("li",[t._v("absolute + transform")]),t._v(" "),a("li",[t._v("flex + align-items: center")]),t._v(" "),a("li",[t._v("table")])])]),t._v(" "),a("li",[a("p",[t._v("水平垂直居中")]),t._v(" "),a("ul",[a("li",[t._v("absolute + transform")]),t._v(" "),a("li",[t._v("flex + justify-content + align-items")])])])]),t._v(" "),a("h2",{attrs:{id:"左右布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#左右布局","aria-hidden":"true"}},[t._v("#")]),t._v(" 左右布局")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("方式一：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrapper")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".left")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方式一 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 右边使用bfc */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方法二 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden / overlay / auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方式三 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" table / table-cell / left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100% - 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方式四 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrapper")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 使用flex布局 */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 方式五 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrapper")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".left")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 或者 */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br")])]),a("h2",{attrs:{id:"盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 盒子模型")]),t._v(" "),a("ol",[a("li",[t._v("ie 盒模型算上 border、padding 及自身（不算 margin），标准的只算上自身窗体的大小 css 设置方法如下")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 标准模型 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*IE模型*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("几种获得宽高的方式")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("dom.style.width/height")]),t._v(" 这种方式只能取到 dom 元素内联样式所设置的宽高，也就是说如果该节点的样式是在 style 标签中或外联的 CSS 文件中设置的话，通过这种方法是获取不到 dom 的宽高的。")]),t._v(" "),a("li",[a("code",[t._v("dom.currentStyle.width/height")]),t._v(" 这种方式获取的是在页面渲染完成后的结果，就是说不管是哪种方式设置的样式，都能获取到。但这种方式只有 IE 浏览器支持。")]),t._v(" "),a("li",[a("code",[t._v("window.getComputedStyle(dom).width/height")]),t._v(" 这种方式的原理和 2 是一样的，这个可以兼容更多的浏览器，通用性好一些。")]),t._v(" "),a("li",[a("code",[t._v("dom.getBoundingClientRect().width/height")]),t._v(" 这种方式是根据元素在视窗中的绝对位置来获取宽高的")]),t._v(" "),a("li",[a("code",[t._v("dom.offsetWidth/offsetHeight")]),t._v(" 这个就没什么好说的了，最常用的，也是兼容最好的。")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("拓展 各种获得宽高的方式")])]),t._v(" "),a("ul",[a("li",[t._v("获取屏幕的高度和宽度（屏幕分辨率）："),a("code",[t._v("window.screen.height/width")])]),t._v(" "),a("li",[t._v("获取屏幕工作区域的高度和宽度（去掉状态栏）："),a("code",[t._v("window.screen.availHeight/availWidth")])]),t._v(" "),a("li",[t._v("网页全文的高度和宽度："),a("code",[t._v("document.body.scrollHeight/Width")])]),t._v(" "),a("li",[t._v("滚动条卷上去的高度和向右卷的宽度："),a("code",[t._v("document.body.scrollTop/scrollLeft")])]),t._v(" "),a("li",[t._v("网页可见区域的高度和宽度（不加边线）："),a("code",[t._v("document.body.clientHeight/clientWidth")])]),t._v(" "),a("li",[t._v("网页可见区域的高度和宽度（加边线）："),a("code",[t._v("document.body.offsetHeight/offsetWidth")])])]),t._v(" "),a("h2",{attrs:{id:"选择器优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器优先级","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择器优先级")]),t._v(" "),a("ul",[a("li",[t._v("!important > 行内样式 > #id > .class > tag > "),a("code",[t._v("*")]),t._v(" > 继承 > 默认")]),t._v(" "),a("li",[t._v("选择器 从右到左 解析")])]),t._v(" "),a("h2",{attrs:{id:"css-reset-和-normalize-css-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-reset-和-normalize-css-有什么区别","aria-hidden":"true"}},[t._v("#")]),t._v(" css reset 和 normalize.css 有什么区别")]),t._v(" "),a("ul",[a("li",[t._v("两者都是通过重置样式，保持浏览器样式的一致性")]),t._v(" "),a("li",[t._v("前者几乎为所有标签添加了样式，后者保持了许多浏览器样式，保持尽可能的一致")]),t._v(" "),a("li",[t._v("后者修复了常见的桌面端和移动端浏览器的 bug：包含了 HTML5 元素的显示设置、预格式化文字的 font-size 问题、在 IE9 中 SVG 的溢出、许多出现在各浏览器和操作系统中的与表单相关的 bug。")]),t._v(" "),a("li",[t._v("前者中含有大段的继承链")]),t._v(" "),a("li",[t._v("后者模块化，文档较前者来说丰富")])]),t._v(" "),a("h2",{attrs:{id:"去除浮动影响-防止父级高度塌陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去除浮动影响-防止父级高度塌陷","aria-hidden":"true"}},[t._v("#")]),t._v(" 去除浮动影响,防止父级高度塌陷")]),t._v(" "),a("ul",[a("li",[t._v("通过增加尾元素清除浮动\n"),a("ul",[a("li",[t._v(":after / "),a("br"),t._v(" :clear: both")])])]),t._v(" "),a("li",[t._v("创建父级 BFC")]),t._v(" "),a("li",[t._v("父级设置高度")])]),t._v(" "),a("p",[t._v("万能清除法 after 伪类 清浮动（现在主流方法，推荐使用）")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".float_div:after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".float_div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("zoom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h2",{attrs:{id:"css-动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-动画","aria-hidden":"true"}},[t._v("#")]),t._v(" css 动画")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("transition: 过渡动画")]),t._v(" "),a("ul",[a("li",[t._v("transition-property: 属性")]),t._v(" "),a("li",[t._v("transition-duration: 间隔")]),t._v(" "),a("li",[t._v("transition-timing-function: 曲线")]),t._v(" "),a("li",[t._v("transition-delay: 延迟")]),t._v(" "),a("li",[t._v("常用钩子: transitionend")])])]),t._v(" "),a("li",[a("p",[t._v("animation / keyframes")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("animation-name: 动画名称，对应@keyframes")])]),t._v(" "),a("li",[a("p",[t._v("animation-duration: 间隔")])]),t._v(" "),a("li",[a("p",[t._v("animation-timing-function: 曲线")])]),t._v(" "),a("li",[a("p",[t._v("animation-delay: 延迟")])]),t._v(" "),a("li",[a("p",[t._v("animation-iteration-count: 次数")]),t._v(" "),a("ul",[a("li",[t._v("infinite: 循环动画")])])]),t._v(" "),a("li",[a("p",[t._v("animation-direction: 方向")]),t._v(" "),a("ul",[a("li",[t._v("alternate: 反向播放")])])]),t._v(" "),a("li",[a("p",[t._v("animation-fill-mode: 静止模式")]),t._v(" "),a("ul",[a("li",[t._v("forwards: 停止时，保留最后一帧")]),t._v(" "),a("li",[t._v("backwards: 停止时，回到第一帧")]),t._v(" "),a("li",[t._v("both: 同时运用 forwards / backwards")])])]),t._v(" "),a("li",[a("p",[t._v("常用钩子: animationend")])])])]),t._v(" "),a("li",[a("p",[t._v("动画属性: 尽量使用动画属性进行动画，能拥有较好的性能表现")]),t._v(" "),a("ul",[a("li",[t._v("translate")]),t._v(" "),a("li",[t._v("scale")]),t._v(" "),a("li",[t._v("rotate")]),t._v(" "),a("li",[t._v("skew")]),t._v(" "),a("li",[t._v("opacity")]),t._v(" "),a("li",[t._v("color")])])])]),t._v(" "),a("h2",{attrs:{id:"link-import-导入-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link-import-导入-css","aria-hidden":"true"}},[t._v("#")]),t._v(" link @import 导入 css")]),t._v(" "),a("ol",[a("li",[t._v("link 是 XHTML 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务；@import 属于 CSS 范畴，只能加载 CSS。")]),t._v(" "),a("li",[t._v("link 引用 CSS 时，在页面载入时同时加载；@import 需要页面网页完全载入以后加载。")]),t._v(" "),a("li",[t._v("link 无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持。")]),t._v(" "),a("li",[t._v("link 支持使用 Javascript 控制 DOM 去改变样式；而@import 不支持。")])])])},[],!1,null,null,null);s.default=e.exports}}]);