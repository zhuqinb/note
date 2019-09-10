# fetch API

## 介绍

可以配合其他技术使用，如 Service Workers。

与 jQuery.ajax()主要有两点不同

1. 当接收到一个代表错误的 HTTP 状态码时，从 fetch()返回的 Promise 不会被标记为 reject， 即使该 HTTP 响应的状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。
2. 默认情况下，fetch 不会从服务端发送或接收任何 cookies, 如果站点依赖于用户 session，则会导致未经认证的请求（要发送 cookies，必须设置 credentials 选项）。自从 2017 年 8 月 25 日后，默认的 credentials 政策变更为 same-originFirefox 也在 61.0b13 中改变默认值

## 使用与配置

```js
fetch(url | request, {
	body: JSON.stringify(data), // must match 'Content-Type' header
	cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	credentials: 'same-origin', // include, same-origin, *omit
	headers: {
		'user-agent': 'Mozilla/4.0 MDN Example',
		'content-type': 'application/json'
	},
	method: 'POST', // *GET, POST, PUT, DELETE, etc.
	mode: 'cors', // no-cors, cors, *same-origin
	redirect: 'follow', // manual, *follow, error
	referrer: 'no-referrer' // *client, no-referrer
}).then(response => response.json()) // parses response to JSON
```

## 配置说明

一个配置项对象，包括所有对请求的设置。可选的参数有：

-   method: 请求使用的方法，如 GET、POST。
-   headers: 请求的头信息，形式为 Headers 的对象或包含 ByteString 值的对象字面量。
-   body: 请求的 body 信息：可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象。注意 GET 或 - HEAD 方法的请求不能包含 body 信息。
-   mode: 请求的模式，如 cors、 no-cors 或者 same-origin。
-   credentials: 请求的 credentials，如 omit、same-origin 或者 include。为了在当前域名内自动发送 cookie ， 必须提供这个选项， 从 Chrome 50 开始， 这个属性也可以接受 FederatedCredential 实例或是一个 PasswordCredential 实例。
-   cache: 请求的 cache 模式: default 、 no-store 、 reload 、 no-cache 、 force-cache 或者 only-if-cached 。
-   redirect: 可用的 redirect 模式: follow (自动重定向), error (如果产生重定向将自动终止并且抛出一个错误), 或者 manual (手动处理重定向). 在 Chrome 中，Chrome 47 之前的默认值是 follow，从 Chrome 47 开始是 manual。
-   referrer: 一个 USVString 可以是 no-referrer、client 或一个 URL。默认是 client。
-   referrerPolicy: Specifies the value of the referer HTTP header. May be one of no-referrer、 no-referrer-when-downgrade、 origin、 origin-when-cross-origin、 unsafe-url 。
-   integrity: 包括请求的 subresource integrity 值 （ 例如： sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=）。

## 发送凭证

为了让浏览器发送包含凭据的请求（即使是跨域源），要将 credentials: 'include'添加到传递给 fetch()方法的 init 对象。

```js
fetch('https://example.com', {
	credentials: 'include'
})
```

如果你只想在请求 URL 与调用脚本位于同一起源处时发送凭据，请添加 credentials: 'same-origin'。

```js
// The calling script is on the origin 'https://example.com'

fetch('https://example.com', {
	credentials: 'same-origin'
})
```

要改为确保浏览器不在请求中包含凭据，请使用 credentials: 'omit'。

```js
fetch('https://example.com', {
	credentials: 'omit'
})
```

## Response 对象

-   Response.status — 整数(默认值为 200) 为 response 的状态码.
-   Response.statusText — 字符串(默认值为"OK"),该值与 HTTP 状态码消息对应.
-   Response.ok — 如上所示, 该属性是来检查 response 的状态是否在 200-299(包括 200,299)这个范围内.该属性返回一个 Boolean 值.

## 参考

[https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

[https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch)

<ClientOnly>
<article-info weather="qing" mood="fendou">2019 年 09 月 10 日 18:20</article-info>
</ClientOnly>
