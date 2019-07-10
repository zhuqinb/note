## 使用node.js安装asar和反编译app.asar
背景：app.asar文件是Electron加密打包时的中间产物，electron.exe调用resources文件夹下的app.asar从而实现不用解压缩而直接读取文件内容的高效。

> npm install -g asar

`asar extract app.asar ./`
没报错就是执行成功

https://www.cnblogs.com/cczw/archive/2016/10/21/5984012.html