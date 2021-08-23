<template>
  <div
    class="joinContent"
    id="btnControl"
    :class="{ fixedStyle: fixedStyleBool }"
    @touchstart="touchstart($event)"
    @touchend="touchendFn($event)"
  >
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
      <div class="title" v-show="textDesc">{{ textDesc }}</div>
      <div class="allcontent" v-show="activeVal == '1'">
        <div class="joinList" v-for="(item, index) in newNumList" :key="index">
          <div class="circle"></div>
          <div class="text">yangdongxuyangdongxu</div>
        </div>
      </div>
      <div class="targetAll" v-show="activeVal == '2'">
        <div class="luckTitle" v-show="newNumList1.length > 0">中奖用户</div>
        <div class="everyRow" v-for="(item, index) in newNumList1" :key="index">
          <div class="left">
            <div class="logo"></div>
            <div class="name">name</div>
            <div class="luckTip" v-show="index == 0">喜提大奖</div>
          </div>
          <div class="chatIcon">
            <!-- 消息 -->
            <!-- <img src="" alt=""> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "luckList",
  components: {
    // luckDraw,
  },
  computed: {
    textDesc() {
      if (this.activeVal == "1") {
        let len = this.numvalForPeople.length;
        if (len < 1) {
          return "还未有人报名";
        } else {
          return `已有${len}人参与`;
        }
      } else {
        //未有人参与活动/活动未开奖前，中奖名单展示：还未产生中奖名单
        let len = this.numvalForLuck.length;
        if (len < 1) {
          return "还未产生中奖名单";
        } else {
          return ``;
        }
      }
    },
    newNumList() {
      //不定位的时候
      if (!this.fixedStyleBool) {
        return this.numvalForPeople.slice(0, 5).length; //截取数组返回截取的数组
      } else {
        return this.numvalForPeople; //全部
      }
    },
    newNumList1() {
      //不定位的时候
      if (!this.fixedStyleBool) {
        return this.numvalForLuck.slice(0, 1).length; //截取数组返回截取的数组
      } else {
        return this.numvalForLuck; //全部
      }
    },
  },
  data() {
    return {
      numvalForPeople: [
        1, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1,
        1, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 11,
        2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1,
      ],
      numvalForLuck: [
        1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4,
      ],
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
    /* let btnControlDom = document.getElementById("btnControl");
    window.onscroll = () => {

      let val = btnControlDom.getBoundingClientRect().top;
      console.log(val);
      if (val < 30) {
        console.log("吸顶");
        this.fixedStyleBool = true;
      }else{
         this.fixedStyleBool = false;
      }
    }; */
    //滑动处理
    var startX, startY;
    document.addEventListener(
      "touchstart",
      (ev) => {
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;
      },
      false
    );
    document.addEventListener(
      "touchend",
      (ev) => {
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

<style lang="scss">
@function rpx($px) {
    @return ($px / 750) * 100vw;
}
$myPadding: rpx(30);
.joinContent {
  // width: 100%;
  padding: 0 $myPadding $myPadding;
  background: #fff;

  // opacity: 0;
  z-index: -100;
  &.fixedStyle {
    // padding: 0;
    // width: 100%;
    // padding: 10rpx(1111) $myPadding 50rpx(1111);
    height: 100%;
    overflow: scroll;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 1s;
    // display: block;
    // transition: all 10s;
    opacity: 1;
    z-index: 100;
    .same {
      background: rgba(0, 0, 0, 0.05);
      color: #a6a6a6 !important;
      &.bg {
        color: #000 !important;
      }
    }
    .joinAll {
      // margin-top:30rpx(1111);
      padding-top:rpx(80);
      padding-bottom: rpx(60);
      .title {
        // margin-top: rpx(100);
      }
      .targetAll {
        padding-bottom: rpx(50) !important;
        .luckTitle {
          // margin-top: rpx(80);
        }
      }
    }
    .btnContent {
      background: #fff;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
  .btnContent {
    display: flex;
    padding-top: rpx(10);
    justify-content: center;
    // margin-top:10rpx(1111);
    margin-bottom: rpx(10);
    .same {
      // width: 300rpx(1111);
      // height: 60rpx(1111);
      padding: rpx(16) rpx(98);
      color: #262626;
      border-radius:rpx(30);
      display: flex;
      justify-content: center;
      align-items: center;
      &.left {
        margin-right: rpx(30);
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
      margin-top: rpx(40);
      color: #a6a6a6;
      font-size: rpx(22);
    }
    .allcontent {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      .joinList {
        margin-top: rpx(30);
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: visible;
        //  justify-content: center;
        .circle {
          width:rpx(80);
          height: rpx(80);
          border-radius: 50%;
          border: rpx(1) solid #ddd;
        }
        .text {
          // display: flex;
          margin-top: rpx(16);
          text-align: center;
          width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
    .targetAll {
      padding: rpx(10);
      .luckTitle {
        margin-top: rpx(50);
        margin-bottom: rpx(40);
        font-size: rpx(28);
        color: #000;
        font-weight: 500;
      }
      .everyRow {
        padding: rpx(16) 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          display: flex;
          align-items: center;
          .logo {
            width: rpx(88);
            height: rpx(88);
            border: rpx(1) solid #ddd;
            border-radius: 50%;
          }
          .name {
            margin-left: rpx(12);
          }
          .luckTip {
            padding: rpx(8) rpx(12);
            margin-left: rpx(12);
            background: #fef5e5;
            border-radius: rpx(18);
            font-size:rpx(20);
            font-weight: 500;
            color: #fba000;
          }
        }
        .chatIcon {
          width: rpx(34);
          line-height: rpx(34);
          height: rpx(34);
          border-radius: 50%;
          border: rpx(1) solid #ddd;
        }
      }
    }
  }
}
</style>