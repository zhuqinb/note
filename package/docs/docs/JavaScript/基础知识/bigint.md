# JS 最新基本数据类型： BigInt

表示整数；目前处于第三阶段，一旦添加，它就是第二个数字数据类型也将是第八个基本数据类型

## 出现的原因

在 js 中，整数按照 IEEE 754-2008 标准定义的，所有数组都以双精度 64 位浮点格式表示

在此标准下，无法精确表示的非常大的整数将自动四舍五入。确切地说，JS 中的 Number 类型只能安全地表示`-9007199254740991 (-(2^53-1))` 和 `9007199254740991(2^53-1)`之间的整数，任何超出此范围的整数值都可能失去精度。

JS 提供 `Number.MAX_SAFE_INTEGER` 常量来表示 最大安全整数，`Number.MIN_SAFE_INTEGER` 常量表示最小安全整数：

## 使用

```js
// 直接量  在数字后面加上n即可
const num = 123n

// 构造函数创建
BigInt(12)
BigInt('12')
BigInt(true)

// 二进制
console.log(0b123123n)

// 八进制
console.log(0x123123n)

// 16进制
console.log(0o123123n)

// 报错
BigInt(10.2) // RangeError
BigInt(null) // TypeError
BigInt('abc') //SyntaxError
```

## 参考

[https://segmentfault.com/a/1190000019912017#articleHeader3](https://segmentfault.com/a/1190000019912017#articleHeader3)
