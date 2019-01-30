<style>
    .btn-copy{
        width: 200px;
        height: 45px;
        background-color: blueviolet;
        font-size: 14px;
        text-align: center;
        color: #fff;
        line-height: 45px;
        border-radius: 45px;
    }
</style>

<template>
  <Layout :style="{marginLeft: '200px'}">
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
        <Content :style="{padding: '0 16px 16px'}">
            <!-- 全局组件 -->
            <header-menu :items ='headerList'></header-menu>
            <Card>
                <div 
                    :class=" `btn-copy ${shakeAnimate}` "
                    ref="div"
                    @click ="onBtnClicked"
                >
                    点击复制粘贴文案
                </div>
            </Card>
        </Content>
    </Layout>
</template>
<script>
// 点击两次才能复制成功内容的问题
    import Clipboard from 'clipboard';  // 复制
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
                shakeOpenBrowserTips(){ //shake 动画
                    this.shakeAnimate = `shake animated`;
                    setTimeout(() => this.shakeAnimate = ``, 2000)
                },
                onBtnClicked(){
                   let dom = this.$refs.div;
                   this.shakeOpenBrowserTips();
                   dom.setAttribute('data-clipboard-text' , `${dom.innerHTML}` ); // 添加自定义属性
                   let clipboard = new Clipboard                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             (dom);
                    clipboard.on('success',()=>{
                        if( !document.querySelector('#copy_success') ){
                            let tips = document.createElement('div')
                            tips.innerHTML = '复制成功!'
                            let style = tips.style;
                            style.fontSize = `14px`
                            style.color = '#fff';
                            style.width = `100px`
                            style.height = `40px`
                            style.position = 'absolute'
                            style.left = '50%'
                            style.top = '50%'
                            style.textAlign = 'center'
                            tips.id = 'copy_success'
                            style.background = 'rgba( 0,0,0,0.5 )'

                            tips.addEventListener('click',function(){ style.display = 'none' ; })
                            document.getElementById('app').appendChild(tips)

                            //复制成功弹框1.5秒消失
                            setTimeout(() => {
                                style.display = 'none'
                            }, 1500);
                        }
                        else {
                            document.querySelector('#copy_success').style.display = 'block'
                            setTimeout(() => {
                                document.querySelector('#copy_success').style.display = 'none'
                            }, 1500);
                        }
                    })
               } 
            }
    }
</script>

