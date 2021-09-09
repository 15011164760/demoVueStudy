<template>
  <div class="luckDrawDetail">
        <div id="big" @click="showFn(item)" :style="{margin:item.imgBool?'80px':'',marginRight:item.imgBool?'110px':''}" v-for="(item,index) in list" :key="index">
        我是模型{{index+1}},点击之后出现模型{{index+1}}的图片
            <div v-show="item.imgBool" id="top" class="animationsTop"><img src="https://pic.rmb.bdstatic.com/bjh/down/718cd16f0093f2beb7802e3b7050eaaa.jpeg" /></div>
            <div  v-show="item.imgBool" id="right" class="animationsRight"><img src="https://pic.rmb.bdstatic.com/bjh/down/718cd16f0093f2beb7802e3b7050eaaa.jpeg" /></div>
            <div  v-show="item.imgBool" id="bottom" class="animationsBottom"><img src="https://pic.rmb.bdstatic.com/bjh/down/718cd16f0093f2beb7802e3b7050eaaa.jpeg" /></div>
            <div  v-show="item.imgBool" id="left" class="animationsLeft"><img src="https://pic.rmb.bdstatic.com/bjh/down/718cd16f0093f2beb7802e3b7050eaaa.jpeg" /></div>
        </div>
  </div>
</template>

<script>


export default {
  name: "luckDraw",
  components: {

  },
  computed: {
    
  },
  data() {
    return {
        imgBool:false,
        list:[
            {
                imgBool:false,
            },
            {
                imgBool:false,
            },
            {
                imgBool:false,
            },
        ]
      // luckStatus: "5",
    };
  },
  mounted() {},
  methods: {
    showFn(item){
      item.imgBool=!item.imgBool;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 *{
            margin:0;
            padding:0;
        }
@function rpx($px) {
    @return ($px / 750) * 100vw;
}
$myPadding:rpx(30);
.luckDrawDetail {
  width: 100%;
  height: 100vh;
  display: flex;
  // 轮播图
        #big {
            
            position: relative;
            /*设置透视*/
            /* top: 300px;
            left: 200px; */
           
            width: 100px;
            height: 80px;
            border:1px solid #ddd;
            background-color: cadetblue;
        }
        #big>div{
            width:100px;
            height:80px;
        }
        #big>div>img{
            width:100%;
            height:100%;
        }
        #left{
            animation-fill-mode:forwards;
            perspective: 10000px;
            transform-style: preserve-3d;
             position: absolute; 
           top:0px;
           left:-100px;
        }
        .animationsLeft{
          /*设置成3D样式*/
          animation: animationLeft 4s linear 1;
        }
        #right{
           position: absolute; 
           top:0px;
           left:-100px;
        }
        .animationsRight{
             /*设置成3D样式*/
          animation: animationRight 4s linear 1;
           
        }
        #top{
            animation-fill-mode:forwards;
           position: absolute; 
           top:-80px;
           left:0px;
        }
        .animationsTop{
             /*设置成3D样式*/
           animation: animationTop 4s linear 1;
           
        }
        .animationsBottom{
             /*设置成3D样式*/
           animation: animationBottom 4s linear 1;
          
        }
        #bottom{
            animation-fill-mode:forwards;
            position: absolute; 
           top:80px;
           left:0px;
        }
        @keyframes animationTop {
            0% {
                transform: translateX(20px) translateZ(0px) translateY(-20px) rotateZ(10deg);
            }

            33% {
                transform: translateX(40px) translateZ(20px) translateY(40px) rotateZ(15deg);
            }

            66% {
                transform: translateX(20px) translateZ(10px) translateY(80px) rotateZ(10deg);
            }

            100% {
                transform: translateX(0px) translateZ(0px) translateY(160px) rotateZ(0deg);
            }
        }
        @keyframes animationBottom {
            0% {
                transform: translateX(-20px) translateZ(0px) translateY(-40px) rotateZ(10deg);
            }

            33% {
                transform: translateX(-40px) translateZ(20px) translateY(-80px) rotateZ(15deg);
            }

            66% {
                transform: translateX(-20px) translateZ(10px) translateY(-120px) rotateZ(10deg);
            }

            100% {
                transform: translateX(-0px) translateZ(0px) translateY(-160px) rotateZ(0deg);
            }
        }
        @keyframes animationLeft {
            0% {
                transform: translateX(0px) translateZ(10px) translateY(0px) rotateZ(10deg);
            }

            33% {
                transform: translateX(75px) translateZ(20px) translateY(-40px) rotateZ(15deg);
            }

            66% {
                transform: translateX(150px) translateZ(10px) translateY(-20px) rotateZ(10deg);
            }

            100% {
                transform: translateX(200px) translateZ(0px) translateY(0px) rotateZ(0deg);
            }
        }
        @keyframes animationRight {
            0% {
                transform: translateX(100px) translateZ(-10px) translateY(20px) rotateZ(-10deg);
            }

            33% {
                transform: translateX(70px) translateZ(-20px) translateY(40px) rotateZ(-15deg);
            }

            66% {
                transform: translateX(40px) translateZ(-10px) translateY(20px) rotateZ(-10deg);
            }

            100% {
                transform: translateX(0px) translateZ(0px) translateY(0px) rotateZ(0deg);
            }
        }
}
</style>