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
