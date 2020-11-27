<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'Home'}" exact>Home</router-link>
      <span> | </span>
      <router-link :to="{name:'About'}" exact>About</router-link>
      <span> | </span>
      <router-link :to="{name:'UserProfile'}">User</router-link>
      <span> | </span>
      <router-link :to="{name:'Book'}">小说</router-link>
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
