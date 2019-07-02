# XSS 简述与防止

## 定义

XSS,即为(Cross Site Scripting), 中文名为跨站脚本，是发生在目标用户的浏览器层面上的，当渲染 DOM 树的过程发生了不可预期内执行的 JS 代码时，就发生了 XSS 攻击。

跨站脚本的中点不在‘跨站’上，而在‘脚本’上。大多数 XSS 攻击的主要方式时嵌入一段远程或者第三方域上的 JS 代码。实际上是在目标网站的作用域下执行了这段 js 代码。

## 攻击方式

攻击的方式有三种: 反射型 XSS、 存储型 XSS、 DOM XSS

### 反射型 XSS

反射型 XSS，也叫非持久性 XSS，是指发生请求时，XSS 代码出现在请求 URL 中，作为参数提交到服务器，服务器解析并相应。相应结果中包含 XSS 代码，最后浏览器解析并执行。

从概念上可以看出，反射型 XSS 代码是首先出现在 URL 中的，然后需要服务器解析，最后需要浏览器解析之后 XSS 代码才能攻击。 看下米这个例子：

使用 express 起一个 web 服务器，然后设置一下请求接口，通过 ajax 的 Get 将参数发往服务器，服务器解析成 json 后响应，将返回的数据解析后显示到页面上。（这个是没有对返回的数据进行编码和过滤等操作。）

```html
<textarea name="txt" id="txt" cols="80" rows="10">
<button type="button" id="test">测试</button>

<script>
$("#test").on('click', () => {
    $.ajax({
        url: `test?test=?${$("#txt").val()}`,
        success: res => {
            $('body').html(res.test)
        }
    })
})
</script>
```

files: app.js 框架 express

```js
let express = require('express')
let router = express.Router()

router.get('/test', (req, res, next) => {
	// 服务端没有进行字段过滤直接发给客户端
	res.json({
		test: req.query.test
	})
})
```

现在我们通过给 textarea 添加一段有攻击目的的 img 标签

`<img src="null" onerror='alert(document.cookit)' />`

然后点击 `测试` 按钮，一个 XSS 攻击就发生了，就会弹出获取了本地的部分 cookie 信息的 alert 框

---

这里只是进行了模拟攻击，通过 alert 获取到了个人 cookie 信息，但是如果是黑客的话，会注入一段第三方的 js 代码，然后将获取的 cookie 信息存到他们的服务器，这样的话黑客们就有机会拿到我们的身份认证做一些非法的事了。

上面存在的一些问题，主要在于没有对用户输入的信息进行过滤，同时没有剔除 DOM 节点中存在的一些危害的事件和一些有危害的 DOM 节点。

### 存储型 XSS

存储型 XSS，也叫持久型 XSS，主要是将 XSS 代码发送到服务器然后储存（不管是数据库、内存还是文件系统等。），然后在下次请求页面的时候就不用带上 XSS 代码了。

最典型的就是留言板 XSS。用户提交了一条包含 XSS 代码的留言到数据库。当目标用户查询留言时，那些留言的内容会从服务器解析之后加载出来。浏览器发现有 XSS 代码，就当做正常的 HTML 和 JS 解析执行。XSS 攻击就发生了

### DOM XSS

DOM XSS 攻击不同于反射型 XSS 和存储型 XSS，DOM XSS 代码不需要服务器端的解析响应的直接参与，而是通过浏览器端的 DOM 解析。这完全是客户端的事情。

DOM XSS 代码的攻击发生的可能在于我们编写 JS 代码造成的。我们知道 eval 语句有一个作用是将一段字符串转换为真正的 JS 语句，因此在 JS 中使用 eval 是很危险的事情，容易造成 XSS 攻击。避免使用 eval 语句。例如：

```html
<textarea name="txt" id="txt" cols="80" rows="10">
<button type="button" id="test">测试</button>

<script>
$("#test").on('click', () => {
    let node = eval($("#txt").val())
    alert(node)
})
</script>
```

