# FileReader预览本地文件

## FileReader方法

FileReader的实例拥有4个方法， 其中3个是用来读取文件，另一个是用来中断读取的。需要注意的是不管读取成功或失败，这几个方法都会直接返回读取结果，而是在result属性中

1. abort(none) 终端读取
2. readAsBinaryString(File: file) 该方法将文件读取为二进制字符串，通常我们将它传送到后端，后端可以通过这段字符串存储文件。
3. readAsDataURL(File: file)，该方法将文件读取为一段以 data: 开头的字符串，这段字符串的实质就是 Data URL，Data URL是一种将小文件直接嵌入文档的方案。这里的小文件通常是指图像与 html 等格式的文件。（其实图片的话就是转成base64的格式）
4. readAsText(File: file, String: encoding = 'UTF-8') 将文件以文本方式读取，读取的结果即是这个文本文件中的内容

## FileReader事件

FileReader拥有提供了整个流程的事件模型，方便我们在读取文件的各个阶段来进行自己想执行的方法

1. onabort，中断时触发
1. onerror，出错时触发
1. onload，文件读取成功完成时触发
1. onloadend，读取完成触发，无论成功或失败
1. onloadstart，读取开始时触发
1. onprogress，读取中

基本的流程就是呢~ onloadstart>onprogress>onload>onloadend

## 使用
```html
<input type="file" />
<img src="" alt="">
<div class="text"></div>

<script>
let input = document.querySelector('input')
let img = documet.querySelector('img')
let text = document.querySelector('div.text')
</script>
```
### 读取图片并显示
```js
function read(el, imgEl) {
	el.addEventListener('change', e => {
		if(!FileReader){
			throw new Error('浏览器不支持FileReader')
		}
		let reader = new FileReader()
		const file = e.target.files[0]
		reader.readerAsDataURL(file) //转换成功后会调用reader.onload
		reader.onload = event => {
			imgEl.src = event.target.result
		}
	})
}
read(input, img)
```

### 将读取图片转换成路径，并显示
```js
function read(el, imgEl) {
	el.addEventListener('change', e => {
		if(!FileReader){
			throw new Error('浏览器不支持FileReader')
		}
		let reader = new FileReader()
		const file = e.target.files[0]
		imgEl.src = URL.createObjectURL(file)
	})
}
read(input, img)
```

### 读取文本，并显示
```js
function add(el, target){
	el.addEventListener('change', e => {
		if(!FileReader){
			throw new Error('浏览器不支持FileReader')
		}
		let reader = new FileReader()
		const file = e.target.files[0]
		reader.readAsText(file)
		reader.onload = event => {
			target.innerHTML = event.target.result
		}
	})
}
add(input, text)
```
## 参考
[https://juejin.im/post/5d411ed2f265da03ae78523d?utm_source=gold_browser_extension#heading-1](https://juejin.im/post/5d411ed2f265da03ae78523d?utm_source=gold_browser_extension#heading-1)