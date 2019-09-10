# Content-type

## 介绍

Content-type 是指 http/https 发送信息至服务器时的内容编码类型，contentType 用于表明发送数据流的类型，服务器根据编码类型使用特定的解析方式，获取数据流中的数据。

在网络请求中，常见的 Content-Type 有如下：

text/html, text/plain, text/css, text/javascript, image/jpeg, image/png, image/gif, application/x-www-form-urlencoded, multipart/form-data, application/json, application/xml 等。

其中：text/html, text/plain, text/css, text/javascript, image/jpeg, image/png, image/gif, 都是常见的页面资源类型。

application/x-www-form-urlencoded, multipart/form-data, application/json, application/xml 这四个是 ajax 的请求，表单提交或上传文件的常用的资源类型。

form 表单中可以定义 enctype 属性，该属性的含义是在发送到服务器之前应该如何对表单数据进行编码。默认的情况下，表单数据会编码为"application/x-www-form-unlencoded".

enctype 常用的属性值如下：application/x-www-form-unlencoded： 在发送前编码所有字符(默认情况下)；
multipart/form-data, 不对字符编码。在使用文件上传时候，使用该值。

## application/x-www-form-urlencoded

-   原生 form 默认的提交方式
-   最常见的 post 提交处理
-   支持 post、get 等方法

提交后，所有数据变成键值对的形式`key1=value1&key2=value2`,并且特殊符号需要转义成为 utf-8,如果是 get，那么格式化的字符串直接拼接在 url 后发送服务器;如果请求类型是 post,那么格式化的字符串将放到 http body 的 Form Data 中发送

## multipart/form-data

使用表单上传文件时，必须指定表单的 enctype 属性值为 multipart/form-data. 请求体被分割成多部分，每部分使用 --boundary 分割；
默认将数据会放到 Request Payload 中

<img :src="$withBase('/images/JavaScript/http/ContentType-01.png')" alt="foo">

## application/json

对于一些复杂的数据 JSON 数据类型，使用 application/x-www.form-urlencoded 后，将数据转换的不是很友好，这是使用 application/json 会很好

## application/x-www-form-urlencoded 和 multipart/form-data 区别

-   multipart/form-data: 既可以上传二进制数据，也可以上传表单键值对，只是最后会转换为一条信息
-   application/x-www-form-urlencoded: 只能上传键值对，并且键值对都上键值对分开的

## FormData

基本用法

```html
<form id="myForm">
	<input type="text" name="name" />
	<input type="password" name="password" />
</form>
```

```js
let formData = new FormData(<form: obj>)
let formData = new FormData(document.querySelector('#myForm'))
// 接受一个form表单的对象（可选）

// 设置值 get(key)、 getAll(key)
formData.get('name') // 获取key为name的第一个值。
formData.getAll('name') // 返回一个数组，获取key为name的所有值。

// 添加数据 可以通过append(key, value)来添加数据，如果指定的key不存在则会新增一条数据，如果key存在，则添加到数据的末尾。
formData.append('name', 'xiao1')
formData.append('name', 'xiao2')

// 修改 可以通过 set(key, value)来设置修改数据，如果指定的key不存在则会新增一条，如果存在，则会修改对应的值。
formData.set('name', 'xiao3')

// 删除 delete(key) 删除一个key下所有值
formData.delete('name')

// 判断是否存在 has(key) 返回boolean
formData.has('name')
```

### 上传文件的例子

```js
uploadAvatar(avatar, userId) {
    const url = 'http://localhost:9527'
    let file = avatar.target.files[0]
    let data = new FormData()
    data.append('file', file, file.name)
    data.append('user', userId)
    axios
        .post(url + '/upload', data, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(res => alert('上传成功'))
        .catch(e => alert('上传失败'))
}
```

:::warning
如果使用 FormData 提交文件信息, 最后会将解析的数据放到 form Data 中
:::
<img :src="$withBase('/images/JavaScript/http/ContentType-02.png')" alt="foo">
