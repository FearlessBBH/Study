import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Item from '@/views/Item'

// 调用Vue.use 进行插件注册
Vue.use(VueRouter)

// 创建具体的路由对象，这个路由对象就包含了当前应用中的路由信息，比如：路由使用的模式，路由的url与组件的对应关系
const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/item/:itemId(\\d+)',
        name: 'Item',
        component: Item
    }, {
        path: '/about',
        name: 'About',
        component: About
    }]
});

export default router