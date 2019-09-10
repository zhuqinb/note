# 使用 display: table 布局

当 ie8 发布时，它将支持很多新的 css display 属性值，包括与表格相关的属性值: table、table-row、table-cell，它也是最后一款支持这些属性值的主流浏览器

网页元素应用上那些与表格相关的 display 属性值后，能够模仿与表格相同的特征。

## display 与 table 相关的属性

-   table 相当于 table 标签
-   table-row 相当于 tr 标签
-   table-cell 相当于 td 标签
-   table-column 会作为一个单元格列显示 类似 col
-   table-row-group 作为一个或多个行的分组来显示类似 tbody
-   table-header-group 作为一个或多个行的分组来显示类似 thead
-   table-footer-group 作为一个或多个分组来显示类似 tfoot
-   table-column-group 会作为一个或多个列的分组来显示类类似 colgroup
-   table-caption 会作为一个表格标题显示 类似 caption

## 用途

### 多行文本水平垂直居中

```html
<div>
	<span>两行文本两行文本两行文本两行文本</span>
</div>
```

```scss
div {
	display: table;
	span {
		display: table-cell;
		vertical-align: middle;
	}
}
```

### 两栏一边固定，一边自适应布局

```html
<div class="wrapper">
	<div class="left">left</div>
	<div class="right">right</div>
</div>
```

```scss
div {
	display: table;
	&::after {
		content: ' ';
		display: table;
		clear: both;
	}
	.left {
		float: left;
		margin-right: 10px;
	}
	.right {
		display: table-cell;
	}
}
```

## 注意点

1. table 至少有一个 display: table 和 display: table-cell 和 html 的 table 类似，只用这个属性后，就可以使用 table 的 css 样式，如 border-collapse、text-aligin、vertical-align、border-spacing、caption-side、empty-cells
2. table-cell 同样会被其他一些 css 属性破坏，例如 float、position：absolute，所以，在使用 display：table-cell 与 float：left 或 position:absolute 属性尽量不要同时使用
3.  - display: table 时 padding 会失效
    - display: table-row 时 margin、padding 同时失效
    - display: table-cell 时 margin 会失效
