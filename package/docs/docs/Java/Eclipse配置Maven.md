# Eclipse 配置 Maven

## Maven 安装与配置

### 安装

1. [Maven 下载地址](http://maven.apache.org/download.cgi)

<img :src="$withBase('/images/Java/maven_downLoad.png')" alt="foo">

2. 将下载的文件解压

3. 配置环境变量追加到 `path` 后面,例如: `E:\maven\apache-maven-3.6.1\bin`

4. 如果上面步骤顺利，表示已经完成安装，可以通过 `dos` 命令检查

```bash
mvn -v
```

如果出现版本信息，表示安装成功

### 配置 Maven 本地仓库

1. 在`E:\maven`新建`maven-repository`文件,该目录用作 `maven` 的本地库
2. 打开 `maven` 安装目录下的 `conf\settings.xml` 文件，查找下面代码

```xml
<localRepository>/path/to/local/repo</localRepository>
```

这段代码是被注释掉的，需要把这个移到注释之外，然后将目录修改成上面新建的 `maven` 本地库,例如：

```xml
<localRepository>E:\maven\maven-repository</localRepository>
```

此目录的作用，是起到一个缓存的作用，它的默认地址`c:\Users\用户名.m2`,当我们从 `maven` 中获取 `jar` 包的时候，`maven` 首先会在本地仓库中查找，如果本地有则返回，如果没有则从远程仓库获取包，并在本地库中保存。

另外： 我们在 `maven` 项目中运行 `mvn install`,项目将会自动打包并安装到本地库

3. 运行一下 `DOS` 命令

```bash
mvn help:system
```

如果前面的配置成功，那么本地仓库会出现一些文件 `E:\maven\maven-repository`

## 配置 Eclipse 的 Maven 环境

1. 打开 `window -> preferences -> Maven -> Installations`, 点击右侧 `Add`
   <img :src="$withBase('/images/Java/eclipse-setMaven-00.png')" alt="foo">

2. 设置 `Maven` 的安装目录，然后 `Finish`
   <img :src="$withBase('/images/Java/eclipse-setMaven-01.png')" alt="foo">

3. 选中刚刚添加的 `maven`，并 `Apply`
   <img :src="$withBase('/images/Java/eclipse-setMaven-02.png')" alt="foo">

4. 打开 `Window->Preferences->Maven->User Settings`，配置如下并 `Apply`
   <img :src="$withBase('/images/Java/eclipse-setMaven-03.png')" alt="foo">
