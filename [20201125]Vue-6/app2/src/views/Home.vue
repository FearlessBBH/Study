<template>
  <div>
    HOME
    <hr>
    <!-- <ul>
      <li v-for='item in items' :key="item.id">
        <router-link :to='{name:"Item",params:{itemId:item.id}}'>{{item.name}}</router-link>
      </li>
    </ul> -->
    <select :value='sort' @change='gotoSort'>
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

/**
 * 如果路由的变化使用的是同一个组件，那么这时这个组件是不会销毁的，而是重复复用
 * */

export default {
  name: 'Home',
  data() {
    return {
      items: [],
      sort: 'desc'
    }
  },
  filters: {
    RMB
  },
  created() {
    this.getItems();
  },
  // koa => next
  beforeRouteUpdate(to, from, next) {
    // console.log('beforeRouteUpdate');
    // console.log(to, from);

    // 确认导航
    next();

    this.getItems();


  },
  methods: {
    getItems() {
      this.sort = this.$route.query.sort || this.sort;
      console.log(this.sort);
      this.axios({
        url: '/api/items',
        params: {
          sort: this.sort
        }
      }).then(res => {
        this.items = res.data;
      })
    },
    // 覆盖路由网址
    gotoSort({ target: { value } }) {
      this.$router.push({ name: 'Home', query: { sort: value } });
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