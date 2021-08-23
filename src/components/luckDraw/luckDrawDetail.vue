<template>
  <div class="luckDrawDetail" @scroll="scrollFn($event)">
    <!-- 轮播图 -->
    <div class="slideContent" v-show="true">
      <img
        width="100%"
        height="100%"
        src="https://wx1.sinaimg.cn/large/006HYI0jgy1gskydnc1llj30h70awwh3.jpg"
      />
    </div>
    <!-- 详情页内容 -->
    <detailInfo :statusObj="statusObj"/>
    <!-- 参与名单和中奖名单 -->
    <luckList />
    <div class="bottomContent">
      <div class="bottomStatus" :style="statusObj">{{statusObj.text}}</div>
    </div>
  </div>
</template>

<script>
import luckList from "./components/luckList.vue";
import detailInfo from "./components/detailInfo.vue";

export default {
  name: "luckDraw",
  components: {
    luckList,
    detailInfo,
  },
  computed: {
    statusObj() {
      let status = this.luckStatus;
      if (status == "1") {
        return {
          background: '#FDF5E5',
          // opacity: 0.1,
          color: "#FBA000",
          text:'1天 12:12:00 后开始',
          status
          // fontSize:'30rpx(1111)'
        };
      }
      else if (status == "2") {
        return {
          background: '#4EC899',
          color: "#FFF",
          text:'立即参与',
          status
        };
      }
      else if (status == "3"||status == "4"||status == "5"||status == "6") {
        let text='';
        if(status=='3'){
          text='已参与'
        }else if(status=='4'){
          text='开奖中'
        }else if(status=='5'){
          text='已结束'
        }else if(status=='6'){
          text='已终止'
        }
        return {
          background: '#F2F2F2',
          color: "#BEBEBE",
          text,
          status
        };
      }
    },
  },
  data() {
    return {
      luckStatus: "5",
    };
  },
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@function rpx($px) {
    @return ($px / 750) * 100vw;
}
$myPadding:rpx(30);
.luckDrawDetail {
  width: 100%;
  height: 100vh;
  // 轮播图
  .slideContent {
    width: 100%;
    height: rpx(560);
    background: gray;
  }
  .bottomContent {
    position: fixed;
    bottom: rpx(60);
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    .bottomStatus {
      display: flex;
      justify-content: center;
      align-items: center;
      width: rpx(310);
      background: #f2f2f2;
      font-size: rpx(28);
      padding: rpx(30) rpx(10);
      border-radius: rpx(44);
      color: #bebebe;
    }
  }
}
</style>