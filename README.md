# iview-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

router-view 模块化

全局组件的好处是 不需要import   

###全局组件三步：
import HeaderMenu from '@/components/HeaderMenu'

Vue.component('HeaderMenu' , HeaderMenu)

Vue.use(HeaderMenu)


### redirect 重定向 ...RouterConfig 相当于二维数组变成一维数组
routes: [
    {
      path : '/',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path : '*',
      redirect : '/',
    },
    ...RouterConfig
  ]
```