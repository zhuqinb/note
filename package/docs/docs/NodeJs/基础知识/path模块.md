# path 模块

## `path.join([...paths]) :string`

path.join() 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。

零长度的 path 片段会被忽略。 如果连接的路径字符串是零长度的字符串，则返回 '.'，表示当前工作目录。

```js
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// 返回: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar')
// 抛出 'TypeError: Path must be a string. Received {}'
```

如果任何路径片段不是字符串，则抛出 TypeError。

### 与 path.resolve() 区别

这个只是用来连接一个或多个地址，path.resolve() 是需要拼接成一个绝对路径

## `path.relative(from, to): string`

path.relative() 方法根据当前工作目录返回 from 到 to 的相对路径。 如果 from 和 to 各自解析到相同的路径（分别调用 path.resolve() 之后），则返回零长度的字符串。
如果将零长度的字符串传入 from 或 to，则使用当前工作目录代替该零长度的字符串。

```js
// POSIX
path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb') //'../../impl/bbb'
//window
path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb') //'..\\..\\impl\\bbb'
```

如果 from 或 to 不是字符串，则抛出 TypeError。

## `path.resolve([...paths]) :string`

将路径或路径片段的序列解析为绝对路径

1. 给定的路径序列从右到左，每个后续的 path 前置，直到构造成一个绝对路径
2. 如果在处理完所有给定的 path 片段之后还没未生成绝对路径，则再加上当前工作目录
3. 生成的路径已规范化，并且除非将路径解析为根目录，否则将删除尾部斜杠。
4. 零长度的 path 片段会被忽略。
5. 如果没有传入 path 片段，则 path.resolve() 将返回当前工作目录的绝对路径。

```js
/**
 *  如果当前工作目录是 e:\zhu\github\note
 */
// `/`开头表示根目录
path.resolve('/js', 'demo') // e:\js\demo
path.resolve('/js', '/demo') // e:\zhu\github\note\demo
path.resolve('js', 'demo') // e:\zhu\github\note\js\demo
```

如果任何参数不是字符串，则抛出 TypeError。
