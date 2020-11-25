import Vue from 'vue'
import App from './App.vue'

import kkb from './kkb'

Vue.config.productionTip = false

// Vue.config.errorHandler = function(Error, Vue, string) {
//     console.log('顶级：Err')
// }

Vue.use(kkb)

new Vue({
    render: h => h(App),
}).$mount('#app')