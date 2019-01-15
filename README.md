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

router-view 
模块化

全局组件的好处:是 不需要每个页面都import   

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


###代码提交到自己的仓库 readme.md 冲突 拉取不到的时候 执行
git pull origin master --allow-unrelated-histories


```JavaScript
ES中的模块导出导入
export 和 export default
两个导出，下面我们讲讲它们的区别

1、export与export default均可用于导出常量、函数、文件、模块等
2、在一个文件或模块中，export、import可以有多个，export default仅有一个
3、通过export方式导出，在导入时要加{ }，export default则不需要
4、export能直接导出变量表达式，export default不行。
````
