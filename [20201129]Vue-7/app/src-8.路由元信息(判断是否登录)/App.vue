<template>
  <div id="app">
    <h1>BBH</h1>

    <!-- <a href="/">Home</a>
    <span>|</span>
    <a href="/about">About</a> -->
    <router-link :to='{name:"Home"}' exact>Home</router-link>
    <span> | </span>
    <router-link :to='{name:"About"}' exact>About</router-link>
    <span> | </span>
    <router-link :to='{name:"UserProfile"}' exact>User</router-link>
    <span> | </span>
    <router-link :to='{name:"Book"}' exact>小说</router-link>
    <hr>
    <!-- 路由视图,满足当前路由规则的组件，将实现在router-view的位置 -->
    <transition name='fade'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
.router-link-exact-active {
  background: red;
  color: #fff;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  transition: none;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>