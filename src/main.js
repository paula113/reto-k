import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'


Vue.config.productionTip = false
// within this object, we can also insert vue-router Router configuration, vuex Store modules, vue-apollo
new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')
