<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>父 -- Home - <button @click="fnHome">BUTTON</button></div>
    <!-- 父子通信 ref -->
    <Hello ref="helloRef" msg='BBH' />
    <hr>

  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello'
import Bbh from '@/components/Bbh'

export default {
  name: 'Home',
  components: {
    Hello
  },

  // 父->孙 类似于data的数据
  provide: {
    val: 100
  },

  methods: {
    fnHome() {
      console.log("fnHOME");

      // 父->子通信 $refs
      // console.log(this.$refs.helloRef);
      // this.$refs.helloRef.fnHello();

      // 父->子通信 $children
      // console.log(this.$children);
      // this.$children[0].fnHello();
    }
  }
}
</script>
