import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'

Vue.use(Vuex)

// Vuex.Store 创建数据存储的仓库，这个仓库提供了各种api来对数据进行操作
export default new Vuex.Store({
  // 存数据
  state: {
    title: 'BBH',
    content: 'EXO Member',
  },
  getters: {},
  mutations: {
  },

  actions: {
  },
  // 模块化
  modules: {
    U: users
  }
})
