import Vue from 'vue'
import Router from 'vue-router'
import RouterConfig from '@/config'

// console.log(RouterConfig,...RouterConfig)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path : '/',
      component: () => import(/* webpackChunkName: "home" */ './views/Index.vue')
    },
    {
      path : '*',
      redirect : '/',
    },
    ...RouterConfig
  ]
})
