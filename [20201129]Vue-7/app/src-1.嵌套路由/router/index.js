import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Item from '@/views/Item'

import User from '@/views/User'
import UserProfile from '@/views/User/UserProfile'
import UserCart from '@/views/User/UserCart'

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
  }]
});

export default router