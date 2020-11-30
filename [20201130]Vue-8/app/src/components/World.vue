<template>
  <div>孙 -- World <button @click='fnWorld'>BUTTON</button></div>
</template>

<script>
import eventBus from '../eventBus'
export default {
  name: 'World',

  // 父->孙 注入信息 inject
  inject: ['val'],

  methods: {
    fnWorld() {
      console.log('fnWorld');

      // 子拿父数据 $attrs  
      //   console.log(this.$attrs);

      // 父->孙
      //   console.log(this.val);

      // 兄弟之间的数据传输
      console.log(eventBus);
      eventBus.$emit('abc', 100000)
    }
  }
}
</script>

<style>
</style>