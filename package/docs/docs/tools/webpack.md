#### 尝试使用webpack

##### 清除webpack build时候的dist文件
`clean-webpack-plugin`
```
plugins: [
    new CleanWebpackPlugin(['dist'],{
        root: path.resolve(__dirname, '../'),
        verbose: true //是否始终打印日志在控制台，默认false
    }),
]
```
>注意：当webpack的配置文件不在根目录下的时候，一定要配置root，否者会出现错误
```
    clean-webpack-plugin: D:\workspace\build-tools\webpack\dist is outside of the project root. Skipping...
```

##### 代码压缩插件
`uglifyjs-webpack-plugin`
```
uglifyOptions: {
    ie8: true,
    compress: {
        warnings: true,  //删除无法访问的代码或未使用的声明等时显示警告
        drop_console: true, // 删除 console.* 函数
        unsafe_proto: true  //false- 优化表达式，如 Array.prototype.slice.call(a)into[].slice.call(a)
    }, 
    output: {
        beautify: false, //不要美化代码
        comments: false  //（默认false） - 传递true或"all"保留所有注释，"some"保留一些注释，正则表达式字符串（例如/^!/）或函数。
    }
},
extractComments: false  //注释不要单独打包成一个文件
```

##### 分离css
`extract-text-webpack-plugin`
```
const ExtractTextPlugin = require("extract-text-webpack-plugin")

...
test: /\.css$/,
use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: "css-loader"
})
...
plugins: [
    new ExtractTextPlugin("styles.css"),
]
```
这样编译会报错
```
(node:11360) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
(node:11360) UnhandledPromiseRejectionWarning: Error: Chunk.entrypoints: Use Chunks.groupsIterable and filter by instanceof Entrypoint instead
```
错误出现原因：
extract-text-webpack-plugin还不能支持webpack4.0.0以上的版本。
npm install --save-dev extract-text-webpack-plugin@next

```
package.json

"extract-text-webpack-plugin": "^4.0.0-beta.0",
```

> 编译的时候， 设置devtool: 'null', 可以减小体积

在过去，如何将 CSS 提取到一个文件中这是 extract-text-webpack-plugin 的工作。不幸的是这个插件与 webpack 4 不太兼容。根据 Michael Ciniawsky 的说法：extract-text-webpack-plugin 的维护已经成为了一个很大的负担，这已经不是第一次因为它的问题，而使升级 webpack 主版本变的而复杂和繁琐。
而在webpack 4+版本我们可以使用mini-css-extract-plugin 插件来解决这些问题。


##### 抽取js的公共代码
webpack4 optimization.splitChunks(内部插件) 取代了CommonsChunkPlugin 插件

```
optimization: {
    splitChunks: {
        chunks: 'all',
        minChunks: 1,
        name: true,
        cacheGroups: {
            vendors: {
                minChunks: 1,//一般为非第三方公共模块
                chunks:'initial', // 
                name:'vendors', // 入口的entry的key
                enforce:true   // 强制
            }
        }
    }
}
```

>webpack4 当模式为`production`时，会自动压缩js代码，但是可以通过`uglifyjs-webpack-plugin`进一步控制