然后在文本框中输入如下代码：

```html
<img src="null" onerror="alert(123)" />
```

这样当点击 `测试` 的时候就会弹出 alert，造成 XSS 攻击

## XSS 危害

1. 通过 document.cookie 盗取 cookie
1. 使用 js 或 css 破坏页面正常的结构与样式
1. 流量劫持（通过访问某段具有 window.location.href 定位到其他页面）
1. Dos 攻击：利用合理的客户端请求来占用过多的服务器资源，从而使合法用户无法得到服务器响应。
1. 利用 iframe、frame、XMLHttpRequest 或上述 Flash 等方式，以（被攻击）用户的身份执行一些管理动作，或执行一些一般的如发微博、加好友、发私信等操作。
1. 利用可被攻击的域受到其他域信任的特点，以受信任来源的身份请求一些平时不允许的操作，如进行不当的投票活动。

## XSS 产生原因

从以上的反射型和 DOM XSS 攻击可以看出，我们不能原样的将用户输入的数据直接存到服务器，需要对数据进行一些处理。以上的代码出现的一些问题如下

1. 没有过滤危险的 DOM 节点。如具有执行脚本能力的 script, 具有显示广告和色情图片的 img, 具有改变样式的 link, style, 具有内嵌页面的 iframe, frame 等元素节点。
1. 没有过滤危险的属性节点。如事件, style, src, href 等
1. 没有对 cookie 设置 httpOnly。

如果将以上三点都在渲染过程中过滤，那么出现的 XSS 攻击的概率也就小很多。

## XSS 防御

### 对 cookie 的保护

对重要的 cookie 设置 httpOnly, 防止客户端通过 document.cookie 读取 cookie。服务端可以设置此字段。

### 对用户输入数据的处理

1. 编码：不能对用户输入的内容都保持原样，对用户输入的数据进行字符实体编码。对于字符实体的概念可以参考文章底部给出的参考链接。
1. 解码：原样显示内容的时候必须解码，不然显示不到内容了。
1. 过滤：把输入的一些不合法的东西都过滤掉，从而保证安全性。如移除用户上传的 DOM 属性，如 onerror，移除用户上传的 Style 节点，iframe, script 节点等。

### 实现原理

1. 存在一个 parse 函数，对输入的数据进行处理，返回处理之后的数据
1. 对输入的数据（如 DOM 节点）进行解码（使用第三方库 he.js）
1. 过滤掉一些元素有危害的元素节点与属性节点。如 script 标签，onerror 事件等。（使用第三方库 HTMLParser.js）

```js
<script src='/javascripts/htmlparse.js'></script>
<script src='/javascripts/he.js'></script>
// 第三方库资源在文章底部给出

// parse函数实现如下

function parse (str) {
      // str假如为某个DOM字符串
      // 1. result为处理之后的DOM节点
      let result = ''
      // 2. 解码
      let decode = he.unescape(str, {
          strict: true
      })
      HTMLParser(decode, {
          start (tag, attrs, unary) {
              // 3. 过滤常见危险的标签
              if (tag === 'script' || tag === 'img' || tag === 'link' || tag === 'style' || tag === 'iframe' || tag === 'frame') return
              result += `<${tag}`
              for (let i = 0; i < attrs.length; i++) {
                  let name = (attrs[i].name).toLowerCase()
                  let value = attrs[i].escaped
                  // 3. 过滤掉危险的style属性和js事件
                  if (name === 'style' || name === 'href' || name === 'src' || ~name.indexOf('on')) continue
                  result += ` ${name}=${value}`
              }
              result += `${unary ? ' /' : ''} >`
          },
          chars (text) {
              result += text
          },
          comment (text) {
              result += `<!-- ${text} -->`
          },
          end (tag) {
              result += `</${tag}>`
          }
      })
      return result
  }
```

<Article-Info weather="qing" mood="kaixin1">2019/6/30 10:55</Article-Info>
