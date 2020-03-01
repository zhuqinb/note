(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{343:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"错误一：will-change-和-translatez-0-作用是一样的。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#错误一：will-change-和-translatez-0-作用是一样的。","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误一：will-change 和 translateZ(0)作用是一样的。")]),t._v(" "),e("p",[t._v("这一块，我们都知道如果想要加速 GPU 渲染就使用类似于 hack 的 translateZ(0)或者是 CSS 新属性 will-change，那么这两者的原理是什么，具体的使用情况是什么？\n其实他们就是一个提升层的概念，将之后可能会改变的元素从当前的层中抽离，阻止 composition，这样这部分修改的时候就不会影响整个页面的布局，从而阻止了 reflow。\n那么 translateZ(0)的作用是否和 will-change 一样呢？不！\n虽然他们都是提升层，但是 will-change 带有缓存作用，也就是说 change 的内容会被缓存，只有第一动画回 paint 之后的重复动画就不会再绘制，但是 translateZ(0)每次动画都会重新绘制。可以说 will-change 对于重复动画很有好了。但是！不要滥用哦~will-change 会缓存，因此很占内存。大家慎用。")]),t._v(" "),e("h2",{attrs:{id:"steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#steps","aria-hidden":"true"}},[t._v("#")]),t._v(" steps")]),t._v(" "),e("p",[t._v("TODO: css 动画里 steps()用法 https://segmentfault.com/a/1190000007042048\ncss 动画里的 steps()用法详解")])])},[],!1,null,null,null);a.default=n.exports}}]);