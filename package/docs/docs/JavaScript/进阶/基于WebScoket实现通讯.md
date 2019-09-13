## 聊天室的开发过程

其实这个过程从用户的角度来说，其实无非就是连接上了，发送消息呗。

然而实际上，从用户的观点看东西，也确实是这个样子的，那就不绕圈子了，直接进入主题

### 建立连接

当然，没错，这绝对是所有奇妙玄学中的第一步，不建立连接，那还聊个球呢

说到这里，突然想到应该先把 html 的结构给大家，不然还怎么按部就班的一起敲呢

先贴一张目录的结构，下面的文件都对应目录即可

<img :src="$withBase('/images/JavaScript/advance/WebScoket-01')" alt="foo">

#### 页面结构

布局样式方面是直接使用 bootstrap 来搞的，方便快捷，主要就是让大家看看样子，这里就不太浪费时间了, index.html 文件地址

没有任何功能，仅仅是页面布局，大家 copy 一下，看看样子即可了

下面我们来分别试着写下客户端和服务端的两套创建连接的代码，一起敲敲敲吧

这才是重要的东西，开撸

#### 客户端建立连接

```js
// index.js 文件
let socket = io()
// 监听与服务端的连接
socket.on('connect', () => {
	console.log('连接成功')
})
```

socket.io 用法简单，方便上手，欲购从速，哈哈，继续写服务端的连接吧

#### 服务端建立连接

服务端的搭建我们还是用之前使用的 express 来处理

```js
// app.js 文件

const express = require('express');
const app = express();
// 设置静态文件夹，会默认找当前目录下的 index.html 文件当做访问的页面
app.use(express.static(\_\_dirname));

// WebSocket 是依赖 HTTP 协议进行握手的
const server = require('http').createServer(app);
const io = require('socket.io')(server);
// 监听与客户端的连接事件
io.on('connection', socket => {
console.log('服务端连接成功');
});
// ☆ 这里要用 server 去监听端口，而非 app.listen 去监听(不然找不到 socket.io.js 文件)
server.listen(4000);
```

以上内容就是客户端和服务端建立了 websocket 连接了，如此的 so easy，那么接下来继续写发送消息吧

### 发送消息

列表 Ul、输入框、按钮这些都齐全了，那就开始发送消息吧

通过 socket.emit('message')方法来发送消息给服务端

```js
// index.js 文件

// 列表 list，输入框 content，按钮 sendBtn
let list = document.getElementById('list'),
	input = document.getElementById('input'),
	sendBtn = document.getElementById('sendBtn')

// 发送消息的方法
function send() {
	let value = input.value
	if (value) {
		// 发送消息给服务器
		socket.emit('message', value)
		input.value = ''
	} else {
		alert('输入的内容不能为空！')
	}
}
// 点击按钮发送消息
sendBtn.onclick = send
```

#### 回车发送消息

每次都要点发送按钮，也是够反用户操作行为的了，所以还是加上我们熟悉的回车发送吧，看代码，+号表示新增的代码

```js
// index.js 文件
...省略

// 回车发送消息的方法

-   function enterSend(event) {
-   let code = event.keyCode;
-   if (code === 13) send();
-   }
    // 在输入框 onkeydown 的时候发送消息
-   input.onkeydown = function(event) {
-   enterSend(event);
-   };
```

前端已经把消息发出去了，接下来该服务端出马了，继续撸

#### 服务端处理消息

```js
// app.js 文件
...省略

io.on('connection', socket => {
// 监听客户端发过来的消息

+   socket.on('message', msg => {
    // 服务端发送 message 事件，把 msg 消息再发送给客户端
+      io.emit('message', {
+               user: '系统',
+               content: msg,
+               createAt: new Date().toLocaleString()
+           });
+       });
    });
```

io.emit()方法是向大厅和所有人房间内的人广播

#### 客户端渲染消息

我们继续在 index.js 这里写，把服务端传过来的消息接收并渲染出来

