export default [
    {
        path :'/practical',
        meta:'实用方法',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Index'),
        children : [
            {
                path :'a1',
                meta:'数组-字符串（赋值）',
                component: () => import(/* webpackChunkName: "home" */ '@/views/PracticalMethod/demo_a'), 
            },
            {
                path :'a2',
                meta:'vue-浮动按钮组件',
                component: () => import(/* webpackChunkName: "home" */ '@/views/demo/b'), 
            },
            {
                path :'a3',
                meta:'增删改查',
                component: () => import(/* webpackChunkName: "home" */ '@/views/PracticalMethod/demo_b'), 
            },
            {
                path :'a4',
                meta:'复制文案',
                component: () => import(/* webpackChunkName: "home" */ '@/views/PracticalMethod/copy_demo'), 
            }
        ],
    },
    {
        path :'/demo',
        meta:'首页',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Index'),
        children : [
            {
                path :'a',
                meta:'1-1',
                component: () => import(/* webpackChunkName: "home" */ '@/views/demo/a'), 
            },
            {
                path :'ts',
                meta:'1-2',
                component: () => import(/* webpackChunkName: "home" */ '@/views/demo/tsDemo'), 
            }
        ],
    },
    {
        path :'/demo1',
        meta:'关于',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Index'),
        children : [
            {
                path :'b',
                meta:'数据刷新',
                component: () => import(/* webpackChunkName: "about" */ '@/views/demo1/b'), 
            }
        ],
    },
]


// export const abc = 'abc'