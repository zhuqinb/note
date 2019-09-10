# 移动端开发像素和 DPR 讲解

## 各个尺寸的含义

逻辑像素 css 的 px

设备像素 是指屏幕的物理像素

dpr 设备像素比 DPR(devicePixelRatio)是默认缩放为 100%的情况下，设备像素和 CSS 像素的比值；是设备像素/逻辑像素（某一方向的）

一般情况下设置

```html
<meta
	name="viewport"
	content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
/>
```

device-width 在 html 中也同样被解读为理想（基准）视口的宽度，即 320px，375px，414px，这里的 px 就是指 css 像素，通常也被称为逻辑像素；那我们可以认为 html 中的 css 像素的显示尺寸应该和 NA 中的 pt、dp 的显示尺寸相等。

## 单位

-   px：pixel，像素，屏幕上显示的最小单位，用于网页设计，直观方便；
-   pt：point，是一个标准的长度单位，1pt ＝ 1/72 英寸，用于印刷业，非常简单易用；
-   em：即％，在 CSS 中，1em ＝ 100％，是一个比率，结合 CSS 继承关系使用，具有灵活性。
-   PPI（DPI）：pixel（dot）per inch，每英寸的像素（点）数，是一个率，表示了“清晰度”，“精度”

## rem 和 vw 配合

### 方案

```html
<meta
	name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
/>
```

```css
/* 适配移动端 */
html {
	font-size: 13.33333333vw;
}
/* 移动端之外 */
@media (min-width: 560px) {
	html {
		font-size: 54px;
	}
}
```

上面代码即可以解决设计稿（750px）移动端适配的问题

此时设计稿的 1px 对应的就是 0.01rem

### 原理

vw 永远相对屏幕的百分比，上面我们说了 vw 表示 1%的屏幕宽度,而我们的设计稿通常是 750px 的,屏幕一共是 100vw,对应 750px,那么 1px 就是 0.1333333vw, 为了方便计算,我们放大 100 倍,同时我们知道另一个单位 rem,rem 是相对 html 元素,为了方便计算,我们取 html 是 100px,通过上面的计算结果 1px 是 0.13333333vw,那么 100px 就是 13.333333vw 了.这样后面的用 rem 就很好计算了,这样就得到 13.3333333vw 对应 100px(750px 的 设计稿),然后我们就可以很愉快的写 rem 单位了, 由于倍率是 100,我们也不需要啥计算插件之类的了,除以 100,直接小数点向左移动 2 位,1rem 是 100px,那么 10px 就是 0.1rem,1px 就是 0.01rem,小学生都会算了, 不需要用 postcss-px-to-viewport 这种工具转成一堆小数位特长的 rem 单位了,而且这个很方便,直接写 rem,并不需要转换,用了转换工具 如果想写 px 的地方还得设置白名单或者黑名单,这个就不存在这种问题了, 想用相对的就 rem,想绝对的就直接写 px 即可,并不需要其他的各种设置.是不是很简单?

改进版:经过一些实践,发现此方案只能兼容手机,甚至连 ipad 兼容都不好,当然,此处的兼容不是兼容问题,是效果问题,只要兼容 vw 的设备都能用这个方案,但是由于适配的根本是 vw 这个, 这个会随着设备的宽度越来越大,那么用 rem 做单位的元素也会越来越大,以至于如果这个在 pc 上,那么没法预览了,效果会很差,字太大了.这样我们可以设置一下当屏幕过大的时候的情况,我们可以加一句代码

```css
@media (min-width: 560px) {
	html {
		font-size: 54px;
	}
}
```

## rem 加转换工具解决适配问题

## 参考

[https://blog.csdn.net/a419419/article/details/79295799](https://blog.csdn.net/a419419/article/details/79295799)

[https://my.oschina.net/cc4zj/blog/2254551](https://my.oschina.net/cc4zj/blog/2254551)

[vw+rem 实现最简单的响应式布局](https://www.jianshu.com/p/5d7779473413)

[如何在 Vue 项目中使用 vw 实现移动端适配](https://www.jianshu.com/p/1f1b23f8348f)
