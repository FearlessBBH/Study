<template>
  <div class="about">
    <h1>This is an about page - {{val}} - {{result}}</h1>
    <!-- <p>title:{{$store.state.title}}</p>
    <p>content:{{$store.state.content}}</p> -->
    <p>title:{{t}}</p>
    <p>content:{{c}}</p>
  </div>
</template>
<script>
// 用于简化computed
import { mapState } from 'vuex';

export default {
  name: 'About',
  data() {
    return {
      val: 1
    }
  },
  // computed: {
  //   t() {
  //     return this.$store.state.title;
  //   },
  //   c() {
  //     return this.$store.state.content
  //   }
  // }
  /**
   * computed:{
   *  title(){return this.$store.state.title},
   *  content(){return this.$store.state.content}
   * }
   * */
  // computed: mapState(['title', 'content']),
  // computed: mapState({
  //   t: 'title',
  //   c: 'content'
  // })
  // computed: mapState({
  //   t: 'title',
  //   c: ({ content }) => { return content.toUpperCase() }
  // })
  computed: {
    result() {
      return this.val * 10
    },
    ...mapState({
      t: 'title',
      c: ({ content }) => { return content.toUpperCase() }
    })
  }
}
</script>