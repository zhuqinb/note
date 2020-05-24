## Object 自身属性被覆盖的解决方式

例： `hasOwnProperty`
```js
Object.prototype.hasOwnProperty.call(obj, property) //true
// 或者
({}).hasOwnProperty.call(obj, 'bar')
```
