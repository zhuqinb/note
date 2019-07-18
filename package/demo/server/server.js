let express = require('express')
let webpack = require('webpack')
let middle = require('webpack-dev-middleware')
let config = require('./../webpack.config.js')

let app = express()
let compiler = webpack(config)

app.use(middle(compiler))

app.get('/api/test', (req, res) => {
    res.json({ name: 'zhuqi' })
})

app.listen(9527, (err, result) => {
    if (err) {
        console.log(err)
    } else {
        console.log('成功启动server,监听端口' + 9527)
    }
})