<template>
  <div>
    <template v-if='item'>
      <h2>商品详情 - {{item.name}}</h2>
      <dt>ID</dt>
      <dd>{{item.id}}</dd>
      <dt>名称</dt>
      <dd>{{item.name}}</dd>
      <dt>价格</dt>
      <dd>{{item.price|RMB}}</dd>
    </template>
    <template v-else-if="isError">
      <h2>没有该商品的信息</h2>
    </template>
    <template v-else>
      <h2>加载中。。。</h2>
    </template>
  </div>
</template>

<script>
import RMB from '@/filters/RMB'
import axios from 'axios'

export default {
  name: 'Item',

  props: ['itemId'],

  data() {
    return {
      item: null,
      isError: false
    }
  },

  filters: {
    RMB
  },

  created() {
    // let itemId = this.itemId;
    // if (itemId) {
    //   this.axios({
    //     url: `/api/item/${ itemId }`
    //   }).then(res => {
    //     this.item = res.data
    //   }).catch(err => {
    //     this.isError = true
    //   });
    // }

  },
  // 组件渲染之前执行,注意：this
  async beforeRouteEnter(to, from, next) {
    // next();
    // console.log(to);
    let itemId = to.params.itemId;
    if (itemId) {
      try {
        let res = await axios({
          url: `/api/item/${ itemId }`
        });
        // this.item = res.data;
        next(vm => {
          // console.log(vm);
          vm.item = res.data
        })
      } catch (e) {
        this.isError = true
      }
    }
  }
}
</script>

<style>
</style>