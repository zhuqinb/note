# 代码准入规范

## 分支规范&检查点

|分支|命名|说明|检查点|最佳实践|现状统计
|:---|:---:|---:|---:|---:|---:|
|主分支|master|主分支,与线上代码一致|是否保护分支| |销售 服务 平台 应用 供应链 master|
|开发分支|dev test|包含所有最新功能代码分支，测试环境发版tag来源分支|暂时不保护| |销售 服务 平台 应用 dev、test 售后 develop 平台 testing 供应链 develop dev* 不包含develop* 分支数4948，399个项目 develop* 分支数377，198个项目 testing* 分支数257，237个项目 test* 不包含testing* 分支数340，254个项目|
|线上发版分支|RELEASE|线上环境发版tag来源分支, 只能从master合并来|是否保护分支| |销售 + 服务 平台|
|功能分支|feature/*** feature-***|从master分支checkout生成|正则匹配 /^feature[/\\-][\\s\\S]*$/|feature/redis|销售 平台 feature 售后 feat|
|修复分支|hotfix/*** hotfix-***|从线上RELEASE版本checkout生成, 用于修复紧急bug|正则匹配 /^hotfix[/\\-][\\s\\S]*$/|hotfix/timeout|销售 平台 hotfix 售后 fix|

### 指标

		
|指标名|计算规则|指标类型
|:---|:---:|---:|
|分支规范率|自接入日起 规范的分支数 / 总分支数|必须关注
|
|活跃分支占比|自接入日起 近3个月内有过提交的分支数 / 总分支数|推荐关注|

### Commit 规范&检查点
遵从Angular[提交规范](https://www.conventionalcommits.org/en/v1.0.0/) 

|指标名|计算规则
|:---|:---:|
|`<type>``[optional scope]`:`<空格(兼容无空格)><description>`<br>`<空行>` `[optional body]` <br> `<空行>` <br> `[optional footer(s)]`|feat: 实现mysql链路追踪功能 <br>通过替换mysql driver实现mysql链路追踪, 不侵入上层业务代码 <br>#56|

### 检查点

| |计算规则|检查结果
|:---|:---:|:---:|
| type|提交类型, 是否符合规范 |提交类型 |
|description | 对提交作简要概述, 长度在80个字符内, 不要换行| 长度|

### type 类型

|提交类型 |说明|是否显示在Changelog|示例|
|:---|:---:|:---:|:---:|
|feat|新功能|是|feat: 支持x5协议|
|fix|问题修改|是|fix: 修复类型不匹配问题|
|refactor|代码重构| |refactor: 重构了事件处理流程|
|docs doc|文档修改| |docs: 添加了x5使用文档|
|style|代码格式修改, 注意不是修改css| |style: 修改缩进为4个空格|
|test|测试用例修改| |test: 新增获取用户信息测试用例|
|perf|优化代码性能的修改| |perf: 合并了多次mysql查询IO|
|chore|非源代码修改, 如构建脚本/CI/依赖管理配置等| |chore: 新增neo构建Dockerfile|
|revert|撤销提交| |revert: revert commit 373b0a|

:::tip
- 尽量在必要的时候选择 feat 和 fix, 并带上具体的 issue 链接
- 功能开发和 bug 修复完毕后, 可以使用 rebase 合并一些临时提交
- 每个 commit 都要保证是原子的，是一个完整功能。
:::

### 指标

| 指标名|计算规则|指标类型
|:---|:---:|:---:|
|提交达标率|自接入日起 达标提交数 / 总提交数|必须关注|
|提交邮箱达标率|办公邮箱（@xiaomi.com）人数 / 总人数，MiCode 后续可能仅允许办公邮箱提交|必须关注|

### CodeReview

在gitlab中使用Merge request来记录code review过程

#### 检查点
| |检查点说明|强制检查
|:---|:---:|:---:|
|操作人|MR分配人和合并人不能是自己|是|
|描述（内容）|描述内容长度至少大于10个字符|是|
|评论|至少有1条评论|是|
|批注|可以没有批注 如果有则应大于1个，且全部标记为已解决|是|
|时长|MR从创建到合并完成时间不可过长，应该在5天内完成|是|

#### 指标
|指标名 |计算规则 （自接入之日起 某时间段内）|指标类型
|:---|:---:|:---:|
|CodeReview 率|主分支 通过MR合并的净新增commit数 / 主分支 总commit数。 即由他人而非自己合并的MR包含的commit数|必须关注|
|CodeReview 达标率|合入master分支 合格的MR数 / 合入master分支 总MR数。|必须关注|
|CodeReview 批注率|合入master分支 大于1条批注的MR数 / 合入master分支 总MR数。|推荐关注|
|CodeReview 描述率|合入master分支 描述内容长度至少大于10个字符MR数 / 合入master分支 总MR数|推荐关注|

* Close 的 MR 不影响指标

#### 指标评分

控制每一个环节权重加和=100

| |指标名|权重
|:---|:---:|:---:|
|必须关注指标|分支规范率|15|
| |提交达标率|20|
| |提交邮箱达标率|25|
| |CodeReview 率|25|
| |CodeReview 达标率|15|
|建议关注指标|活跃分支占比|35|
| |CodeReview 批注率|35|
| |CodeReview 描述率|30|

#### 计算公式
总分=SUM(指标 * 权重)

无数据产生的指标取上一期值，若上一期没有此指标数据则取 0

##### 举例
| 仓库|分支规范率|提交达标率|提交邮箱达标率|Code Review 率|Code Review 达标率|总分
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
|xxx|0.00|0.48|0.80|0.25|0.00|0+0.48*20+0.8*25+0.25*25+0 = 35.85

### 最佳实践

#### Code Review 分级

` <table class="relative-table wrapped confluenceTable" style="width: 71.5775%;" data-resize-percent="71.57748436414177"><colgroup><col style="width: 5.36443%;" data-resize-pixel="55.20000076293945" data-resize-percent="5.364431561024243" data-offset-left="40" data-offset-right="95.20000076293945"><col style="width: 7.46356%;" data-resize-pixel="76.80000305175781" data-resize-percent="7.463557147887057" data-offset-left="95.20000457763672" data-offset-right="172.00000762939453"><col style="width: 36.4626%;" data-resize-pixel="375.20001220703125" data-resize-percent="36.46258622031402" data-offset-left="172" data-offset-right="547.2000122070312"><col style="width: 23.7123%;" data-resize-pixel="244" data-resize-percent="23.71234207968902" data-offset-left="547.2000122070312" data-offset-right="791.2000122070312"><col style="width: 26.8999%;" data-resize-pixel="276.8000183105469" data-resize-percent="26.899904597720788" data-offset-left="791.2000122070312" data-offset-right="1068.0000305175781"></colgroup><thead><tr><th class="confluenceTh" style="text-align: center;" data-mce-style="text-align: center;"><p>功能级别</p></th><th class="confluenceTh" style="text-align: center;" data-mce-style="text-align: center;"><p>功能列表</p></th><th class="confluenceTh" style="text-align: center;" data-mce-style="text-align: center;"><p>具体方案</p></th><th class="confluenceTh" style="text-align: center;" colspan="1" data-mce-style="text-align: center;"><p>提交检查项</p></th><th class="confluenceTh" style="text-align: center;" colspan="1" data-mce-style="text-align: center;"><p>MarkDown文件</p></th></tr></thead><tbody><tr><td class="confluenceTd" style="text-align: center;" data-mce-style="text-align: center;"><strong><em>P0</em></strong></td><td class="confluenceTd" style="text-align: center;" data-mce-style="text-align: center;"><p>重大Bug修复</p><p>重大Feature上线</p><p>涉及逻辑主流程的更新</p><p>涉及订单、支付等现金流相关逻辑</p><p>（或者代码修改量在<em><strong>500行以上</strong></em>）</p></td><td class="confluenceTd" style="text-align: center;" data-mce-style="text-align: center;"><p>提交人需要将涉及本次更新的原型、文档附上</p><p>如设计底层公共库、公用代码逻辑、库版本、技术栈变更需要leader、整个小组讨论</p><p>业务小组其他成员Review<strong><em>+2</em></strong>并在Review通过时评论 “<strong><em>通过</em></strong>”</p><p><strong><em>在组内广播同步，确保组内成员及时知晓更改点</em></strong></p></td><td class="confluenceTd" colspan="1"><pre><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">### 提交内容：(标题)<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 需求文档<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 原型文档<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 底层公共库更新<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 涉及的流程更新<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 是否涉及现金流以及具体流程<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 变更前截图<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 变更后截图<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 其它说明<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">### checklist<br></span><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 包含新功能<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 包含底层公共库更新<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 包含底层公共方法更新<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 相关文档已更新<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] DB修改已同步到线上<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 为相关功能编写测试用例<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 测试用例已经通过<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 本地开发环境测试已经通过<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] test环境测试已经通过<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 相关更新已同步到相关开发</pre></td><td class="confluenceTd" style="text-align: center;" colspan="1" data-mce-style="text-align: center;"><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper conf-macro output-inline"><a class="confluence-embedded-file" style="margin-left: 2.0px;" href="https://wiki.n.miui.com/download/attachments/182895390/P0.md?version=2&amp;modificationDate=1568278414000&amp;api=v2" data-mce-href="https://wiki.n.miui.com/download/attachments/182895390/P0.md?version=2&amp;modificationDate=1568278414000&amp;api=v2" data-mce-style="margin-left: 2.0px;"><img class="confluence-embedded-image confluence-external-resource" height="250" src="https://wiki.n.miui.com/s/zh_CN/7901/abf7b35644d5a5d1d7e4b0969a83e8eb2b569fb5/4.0.2/_/download/resources/com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources/images/placeholder-medium-file.png" data-image-src="https://wiki.n.miui.com/s/zh_CN/7901/abf7b35644d5a5d1d7e4b0969a83e8eb2b569fb5/4.0.2/_/download/resources/com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources/images/placeholder-medium-file.png" data-mce-src="https://wiki.n.miui.com/s/zh_CN/7901/abf7b35644d5a5d1d7e4b0969a83e8eb2b569fb5/4.0.2/_/download/resources/com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources/images/placeholder-medium-file.png"><span class="title" style="color: rgb(51,51,51);" data-mce-style="color: #333333;">P0.md</span></a></span></p></div></td></tr><tr><td class="confluenceTd" style="text-align: center;" data-mce-style="text-align: center;"><strong><em>P1</em></strong></td><td class="confluenceTd" style="text-align: center;" data-mce-style="text-align: center;"><p>简单Bug修复</p><p>简单Feature上线</p><p>不涉及逻辑主流程的更新</p><p>不涉及订单、支付等现金流相关逻辑</p><p>（或者代码修改量在<em><strong>100行以内</strong></em>）</p></td><td class="confluenceTd" style="text-align: center;" data-mce-style="text-align: center;"><p>提交人需要将逻辑、函数等改动详细说明，如有前端页面布局交互变动应附上截图</p><p><strong><em>Mentor</em></strong>或业务小组其他成员Review<strong><em>+1</em></strong>并在</p></td><td class="confluenceTd" colspan="1"><pre><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">### 提交内容：<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 相关文档<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 问题描述<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 底层公共库更新<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 涉及的流程更新<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 涉及的公共方法更新说明<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 变更前截图<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 变更后截图<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 其它说明<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">### checklist<br></span><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 包含新功能<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 包含底层公共库更新<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 包含底层公共方法更新<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 相关文档已更新<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] DB修改已同步到线上<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 为相关功能编写测试用例<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 测试用例已经通过<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 本地开发环境测试已经通过<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] test环境测试已经通过<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 相关更新已同步到相关开发</pre></td><td class="confluenceTd" style="text-align: center;" colspan="1" data-mce-style="text-align: center;"><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper conf-macro output-inline"><a class="confluence-embedded-file" style="margin-left: 2.0px;" href="https://wiki.n.miui.com/download/attachments/182895390/P1.md?version=3&amp;modificationDate=1568278455000&amp;api=v2" data-mce-href="https://wiki.n.miui.com/download/attachments/182895390/P1.md?version=3&amp;modificationDate=1568278455000&amp;api=v2" data-mce-style="margin-left: 2.0px;"><img class="confluence-embedded-image confluence-external-resource" height="250" src="https://wiki.n.miui.com/s/zh_CN/7901/abf7b35644d5a5d1d7e4b0969a83e8eb2b569fb5/4.0.2/_/download/resources/com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources/images/placeholder-medium-file.png" data-image-src="https://wiki.n.miui.com/s/zh_CN/7901/abf7b35644d5a5d1d7e4b0969a83e8eb2b569fb5/4.0.2/_/download/resources/com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources/images/placeholder-medium-file.png" data-mce-src="https://wiki.n.miui.com/s/zh_CN/7901/abf7b35644d5a5d1d7e4b0969a83e8eb2b569fb5/4.0.2/_/download/resources/com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources/images/placeholder-medium-file.png"><span class="title" style="color: rgb(51,51,51);" data-mce-style="color: #333333;">P1.md</span></a></span></p></div></td></tr><tr><td class="confluenceTd" style="text-align: center;" data-mce-style="text-align: center;"><strong><em>P2</em></strong></td><td class="confluenceTd" style="text-align: center;" data-mce-style="text-align: center;"><p>文案修改</p><p>简单的字段增删</p><p>代码规范化修改</p><p>简单业务逻辑修改</p><p>（或者代码修改量在<strong><em>10行以内</em></strong>）</p></td><td class="confluenceTd" style="text-align: center;" data-mce-style="text-align: center;"><p><strong><em>Mentor</em></strong>或业务小组其他成员Review<strong><em>+1</em></strong>并在Review通过时评论&nbsp;“<strong><em>通过</em></strong>”</p></td><td class="confluenceTd" colspan="1"><pre><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">### 提交内容：<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 相关文档<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 问题描述<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 底层公共库更新<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 涉及的公共方法更新说明<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 变更前截图<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 变更后截图<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">#### 其它说明<br></span><span style="color: rgb(152,118,170);" data-mce-style="color: #9876aa;">### checklist<br></span><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 包含新功能<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 包含底层公共库更新<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 包含底层公共方法更新<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 相关文档已更新<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] DB修改已同步到线上<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 为相关功能编写测试用例<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 测试用例已经通过<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 本地开发环境测试已经通过<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] test环境测试已经通过<br><span style="color: rgb(204,120,50);" data-mce-style="color: #cc7832;">- </span>[ ] 相关更新已同步到相关开发</pre></td><td class="confluenceTd" style="text-align: center;" colspan="1" data-mce-style="text-align: center;"><div class="content-wrapper"><p><span class="confluence-embedded-file-wrapper conf-macro output-inline"><a class="confluence-embedded-file" style="margin-left: 2.0px;" href="https://wiki.n.miui.com/download/attachments/182895390/P2.md?version=2&amp;modificationDate=1568278482000&amp;api=v2" data-mce-href="https://wiki.n.miui.com/download/attachments/182895390/P2.md?version=2&amp;modificationDate=1568278482000&amp;api=v2" data-mce-style="margin-left: 2.0px;"><img class="confluence-embedded-image confluence-external-resource" height="250" src="https://wiki.n.miui.com/s/zh_CN/7901/abf7b35644d5a5d1d7e4b0969a83e8eb2b569fb5/4.0.2/_/download/resources/com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources/images/placeholder-medium-file.png" data-image-src="https://wiki.n.miui.com/s/zh_CN/7901/abf7b35644d5a5d1d7e4b0969a83e8eb2b569fb5/4.0.2/_/download/resources/com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources/images/placeholder-medium-file.png" data-mce-src="https://wiki.n.miui.com/s/zh_CN/7901/abf7b35644d5a5d1d7e4b0969a83e8eb2b569fb5/4.0.2/_/download/resources/com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources/images/placeholder-medium-file.png"><span class="title" style="color: rgb(51,51,51);" data-mce-style="color: #333333;">P2.md</span></a></span></p></div></td></tr></tbody></table>
`

#### 添加MR模板

将上表不同级别附带的md文件下载下来，放到主项目/.gitlab/merge_request_template/下，并将代码合到项目主分支（默认主分支为master）push到micode（文档可见 https://micode.be.xiaomi.com/help/user/project/description_templates）
如图：
