<template>
  <div id="app">
    <h1>BBH</h1>
    <router-link :to='{name:"Home"}' exact>Home</router-link>
    <span> | </span>
    <router-link :to='{name:"About"}' exact>About</router-link>
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