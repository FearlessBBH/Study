<template>
  <div class="home">
    Home - {{c}} <br>
    <input type="text" ref="newUserName"><button @click="addNewUser">添加新的用户</button>
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

export default {
  name: 'Home',

  data() {
    return {
      c: ''
    }
  },

  computed: {
    users() {
      // return this.$store.state.users
      // 数据已在index.js中的getters处理
      return this.$store.getters.showUsers;
    },
    sortUsers() {
      return this.$store.getters.showSortUsers();
    }
  },

  // 这里的 c 是不会根据 content 变化的
  created() {
    this.c = this.$store.state.content;
  },

  methods: {
    addNewUser() {
      // 通过 commit 提交动作到 mutations 对应到方法中
      this.$store.commit('addNewUser', this.$refs.newUserName.value);
      this.$refs.newUserName.value = '';
    }
  }
}
</script>
