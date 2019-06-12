> npm i sanitize-html

`sanitize-html` 提供了一个简单的 `HTML` 清理程序和一个清晰的 `API`。
`sanitize-html` 宽容。它非常适合清理 `HTML` 片段，例如由 `ckeditor` 和其他富文本编辑器创建的片段。从 `Word` 复制和粘贴时删除不需要的 CSS 特别方便。
`sanitize-html` 允许您指定要允许的标记，以及每个标记的允许属性。
如果标签是不允许的，标签的内容仍然保留，除了 `script`，`style` 和 `textarea` 标签。
清除了关闭不良 `p` 和 `img` 元素的语法。
`href` 属性验证，以确保它们只包含 `http`，`https`，`ftp` 和 `mailto` 网址。也允许相对 `URL`。同上 `src` 属性。
`src` 还支持通过过滤主机名将特定 `URL` 作为 `iframe` 标记。
不保留 `HTML` 注释。
