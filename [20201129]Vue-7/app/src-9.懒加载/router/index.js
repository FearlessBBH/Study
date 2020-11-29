import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home'
// import About from '@/views/About'
// import Item from '@/views/Item'
// import Login from '@/views/Login'

// 懒加载
const Home = import('@/views/Home')
const About = import('@/views/About')
const Item = import('@/views/Item')
const Login = import('@/views/Login')

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
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/item/:itemId(\\d+)',
    name: 'Item',
    component: Item,
    props: true
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/user',
    // name: 'User',
    alias: '/member',
    component: User,
    meta: { requiresAuth: true },
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

let isLogin = false;
router.beforeEach((to, from, next) => {
  // if (isLogin) {
  //   next()
  // } else {
  //   if (to.name != 'Login') {
  //     next({ name: 'Login' })
  //   } else {
  //     next()
  //   }
  // }
  if (to.matched.some(record => record.meta.requiresAuth) && !isLogin) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router