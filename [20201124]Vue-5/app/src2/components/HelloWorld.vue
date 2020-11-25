<template>
  <div>
    hello world - {{n}}
    <button @click='start'>START</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['data'],
  data() {
    return {
      n: 0,
      timer: null
    }
  },

  methods: {
    start() {
      setInterval(() => {
        this.n++
      }, 1000);
    }
  }
}
</script>

<style>
</style>
