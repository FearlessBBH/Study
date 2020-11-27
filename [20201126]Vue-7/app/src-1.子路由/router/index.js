import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Item from '@/views/Item'
import User from '@/views/User'
import UserProfile from '@/views/user/Profile'
import UserCart from '@/views/user/Cart'

Vue.use(VueRouter)

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
    }, {
        path: '/user',
        // name: 'User',
        component: User,
        children: [{
            // 如果当前这个路由是 /user 的子路由，比如访问的地址设计成：/user/profile,就不要以/开头，直接写/user/后面的内容
            // path:'profile' 
            path: '', // 默认子路由，直接绑定到父级的path上
            name: 'UserProfile',
            component: UserProfile
        }, {
            path: 'cart',
            name: 'UserCart',
            component: UserCart
        }]
    }]
})

export default router