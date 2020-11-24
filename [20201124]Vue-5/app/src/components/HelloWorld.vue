<template>
  <div>
    hello world - {{data}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['data'],
  data() {
    return {
      timer: null
    }
  },
  beforeCreate() {
    console.group('HelloWorld-beforeCreate');
    console.log(this.$data);
    console.groupEnd('HelloWorld-beforeCreate');
  },
  created() {
    console.group('HelloWorld-created');
    console.log(this.$data);
    console.log(this.$el);
    console.groupEnd('HelloWorld-created');
    // this.timer = setInterval(() => {
    //   console.log('HEOOOOOO')
    // }, 1000);

    throw new Error('ErroR');
  },
  beforeMount() {
    // console.group('HelloWorld-beforeMount');
    // console.log(this.$el);
    // console.groupEnd('HelloWorld-beforeMount');
  },
  mounted() {
    // console.group('HelloWorld-mounted');
    // console.log(this.$el);
    // console.groupEnd('HelloWorld-mounted');
  },
  beforeUpdate() {
    // console.group('HelloWorld-beforeUpdate');
    // console.groupEnd('HelloWorld-beforeUpdate');
  },
  updated() {
    // console.group('HelloWorld-updated');
    // console.groupEnd('HelloWorld-updated');
  },
  beforeDestroy() {
    // console.group('HelloWorld-beforeDestroy');
    // console.groupEnd('HelloWorld-beforeDestroy');

    // clearInterval(this.timer);
  },
  destroyed() {
    // console.group('HelloWorld-destroyed');
    // console.groupEnd('HelloWorld-destroyed');
  }
}
</script>

<style>
</style>