```js
    // index.js 文件
    ...省略
    // 监听 message 事件来接收服务端发来的消息
+   socket.on('message', data => {
    // 创建新的 li 元素，最终将其添加到 list 列表
+      let li = document.createElement('li');
+       li.className = 'list-group-item';
+       li.innerHTML = `
            <p style="color: #ccc;">
            <span class="user">${data.user}</span>
                ${data.createAt}
            </p>
            <p class="content">${data.content}</p>`;
        // 将li添加到list列表中
+       list.appendChild(li);
        // 将聊天区域的滚动条设置到最新内容的位置
+       list.scrollTop = list.scrollHeight;
+   });

```

写到这里，发送消息的部分就已经完事了，执行代码应该都可以看到如下图的样子了

<img :src="$withBase('/images/JavaScript/advance/WebScoket-02')" alt="foo">

看到上面的图后，我们应该高兴一下，毕竟有消息了，离成功又近了一步两步三四步

虽然上面的代码还有瑕疵，不过不要方，让我们继续完善它

根据图片所示，所有的用户都是“系统”，这根本就分不清谁是谁了，让我们来判断一下，需要加个用户名

### 创建用户名

这里我们可以知道，当用户是第一次进来的时候，是没有用户名的，需要在设置之后才会显示对应的名字

于是乎，我们就把第一次进来后输入的内容当作用户名了

```js
// app.js文件
...省略
// 把系统设置为常量，方便使用
const SYSTEM = '系统';

io.on('connection', socket => {
    // 记录用户名，用来记录是不是第一次进入，默认是undefined
+   let username;
    socket.on('message', msg => {
        // 如果用户名存在
+       if (username) {
             // 就向所有人广播
+            io.emit('message', {
+                user: username,
+                content: msg,
+                createAt: new Date().toLocaleString()
+            });
+       } else {  // 用户名不存在的情况
             // 如果是第一次进入的话，就将输入的内容当做用户名
+            username = msg;
             // 向除了自己的所有人广播，毕竟进没进入自己是知道的，没必要跟自己再说一遍
+            socket.broadcast.emit('message', {
+                user: SYSTEM,
+                content: `${username}加入了聊天！`,
+                createAt: new Date().toLocaleString()
+            });
+        }
    });
});

```

☆️ socket.broadcast.emit，这个方法是向除了自己外的所有人广播

没错，毕竟自己进没进聊天室自己心里还没数么，哈哈

下面再看下执行的效果，请看图

<img :src="$withBase('/images/JavaScript/advance/WebScoket-03')" alt="foo">

最基本的发消息功能已经实现了，下面我们再接再厉，完成一个私聊功能吧

### 添加私聊

在群里大家都知道@一下就代表这条消息是专属被@的那个人的，其他人是不用 care 的

如何实现私聊呢？这里我们采用，在消息列表 list 中点击对方的用户名进行私聊，所以废话不多说，开写吧

#### @一下

```js
// index.js文件
...省略

  // 私聊的方法
+ function privateChat(event) {
+    let target = event.target;
     // 拿到对应的用户名
+    let user = target.innerHTML;
     // 只有class为user的才是目标元素
+    if (target.className === 'user') {
         // 将@用户名显示在input输入框中
+        input.value = `@${user} `;
+    }
+ }
  // 点击进行私聊
+ list.onclick = function(event) {
+    privateChat(event);
+ };

```

客户端已将@用户名这样的格式设置在了输入框中，只要发送消息，服务端就可以进行区分，是私聊还是公聊了，下面继续写服务端的处理逻辑吧

#### 服务端处理

首先私聊的前提是已经获取到了用户名了

然后正则判断一下，哪些消息是属于私聊的

最后还需要找到对方的 socket 实例，好方便发送消息给对方

那么，看如下代码

