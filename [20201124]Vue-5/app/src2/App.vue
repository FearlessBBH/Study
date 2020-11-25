<template>
  <div id="app">
    <h1>HELLO VUE!!!!</h1>
    <hr>
    <input type="text" ref='myInput'>
    <button @click='setFocus'>PUSH</button>
    <hr>
    <hello-world ref='hw'></hello-world>
    <button @click='start'>START</button>
    <hr>

    <button @click='getLI'>Li</button>
    <ul>
      <li ref='li' v-for="i of 10" :key="i">{{i}}</li>
    </ul>
  </div>
</template>

<script>
// 导出来的是一个对象，不是组件
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  data() {
    return {

    }
  },

  components: {
    HelloWorld
  },

  // mounted() {
  //   let input = document.querySelector('input');
  //   console.log(input);

  //   input.focus();
  // }

  methods: {
    setFocus() {
      // let input = this.$el.querySelector('input');
      // input.focus();

      // console.log(this.$refs);
      this.$refs.myInput.focus();
    },
    start() {
      // console.log(this.$refs.hw);
      this.$refs.hw.start();
    },
    getLI() {
      console.log(this.$refs.li)
    }
  }
}
</script>

<style>
</style>
