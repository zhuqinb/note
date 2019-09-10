# HTTP 首部---referrer 知识点

## Referrer 介绍

Referrer 网站来路；访问者进入网站任何途径。HTTP Referer 是 header 的一部分，当浏览器向 web 服务器发出请求的时候，一般会带上 Referer,告诉服务器用户从那个页面连接过来的，服务器藉此可以获得一些信息用语处理。

## 获取 referrer

js 中获取:`var referer = document.referrer;`
java 后台获取:`String referrer = request.getHeader(“referer”);`

## 作用

判断网站来源,可以相应的做一些校验,比如只允许某网站的请求,那么就可以通过获取 referer,加以判断即可.

## Referrer Policy 介绍

当用户在浏览器上点击一个链接时，会产生一个 HTTP 请求，用于获取新的页面内容，而在该请求的报头中，会包含一个 Referrer，用以指定该请求是从哪个页面跳转页来的，常被用于分析用户来源等信息。但是也有成为用户的一个不安全因素，比如有些网站直接将 sessionid 或是 token 放在地址栏里传递的，会原样不动地当作 Referrer 报头的内容传递给第三方网站。

所以就有了 Referrer Policy，用于过滤 Referrer 报头内容，目前是一个候选标准，不过已经有部分浏览器支持该标准。具体的可查看这里。

### 指令值

目前包含了以下几种指令值：

```ts
enum ReferrerPolicy {
	'',
	'no-referrer',
	'no-referrer-when-downgrade',
	'same-origin',
	'origin',
	'strict-origin',
	'origin-when-cross-origin',
	'strict-origin-when-cross-origin',
	'unsafe-url'
}
```

### 空字符串

按照浏览器的默认值执行。默认值为 no-referrer-when-downgrade。部分标签可重定义此安全策略。

### no-referrer

从字面意思就可以理解，不传递 Referrer 报头的值。

### no-referrer-when-downgrade

当发生降级（比如从 https:// 跳转到 http:// ）时，不传递 Referrer 报头。但是反过来的话不受影响。通常也会当作浏览器的默认安全策略。

```txt
原地址                           跳转地址                    Referrer
https://example.com?token=123   https://example.com/path    https://example.com?token=123
http://example.com?token=123    http://example.com/path     http://example.com?token=123
https//example.com              http://example.com/path     无（协议降级）
http://example.com?token=123    https://example.com/path    http://example.com?token=123
```

### same-origin

同源，即当协议、域名和端口（如果有一方指定的话）都相同，才会传递 Referrer。

```txt
原地址                           跳转地址                    Referrer
https://example.com?token=123   https://example.com/path    https://example.com?token=123
http://example.com?token=123    http://example.com/path     http://example.com?token=123
https//example.com              http://example.com/path     无（协议不同）
http://example.com?token=123    https://example.com/path    无（协议不同）
http://example.com?token=123    http://example.com:88/path  无（端口不同）
https://example.com?token=123   https://caixw.io            无（域名不同）
```

### origin

将当前页面过滤掉参数及路径部分，仅将协议、域名和端口（如果有的话）当作 Referrer。

```txt
原地址                          跳转地址                     Referrer
https://example.com?token=123   https://example.com/path    https://example.com
http://example.com?token=123    https://example.com/path    http://example.com
https://example.com?token=123   https://caixw.io            https://example.com
```

### strict-origin

类似于 origin，但是不能降级。

```txt
原地址                           跳转地址                   Referrer
https://example.com?token=123   https://example.com/path    https://example.com
http://example.com?token=123    https://example.com/path    http://example.com
http://example.com?token=123    http://caixw.io             http://example.com
https://example.com?token=123   http://caixw.io             无
```

### origin-when-cross-origin

跨域时（协议、域名和端口只有一个不同）和 origin 模式相同，否则 Referrer 还是传递当前页的全路径。

```txt
原地址                           跳转地址                    Referrer
https://example.com?token=123   https://example.com/path    https://example.com?token=123
http://example.com?token=123    https://example.com/path    http://example.com?token=123
http://example.com?token=123    http://caixw.io             http://example.com
```

### strict-origin-when-cross-origin

与 origin-when-cross-origin 类似，但不能降级。

```txt
原地址                          跳转地址                     Referrer
https://example.com?token=123   https://example.com/path    https://example.com?token=123
https://example.com?token=123   https://caixw.io            https://example.com
https://example.com?token=123   http://example.com/path     无
https://example.com?token=123   http://example.com/         无
```

### unsafe-url

任意情况下，都发送当前页的全部地址到 Referrer，最宽松和不安全的策略。

## 传递方式

### Referrer-Policy 报头

推荐的方式，直接在 Referrer-Policy 报头中设置。

Referrer-Policy: origin;

### Meta

通过指定 name 值为 referrer 的 meta 标签，也可以达到相同的效果：

content 可以是上面的指定的值，也可以是下面这几种旧的指令值，会自动作相应的转换，但不推荐这些旧的指令值：

Legacy Referrer
never no-referrer
default no-referrer-when-downgrade
always unsafe-url
origin-when-crossorigin origin-when-cross-origin

### 标签属性

a 和 link 标签可以通过属性 rel 指定 noreferrer，仅对当前链接有效；
a、area、link、iframe 和 img 还可以通过 referrerpolicy 指定仅针对当前链接的设置。

### 设置

设置 Referrer Policies 主要有以下几种

### CSP 响应头

CSP（Content Security Policy），是一个跟页面内容安全有关的规范。在 HTTP 中通过响应头中的 Content-Security-Policy 字段来告诉浏览器当前页面要使用何种 CSP 策略。：

Content-Security-Policy: referrer
我们还可以在 里面设置：

```html
<meta http-equiv="Content-Security-Policy" content="referrer" />
```

### meta 标签

通过 标签也可以指定 Referrer 策略，同样很简单：

```html
<meta name="referrer" content="no-referrer" />
```

我们把<meta /> 放在之间。注意，如果出现的位置不对会被忽略。 同样，如果没有给它定义 content
属性，或者 content 属性为空，也会被忽略。 如果 content
属性不是合法的取值，浏览器会自动选择 no-referrer 这种最严格的策略。

### a 标签的 referrer 属性

通过给 a 标签增加 referrer 属性也可以指定 Referrer 策略，格式如下：

```html
<a href="https://www.iteblog.com" referrer="no-referrer">过往记忆</a>
```

这种方式作用的只是这一个链接。 并且，标签可用的 Referrer 策略只有三种：no-referrer、origin 以及 unsafe-url 。
另外，这样针对单个链接设置的策略优先级比 CSP 和 要高。

<ClientOnly>
  <article-info weather="qing" mood="fendou">2019年09月10日 17:38</article-info>
</ClientOnly>
