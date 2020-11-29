<template>
  <div>
    <h2>用户中心</h2>
    <ul class="left">
      <router-link exact tag='li' :to="{name:'UserProfile'}">基本信息</router-link>
      <router-link tag='li' :to="{name:'UserCart'}">我的购物车</router-link>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'User'
}
</script>

<style>
.left {
  float: left;
  width: 200px;
}
.left li {
  line-height: 30px;
  cursor: pointer;
}
</style>