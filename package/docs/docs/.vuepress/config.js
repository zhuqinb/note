const path = require('path')
const fs = require('fs')

let ignore = ['README.md', '.vuepress']
let rootUrl = path.resolve(__dirname, '../')
const files = fs
	.readdirSync(rootUrl)
	.filter(file => !(ignore.indexOf(file) > -1))
const navs = files.map(file => {
	let currentFileUrl = path.resolve(__dirname, '../', file), // 当前文件完整路径
		rootUrl = file, // 当前文件名
		totalUrl = rootUrl // 遍历时需要的累计的路径
	return (function getFirstFile(fileUrl) {
		let stats = fs.statSync(fileUrl)
		if (stats.isDirectory()) {
			file = (fs.readdirSync(fileUrl) || [])[0] // 该目录下的第一个文件名
			currentFileUrl = path.resolve(fileUrl, file)
			totalUrl += `/${file}`
			return getFirstFile(currentFileUrl)
		} else {
			return { text: rootUrl, link: '/' + totalUrl }
		}
	})(currentFileUrl)
})
let sidebar = {}
files.forEach(file => {
	fileUrl = path.resolve(__dirname, '../', file)
	let stats = fs.statSync(fileUrl)
	if (stats.isDirectory()) {
		sidebar[`/${file}/`] = genSidebarConfig(fileUrl)
	}
})

module.exports = {
	title: '前端',
	description: 'es6',
	base: '/note/',
	head: [
		['link', { rel: 'icon', href: '/img/logo.ico' }],
		['link', { rel: 'manifest', href: '/manifest.json' }]
	],
	themeConfig: {
		// 假定 GitHub。也可以是一个完整的 GitLab 网址
		repo: 'https://github.com/zhuqinb/note',
		// 如果你的文档不在仓库的根部
		docsDir: 'package/docs/docs',
		// 可选，默认为 master
		docsBranch: 'master',
		// 默认为 true，设置为 false 来禁用
		editLinks: true,
		editLinkText: '编辑此页面',
		// lastUpdated: '上次更新',
		nav: [
			{
				text: '技术栈',
				items: navs
			}
		],
		sidebar
	},
	plugins: [
		['@vuepress/back-to-top', true],
		[
			'@vuepress/register-components',
			{
				componentsDir: './components'
			}
		],
		['@vuepress/medium-zoom', true]
	],
	configureWebpack: {
		resolve: {
			alias: {
				images: 'public/images'
			}
		}
	},
	markdown: {
		lineNumbers: true
	}
}

function genSidebarConfig(dir) {
	let files = fs
		.readdirSync(dir)
		.sort(
			(a, b) =>
				(isNaN(parseInt(a)) ? Infinity : parseInt(a)) -
				(isNaN(parseInt(b)) ? Infinity : parseInt(b))
		)
		.filter(element => !element.endsWith('.js'))
		.map((element, i) => {
			let filename = path.resolve(dir, element)
			let stat = fs.statSync(filename)
			if (stat.isDirectory()) {
				return {
					title: path.basename(filename),
					collapsable: true,
					children: genSidebarConfig(filename)
				}
			} else {
				let fileName = path.basename(element)
				let absoluteUrl = path.resolve(dir, fileName)
				let relative = path.relative(rootUrl, absoluteUrl)
				relative = relative
					.substr(relative.indexOf('\\') + 1)
					.replace('\\', '/')
				fileName = fileName.substr(0, fileName.lastIndexOf('.'))
				return [relative, fileName]
			}
		})
	return files
}
