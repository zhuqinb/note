# 移动端适配

## 使用 px2rem

**2019 年 3 月 17 日 16 点 26 分**

@vue/cli 3.X

安装 `lib-flexible` 动态给根元素设置 font-size,data-dpr
安装 `px2rem-loader` 将 px 转化为 rem

1. main.js

```js
import 'lib-flexible/flexible'
```


2. vue.config.js

```js
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('scss')
            .oneOf('vue')
            .use('px2rem-loader')
            .loader('px2rem-loader')
            .before('postcss-loader') // this makes it work.
            .options({ remUnit: 75, remPrecision: 8 })
            .end()
    }
}

remUnit: 表示当前设计稿为 750px; remPrecision: 表示转换后保留8为小数, 取值区间[0, 100]
```

> 需要注意的是 `px2rem-loader` 必须在 scss-loader 前面, 不然会报错

其他动态设置根元素字体的方法：

1.还有一个使用 hotcss.js 这个也是根据当前设备自动设置根元素的 font-size 和 data-dpr, 但是和 px2rem-loader 配合起来有点问题
2.rem.js, 也是配合起来和 px2rem 存在问题

```js
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
```

## 使用vw
