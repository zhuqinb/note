# flex 布局

## 兼容性

ie10+

## 说明

<img :src="$withBase('/images/css/flex-01.png')" alt="foo">

## flex 布局是什么

任何一个容器都可以指定 flex 布局

```css
display: flex | inline-flex;

/* webkit 内核*/
display: -webkit-flex;
```

::: warning
设为 Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。
:::

## 基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做 main start，结束位置叫做 main end；交叉轴的开始位置叫做 cross start，结束位置叫做 cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size。

## 容器的属性

-   flex-direction
-   flex-wrap
-   flex-flow
-   justify-content
-   align-items
-   align-content

### flex-direction

确定属性主轴的方向

```css
flex-direction: row | row-reverse | column | column-reverse;
```

1. row(默认值): 主轴为水平方向，起点在左端
1. row-reverse: 主轴为水平方向，起点在右端
1. column: 主轴为垂直方向，起点为上沿
1. column-reverse: 主轴为垂直方向，起点在下沿

### flex-wrap

决定换行行为

```css
flex-wrap: nowrap|wrap|wap-reverse;
```

1. nowrap: 默认值
1. wrap: 换行，第一行在上面
1. wrap-reverse: 换行，第一行在下面

### flex-flow

flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值 row nowrap

```css
flex-flow: <flex-direction> || <flex-wrap>;
```

### justify-content 属性

定义了项目在主轴的对齐方式

```css
jusify-content: flex-start | flex-end | center | space-between | space-around;
```

1. flex-start: 左对齐
1. flex-end: 右对齐
1. center: 居中
1. space-between: 两端对齐，项目之间的间隔都相等
1. space-around: 每个项目的间隔相等。所以，项目之间的间隔比项目与边框的间隔要大一倍

### align-items

属性定义项目在交叉轴上如何对齐

```css
align-items: flex-start | flex-end | center | baseline | stretch;
```

1. flex-start: 交叉轴的起点对齐
1. flex-end: 交叉轴的终点对齐
1. center: 交叉轴的中点对齐
1. baseline: 项目的第一行文字的基线对齐
1. stretch(默认值)：如果项目为设置高度或设置 auto，将占满整个容器的高度

### align-content

定义了多根轴线的对齐方式，如果项目只有一根轴线，该属性不起作用

```css
align-content: flex-start | flex-end | center | space-between | space-around;
```

1. flex-start: 与交叉轴的起点对齐
1. flex-end: 与交叉轴的终点对齐
1. center: 与交叉轴的中点对齐
1. space-between: 与交叉轴两端对齐，轴线之间的间隔平均分布
1. space-around: 没根轴线两侧的间隔相等，所以，轴线之间的间隔比轴线与边框的间隔大一倍
1. stretch(默认值): 轴线占满整个交叉轴

## 项目的属性

-   order
-   flex-grow
-   flex-shrink
-   flex-basis
-   flex
-   align-self

### order

order 属性定义项目的排列顺序，数值越小，排列越靠前，默认为 0

```css
order: <integer>;
```

### flex-grow

定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大

```css
flex-grow: <number>; /*default 0*/
```

如果所有的 flex-grow 属性都为 1，则他们将等分剩余空间（如果有的话）。如果一个项目的 flex-grow 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项目大一倍

###flex-shrink
定义项目的缩放比例，默认值为 1，即如果空间不足，该项目将缩小

```css
flex-shrink: <number>; /*default 1*/
```

如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小，如果一个 i 而项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小

负值对该属性无效

### flex-basis

定义在分配多余空间之前，项目占据的主轴空间，浏览器根据这个属性，计算主轴是否有多余空间，它的默认值为 auto，即项目的本来大小

```css
flex-basis: <length> | auto; /* default auto */
```

它可以设为跟 width 或 height 属性一样的值(比如 200px),则项目将占据固定空间

### flex

flex-grow 与 flex-shrink 和 flex-basis 的简写，默认值 0 1 auto

```css
flex: none | [< 'flex-grow' >< 'flex-shrink' >? || < 'flex-basis' >];
```

该属性有两个快捷值: auto(1 1 auto) 和 none(0 0 auto)

建议优先使用这个属性，而不是单独写三个分离的属性，应为浏览器会推算相关值

### align-self

align-self 属性允许单个项目由于其他项目不一样的对齐方式，可覆盖 align-items 属性，默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

改属性可能取 6 个值，除了 auto，其他都 align-items 属性完全一致

(参考:)[http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html]
