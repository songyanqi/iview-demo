<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="" theme="dark" width="auto" :open-names="['activePath']" @on-select="routeTo">
                <Submenu :name="item.path" 
                    v-for="(item,index) in submenu" 
                    :key="index">
                    <template slot="title">
                       {{item.meta}}
                    </template>
                    <MenuItem 
                        v-for="(menu,index) in item.children" 
                        :key="index"
                        :name="`${item.path}${menu.path}`"
                       >
                       {{menu.meta}}
                    </MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <!-- 右侧 -->
        <router-view></router-view>
    </div>
</template>
<script>
    import RouterConfig from '@/config'
    export default {
        created(){
            console.log(RouterConfig)
        },
        mounted() {
            this.activePath = this.$route.path // 获取到的是路由
        },
        data(){
            return {
                activePath : this.$route.path,
                submenu:RouterConfig
            }
        },
        methods:{
            routeTo(e) {
                console.log(e,'e')
                this.$router.push(e);
            }  
        }
    }
</script>
