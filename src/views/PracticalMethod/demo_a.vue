<template>
  <Layout :style="{marginLeft: '200px'}">
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
        <Content :style="{padding: '0 16px 16px'}">
            <!-- 全局组件 -->
            <header-menu :items ='headerList'></header-menu>
            <Card>
              <Table border :row-class-name="rowClassName" :columns="columns1" :data="data1"></Table>
            </Card>
        </Content>
    </Layout>
</template>
<script>
  export default {
        created(){
            this.data1 = this.list;
            // this.initFormatter()
        },
        data(){
            return {
                headerList:[
                    {name:'实用方法'},
                    {name:'数组-字符串（赋值）'}
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
                        key: 'address'
                    },
                    {
                        title: 'Date',
                        key: 'date',
                        render: (h, params) => {
                            console.log(this)
                        return h(
                                'div', 
                                this.dataFormat(params.row.date , 'yyyy-MM-dd')
                            );/*这里的this.row能够获取当前行的数据*/
                        }
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 250,
                        align: 'center',
                        render: (h, params) => {
                            console.log(h,params)
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
                list: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: 1544705478000,
                        $isEdit:false,
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: 1544775038000,
                        $isEdit:false,
                    }
                    
                ]
            }
        },
        methods:{
            /*
                this.$set(this.data,'key',value) 
                作用：给data对象新增属性，并触发视图更新
                注意： 直接给this.data赋值操作，虽然可以新增属性，但是不会触发视图更新
                原因：受 ES5 的限制，Vue.js 不能检测到对象属性的添加或删除。
                因为 Vue.js 在初始化实例时将属性转为 getter/setter，所以属性必须在 data 对象上才能让 Vue.js 转换它，才能让它是响应的。
            */
            handleSave(row){
                this.$set(row,'$isEdit',false)
            },
            handleEdit(row){
                this.$set(row,'$isEdit',true)
            },
            show(index) {
                console.log(index,'index')
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data1[index].name}<br>Age：${this.data1[index].age}<br>Address：${this.data1[index].address}`
                })
            },
            rowClassName(row,index){
                // console.log(row,index)
            },
            sequenceDisplay(x,y,z){
                var targetObj = {
                    "concern": '关注',
                    "square": '广场',
                    "brightest": '最亮',
                }
                var newArr = [];
                z.forEach(item => {
                    newArr.push(targetObj[item]);
                })
                return newArr.toString()
            },
        }
  }
</script>

