# node express-session 和 connect-mongo

## 使用

```js
let express = require('express')
let session = require('express-session')
let app = new express()
let MongoStore = require('connect-mongo')(session)
app.use(
	session({
		secret: 'keyboard cat', //加密字符串也可以写数组
		resave: true, //强制保存session 建议设置成false
		saveUninitialized: true, //强制保存未初始化的内容
		rolling: true, //动态刷新页面cookie存放时间
		cookie: { maxAge: 10000 }, //保存时效
		store: new MongoStore({
			//将session存进数据库  用来解决负载均衡的问题
			url: 'mongodb://127.0.0.1:27017/db06',
			touchAfter: 24 * 3600 //通过这样做，设置touchAfter:24 * 3600，您在24小时内
			//只更新一次会话，不管有多少请求(除了在会话数据上更改某些内容的除外)
		})
	})
)
app.get('/login', (req, res) => {
	req.session.userinfo = 'admin'
	res.send('存储成功')
})
app.get('/', (req, res) => {
	if (req.session.userinfo) {
		res.send('欢迎' + req.session.userinfo + '回来')
	} else {
		res.send('请登录')
	}
})
app.listen(3000, () => {
	console.log('start')
})
```

## session 介绍

session 是另一种记录客户状态的机制，不同的是 Cookie 保存在客户端浏览器中，而 session 保存在服
务器上。
Session 的用途：
session 运行在服务器端，当客户端第一次访问服务器时，可以将客户的登录信息保存。
当客户访问其他页面时，可以判断客户的登录状态，做出提示，相当于登录拦截。
session 可以和 Redis 或者数据库等结合做持久化操作，当服务器挂掉时也不会导致某些客户信息（购物车）
丢失。

## session 工作流程

当浏览器访问服务器并发送第一次请求时，服务器端会创建一个 session 对象，生成一个类似于
key,value 的键值对，然后将 key(cookie)返回到浏览器(客户)端，浏览器下次再访问时，携带 key(cookie)，
找到对应的 session(value)。 客户的信息都保存在 session 中

## express-session 的使用

### 安装

```js
npm i express-session
```

### 引入

```js
var session = require('express-session')
```

### 设置官方文档提供的中间件

```js
app.use(
	session({
		secret: 'keyboard cat',
		resave: true,
		saveUninitialized: true
	})
)
```

### 使用

```js
// 设置值
req.session.username = 'xiaoming'
// 获取值
req.session.username
```

### express-session 常见参数

```js
app.use(session({
    secret: '12345',  //加密字符串 随便写
    name: 'name',  //生成session 的key名 默认为 connect.sid 可以不设置
    cookie: {maxAge: 60*1000},  //根据cookie设置过期时间 session在浏览器中保存的时间
    resave: false, //强制保存session 默认为 true。建议设置成 false
    saveUninitialized: true //强制将未初始化的 session 存储 默认为 true。建议设置成true req.session 不给值 值为false 不设置 值为true 就默认设置 req.session //给值 值为false和true没什么区别
    rolling:true //在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false） 建议设置true设置过期时间如果是2分钟，如果在2分钟内一直操作（访问）浏览器页面，最后一个访问结束后的2分钟在让过期
}));
```

### express-session 的常用方法

```js
req.session.destroy(function(err) {
	/*销毁 session*/
})
req.session.username = '张三' //设置 session
req.session.username //获取 session
req.session.cookie.maxAge = 0 //重新设置 cookie 的过期时间
```

### 负载均衡配置 Session，把 Session 保存到数据库里面（session 入库）

```js
// 1.需要安装 express-session 和 connect-mongo 模块
// 2.引入模块
var session = require('express-session')
const MongoStore = require('connect-mongo')(session)
// 3.配置中间件
app.use(
	session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true,
		rolling: true,
		cookie: {
			maxAge: 100000
		},
		store: new MongoStore({
			url: 'mongodb://127.0.0.1:27017/db06',
			touchAfter: 24 * 3600 // 通过这样做，设置touchAfter:24 * 3600，您在24小时内只更新一次会话，不管有多少请求(除了在会话数据上更改某些内容的除外)
		})
	})
)
```

<ClientOnly>
  <article-info weather="qing" mood="fendou">2019年09月10日 15:30</article-info>
</ClientOnly>
