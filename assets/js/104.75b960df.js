(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{305:function(a,e,s){"use strict";s.r(e);var t=s(0),n=Object(t.a)({},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"eclipse-配置-maven"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-配置-maven","aria-hidden":"true"}},[a._v("#")]),a._v(" Eclipse 配置 Maven")]),a._v(" "),s("h2",{attrs:{id:"maven-安装与配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven-安装与配置","aria-hidden":"true"}},[a._v("#")]),a._v(" Maven 安装与配置")]),a._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"http://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[a._v("Maven 下载地址"),s("OutboundLink")],1)])]),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/Java/maven_downLoad.png"),alt:"foo"}}),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[a._v("将下载的文件解压")])]),a._v(" "),s("li",[s("p",[a._v("配置环境变量追加到 "),s("code",[a._v("path")]),a._v(" 后面,例如: "),s("code",[a._v("E:\\maven\\apache-maven-3.6.1\\bin")])])]),a._v(" "),s("li",[s("p",[a._v("如果上面步骤顺利，表示已经完成安装，可以通过 "),s("code",[a._v("dos")]),a._v(" 命令检查")])])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mvn -v\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("如果出现版本信息，表示安装成功")]),a._v(" "),s("h3",{attrs:{id:"配置-maven-本地仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-maven-本地仓库","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置 Maven 本地仓库")]),a._v(" "),s("ol",[s("li",[a._v("在"),s("code",[a._v("E:\\maven")]),a._v("新建"),s("code",[a._v("maven-repository")]),a._v("文件,该目录用作 "),s("code",[a._v("maven")]),a._v(" 的本地库")]),a._v(" "),s("li",[a._v("打开 "),s("code",[a._v("maven")]),a._v(" 安装目录下的 "),s("code",[a._v("conf\\settings.xml")]),a._v(" 文件，查找下面代码")])]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("localRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("/path/to/local/repo"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("localRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("这段代码是被注释掉的，需要把这个移到注释之外，然后将目录修改成上面新建的 "),s("code",[a._v("maven")]),a._v(" 本地库,例如：")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("localRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("E:\\maven\\maven-repository"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("localRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("此目录的作用，是起到一个缓存的作用，它的默认地址"),s("code",[a._v("c:\\Users\\用户名.m2")]),a._v(",当我们从 "),s("code",[a._v("maven")]),a._v(" 中获取 "),s("code",[a._v("jar")]),a._v(" 包的时候，"),s("code",[a._v("maven")]),a._v(" 首先会在本地仓库中查找，如果本地有则返回，如果没有则从远程仓库获取包，并在本地库中保存。")]),a._v(" "),s("p",[a._v("另外： 我们在 "),s("code",[a._v("maven")]),a._v(" 项目中运行 "),s("code",[a._v("mvn install")]),a._v(",项目将会自动打包并安装到本地库")]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[a._v("运行一下 "),s("code",[a._v("DOS")]),a._v(" 命令")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mvn help:system\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("如果前面的配置成功，那么本地仓库会出现一些文件 "),s("code",[a._v("E:\\maven\\maven-repository")])]),a._v(" "),s("h2",{attrs:{id:"配置-eclipse-的-maven-环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-eclipse-的-maven-环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置 Eclipse 的 Maven 环境")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("打开 "),s("code",[a._v("window -> preferences -> Maven -> Installations")]),a._v(", 点击右侧 "),s("code",[a._v("Add")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/Java/eclipse-setMaven-00.png"),alt:"foo"}})])]),a._v(" "),s("li",[s("p",[a._v("设置 "),s("code",[a._v("Maven")]),a._v(" 的安装目录，然后 "),s("code",[a._v("Finish")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/Java/eclipse-setMaven-01.png"),alt:"foo"}})])]),a._v(" "),s("li",[s("p",[a._v("选中刚刚添加的 "),s("code",[a._v("maven")]),a._v("，并 "),s("code",[a._v("Apply")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/Java/eclipse-setMaven-02.png"),alt:"foo"}})])]),a._v(" "),s("li",[s("p",[a._v("打开 "),s("code",[a._v("Window->Preferences->Maven->User Settings")]),a._v("，配置如下并 "),s("code",[a._v("Apply")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/images/Java/eclipse-setMaven-03.png"),alt:"foo"}})])])])])},[],!1,null,null,null);e.default=n.exports}}]);