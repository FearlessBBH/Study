<template>
  <div>
    <h1>Home</h1>
    <hr>
    <ul>
      <li v-for='item in items' :key="item.id">{{item.name}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      items: []
    }
  },
  created() {
    this.axios({
      url: '/api/tools/oldtree_ajax.ashx'
    }, {
      params: {
        action: 'get_tree_count'
      }
    }).then(res => {
      console.log(res);
      //   this.items = res.data;
    }).catch(res => {
      console.log('请求失败：' + res.status);
    })
  }
}
</script>

<style>
</style>