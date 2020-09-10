<template>
  <Layout :style="{marginLeft: '200px'}">
        <Head></Head>
        <Content :style="{padding: '0 16px 16px'}">
            <!-- 全局组件 -->
            <header-menu :items ='headerList'></header-menu>
            <Card>
                <div v-for="item in tableList">
                    {{item.name}}
                </div>
                <div class="time1">{{remainsecond | timeday}} </div>
            </Card>
        </Content>
    </Layout>
</template>
<script>
    import {commonMixin} from './minxin.js'
    // import Vue from 'vue'
    Vue.filter('timeday', function(second) {
        console.log(second,'second')
        var s = second % 60, m = Math.floor(second / 60) % 60,
            h = Math.floor(second / 60 / 60) % 24,
            d = Math.floor(second / 60 / 60 / 24);
        var str = '';
        if (d) {
            str = "剩 " + d + " 天" ;
        } else {
            str = (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
        }
        return str;
    });
    // 21+3+0.9=24.9
    // 5+7.24 = 12.24+24.9 = 37.14
    export default {
        created(){
            this.init()
        }, 
        mixins: [commonMixin],
        data(){
            return {
                headerList:[
                    {name:'Home'},
                    {name:'About'},
                    {name:'混入Minxin'}
                ],
                something:''
            }
        },
        methods:{

        }
    }
</script>

