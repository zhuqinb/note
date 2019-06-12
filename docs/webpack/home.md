版本号：v4.32.2

## 可以解决什么问题？

构建就是把源代码转换成发布到线上的可执行 js、css、html 代码：

-   代码转换： TypeScript 编译成 js、SCSS 编译成 CSS...
-   文件优化： 压缩 js、css、html 代码，压缩合并图片...
-   代码分割： 提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载
-   模块合并： 在采用模块化的项目里会有多个模块和文件，需要构建功能把模块分类合并成一个文件
-   自动刷新： 监听本地源代码的变化，自动重新构建、刷新浏览器
-   代码校验： 在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。
-   自动发布： 更新完代码后，自动构建线上发布并传输给发布系统。

## 打包需要注意的点？

### 路径

1. webpack 的路径是相对于`package.json`

2. 如果使用 `path.resolve(__dirname)` 读的是相对文件目录

## 使用`package script`脚本工具

见 scripts.md

## 处理引用的第三方库，暴露全局变量

```js
module.exports = {
	plugins: [
		webpack.ProvidePlugin({
			$: 'jquery'
		})
	]
}
```

## 常见功能列表

### clean-webpack-plugin

### html-webpack-plugin

### mini-css-extract-plugin

`npm i mini-css-extract-plugin -D`

抽出 `css` 在使用 `link` 引用

### 处理 style-loader (处理 css)

处理 `css` 模块后，创建在 `style` 中显示

### 处理 css-loader (处理 css)

识别 `css`

### 处理 less-loader (处理 css)

需要安装 `less`

### 处理 scss—loader (处理 css)

> npm i scss scss-loader -D

需要安装 `scss`

### 处理 postcss—loader (处理 css)

> npm i postcss-loader -D

### 处理 autoprefixer (处理 css)

> npm i autoprefixer -D

### optimize-css-assets-webpack-plugin (处理 css)

压缩 `css` 文件

> npm i optimize-css-assets-webpack-plugin -D

### uglifyjs-webpack-plugin

> npm i uglifyjs-webpack-plugin -D

见 optimize-css-assets-webpack-plugin.md

### 高版本语法转换(babel)

> npm i babel-loader @babel/core @babel/preset-env -D

### js 内置高本的 api 转换(babel)

> npm i @babel-plugin-transform-runtime

上线版本：

> npm i @babel-runtime

### 全局变量使用

> npm i expose-loader --save-dev

### 图片问题

参考 image

### copy-webpack-plugin

webpack 内置可进行文件复制的插件

### banner-plugin

webpack 内置 可用作版权的控制
