import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.config.errorHandler = function(Error, Vue, string) {
//     console.log('顶级：Err')
// }

new Vue({
    render: h => h(App),
}).$mount('#app')