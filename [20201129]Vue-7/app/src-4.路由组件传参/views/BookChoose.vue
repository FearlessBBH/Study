<template>
  <div>
    <router-link :to="{name:'BookBoy'}">男生</router-link>
    <span> | </span>
    <router-link :to="{name:'BookGirl'}">女生</router-link>
  </div>
</template>

<script>
export default {
  name: 'BookChoose'
}
</script>

<style>
</style>