## BFC

块级格式化上下文，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。

IE 下为 Layout，可通过 zoom:1 触发

触发条件:

-   根元素
-   position: absolute/fixed
-   display: inline-block / table
-   float 元素
-   ovevflow !== visible

规则:

-   属于同一个 BFC 的两个相邻 Box 垂直排列
-   属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
-   BFC 中子元素的 margin box 的左边， 与包含块 (BFC) border box 的左边相接触 (子元素 absolute 除外)
-   BFC 的区域不会与 float 的元素区域重叠
-   计算 BFC 的高度时，浮动子元素也参与计算
-   文字层不会被浮动层覆盖，环绕于周围

应用:

-   阻止 margin 重叠
-   可以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个 div 都位于同一个 BFC 区域之中)
-   自适应两栏布局
-   可以阻止元素被浮动元素覆盖

## 居中布局

-   水平居中

    -   行内元素: text-align: center
    -   块级元素: margin: 0 auto
    -   absolute + transform
    -   flex + justify-content: center

-   垂直居中

    -   line-height: height
    -   absolute + transform
    -   flex + align-items: center
    -   table

-   水平垂直居中

    -   absolute + transform
    -   flex + justify-content + align-items

## 左右布局

```html
<div class="wrapper">
	<div class="left"></div>
	<div class="right"></div>
</div>
```

方式一：

```css
.wrapper {
	width: 100%;
	height: 100%;
	position: resolve;
}
.left {
	float: left;
	width: 100px;
}

/* 方式一 */
.right {
	margin-left: 100px;
}

/* 右边使用bfc */

/* 方法二 */
.right {
	overflow: hidden / overlay / auto;
}

/* 方式三 */
.right {
	display: table / table-cell / left;
	width: calc(100% - 100px);
}

/* 方式四 */
.wrapper {
	position: relative;
}
.right {
	left: 100px;
	position: absolute;
}

/* 使用flex布局 */

/* 方式五 */
.wrapper {
	display: flex;
}
.left {
	flex: 0 0 100px;
	/* 或者 */
	flex-basis: 100px;
}
.right {
	flex: auto;
}
```

## 盒子模型

1. ie 盒模型算上 border、padding 及自身（不算 margin），标准的只算上自身窗体的大小 css 设置方法如下

```css
/* 标准模型 */
box-sizing: content-box;
/*IE模型*/
box-sizing: border-box;
```

2. 几种获得宽高的方式

-   `dom.style.width/height` 这种方式只能取到 dom 元素内联样式所设置的宽高，也就是说如果该节点的样式是在 style 标签中或外联的 CSS 文件中设置的话，通过这种方法是获取不到 dom 的宽高的。
-   `dom.currentStyle.width/height` 这种方式获取的是在页面渲染完成后的结果，就是说不管是哪种方式设置的样式，都能获取到。但这种方式只有 IE 浏览器支持。
-   `window.getComputedStyle(dom).width/height` 这种方式的原理和 2 是一样的，这个可以兼容更多的浏览器，通用性好一些。
-   `dom.getBoundingClientRect().width/height` 这种方式是根据元素在视窗中的绝对位置来获取宽高的
-   `dom.offsetWidth/offsetHeight` 这个就没什么好说的了，最常用的，也是兼容最好的。

3. 拓展 各种获得宽高的方式

-   获取屏幕的高度和宽度（屏幕分辨率）：`window.screen.height/width`
-   获取屏幕工作区域的高度和宽度（去掉状态栏）：`window.screen.availHeight/availWidth`
-   网页全文的高度和宽度：`document.body.scrollHeight/Width`
-   滚动条卷上去的高度和向右卷的宽度：`document.body.scrollTop/scrollLeft`
-   网页可见区域的高度和宽度（不加边线）：`document.body.clientHeight/clientWidth`
-   网页可见区域的高度和宽度（加边线）：`document.body.offsetHeight/offsetWidth`

## 选择器优先级

-   !important > 行内样式 > #id > .class > tag > `*` > 继承 > 默认
-   选择器 从右到左 解析

## css reset 和 normalize.css 有什么区别

-   两者都是通过重置样式，保持浏览器样式的一致性
-   前者几乎为所有标签添加了样式，后者保持了许多浏览器样式，保持尽可能的一致
-   后者修复了常见的桌面端和移动端浏览器的 bug：包含了 HTML5 元素的显示设置、预格式化文字的 font-size 问题、在 IE9 中 SVG 的溢出、许多出现在各浏览器和操作系统中的与表单相关的 bug。
-   前者中含有大段的继承链
-   后者模块化，文档较前者来说丰富

## 去除浮动影响,防止父级高度塌陷

-   通过增加尾元素清除浮动
    -   :after / <br> :clear: both
-   创建父级 BFC
-   父级设置高度

万能清除法 after 伪类 清浮动（现在主流方法，推荐使用）

```css
.float_div:after {
	content: '.';
	clear: both;
	display: block;
	height: 0;
	overflow: hidden;
	visibility: hidden;
}
.float_div {
	zoom: 1;
}
```

## css 动画

-   transition: 过渡动画

    -   transition-property: 属性
    -   transition-duration: 间隔
    -   transition-timing-function: 曲线
    -   transition-delay: 延迟
    -   常用钩子: transitionend

-   animation / keyframes

    -   animation-name: 动画名称，对应@keyframes
    -   animation-duration: 间隔
    -   animation-timing-function: 曲线
    -   animation-delay: 延迟
    -   animation-iteration-count: 次数
        -   infinite: 循环动画
    -   animation-direction: 方向

        -   alternate: 反向播放

    -   animation-fill-mode: 静止模式

        -   forwards: 停止时，保留最后一帧
        -   backwards: 停止时，回到第一帧
        -   both: 同时运用 forwards / backwards

    -   常用钩子: animationend

-   动画属性: 尽量使用动画属性进行动画，能拥有较好的性能表现
    -   translate
    -   scale
    -   rotate
    -   skew
    -   opacity
    -   color

## link @import 导入 css

1. link 是 XHTML 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务；@import 属于 CSS 范畴，只能加载 CSS。
1. link 引用 CSS 时，在页面载入时同时加载；@import 需要页面网页完全载入以后加载。
1. link 无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持。
1. link 支持使用 Javascript 控制 DOM 去改变样式；而@import 不支持。