```js
// app.js文件
...省略

// 用来保存对应的socket，就是记录对方的socket实例
+ let socketObj = {};

io.on('connection', socket => {
    let username;
    socket.on('message', msg => {
        if (username) {
            // 正则判断消息是否为私聊专属
+           let private = msg.match(/@([^ ]+) (.+)/);

+           if (private) {  // 私聊消息
                 // 私聊的用户，正则匹配的第一个分组
+                let toUser = private[1];
                 // 私聊的内容，正则匹配的第二个分组
+                let content = private[2];
                 // 从socketObj中获取私聊用户的socket
+                let toSocket = socketObj[toUser];

+                if (toSocket) {
                     // 向私聊的用户发消息
+                    toSocket.send({
+                        user: username,
+                        content,
+                        createAt: new Date().toLocaleString()
+                    });
+                }
            } else {    // 公聊消息
                io.emit('message', {
                    user: username,
                    content: msg,
                    createAt: new Date().toLocaleString()
                });
            }
        } else { // 用户名不存在的情况
            ...省略
            // 把socketObj对象上对应的用户名赋为一个socket
            // 如： socketObj = { '周杰伦': socket, '谢霆锋': socket }
+           socketObj[username] = socket;
        }
    });
});

```

写到这里，我们已经完成了公聊和私聊的功能了，可喜可贺，非常了不起了已经，但是不能傲娇，我们再完善一些小细节

现在所有用户名和发送消息的气泡都是一个颜色，其实这样也不好区分用户之间的差异

SO，我们来改下颜色的部分

### 分配用户不一样的颜色

#### 服务端处理颜色

```js
// app.js文件
...省略
let socketObj = {};
// 设置一些颜色的数组，让每次进入聊天的用户颜色都不一样
+ let userColor = ['#00a1f4', '#0cc', '#f44336', '#795548', '#e91e63', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#ffc107', '#607d8b', '#ff9800', '#ff5722'];

// 乱序排列方法，方便把数组打乱
+ function shuffle(arr) {
+    let len = arr.length, random;
+    while (0 !== len) {
        // 右移位运算符向下取整
+        random = (Math.random() * len--) >>> 0;
        // 解构赋值实现变量互换
+        [arr[len], arr[random]] = [arr[random], arr[len]];
+    }
+    return arr;
+ }

io.on('connection', socket => {
     let username;
+    let color;  // 用于存颜色的变量

    socket.on('message', msg => {
        if (username) {
            ...省略
            if (private) {
                ...省略
                if (toSocket) {
                    toSocket.send({
                        user: username,
+                       color,
                        content: content,
                        createAt: new Date().toLocaleString()
                    });
                }
            } else {
                io.emit('message', {
                    user: username,
+                   color,
                    content: msg,
                    createAt: new Date().toLocaleString()
                });
            }
        } else { // 用户名不存在的情况
            ...省略
            // 乱序后取出颜色数组中的第一个，分配给进入的用户
+           color = shuffle(userColor)[0];

            socket.broadcast.emit('message', {
                user: '系统',
+               color,
                content: `${username}加入了聊天！`,
                createAt: new Date().toLocaleString()
            });
        }
    });
});

```

服务端那边给分配好了颜色，前端这边再渲染一下就好了，接着写下去，不要停

#### 渲染颜色

在创建的 li 元素上，给对应的用户名和内容分别在 style 样式中加个颜色就可以了，代码如下

```js
// index.js
... 省略

socket.on('message', data => {
    let li = document.createElement('li');
    li.className = 'list-group-item';
    // 给对应元素设置行内样式添加颜色
+   li.innerHTML = `<p style="color: #ccc;"><span class="user" style="color:${data.color}">${data.user} </span>${data.createAt}</p>
                    <p class="content" style="background:${data.color}">${data.content}</p>`;
    list.appendChild(li);
    // 将聊天区域的滚动条设置到最新内容的位置
    list.scrollTop = list.scrollHeight;
});
```

写完是写完了，我们看看效果吧

<img :src="$withBase('/images/JavaScript/advance/WebScoket-04')" alt="foo">

写到这里，看到这里，是否疲倦了呢，年轻人不要放弃

Now，让我们来写理论上的最最最后一个功能吧，进入某个群里聊天，该消息只有群里的人可以看到

### 加入指定房间(群)

我们一直在上面的截图中看到了两个群的按钮，看到字面意思就能知道是干嘛的，就是为了这一刻而准备的

下面我们再来，继续撸，马上就要完成大作了

#### 客户端-进出房间(群)

