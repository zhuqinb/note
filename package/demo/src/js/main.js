// import { add } from './currying'
// import { read } from './fileReader'

// let input = document.createElement('input')
// let img = document.createElement('img')
// input.type = 'file'
// document.body.appendChild(input)
// document.body.appendChild(img)

// read(input, img)
import Vue from 'vue'

import '@/css/index.scss'
import '@/views/home.vue'
import routes from '@/router/index'
import VueRouter from 'vue-router';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from '@/views/app.vue'
// Vue.use(ElementUI)
Vue.use(VueRouter)

let router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    components: {
        App
    },
    router,
    template: '<App />'
})