#### 尝试使用 eslint

1.第一步全局安装 eslint `npm install eslint -g`

2.安装进入自己的项目安装 eslint `npm install eslint --save-dev`

3.使用 eslint 初始化一个规则文件 `eslint --init`

关于使用 vue 项目的 eslint 代码检查

初始化时会报错 `eslint-plugin-vue` not Found 原因是 eslint 安装的全局目录，所以这个也需要安装到全局 `npm i eslint-plugin-vue -g`
然后初始化会报下面的错误

```
Installing eslint-plugin-vue@latest, eslint-config-eslint:recommended,plugin:vue/essential@latest
npm ERR! code ENOLOCAL
npm ERR! Could not install from "eslint-config-eslint:recommended,plugin:vue\essential@latest" as it does not contain a package.json file.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\zhuqi\AppData\Roaming\npm-cache\_logs\2019-03-02T06_43_30_814Z-debug.log
Successfully created .eslintrc.js file in D:\workspace\node\Test-Tools
```

##### vscode 配置 eslint

```
{
	"window.zoomLevel": 2,
	"git.path": "D:\\soft\\git\\cmd\\git.exe",
	"eslint.autoFixOnSave": true,
	"editor.formatOnSave": true,
	"prettier.eslintIntegration": true,
	"prettier.singleQuote": true,
	"prettier.tabWidth": 4,
	"prettier.useTabs": true,
	"vetur.format.defaultFormatter.html": "js-beautify-html",
	"javascript.format.insertSpaceBeforeFunctionParenthesis": true,
	"prettier.semi": false,
	"eslint.validate": [
		"javascript",
		"javascriptreact",
		{
			"language": "vue",
			"autoFix": true
		}
	],
	"vetur.format.defaultFormatterOptions": {
        //避免对html属性进行换行显示
		"js-beautify-html": {
			"wrap_attributes": "auto"
			//vue组件中html代码格式化样式
		}
        "prettyhtml": {
            "printWidth": 500,
            "singleQuote": false,
            "wrapAttributes": false,
            "sortAttributes": false
        }
	}
}

 - auto: 仅在超出行长度时才对属性进行换行。
 - force: 对除第一个属性外的其他每个属性进行换行。
 - force-aligned: 对除第一个属性外的其他每个属性进行换行，并保持对齐。
 - force-expand-multiline: 对每个属性进行换行。
 - aligned-multiple: 当超出折行长度时，将属性进行垂直对齐。

需要插件： prettier, ESLint, Vetur
```

package.json 的配置

```
"rules": {
    "generator-star-spacing": "off",
    "no-debugger": "error",
    "indent": ["error",4,{"SwitchCase": 2}]
}
```
