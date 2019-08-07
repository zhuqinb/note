# 关于http的请求问题

## 设计一个策略和方法，实现在https的前端项目里进行http请求

> 如果HTTPS页面包括由普通明文HTTP连接加密的内容,那么连接只是被部分加密：非加密的内容可以被嗅探者入侵，并且可以被中间人攻击者修改，因此连接不在受到保护。当一个网页出现这种情况时，它被称为混合内容页面。

[混合内容 - 安全 | MDN](https://developer.mozilla.org/zh-CN/docs/Security/MixedContent)

其中提到，`<audio>` `<img>` `<video>` `<object>`的http请求被任务是被动，不能改变网页的其它部分。

然而`<script>` `<link>` `XMLHttpRequest` `<iframe>` css中的url方法`<object>`的data属性 属于被动内容,可以改变原页面的内容，窃取敏感数据,容易受到攻击

对应的，在 [什么是混合内容？ | Web | Google Developers](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content?hl=zh-cn)一文中已经做了相关实验，测试了主动和被动的混合内容

- `<script>` 均默认阻止
- `XMLHttpRequest` 阻止
- `<a>` 不会产生混合内容
- `<img>` 仍会加载混合内容图像，但也会向用户显示警告

被动混合内容全是警告
<img :src="$withBase('/images/JavaScript/question/http-01.png')" alt="foo">

主动混合内容就阻止了
<img :src="$withBase('/images/JavaScript/question/http-02.png')" alt="foo">

### 所以iframe、script、xhr都是不行的

但是使用 img 作为被动混合内容可以发送请求，
请求 img 返回 204 就是 onerror，
返回 1x1 的图片就是 onload，
这就是一个 boolean，多发几个带上序列，就可以从服务器获取到返回值了