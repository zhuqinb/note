// import { add } from './currying'
// import { read } from './fileReader'

// let input = document.createElement('input')
// let img = document.createElement('img')
// input.type = 'file'
// document.body.appendChild(input)
// document.body.appendChild(img)

// read(input, img)
import Vue from 'vue'

import '@/css/flex.scss'
import '@/views/home.vue'
import App from '@/views/app.vue'
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App />'
})