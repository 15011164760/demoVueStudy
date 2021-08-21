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
            消息
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

<style lang="less">
@myPadding: 30px;
.joinContent {
  // width: 100%;
  padding: 0px @myPadding @myPadding;
  background: #fff;

  // opacity: 0;
  z-index: -100;
  &.fixedStyle {
    // padding: 0;
    // width: 100%;
    // padding: 10px @myPadding 50px;
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
      // margin-top:30px;
      padding-bottom: 60px;
      .title {
        margin-top: 100px;
      }
      .targetAll {
        padding-bottom: 50px !important;
        .luckTitle {
          margin-top: 80px;
        }
      }
    }
    .btnContent {
      background: #fff;
      width: 100%;
      position: fixed;
      top: 0px;
      left: 0px;
      //  padding-bottom:50px !important;
    }
  }
  .btnContent {
    display: flex;
    padding-top: 10px;
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
        margin-right: 30px;
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
          margin-top: 16px;
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
      .luckTitle {
        margin-top: 50px;
        margin-bottom: 40px;
        font-size: 28px;
        color: #000;
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
          .luckTip {
            padding: 8px 12px;
            margin-left: 12px;
            background: #fef5e5;
            border-radius: 18px;
            font-size: 20px;
            font-weight: 500;
            color: #fba000;
          }
        }
        .chatIcon {
          width: 34px;
          line-height: 34px;
          height: 34px;
          border: 1px solid #ddd;
        }
      }
    }
  }
}
</style>