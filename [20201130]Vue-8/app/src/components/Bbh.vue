<template>
  <div>BBH <button @click="fnBbh">BUTTON</button></div>
</template>

<script>
import eventBus from '../eventBus'

export default {
  name: 'Bbh',

  inject: ['val'],

  data() {
    return {
      val: 0
    }
  },

  created() {
    // 兄弟之间的数据传输
    eventBus.$on('abc', e => {
      console.log('执行了', e);
      this.val = e;
    })
  },

  methods: {
    fnBbh() {
      console.log(this.val);
    }
  }
}
</script>

<style>
</style>