<template>
  <div>
    HOME
    <hr>
    <!-- <ul>
      <li v-for='item in items' :key="item.id">
        <router-link :to='{name:"Item",params:{itemId:item.id}}'>{{item.name}}</router-link>
      </li>
    </ul> -->
    <select v-model='sort'>
      <option value="desc">从高到低</option>
      <option value="asc">从低到高</option>
    </select>
    <ul class="item-list">
      <li class="head">
        <span>名称</span>
        <span>价格</span>
        <span>操作</span>
      </li>
      <li v-for='item in items' :key="item.id">
        <span>
          <router-link :to='{name:"Item",params:{itemId:item.id}}'>{{item.name}}</router-link>
        </span>
        <span>{{item.price|RMB}}</span>
        <span>
          <button>添加到购物车</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import RMB from '@/filter/RMB';

export default {
  name: 'Home',
  data() {
    return {
      sort: 'desc',
      items: []
    }
  },
  filters: {
    RMB
  },
  created() {
    this.getItems();
  },
  watch: {
    sort() {
      this.getItems();
    }
  },
  methods: {
    getItems() {
      this.axios({
        url: '/api/items',
        params: {
          sort: this.sort
        }
      }).then(res => {
        this.items = res.data;
      })
    }
  }
}   
</script>

<style>
ul {
  margin: 0;
  padding: 0;
}
list-style {
  list-style: none;
}
.item-list li {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  height: 30px;
  align-items: center;
  border-bottom: 1px dotted #333;
}
.item-list li.head {
  font-weight: bold;
}
.item-list li span {
  min-width: 200px;
}
</style>