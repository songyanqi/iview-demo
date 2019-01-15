import Vue from 'vue'
import Router from 'vue-router'
import RouterConfig from '@/config'  // 引入路由

// console.log(RouterConfig,...RouterConfig)
// 使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
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
