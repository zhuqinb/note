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
