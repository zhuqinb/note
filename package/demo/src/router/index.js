const user = () => import('@/views/user/index')

export default [{
    path: '/',
    component: user
}, {
    path: '/user/:id',
    name: 'user',
    component: user
}]