```js
// index.js文件
...省略

// 进入房间的方法
+ function join(room) {
+    socket.emit('join', room);
+ }
// 监听是否已进入房间
// 如果已进入房间，就显示离开房间按钮
+ socket.on('joined', room => {
+    document.getElementById(`join-${room}`).style.display = 'none';
+    document.getElementById(`leave-${room}`).style.display = 'inline-block';
+ });

// 离开房间的方法
+ function leave(room) {
    socket.emit('leave', room);
+ }
// 监听是否已离开房间
// 如果已离开房间，就显示进入房间按钮
+ socket.on('leaved', room => {
+    document.getElementById(`leave-${room}`).style.display = 'none';
+    document.getElementById(`join-${room}`).style.display = 'inline-block';
+ });
```

上面定义的 join 和 leave 方法直接在对应的按钮上调用即可了，如下图所示

<img :src="$withBase('/images/JavaScript/advance/WebScoket-05')" alt="foo">

下面我们继续写服务端的代码逻辑

#### 服务端-处理进出房间(群)

```js
// app.js文件
...省略
io.on('connection', socket => {
    ...省略
    // 记录进入了哪些房间的数组
+   let rooms = [];
    io.on('message', msg => {
        ...省略
    });
    // 监听进入房间的事件
+   socket.on('join', room => {
+       // 判断一下用户是否进入了房间，如果没有就让其进入房间内
+       if (username && rooms.indexOf(room) === -1) {
            // socket.join表示进入某个房间
+           socket.join(room);
+           rooms.push(room);
            // 这里发送个joined事件，让前端监听后，控制房间按钮显隐
+           socket.emit('joined', room);
            // 通知一下自己
+           socket.send({
+               user: SYSTEM,
+               color,
+               content: `你已加入${room}战队`,
+               createAt: new Date().toLocaleString()
+           });
+       }
+   });
    // 监听离开房间的事件
+   socket.on('leave', room => {
        // index为该房间在数组rooms中的索引，方便删除
+       let index = rooms.indexOf(room);
+       if (index !== -1) {
+           socket.leave(room); // 离开该房间
+           rooms.splice(index, 1); // 删掉该房间
            // 这里发送个leaved事件，让前端监听后，控制房间按钮显隐
+           socket.emit('leaved', room);
            // 通知一下自己
+           socket.send({
+               user: SYSTEM,
+               color,
+               content: `你已离开${room}战队`,
+               createAt: new Date().toLocaleString()
+           });
+       }
+   });
});
```

写到这里，我们也实现了加入和离开房间的功能，如下图所示

<img :src="$withBase('/images/JavaScript/advance/WebScoket-06')" alt="foo">

既然进入了房间内，那么很显然，发言的内容只能是在房间内的人才能看到，这点我们都懂

所以下面我们再写一下房间内发言的逻辑，继续在 app.js 中开撸

#### 处理房间内发言

```js
// app.js文件
...省略
// 上来记录一个socket.id用来查找对应的用户
+ let mySocket = {};

io.on('connection', socket => {
    ...省略
    // 这是所有连接到服务端的socket.id
+   mySocket[socket.id] = socket;

    socket.on('message', msg => {
        if (private) {
            ...省略
        } else {
            // 如果rooms数组有值，就代表有用户进入了房间
+           if (rooms.length) {
                // 用来存储进入房间内的对应的socket.id
+               let socketJson = {};

+               rooms.forEach(room => {
                    // 取得进入房间内所对应的所有sockets的hash值，它便是拿到的socket.id
+                   let roomSockets = io.sockets.adapter.rooms[room].sockets;
+                   Object.keys(roomSockets).forEach(socketId => {
                        console.log('socketId', socketId);
                        // 进行一个去重，在socketJson中只有对应唯一的socketId
+                       if (!socketJson[socketId]) {
+                           socketJson[socketId] = 1;
+                       }
+                   });
+               });

                // 遍历socketJson，在mySocket里找到对应的id，然后发送消息
+               Object.keys(socketJson).forEach(socketId => {
+                   mySocket[socketId].emit('message', {
+                       user: username,
+                       color,
+                       content: msg,
+                       createAt: new Date().toLocaleString()
+                   });
+               });
            } else {
                // 如果不是私聊的，向所有人广播
                io.emit('message', {
                    user: username,
                    color,
                    content: msg,
                    createAt: new Date().toLocaleString()
                });
            }
        }
    });
});

```

