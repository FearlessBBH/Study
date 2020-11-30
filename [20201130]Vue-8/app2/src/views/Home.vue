<template>
  <div class="home">
    Home - {{c}} <br>
    <input type="text" ref="newUserName"><button @click="postNewUser">添加新的用户</button>
    <div v-show="msg">{{msg}}</div>
    <hr>
    <ul>
      <li v-for="item in users" :key="item.id">{{item.id}} - {{item.name}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="item in sortUsers" :key="item.id">{{item.id}} - {{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',

  data() {
    return {
      c: '',
      msg: ''
    }
  },

  computed: {
    users() {
      // return this.$store.state.users
      // 数据已在index.js中的getters处理
      return this.$store.getters['U/showUsers'];
    },
    sortUsers() {
      return this.$store.getters['U/showSortUsers']();
    }
  },

  // 这里的 c 是不会根据 content 变化的
  created() {
    this.c = this.$store.state.content;
  },

  methods: {
    ...mapActions('U', ['addNewUser']),
    async postNewUser() {
      // 通过 commit 提交动作到 mutations 对应到方法中
      // 获取到 commit 以后的结果
      // let rs = this.$store.commit('addNewUser', this.$refs.newUserName.value);

      // action => dispatch
      try {
        let rs = await this.addNewUser({ tpye: 'addNewUser', payload: this.$refs.newUserName.value });
      }
      catch (e) {
        this.msg = e;
      }
      // console.log(rs);
      this.$refs.newUserName.value = '';
    }
  }
}
</script>
