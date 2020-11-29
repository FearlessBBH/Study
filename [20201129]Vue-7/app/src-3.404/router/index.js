import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Item from '@/views/Item'

import User from '@/views/User'
import UserProfile from '@/views/User/UserProfile'
import UserCart from '@/views/User/UserCart'

import Book from '@/views/Book'
import BookBoy from '@/views/Book/BookBoy'
import BookGirl from '@/views/Book/BookGirl'
import BookChoose from '@/views/BookChoose'

import NotFound from '@/views/NotFound'

// 调用Vue.use 进行插件注册
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
    alias: '/member',
    component: User,
    children: [
      {
        // path: 'profile',
        path: '',
        name: 'UserProfile',
        component: UserProfile
      }, {
        path: 'cart',
        name: 'UserCart',
        component: UserCart
      }
    ]
  }, {
    path: '/book',
    name: "Book",
    // redirect: { name: "BookChoose" },
    redirect: to => {
      // to 去的目标
      // console.log(to);
      let bookType = localStorage.getItem('book-type');
      return bookType ? { name: bookType } : { name: 'BookChoose' }
    },
    component: Book,
    children: [
      {
        path: 'boy',
        name: 'BookBoy',
        component: BookBoy
      },
      {
        path: 'girl',
        name: 'BookGirl',
        component: BookGirl
      }
    ]
  }, {
    path: '/bookchoose',
    name: "BookChoose",
    component: BookChoose
  }, {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }]
});

export default router