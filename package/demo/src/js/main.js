// import { add } from './currying'
import { read } from './fileReader'

let input   = document.createElement('input')
let img     = document.createElement('img')
input.type  = 'file'
// input.value = '选择图片后，查看图片'
document.body.appendChild(input)
document.body.appendChild(img)

read(input, img)