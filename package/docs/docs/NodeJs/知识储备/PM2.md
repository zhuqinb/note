# PM2

## pm2

-   pm2 是开源的基于 Nodejs 的进程管理器，包括守护进程、监控、日志的一整套完整的功能；
-   pm2 基本是 node 应用程序不二的守护进程选择；
-   事实上，pm2 并不仅仅可以启动 node 程序，对于一般的脚本程序同样可以胜任；
-   pm2 带有负载均衡功能，可以保持 node 应用进程永远运行在后台；
-   pm2 还有个非常强大的 deploy 功能，可以从本地直接部署线上网站。

## node 与 PM2

1. 对于线上项目，如果直接通过 node app 来启动，如果报错了可能直接停止导致整个服务崩溃；
2. 一般监控 node 的几种进程管理方案：
    1. supervisor: 一般用作开发环境的使用；
    2. forever: 管理多个站点，一般每个站点的访问量不大的情况，不需要监控；
    3. PM2: 网站的访问量比较大，需要完整的监控页面。
3. pm2 的特性：
    1. 内建负载均衡（使用 Node cluster 集群模块）；
    2. 后台运行；
    3. 0 秒停机重载，维护升级时不需要停机；
    4. 具有 Ubuntu 和 CentOS 的启动脚本；
    5. 停止不稳定的进程（避免无限循环）；
    6. 控制台检测；
    7. 提供 HTTP API；
    8. 远程控制和实时的接口 API ( Nodejs 模块，允许和 PM2 进程管理器交互 )。
4. 全局安装：npm install -g pm2

## PM2 命令

1. 启动命令
    1. pm2 start app.js：启动 nodeJs 应用，进程的默认名称为文件名 app
    2. pm2 start app.js --name mynode：启动 node，并指定进程名称为 mynode
    3. pm2 start app.js -i max：根据有效 CPU 数目启动最大进程数目
    4. pm2 start app.js -i 3：启动 3 个进程
    5. pm2 start app.js --watch：实时监控的方式启动，app.js 文件有变动时，pm2 会自动 reload
    6. pm2 start app.js -x：用 fork 模式启动 app.js 而不是使用 cluster
    7. pm2 start app.js -x -- -a 23：用 fork 模式启动 app.js 并且传递参数（-a 23）
    8. pm2 start app.json：启动进程, 在 app.json 里设置选项
    9. pm2 start app.js -i max -- -a 23：在 -- 之后给 app.js 传递参数
    10. pm2 start app.js -i max -e err.log -o out.log：启动并生成一个配置文件
2. 查看与监视进程
    1. pm2 list：显示所有进程；
    2. pm2 show 0，pm2 info 0：查看进程 id 为 0 的详细信息；
    3. pm2 monit：进入监视页面，监视每个 node 进程的 CPU 和内存的使用情况。
3. 停止、删除进程
    1. pm2 stop/delete 0：停止/删除 id 为 0 的进程；
    2. pm2 stop/delete all：停止/删除所有进程。
4. 重启、重载
    1. pm2 restart 0：重启 id 为 0 的进程；
    2. pm2 restart all：重启所有进程；
    3. pm2 reload 0：0 秒停机重载 id 为 0 进程（用于 NETWORKED 进程）；
    4. pm2 reload all：重载所有进程。
5. 日志操作
    1. pm2 logs：显示所有进程的日志；
    2. pm2 logs 0：显示进程 id 为 0 的日志；
    3. pm2 flush：清空所有日志文件；
    4. pm2 reloadLogs：重载所有日志。
6. pm2 startup：产生 init 脚本，保持进程活着。

## PM2 启动 nuxt

1. 打包 nuxt 项目：npm run build
2. pm2 启动（Linux）：
    1. pm2 start npm --name mynuxt -- start
    2. pm2 start npm --name "my-nuxt" -- run start
3. 默认情况下，用公网无法直接访问 nuxt，必须配置 nginx 转发，才能访问
    1. nuxt 应用端口号为 3000
    2. nginx 监听 80 端口，转发给 3000 端口，用公网访问 80 端口
4. 配置 nuxt 的 package.json，直接通过公网访问 nuxt 应用
    1. 在 package.json 中添加一个新的节点，与"dependencies"同级
       "config": {
       "nuxt": {
       "host": "0.0.0.0",
       "port": 3000
       }
       }
    2. 服务器打开 nuxt 监听的端口 3000，即可访问

## 杀死 PM2 进程

1. pm2 kill

## 配置文件启动

生成配置文件的命令`pm2 ecosystem`

```js
module.exports = {
	apps: [
		{
			name: 'node-hxwj',
			script: 'index.js',
			instances: 1,
			autorestart: true,
			watch: false,
			max_memory_restart: '1G',
			output: 'logs/out.log',
			error: 'logs/error.log',
			log: 'logs/combined.outerr.log',
			env: {
				NODE_ENV: 'development'
			},
			env_production: {
				NODE_ENV: 'production',
				HOST: '0.0.0.0',
				PORT: 8001
			}
		}
	],
	deploy: {
		production: {
			user: 'root',
			host: ['139.224.234.213'],
			port: '22',
			ref: 'origin/master',
			repo: 'git@github.com:zhuqinb/node-hxwj.git',
			path: '/root/mygit/node-hxwj',
			ssh_options: 'StrictHostKeyChecking=no',
			'post-deploy':
				'npm install && pm2 reload ecosystem.config.js --env production'
		}
	}
}
```

## 参考

[https://www.jianshu.com/p/ba9036adaf5a?tdsourcetag=s_pctim_aiomsg](https://www.jianshu.com/p/ba9036adaf5a?tdsourcetag=s_pctim_aiomsg)

<ClientOnly>
  <article-info weather="qing" mood="fendou">2019年09月11日 19:50</article-info>
</ClientOnly>
