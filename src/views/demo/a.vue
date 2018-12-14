<template>
  <Layout :style="{marginLeft: '200px'}">
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
        <Content :style="{padding: '0 16px 16px'}">
            <!-- 全局组件 -->
            <header-menu :items ='headerList'></header-menu>
            <Card>
              aaaa
            </Card>
        </Content>
    </Layout>
</template>
<script>
  export default {
      data(){
        return {
          headerList:[
            {name:'Home'},
            {name:'About'},
            {name:'实用方法'}
          ],
        }
      }
  }
</script>

