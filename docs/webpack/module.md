## use 的写法

`use : Array<String> | Array<Object> | String`

里面的 loader 是从右向左执行的,从下向上执行

1. 写成对象的形式，可以配置参数 `Array<Object>`

```js
module: {
	rules: [
		{
			test: '/.css$',
			use: [
				{
					loader: 'style-loader',
					options: {
						insertAt: 'top' //表示在html节点中 最上面显示，覆盖之前的
					}
				}
			]
		}
	]
}
```

2. 如果不需要配置参数，则可以简写 `Array<String>`

```js
module: {
	rules: [{ test: '/.css$', use: ['style-loader', 'css-loader'] }]
}
```
