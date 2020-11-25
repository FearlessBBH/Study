<template>
  <div id="app">
    <h1>HELLO VUE!!!!</h1>
    <hr>
    <button @click='inc'>{{v}}</button>

    <hr>
    <input type="text" ref='username' /><button @click='post'>提交</button>
  </div>
</template>

<script>
// 导出来的是一个对象，不是组件
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  data() {
    return {
      v: 1
    }
  },

  methods: {
    inc(e) {
      this.v++;

      // console.log(this.v, e.target.innerHTML);

      this.$nextTick(() => {
        console.log(e.target.innerHTML);
      })
    },
    post() {
      this.v++;
      if (this.$refs.username.value != '') {
        console.log('提交：' + this.$refs.username.value);
      } else {
        console.log('不许为空')
        this.$refs.username.focus();
      }
    }
  }

}
</script>

<style>
</style>
