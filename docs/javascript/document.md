## node.contains（otherNode）

该 Node.contains()方法返回一个 Boolean 值，该值指示节点是否是给定节点的后代，即节点本身，其直接子节点之一（childNodes），子节点直接子节点之一等等。

```js
function isInPage(node) {
	return node === document.body ? false : document.body.contains(node)
}
```

ie9 及以上

替代方法： document.querySelector('.parent .child') 不存在值是 null

## compareDocumentPosition() 可以确定节点的关系

返回一个表示该关系的位掩码

1 无关 2 居前 4 居后 8 包含 16 倍包含

```js
var result = document.documentElement.compareDocumentPosition(document.body)
alert(!!(result & 16)) //20(4+16)  表示居后加上被包含
```
