# Gantt(ng版) 

## 支持的功能

任务和可折叠任务组
悬停任务时的依赖关系和突出显示
使用负责人列表编辑甘特表中的数据
任务完成
带有其他列的表格
任务样式或作为HTML标签
大事记
资源资源
费用
计划开始和结束日期
甘特计划与执行
动态加载任务
动态更改格式：时，日，周，月，季度
从JSON和XML加载甘特
来自外部文件（包括对MS Project XML文件的实验性支持）
从JavaScript字符串
支持国际化

## 安装与配置

### 安包

`npm install --save jsgantt-improved ng-gantt`

### 在根模块中加入Gantt模块

```js
import { NgGanttEditorModule } from 'ng-gantt' 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ....,
    NgGanttEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 在全局导入css文件
`@import "~jsgantt-improved/dist/jsgantt.css"`

## 配置项

```js
import { Component, ViewChild } from '@angular/core';
import { GanttEditorComponent, GanttEditorOptions } from 'ng-gantt';

@Component({
  selector: 'app-root',
  template: '<ng-gantt [options]="editorOptions" [data]="data"></ng-gantt>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public editorOptions: GanttEditorOptions;
  public data: any;
  @ViewChild(GanttEditorComponent, { static: true }) editor: GanttEditorComponent;

  constructor() { 
    this.editorOptions = {
        vCaptionType: 'Duration',  // Set to Show Caption : None,Caption,Resource,Duration,Complete,
      vQuarterColWidth: 36,
      vDateTaskDisplayFormat: 'day dd ** month yyyy', // Shown in tool tip box
      vDayMajorDateDisplayFormat: 'mon yyyy - Week ww', // Set format to display dates in the "Major" header of the "Day" view
      vWeekMinorDateDisplayFormat: 'dd mon ---', // Set format to display dates in the "Minor" header of the "Week" view
      vLang: this.vLang,  // 国际化
      vUseSingleCell: this.vUseSingleCell, // 设置阈值，在该阈值下，每个表行仅使用一个单元格（禁用0）。 帮助大型图表呈现性能。
      vShowRes: parseInt(this.vShowRes, 10), //[setShowRes()]  左边table显示 Res列
      vShowCost: parseInt(this.vShowCost, 10), // 左边table显示 Cost列
      vShowComp: parseInt(this.vShowComp, 10), // 左边table显示 Comp列
      vShowDur: parseInt(this.vShowDur, 10), // 左边table显示 Dur列
      vShowStartDate: parseInt(this.vShowStartDate, 10), // 左边table显示 StartDate列
      vShowEndDate: parseInt(this.vShowEndDate, 10), // 左边table显示 EndDate列
      vShowPlanStartDate: parseInt(this.vShowPlanStartDate, 10), // // 左边table显示 PlanStartDate列
      vShowPlanEndDate: parseInt(this.vShowPlanEndDate, 10), // // 左边table显示 PlanEndDate列
      vShowTaskInfoLink: parseInt(this.vShowTaskInfoLink, 10), // 在工具提示中显示链接（0/1）
      // 在标题中显示/隐藏一周中最后一天的日期以进行每日查看（1/0）
      vShowEndWeekDate: parseInt(this.vShowEndWeekDate, 10),
      vAdditionalHeaders: vAdditionalHeaders,  // 附加标题
      vEvents: { // 点击对应的列触发事件
        taskname: this.say.bind(this, 'taskname'),
        res: this.say.bind(this, 'res'),
        dur: this.say.bind(this, 'dur'),
        comp: this.say.bind(this, 'comp'),
        start: this.say.bind(this, 'start'),
        end: this.say.bind(this, 'end'),
        planstart: this.say.bind(this, 'planstart'),
        planend: this.say.bind(this, 'planend'),
        cost: this.say.bind(this, 'cost')
      },
      vEventsChange: { // 对应的列改变时触发事件
        taskname: this.editValue.bind(this, this.data),
        res: this.editValue.bind(this, this.data),
        dur: this.editValue.bind(this, this.data),
        comp: this.editValue.bind(this, this.data),
        start: this.editValue.bind(this, this.data),
        end: this.editValue.bind(this, this.data),
        planstart: this.editValue.bind(this, this.data),
        planend: this.editValue.bind(this, this.data),
        cost: this.editValue.bind(this, this.data)
      },
      vResources: [
        { id: 0, name: 'Anybody' },
        { id: 1, name: 'Mario' },
        { id: 2, name: 'Henrique' },
        { id: 3, name: 'Pedro' }
      ],
      vEventClickRow: this.say, // 单元格被点击时触发
      vTooltipDelay: this.delay,
      vDebug: this.vDebug === 'true', //[setDebug()] 如果要在控制台中查看调试，请设置为true
      vEditable: true, //[setEditable()] 
      vUseSort: this.vUseSort === 'true',  //[setUseSort()] 控制任务列表是按父任务/开始时间顺序排序还是按创建的顺序简单显示，默认为1（启用排序）
      vFormatArr: ['Day', 'Week', 'Month', 'Quarter'], // 可以选择的类型
      vFormat: 'day' // 当前的类型
    }
     this.data = [{
      'pID': 1, // （必需）用于标识每一行的唯一数字ID
      'pName': 'Define Chart API v1', // （必填）任务标签
      'pStart': '', // （必填）任务开始日期，可以为组输入空日期（''）。您还可以输入特定时间（例如2013-02-20 09:00）以提高精度或半天
      'pEnd': '', // （必填）任务结束日期，可以为组输入空日期（''）
      'pClass': 'ggroupblack', //（必需）此任务的css类
      'pLink': '', // （可选）将在工具提示中显示为“更多信息”链接的任何http链接。
      'pMile': 0, //（可选）指示这是否是一个里程碑任务-数字；1 =里程碑，0 =非里程碑
      'pRes': 'Brian', // （可选）资源名称
      'pComp': 0, // （必填）完成百分比，数字
      'pGroup': 1, // （可选）指示这是否是组任务（父级）-数字；0 =普通任务，1 =标准小组任务，2 =组合小组任务*
      'pParent': 0, // （必填）标识父级pID，这会使此任务成为已标识任务的子级。数字顶级任务应将pParent设置为0
      'pOpen': 1, // （必填）表示首次绘制图表时是否打开了标准组任务。必须为所有项目设置值，但只能由标准组任务使用。数值，1 =打开，0 =关闭
      'pDepend': '', // （可选）此任务所依赖的ID的逗号分隔列表。从列出的每个任务到该项目都将画一条线。每个id都可以选择后面跟随一个依赖类型后缀。有效值为：'FS'-完成至开始（如果省略后缀，则为默认值），'SF'-完成至开始，'SS'-开始至开始，'FF'-完成至结束。如果存在后缀，则必须直接将其后缀添加到ID中，例如'123SS'
      'pCaption': '', // （可选）如果CaptionType设置为“ Caption”，则将在任务栏之后添加的标题
      'pNotes': 'Some Notes text', // （可选）将在此任务的工具提示中显示的详细任务信息
      'pBarText': '', // （可选）用于在任务栏中包含文本
      'pCost': '' // 该任务的成本，数字
    }]; 
  }
}
```

展示图与标注
 <img :src="$withBase('/images/JavaScript/lib/gantt.png')" alt="foo">

## 文档参考

[官方wiki](https://github.com/jsGanttImproved/jsgantt-improved/blob/master/README.md)