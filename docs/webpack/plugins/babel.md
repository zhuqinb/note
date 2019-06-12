## 转换新的语法

> npm i --save-dev babel-loader @babel/core @babel/preset-env

@babel/preset-env 用来解析新的语法 （ps: 视频说不能解析 class 这样新的内置语法，但是测试时可以转）

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: '[@babel/preset-env']
					}
				},
				include: path.resolve(__dirname, '../', 'src'),
				exclude: /node_modules/
			}
		]
	}
}
```

## 转换新的 api

如果像 class 这样更高级的转换不，可以使用下面的插件

比如 使用了 class 的语法

需要安装 '@babel/plugin-proposal-class-properties'

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						// 用babel-loader 需要把es6 转成 es5
						presets: ['@babel/preset-env'],
						plugins: [
							['@babel/plugin-proposal-class-properties'],
							['@babel/plugin-transform-runtime']
						]
					}
				}
			}
		]
	}
}
```

## 装饰器

转换类似 @log 这样类的装饰器，也是转换不了
https://babeljs.io/docs/en/babel-plugin-proposal-decorators

> npm i --save-dev @babel/plugin-proposal-decorators

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						// 用babel-loader 需要把es6 转成 es5
						presets: ['@babel/preset-env'],
						plugins: [
							[
								'@babel/plugin-proposal-decorators',
								{ legacy: true }
							],
							['@babel/plugin-proposal-class-properties']
						]
					}
				},
				include: path.resolve(__dirname, '../', 'src')
				exclude: /node_modules/
			}
		]
	}
}
```

```js
plugins: [
	['@babel/plugin-proposal-decorators', { legacy: true }],
	['@babel/plugin-proposal-class-properties', { loose: true }]
]
```

## 内置 api 比如 Promise Generator 的转换

[参考](https://babeljs.io/docs/en/babel-plugin-transform-runtime#docsNav)

> npm install --save-dev @babel/plugin-transform-runtime

并在生产模式下安装

> npm install --save @babel/runtime
> 此插件的作用：

1. 对于一些不识别的语法，babel 会重复使用某个工具，这样会有很多无用代码，这个可以避免此现象
2. 可以转换 Promise Generator Map Set 这样的语法

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						// 用babel-loader 需要把es6 转成 es5
						presets: ['@babel/preset-env'],
						plugins: [
							[
								'@babel/plugin-proposal-decorators',
								{ legacy: true }
							],
							['@babel/plugin-proposal-class-properties'],
							['@babel/plugin-transform-runtime']
						]
					}
				}
			}
		]
	}
}
```

## 有些 es7 语法不会解析

> npm i @babel/polyfill

file: js

```js
require('@babel/polyfill')

'aaa'.includes('a')
```

## eslint

> npm i --save-dev eslint eslint-loader

loader 默认是从右向左， 从下向上
但是配置了 enforce: 'pre' 之后会强制执行顺序 不设置默认是 normal 普通
pre 在 normal 之前执行
post 在 normal 之后执行

```js
module.exports = {
	rules: [
		{
			test: /\.js$/,
			use: {
				loader: 'eslint-loader',
				options: {
					enforce: 'pre' // previous
				}
			}
		},
		{
			test: /\.js$/,
			use: {
				loader: 'babel-loader'
			}
		}
	]
}
```
