<template>
  <Layout :style="{marginLeft: '200px'}">
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
            <i-button type="info">退出</i-button>
        </Header>
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
            return {
                headerList:[
                    {name:'关于'},
                    {name:'数据刷新'}
                ],
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        render:(h,params) =>{
                            return h (
                                'div',
                                this.delHtmlTag(params.row.address)
                                
                            )
                        }
                    },
                    {
                        title: 'Date',
                        key: 'date',
                        render: (h, params) => {
                            return h(
                                'div', 
                                this.format(params.row.date , 'qq-yyyy-MM-dd hh:mm:ss')
                            );/*这里的this.row能够获取当前行的数据*/
                        }
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 250,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                            console.log(params,'params.index')
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                      click: () => {
                                        if (params.row.$isEdit) {
                                          this.handleSave(params.row)
                                        } else {
                                          this.handleEdit(params.row)
                                        }
                                      }
                                    }
                                }, params.row.$isEdit ? '保存' : '编辑')
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
              axios({
                    method : "post",
                    url : "/dynamic/table"
                })
                .then(ret => {
                    console.log(ret)
                })
            },
            handleSave(row) {
                console.log(row,'保存');
                this.$set(row,'$isEdit',false)
            },
            handleEdit(row) {
                console.log(row,'编辑')
                this.$set(row,'$isEdit',true)
            },
            show(index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data1[index].name}<br>Age：${this.data1[index].age}<br>Address：${this.data1[index].address}`
                })
            },
            remove(index) {
                this.data1.splice(index, 1);
            },
        }
  }
</script>

