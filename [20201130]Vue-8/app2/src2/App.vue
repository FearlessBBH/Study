<template>
  <div id="app">
    <h1>{{t}}</h1>
    <hr>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  // data() {
  //   return {
  //     t: ''
  //   }
  // },
  // created() {
  //   // console.log(this.$store);
  //   this.t = this.$store.state.title;
  // }

  computed: {
    t() {
      return this.$store.state.title
    }
  }
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
