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
Type

必须为下列之一:

feat:新功能（feature）
fix:修补bug
docs:文档修改
style: 不影响代码含义的修改(例如：white-space; 格式化等)
refactor:重构（即不是新增功能，也不是修改bug的代码变动）
perf: 提升性能的修改
test:增加或修改测试
chore:构建流程或辅助工具的变动
```

```JavaScript
登录页
1、创建一个server.js  接口 :/login/user 数据 
2、在vue.config.js 文件中设置 devServer
3、使用 vuex  进行 传值 
4、在 APP.vue文件 中 使用 vue.js  的方法：<component v-bind:is="currentTabComponent"></component>
来渲染nav 组件 或者login 组件
5、在login  index.js  表单验证成功 后改变判断登录的状态  this.$store.commit('increment')
````
知识点 总结：
1、关于axios
2、关于动态组件的使用<component v-bind:is="currentTabComponent"></component>
3、关于vue.config.js 中 devServer
4、关于如何创建接口
5、vuex 简单应用
6、Mock 数据
