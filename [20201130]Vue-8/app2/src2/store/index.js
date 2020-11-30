import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let maxId = 8;
// Vuex.Store 创建数据存储的仓库，这个仓库提供了各种api来对数据进行操作
export default new Vuex.Store({
  // 存数据
  state: {
    title: 'BBH',
    content: 'EXO Member',
    userGender: '',
    users: [{
      id: 1,
      name: 'BBH',
      gender: '男',
      checked: false
    }, {
      id: 2,
      name: 'PCY',
      gender: '男',
      checked: false
    }, {
      id: 3,
      name: 'SEHUN',
      gender: '男',
      checked: true
    }, {
      id: 4,
      name: 'KAI',
      gender: '男',
      checked: false
    }, {
      id: 5,
      name: 'DO',
      gender: '女',
      checked: false
    }, {
      id: 6,
      name: 'SOHO',
      gender: '女',
      checked: false
    }, {
      id: 7,
      name: 'LAY',
      gender: '男',
      checked: false
    }, {
      id: 8,
      name: 'XIUMIN',
      gender: '女',
      checked: false
    }],
  },
  // 类似组件中的computed
  getters: {
    showUsers({ users, userGender }) {
      return userGender == '' ? users : users.filter(user => user.gender == userGender);
    },
    showSortUsers({ users }) {
      // return users.sort((a, b) => {
      //   return a.id - b.id
      // });
      return (sort = 'desc') => {
        return [...users].sort((a, b) => {
          return sort == 'asc' ? a.id - b.id : b.id - a.id;
        });
      }
    }
  },
  // 提交对数据的处理

  /**
   * commit('addNewUser')
   * 
   * mutations['addNewUser'](....)
   * */
  mutations: {
    // addNewUser(state, data) {
    //   return new Promise((res, rej) => {
    //     setTimeout(() => {
    //       // 不允许重名
    //       if (state.users.find(user => user.name == data)) {
    //         // 有一样的用户了
    //         rej('已经存在该用户了');
    //       } else {
    //         state.users.push({
    //           id: ++maxId,
    //           name: data,
    //           gender: '男',
    //           checked: false
    //         });
    //         res('添加成功')
    //       }
    //     }, 1000)
    //   })
    // }
    addNewUser(state, payload) {
      state.users.push({
        id: ++maxId,
        name: payload,
        gender: '男',
        checked: false
      });
    }
  },
  // 主要用于异步
  actions: {
    addNewUser({ state, commit }, data) {
      return new Promise((res, rej) => {
        setTimeout(() => {
          // 不允许重名
          if (state.users.find(user => user.name == data)) {
            // 有一样的用户了
            rej('已经存在该用户了');
          } else {
            commit('addNewUser', data)
            res('添加成功')
          }
        }, 1000)
      })
    }
  },
  // 模块化
  modules: {
  }
})
