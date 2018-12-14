import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iview from 'iview'
import plugins from './plugins/common'
import 'iview/dist/styles/iview.css'
// import './my-theme/index.less';


import HeaderMenu from '@/components/HeaderMenu'

Vue.component('HeaderMenu' , HeaderMenu)

Vue.use(HeaderMenu)
Vue.use(iview)
Vue.use(plugins)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
