<template>
  <div class="hello">
    <h1>子 -- HELLO <button @click="fnClick">BUTTON</button>
      <!-- 子拿父数据 $attrs -->
      <World v-bind="$attrs"></World>
    </h1>
    <hr>
    <Bbh></Bbh>
  </div>
</template>

<script>
import World from '@/components/World'
import Bbh from '@/components/Bbh'

export default {
  name: 'Hello',

  components: {
    World, Bbh
  },

  methods: {
    fnHello() {
      console.log("fnHello");
    },
    fnClick() {
      console.log('FnClick');

      // 子->父通信  $parent
      // console.log(this.$parent);
      // this.$parent.fnHome();

      console.log(this.$attrs);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
