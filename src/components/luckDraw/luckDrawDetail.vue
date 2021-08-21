<template>
  <div class="luckDrawDetail" @scroll="scrollFn($event)">
    <!-- 轮播图 -->
    <div class="slideContent">
      <img
        width="100%"
        height="100%"
        src="https://wx1.sinaimg.cn/large/006HYI0jgy1gskydnc1llj30h70awwh3.jpg"
      />
    </div>
    <!-- 详情页内容 -->
    <div class="detailContainer">
      <div class="desc">
        你有什么兴趣爱好呢？你有什么兴趣爱好呢？你有什么兴趣爱好呢？你有什么兴趣
        ?
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
          <div class="row">
            <span class="left">抽奖截止时间:</span>
            <span class="right">2011-11-11</span>
          </div>
          <div class="row">
            <span class="left">发起人:</span>
            <span class="right">风过的水</span>
          </div>
        </div>
      </div>
    </div>
    <div class="joinContent">
      <div class="btnContent">
        <div
          class="left same"
          :class="{ bg: activeVal == '1' }"
          @click="activeBoolFn('1')"
        >
          参与名单
        </div>
        <div
          class="right same"
          :class="{ bg: activeVal == '2' }"
          @click="activeBoolFn('2')"
        >
          中奖名单
        </div>
      </div>
      <!-- join -->
      <div class="joinAll">
        <div class="title">已有100人参与</div>
        <div class="allcontent" v-show="activeVal == '1'">
          <div class="joinList" v-for="i in 5" :key="i">
            <div class="circle"></div>
            <div class="text">yangdongxuyangdongxu</div>
          </div>
        </div>
        <div class="targetAll" v-show="activeVal == '2'">
          <div class="luckTitle">中奖用户</div>
        <!-- <div class="targetAll" v-show="activeVal == '2'"> -->
          <div class="everyRow" v-for="i in 5" :key="i">
            <div class="left">
              <div class="logo"></div>
              <div class="name">name</div>
            </div>
            <div class="chatIcon">imgRight</div>
          </div>
        <!-- </div> -->
        </div>
        
      </div>
      <!-- target -->
      <!-- <div v-show="activeVal == '2'" class="targetContent">
        <div class="title">中奖用户</div>
        <div class="targetAll">
          <div class="everyRow" v-for="i in 1" :key="i">
            <div class="left">
              <div class="logo"></div>
              <div class="name">name</div>
            </div>
            <div class="chatIcon">imgRight</div>
          </div>
        </div>
      </div> -->
    </div>
    <div
      v-if="fixedStyleBool"
      class="diglogTop"
      :class="{ diglogTopShow: fixedStyleBool }"
      @touchstart="touchstart($event)"
      @touchend="touchendFn($event)"
    >
      <div class="joinContent">
        <div class="btnContent">
          <div
            class="left same"
            :class="{ bg: activeVal == '1' }"
            @click="activeBoolFn('1')"
          >
            参与名单
          </div>
          <div
            class="right same"
            :class="{ bg: activeVal == '2' }"
            @click="activeBoolFn('2')"
          >
            中奖名单
          </div>
        </div>
        <!-- join -->
        <div v-show="activeVal == '1'" class="joinAll">
          <div class="title">已有100人参与</div>
          <div class="allcontent">
            <div class="joinList" v-for="i in 10" :key="i">
              <div class="circle"></div>
              <div class="text">yangdongxu</div>
            </div>
          </div>
        </div>
        <!-- target -->
        <div v-show="activeVal == '2'" class="targetContent">
          <div class="title">中奖用户</div>
          <div class="targetAll">
            <div class="everyRow" v-for="i in 10" :key="i">
              <div class="left">
                <div class="logo"></div>
                <div class="name">name</div>
              </div>
              <div class="chatIcon">imgRight</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "luckDraw",
  components: {
    // luckDraw,
  },
  computed: {},
  data() {
    return {
      detailObj: {},
      lastPosX: 0,
      curPosX: 0,
      timer: "",
      activeVal: "1",
      fixedStyleBool: false,
    };
  },
  mounted() {
    // window.addEventListener('scroll',(e)=>{
    //   debugger
    //   if (this.fixedStyleBool) {
    //       this.fixedStyleBool = false;
    //   }
    // })
    let _this = this;
    //滑动处理
    var startX, startY;
    document.addEventListener(
      "touchstart",
      (ev) => {
        return;
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;
      },
      false
    );
    document.addEventListener(
      "touchend",
      (ev) => {
        return;
        var endX, endY;
        endX = ev.changedTouches[0].pageX;
        endY = ev.changedTouches[0].pageY;
        var direction = GetSlideDirection(startX, startY, endX, endY);
        switch (direction) {
          case 0:
            console.log("无操作");
            break;
          case 1:
            // 向上
            console.log("up", ev.target.scrollTop);
            let bottomY =
              document.documentElement.scrollHeight -
              document.documentElement.scrollTop -
              document.documentElement.clientHeight;
            console.log(bottomY);

            if (bottomY < 30) {
              if (!_this.fixedStyleBool) {
                _this.fixedStyleBool = true;
              }
            }
            break;
          case 2:
            // 向下

            console.log("down");
            break;

          default:
        }
      },
      false
    );
    function GetSlideDirection(startX, startY, endX, endY) {
      var dy = startY - endY;
      //var dx = endX - startX;
      var result = 0;
      if (dy > 0) {
        //向上滑动
        result = 1;
        console.log("上滑动");
      } else if (dy < 0) {
        //向下滑动
        result = 2;
      } else {
        result = 0;
      }
      return result;
    }
  },
  methods: {
    touchstart(e) {
      clearTimeout(this.timer); //再次清空定时器，防止重复注册定时器
      this.timer = setTimeout(() => {
        console.log("长按了");
        this.fixedStyleBool = false;
      }, 1000);
    },
    touchendFn(e) {
      clearTimeout(this.timer); //清空定时器，防止重复注册定时器
    },
    activeBoolFn(val) {
      this.activeVal = val;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@myPadding: 30px;
.luckDrawDetail {
  width: 100%;
  height: 100vh;
  // overflow: scroll;
  .slideContent {
    width: 100%;
    height: 560px;
    background: gray;
  }
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
        }
      }
    }
  }
  .joinContent {
    // width: 100%;
    padding: 10px @myPadding @myPadding;
    .btnContent {
      display: flex;
      justify-content: center;
      // margin-top:10px;
      margin-bottom: 10px;
      .same {
        // width: 300px;
        // height: 60px;
        padding: 16px 98px;
        color: #262626;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        &.left {
          margin-right: 5px;
        }
        &.bg {
          color: #000000;
          background: rgba(0, 0, 0, 0.05);
        }
      }
    }
    .joinAll {
      // height: 100vh;
      .title {
        margin-top: 40px;
        color: #a6a6a6;
        font-size: 22px;
      }
      .allcontent {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        .joinList {
          margin-top: 30px;
          width: 20%;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: visible;
          //  justify-content: center;
          .circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 1px solid #ddd;
          }
          .text {
            // display: flex;
            text-align: center;
            width: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
      .targetAll {
        padding: 10px;
        .luckTitle{
          margin-top:50px;
          margin-bottom:40px;
          font-size: 28px;
          color:#000;
          font-weight: 500;
        }
        .everyRow {
          padding: 16px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left {
            display: flex;
            align-items: center;
            .logo {
              width: 88px;
              height: 88px;
              border: 1px solid #ddd;
              border-radius: 50%;
            }
            .name {
              margin-left: 12px;
            }
          }
        }
      }
    }
  }
  .targetContent {
    height: 100vh;
    .title {
      // margin-left: 12px;
      padding: 10px;
    }
    .targetAll {
      padding: 10px;
      .everyRow {
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          display: flex;
          align-items: center;
          .logo {
            width: 88px;
            height: 88px;
            border: 1px solid #ddd;
            border-radius: 50%;
          }
          .name {
            margin-left: 12px;
          }
        }
      }
    }
  }

  .imgSpace {
    background: pink;
    width: 100%;
    height: 500px;
    border: 1px solid #ddd;
    &.noneStyle {
      display: none;
    }
  }
  .peopleFn {
    width: 100%;
    background: #ccc;
    height: 5000px;
  }
  .diglogTop {
    background: white;
    // display: none;
    width: 100%;
    height: 100%;
    // overflow: scroll;
    position: fixed;
    top: 0;
    left: 0;
    transition: all 1s;
    opacity: 0;
    z-index: -100;
    &.diglogTopShow {
      // display: block;
      // transition: all 10s;
      opacity: 1;
      z-index: 100;
    }
    .joinContent {
      height: 100vh;
      padding-top: 30px;
      overflow: scroll;
    }
    .btnContent {
      position: fixed;
      top: 10px;
      left: 0px;
    }
  }
}
</style>