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
<style lang="less">
@myPadding: 30px;
.detailContainer {
  padding: @myPadding;
  .desc {
    font-size: 34px;
    font-weight: 400;
    color: #000000;
    line-height: 48px;
  }
  .hostInfo {
    display: flex;
    padding-top: 26px;
    align-items: center;
    .hostLogo {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
      background: #ddd;
    }
    .hostName {
      margin-left: 20px;
      font-size: 28px;
      font-weight: 400;
      color: #a6a6a6;
      .time {
        margin-left: 5px;
      }
    }
  }
  .detailContent {
    margin-top: 50px;
    .detailTitle {
      font-size: 22px;
      color: #a6a6a6;
    }
    .detailAllRow {
      margin-top: 20px;
      margin-bottom: 50px;
      .row {
        // padding: 10px;
        display: flex;
        justify-content: space-between;
        font-size: 26px;
        padding-bottom: 30px;
        padding-top: 30px;
        border-bottom: 1px solid #f2f2f2;
        .left {
          font-size: 26px;
          color: #595959;
        }
        .right {
          color: #000;
        }
        &.endTipIcon{
            position: relative;
          .circle{
            width:180px;
            height: 180px;
             position: absolute;
             top:-28px;
             right:50px;
             border-radius: 50%;
             background:rgba(245, 33, 33, 0.3);
             
          }
        }
      }
    }
  }
}
</style>