<template>
  <div class="home">

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
          <button @click="showTips(item.id,$event)">快速浏览</button>
          <button>添加到购物车</button>
        </span>
      </li>
    </ul>
    <div class="tip" :style="{left:tips.left+'px',top:tips.top+'px'}" v-if="tips.isShow">
      <item :itemId="tips.itemId"></item>
      <!-- item -->
    </div>
  </div>
</template>

<script>
import RMB from '@/filters/RMB'
import Item from '@/views/Item'

export default {
  name: 'Home',
  data() {
    return {
      items: [],
      sort: 'desc',
      tips: {
        left: 0,
        top: 0,
        isShow: false,
        itemId: 0
      }
    }
  },
  filters: {
    RMB
  },
  components: {
    Item
  },
  created() {
    this.getItems();
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.getItems();
  },
  methods: {
    getItems() {
      this.sort = this.$route.query.sort || this.sort;
      this.axios({
        url: '/api/items',
        params: {
          sort: this.sort
        }
      }).then(res => {
        this.items = res.data;
      })
    },
    gotoSort({ target: { value } }) {
      this.$router.push({ name: 'Home', query: { sort: value } });
    },
    showTips(itemId, e) {
      console.log(itemId)
      let target = e.target;
      let pos = target.getBoundingClientRect();
      this.tips = {
        isShow: true,
        left: pos.left,
        top: pos.bottom,
        itemId
      }
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
.tip {
  position: fixed;
  left: 50%;
  top: 50%;
  border: 1px solid #000;
  background: #fff;
  padding: 10px;
}
</style>