<template>
    <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <i-button type="info" @click="exitBtn">退出</i-button>
    </Header>
</template>
<script>
export default {
    data() {
        return {
            headerList:[
                {name:'实用方法'},
                {name:'复制文案'}
            ],
            shakeAnimate:''
        }   
    },
    methods:{
        exitBtn(){
            sessionStorage.clear() // 清除sessionStorage
            console.log('退出')
        }
    }
}
</script>

