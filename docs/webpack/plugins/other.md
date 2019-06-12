## copy-webpack-plugin

可进行文件的复制

```js
module.exports = {
	plugins: [new CopyWebpackPlugin([{ from: './doc', to: '/dist' }])]
}
```

## banner-plugin

webpack 内置 可用作版权的控制

```js
module.exports = {
	plugins: [new webpack.BannerPlugin('make 2019 6.8')]
}
```
