import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'


Vue.config.productionTip = false


// 封装全局插件
import Customize from "./components/customize";
Vue.use(Customize)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
