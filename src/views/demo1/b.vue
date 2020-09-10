<template>
  <Layout :style="{marginLeft: '200px'}">
        <Head></Head>
        <Content :style="{padding: '0 16px 16px'}">
            <!-- 全局组件 -->
            <header-menu :items ='headerList'></header-menu>
            <Card>
              <Table border :columns="columns1" :data="data1"></Table>
            </Card>
        </Content>
    </Layout>
</template>
<script>
    import axios from 'axios'
    export default {
      // 返回数组字符串 转化成 文字
      // 去掉文案中包含的空格
      // 时间戳转换
      // $set

        created() {
            this.init();
        },
        data() {
            // 21+3+0.9=24.9
            // 5+7.24 = 12.24+24.9 = 37.14
            return {
                loading:false,
                headerList:[
                    {name:'关于'},
                    {name:'数据刷新'}
                ],
                columns1: [
                    {
                        title: '名字',
                        key: 'name'
                    },
                    {
                        title: 'id',
                        key: 'id'
                    },
                    {
                        title: '内容',
                        key: 'address',
                        render:(h,params) =>{
                            return h (
                                'div',
                                this.delHtmlTag(params.row.content)
                                
                            )
                        }
                    },
                    {
                        title: '创建时间',
                        key: 'createdAt',
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 250,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        loading:this.loading,
                                        shape:"circle"
                                    },
                                    on: {
                                        click: () => {
                                            if (params.row.loading) {
                                                this.loading = true
                                                this.handleSave(params.row)
                                            } else {
                                                this.handleEdit(params.row)
                                                console.log(params.row,this.loading)
                                                this.init()
                                            }
                                        }
                                    }
                                }, params.row.loading ? '刷新中' : '刷新'),
                            ]);
                        }
                    }
                ],
                data1:[],
                //数据
                
            }
        },
        methods:{
            init(){
                axios.post('/dynamic/table',{})
                .then(ret => {
                    this.data1 = ret.data.content
                    console.log(this.data1,'接口请求')
                    setTimeout(() =>{
                        this.loading = false
                    },3000)
                })
            },
            handleSave(row) {
                console.log(row,'刷新');
                this.$set(row,'loading',false)
            },
            handleEdit(row) {
                console.log(row,'刷新中')
                this.$set(row,'loading',true);
            },
        }
    }
</script>

