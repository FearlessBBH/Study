<template>
  <div>
    <ul>
      <li v-for='item in items' :key="item">
        <input type="checkbox" /> {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'InBox',
  data() {
    return {
      items: [
        '11111111',
        '222222222222222',
        '333333333333',
        '4444444444'
      ]
    }
  },
  created() {
    console.log('InBox:created')
  },
  destroyed() {
    console.log('InBox:destroyed')
  }
}
</script>

<style>
</style>