<template>
  <div id="app">
    <h1>BBH</h1>

    <!-- <a href="/">Home</a>
    <span>|</span>
    <a href="/about">About</a> -->
    <router-link :to='{name:"Home"}' exact>Home</router-link>
    <span> | </span>
    <router-link :to='{name:"About"}' exact>About</router-link>
    <hr>
    <!-- 路由视图,满足当前路由规则的组件，将实现在router-view的位置 -->
    <router-view></router-view>
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
</style>