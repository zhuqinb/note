const user = () => import('@/views/user/index')
const home = () => import('@/views/home')
const anima01 = () => import('@/views/anime/demo_01')

export default [{
    path: '/',
    component: anima01
}, {
    path: '/user/:id',
    name: 'user',
    component: user
}]