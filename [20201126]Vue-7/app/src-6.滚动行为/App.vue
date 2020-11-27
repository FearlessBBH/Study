<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'Component1'}" exact>Component1</router-link>
      <span> | </span>
      <router-link :to="{name:'Component2'}" exact>Component2</router-link>
      <span> | </span>
      <router-link :to="{name:'Component3'}" exact>Component3</router-link>
      <span> | </span>
      <router-link :to="{name:'Component4'}" exact>Component4</router-link>
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
  position: fixed;
  padding: 30px;
  background: #e0e0e0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
