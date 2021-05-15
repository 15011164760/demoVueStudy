<template>
  <div id="app">
    <!-- 文件别名在项目中不是import中使用的时候 -->
    <!-- <img src="~assets/logo.png" alt="" style="border:10px solid pink">
    <div class="demoColor">
      demoColor
    </div>
    <load ref="loadRef">
      <div slot="soltname" slot-scope="data">
        99999999999999999{{data}}------
      </div>
    </load>  
    <router-link to="load">load</router-link>
    <router-link to="/">////</router-link> -->
    <router-view />
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex';
  import load from './components/load.vue';
  // import store from './store/store.js'
  export default {
    name: 'App',
    components:{
      load
    },
    computed: {
      ...mapState(["loading", "isShow"])
    },
    beforeMount: function () {
      // debugger;
      console.log(this.$el)
      /* 
      不用脚手架可以获取到
      winter:
  beforeMount这个地方生产虚拟dom为啥没获取的
  
  只会番茄炒蛋:
  这就不知道了有可能你写法有误之类的。  但是虚拟dom是可以拿到的。  vue底层会卸载你绑定的el元素 自己创建u一个
  
  只会番茄炒蛋:
  这个你可以看看源码相关有介绍的
  
       */
    },
    data() {
      return {
        data: [{
          id: 1,
          label: '一级 1sad',
          icon: 'el-icon-success',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1',
              icon: 'el-icon-info'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1',
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        data11: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        dialogVisible: false,
        fullscreenLoading: true
      }
    },
    methods: {
      ...mapMutations(["loadingFn"])
    },
    mounted(){
      console.log(this.$refs["loadRef"])
    }
  }
</script>

<style lang="less">
  @import 'assets/css/normalize.css';
  @import 'assets/css/base.css';
  .demoColor{
    background:var(--bg-color);/*此时的背景色就是base.css中定义的 */
    width:100px;
    height: 100px;
  }
</style>