重新运行 app.js 文件后，再进入房间聊天，会展示如下图的效果，只有在同一个房间内的用户，才能相互之间看到消息

<img :src="$withBase('/images/JavaScript/advance/WebScoket-07')" alt="foo">

麻雀虽小但五脏俱全，坚持写到这里的每一位都是赢家，不过我还想再完善最后一个小功能，就是展示一下历史消息

毕竟每次一进到聊天室都是空空如也的样子也太苍白了，还是希望了解到之前的用户聊了哪些内容的

那么继续加油，实现我们最后一个功能吧

### 展示历史消息

其实正确开发的情况，用户输入的所有消息应该是存在数据库中进行保存的，不过我们这里就不涉及其他方面的知识点了，就直接用纯前端的技术去模拟一下实现了

#### 获取历史消息

这里让客户端去发送一个 getHistory 的事件，在 socket 连接成功的时候，告诉服务器我们要拿到最新的 20 条消息记录

```js
// index.js
...省略

socket.on('connect', () => {
    console.log('连接成功');
    // 向服务器发getHistory来拿消息
+   socket.emit('getHistory');
});

```

#### 服务端处理历史记录并返回

```js
// app.js
...省略

// 创建一个数组用来保存最近的20条消息记录，真实项目中会存到数据库中
let msgHistory = [];

io.on('connection', socket => {
    ...省略
    io.on('message', msg => {
        ...省略
        if (private) {
            ...省略
        } else {
            io.emit('message', {
                user: username,
                color,
                content: msg,
                createAt: new Date().toLocaleString()
            });
            // 把发送的消息push到msgHistory中
            // 真实情况是存到数据库里的
+           msgHistory.push({
+               user: username,
+               color,
+               content: msg,
+              createAt: new Date().toLocaleString()
+          });
        }
    });

    // 监听获取历史消息的事件
+   socket.on('getHistory', () => {
        // 通过数组的slice方法截取最新的20条消息
+       if (msgHistory.length) {
+           let history = msgHistory.slice(msgHistory.length - 20);
            // 发送history事件并返回history消息数组给客户端
+           socket.emit('history', history);
+       }
+   });
});

```

#### 客户端渲染历史消息

```js
// index.js
...省略

// 接收历史消息
+ socket.on('history', history => {
    // history拿到的是一个数组，所以用map映射成新数组，然后再join一下连接拼成字符串
+   let html = history.map(data => {
+       return `<li class="list-group-item">
            <p style="color: #ccc;"><span class="user" style="color:${data.color}">${data.user} </span>${data.createAt}</p>
            <p class="content" style="background-color: ${data.color}">${data.content}</p>
        </li>`;
+   }).join('');
+   list.innerHTML = html + '<li style="margin: 16px 0;text-align: center">以上是历史消息</li>';
    // 将聊天区域的滚动条设置到最新内容的位置
+   list.scrollTop = list.scrollHeight;
+ });

```

这样就全部大功告成了，完成了最后的历史消息功能，如下图所示效果

<img :src="$withBase('/images/JavaScript/advance/WebScoket-08')" alt="foo">

最后进行一个功能上的梳理吧，坚持到这里的人，我已经不知道如何表达对你的敬佩了，好样的

### 梳理一下

聊天室的功能完成了，看到这里头有点晕了，现在简单回忆一下，实际都有哪些功能

创建客户端与服务端的 websocket 通信连接

客户端与服务端相互发送消息

添加用户名

添加私聊

进入/离开房间聊天

历史消息

#### 小 Tips

针对以上代码中常用的发消息方法进行一下区分：

socket.send()发送消息是为了给自己看的

io.emit()发送消息是给所有人看的

socket.broadcast.emit()发送消息除了自己都能看到

## 参考

[https://juejin.im/post/5bce886af265da0ac07c8ef8](https://juejin.im/post/5bce886af265da0ac07c8ef8)

<ClientOnly>
  <article-info weather="qing" mood="maren">2019年09月04日 01:05 今天是地大信息上班的最后一天</article-info>
</ClientOnly>
