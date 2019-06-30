let weather = {
	weizhi: { value: 'iconicon-test22', description: '未知' },
	feng: { value: 'iconicon-test21', description: '风' },
	longjuanfeng: { value: 'iconicon-test20', description: '龙卷风' },
	dafeng: { value: 'iconicon-test19', description: '大风' },
	jufeng: { value: 'iconicon-test18', description: '飓风' },
	wumai: { value: 'iconicon-test17', description: '雾霾' },
	wu: { value: 'iconicon-test16', description: '雾' },
	dabaoxue: { value: 'iconicon-test15', description: '大暴雪' },
	shachen: { value: 'iconicon-test14', description: '沙尘' },
	chenfu: { value: 'iconicon-test13', description: '浮沉' },
	daxue: { value: 'iconicon-test12', description: '大雪' },
	yujiaxue: { value: 'iconicon-test11', description: '雨夹雪' },
	zhongxue: { value: 'iconicon-test10', description: '中雪' },
	xiaoxue: { value: 'iconicon-test9', description: '小雪' },
	baoxue: { value: 'iconicon-test8', description: '暴雨' },
	tedabaoxue: { value: 'iconicon-test7', description: '特大暴雨' },
	yujiabingbao: { value: 'iconicon-test6', description: '雨加冰雹' },
	leizhenyu: { value: 'iconicon-test5', description: '雷阵雨' },
	dayu: { value: 'iconicon-test4', description: '大雨' },
	xiaoyu: { value: 'iconicon-test3', description: '小雨' },
	zhongyu: { value: 'iconicon-test2', description: '中雨' },
	duoyun: { value: 'iconicon-test1', description: '多云' },
	yun: { value: 'iconicon-test', description: '云' },
	qing: { value: 'iconsun', description: '晴' }
}

let weatherList = [...Object.values(weather)]
export { weather, weatherList }
