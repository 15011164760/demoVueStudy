<template>
  <!-- 详情页内容 -->
  <div class="detailContainer">
    <div class="desc">
      你有什么兴趣爱好呢？你有什么兴趣爱好呢？你有什么兴趣爱好呢？你有什么兴趣 ?
    </div>
    <div class="hostInfo">
      <div class="hostLogo">
        <img src="" alt="" width="100%" height="100%" />
      </div>
      <div class="hostName">圈子名称<span class="time">2021-12-12</span></div>
    </div>
    <div class="detailContent">
      <div class="detailTitle">详情</div>
      <div class="detailAllRow">
        <div class="row">
          <span class="left">奖品名称:</span>
          <span class="right">相机</span>
        </div>
        <div class="row endTipIcon">
          <span class="left">抽奖截止时间:</span>
          <span class="right">2011-11-11</span>
          <div class="circle" v-show="statusObj.status=='5'"></div>
        </div>
        <div class="row">
          <span class="left">发起人:</span>
          <span class="right">风过的水</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailInfo",
  props:{
    statusObj:{
      type:Object,
      // default:()=>{
      //   return {}
      // }
    }
  },
  components: {
    // luckList,
  },
  computed: {},
  data() {
    return {
      
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
$myPadding: rpx(30);
.detailContainer {
  padding: $myPadding;
  .desc {
    font-size: rpx(34);
    font-weight: 400;
    color: #000000;
    line-height: rpx(48);
  }
  .hostInfo {
    display: flex;
    padding-top: rpx(26);
    align-items: center;
    .hostLogo {
      width: rpx(48);
      height: rpx(48);
      border-radius: 50%;
      overflow: hidden;
      background: #ddd;
    }
    .hostName {
      margin-left: rpx(20);
      font-size:rpx(28);
      font-weight: 400;
      color: #a6a6a6;
      .time {
        margin-left: rpx(5);
      }
    }
  }
  .detailContent {
    margin-top: rpx(50);
    .detailTitle {
      font-size: rpx(22);
      color: #a6a6a6;
    }
    .detailAllRow {
      margin-top: rpx(20);
      margin-bottom: rpx(50);
      .row {
        // padding: 10rpx(1111);
        display: flex;
        justify-content: space-between;
        font-size: rpx(26);
        padding-bottom: rpx(30);
        padding-top:  rpx(30);
        border-bottom: rpx(1) solid #f2f2f2;
        .left {
          font-size: rpx(26);
          color: #595959;
        }
        .right {
          color: #000;
        }
        &.endTipIcon{
            position: relative;
          .circle{
            width:rpx(180);
            height: rpx(180);
             position: absolute;
             top:rpx(-28);
             right:rpx(50);
             border-radius: 50%;
             background:rgba(245, 33, 33, 0.3);
             
          }
        }
      }
    }
  }
}
</style>