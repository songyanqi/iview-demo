<template>
  <Layout :style="{marginLeft: '200px'}">
        <Head></Head>
        <Content :style="{padding: '0 16px 16px'}">
            <!-- 全局组件 -->
            <header-menu :items ='headerList'></header-menu>
            <Card>
                <p>移动端悬浮移动按钮</p>
                <div class="ys-float-btn" :style="{'width':itemWidth+'px','height':itemHeight+'px','left':left+'px','top':top+'px'}"
                    ref="div"
                    @click ="onBtnClicked">
                    <slot name="icon"></slot>
                    <p>{{text}}</p>
                </div>
            </Card>
        </Content>
    </Layout>
</template>
<script>
  export default {
    name: "FloatImgBtn",
    props:{
      text:{
        type:String,
        default:"默认文字"
      },
      itemWidth:{
        type:Number,
        default:60
      },
      itemHeight:{
        type:Number,
        default:60
      },
      gapWidth:{
        type:Number,
        default:10
      },
      coefficientHeight:{
        type:Number,
        default:0.8
      }
    },
    created(){
        this.clientWidth = document.documentElement.clientWidth;
        this.clientHeight = document.documentElement.clientHeight;
        this.left = this.clientWidth - this.itemWidth - this.gapWidth;
        this.top = this.clientHeight*this.coefficientHeight;
    },
    mounted(){
        window.addEventListener('scroll', this.handleScrollStart);
        this.$nextTick(()=>{
            const div = this.$refs.div;
            div.addEventListener("touchstart",()=>{
            div.style.transition = 'none';
            });
            div.addEventListener("touchmove",(e)=>{
            if (e.targetTouches.length === 1) {
                let touch = event.targetTouches[0];
                this.left = touch.clientX - this.itemWidth/2;
                this.top = touch.clientY - this.itemHeight/2;
            }
        });
        div.addEventListener("touchend",()=>{
            div.style.transition = 'all 0.3s';
            if(this.left>this.clientWidth/2){
                this.left = this.clientWidth - this.itemWidth - this.gapWidth;
            }else{
                this.left = this.gapWidth;
            }
        });

      });
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.handleScrollStart);
    },
    methods:{
        onBtnClicked(){
            this.$emit("onFloatBtnClicked");
         },
        handleScrollStart(){
            this.timer&&clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
            this.handleScrollEnd();
            },300);
            this.currentTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(this.left>this.clientWidth/2){
                this.left = this.clientWidth - this.itemWidth/2;
            }else{
                this.left = -this.itemWidth/2;
            }
        },
        handleScrollEnd(){
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if(scrollTop === this.currentTop){
                    if(this.left>this.clientWidth/2){
                        this.left = this.clientWidth - this.itemWidth - this.gapWidth;
                    }else{
                        this.left = this.gapWidth;
                    }
                clearTimeout(this.timer);
            }
        }
    },
    data(){
      return {
        timer:null,
        currentTop:0,
        clientWidth:0,
        clientHeight:0,
        left:0,
        top:0,
        headerList:[
            {name:'实用方法'},
            {name:'vue-浮动组件按钮'}
        ],
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-float-btn{
    background:rgb(255,255,255);
    box-shadow:0 2px 10px 0 rgba(0,0,0,0.1);
    border-radius:50%;
    color: #666666;
    z-index: 20;
    transition: all 0.3s;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 20vw;

    img{
      width: 50%;
      height: 50%;
      object-fit: contain;
      margin-bottom: 3px;
    }

    p{
      font-size:7px;
    }
  }
</style>

