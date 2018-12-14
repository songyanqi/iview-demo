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
            }
        ],
    },
    {
        path :'/home',
        meta:'首页',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Index'),
        children : [
            {
                path :'a2',
                meta:'1-1',
                component: () => import(/* webpackChunkName: "home" */ '@/views/demo/a'), 
            }
        ],
    },
    {
        path :'/about',
        meta:'关于',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Index'),
        children : [
            {
                path :'b',
                meta:'2-1',
                component: () => import(/* webpackChunkName: "about" */ '@/views/demo1/b'), 
            }
        ],
    },
]


// export const abc = 'abc'