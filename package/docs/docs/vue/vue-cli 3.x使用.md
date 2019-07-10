1. 使用 router 和 store
   `vue add router`
   `vue add store`
   只能分开安装
2. 使用 scss
   `npm install -D sass-loader node-sass`
   不用另外配置
3. 使用 scss 定义模块的代码,不能通过导入在`main.js`中全局使用,需要在 vue.config.js 中配置,然后就可以在全局中使用

    ```
    module.exports = {
        css: {
            loaderOptions: {
                postcss: {},
                sass: {
                    data: `@import "@/styles/mixin.scss";`
                }
            }
        },
    }
    ```

4.对于 eslint 的配置 先安装`vue add @vue/eslint` 后在 package.js 中配置规则

```
    "rules": {
        "generator-star-spacing": "off",
        "no-debugger": "error",
        "indent": [
            "error",
            4,
            {
            "SwitchCase": 2
            }
        ]
    },
```
