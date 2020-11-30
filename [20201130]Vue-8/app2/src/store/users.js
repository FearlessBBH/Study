let maxId = 8;
export default {
    namespaced: true,
    state: {
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
    mutations: {
        addNewUser(state, payload) {
            state.users.push({
                id: ++maxId,
                name: payload,
                gender: '男',
                checked: false
            });
        }
    },
    actions: {
        addNewUser({ state, commit }, { payload }) {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    // 不允许重名
                    if (state.users.find(user => user.name == payload)) {
                        // 有一样的用户了
                        rej('已经存在该用户了');
                    } else {
                        commit('addNewUser', payload)
                        res('添加成功')
                    }
                }, 1000)
            })
        }
    },
}