<template>
  <Layout :style="{marginLeft: '200px'}">
        <Head></Head>
        <Content :style="{padding: '0 16px 16px'}">
            <!-- 全局组件 -->
            <header-menu :items ='headerList'></header-menu>
            <Card>
                <!-- <input type="text" v-model="something"> -->
                <input :value="something" @input="something = $event.target.value">
                <div>{{something}}</div>
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
          something:''
        }
      }
  }
</script>

