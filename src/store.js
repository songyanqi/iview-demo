import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        useComponent : 'Login', // 登录 
    },
    mutations: {
        increment (state) {
            // 变更状态
            state.useComponent = 'AppContainer'
          }
    },
    actions: {

    }
})
