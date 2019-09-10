# config-lite 配置文件中间件

## 说明

config-lite 是一个轻量的读取配置文件的模块。

config-lite 会根据环境变量（NODE_ENV）的不同从当前执行进程目录下的 config 目录加载不同的配置文件。

如果不设置 NODE_ENV，则读取默认的 default 配置文件，

如果设置了 NODE_ENV，则会合并指定的配置文件和 default 配置文件作为配置，

config-lite 支持 .js、.json、.node、.yml、.yaml 后缀的文件。

如果程序以 NODE_ENV=test node app 启动，则通过 require('config-lite') 会依次降级查找 config/test.js、config/test.json、config/test.node、config/test.yml、config/test.yaml 并合并 default 配置;

如果程序以 NODE_ENV=production node app 启动，则通过 require('config-lite') 会依次降级查找 config/production.js、config/production.json、config/production.node、config/production.yml、config/production.yaml 并合并 default 配置。

## 使用

安装

```js
npm i config-lite
```

package.json

```json
 "scripts": {
    "dev": "cross-env NODE_ENV=development nodemon --harmony index.js",
    "check": "cross-env NODE_ENV=production nodemon --harmony index.js"
  },
```

app.js

```js
require('config-lite')
```

运行 `npm run dev` 会去 config 文件夹下找 develoment.js、develoment.json、develoment.node、develoment.yml、develoment.yml、develoment.yaml;找到配置文件后会与 config/default 文件合并

## 参考

[https://www.jianshu.com/p/aa71cf29c602](https://www.jianshu.com/p/aa71cf29c602)

<ClientOnly>
  <article-info weather="qing" mood="fendou">2019年09月10日 13:56 离职的四天..</article-info>
</ClientOnly>
