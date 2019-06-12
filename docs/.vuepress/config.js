const path = require('path')
const fs = require('fs')

let ignore = ['README.md', '.vuepress']
let rootUrl = path.resolve(__dirname, '../')
const files = fs
    .readdirSync(rootUrl)
    .filter(file => (ignore.indexOf(file) > -1 ? false : true))
const navs = files.map(file => {
    let fileUrl = path.resolve(__dirname, '../', file)
    let stats = fs.statSync(fileUrl)
    if (stats.isDirectory()) {
        return {
            text: file,
            link: '/' +
                file +
                '/' +
                fs
                .readdirSync(fileUrl)
                .filter(item => item.indexOf('.md') > -1)
                .shift()
        }
    } else {
        return { text: file, link: '/' + file }
    }
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
    // 假定 GitHub。也可以是一个完整的 GitLab 网址
    repo: 'https://gitee.com/zhuqinb_admin/note.git',
    // 如果你的文档不在仓库的根部
    docsDir: 'web/docs',
    // 可选，默认为 master
    docsBranch: 'master',
    // 默认为 true，设置为 false 来禁用
    editLinks: true,
    lastUpdated: 'Last Updated',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    themeConfig: {
        nav: [{
            text: '技术栈',
            items: navs
        }],
        sidebar
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