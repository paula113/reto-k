import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false
// within this object, we can also insert vue-router Router configuration, vuex Store modules, vue-apollo
new Vue({
  render: h => h(App),
}).$mount('#app')
