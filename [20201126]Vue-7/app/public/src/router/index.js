import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Item from '@/views/Item'

import User from '@/views/User'
import UserProfile from '@/views/user/Profile'
import UserCart from '@/views/user/Cart'

import Book from '@/views/Book'
import BookBoy from '@/views/book/Boy'
import BookGirl from '@/views/book/Girl'
import BookChoose from '@/views/BookChoose'

import NotFound from '@/views/NotFound'

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
        alias: '/member', // 别名
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
    }, {
        path: '/book',
        name: 'Book',
        // redirect: { name: 'BookChoose' },
        // 有时候重定向需要一些逻辑处理
        redirect(to) {
            // 实际要访问的地址，如果需要定向，则返回一个新的路由即可
            // console.log(to)
            let bookType = localStorage.getItem('book-type');
            return bookType ? { name: bookType } : { name: 'BookChoose' }
        },
        component: Book,
        children: [{
            path: 'boy',
            name: 'BookBoy',
            component: BookBoy
        }, {
            path: 'girl',
            name: 'BookGirl',
            component: BookGirl
        }]
    }, {
        path: '/bookchoose',
        name: 'BookChoose',
        component: BookChoose
    }, {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }]
})

export default router