const fs = require('fs')
const path = require('path')

const url = path.resolve(__dirname, './hello.js')
fs.mkdir(url, err => {
	if (err) return
	fs.writeFile(url, 'hello world', (err, res) => {
		console.log(err)
	})
})
