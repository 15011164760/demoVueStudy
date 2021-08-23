<template>
  <div class="roomDetailPage">
    <div class='backClassOut' @click="goBackFn">
      <div class='backClass'>
        <img src="../assets/images/back.png" alt="">
      </div>
      <span>返回</span>
    </div>
    <div class="all">
      <div
        class="room_every"
        v-for="(item, index) in listData"
        :key="index"
        @click="setDownFn(item)"
      >
        <div class="tipText"><span v-if="item.state==0">点击入座</span></div>
        <div class="chairBtn">
          <div class="setType" v-if="item.state==1">
            <!-- <img src="../assets/images/boy.png" alt="" v-if="item.sex=='man'"> -->
            <img src="../assets/images/girl.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { appPage } from "./api";
export default {
  name: "HelloWorld",
  components: {
    // aaa,
  },
  computed: {
    ...mapState(["isShow"]),
  },
  data() {
    return {
      sexType:true,
      persent: "2/12",
      listData: [
        {
          persent: "2/100",
          className: "B01教室",
          makeSetDownBool: false,
          sex: 'man',
        },
        {
          persent: "2/100",
          className: "B01教室",
          makeSetDownBool: false,
          sex: 'girl',
        },
        {
          persent: "2/100",
          className: "B01教室",
          makeSetDownBool: false,
          sex: 'man',
        },
        {
          persent: "2/100",
          className: "B01教室",
          makeSetDownBool: false,
          sex: 'girl',
        },
        {
          persent: "2/100",
          className: "B01教室",
          makeSetDownBool: false,
          sex: 'girl',
        },
        {
          persent: "2/100",
          className: "B01教室",
          makeSetDownBool: false,
          sex: 'girl',
        },
        {
          persent: "2/100",
          className: "B01教室",
          makeSetDownBool: false,
          sex: 'girl',
        },
        {
          persent: "2/100",
          className: "B01教室",
          makeSetDownBool: false,
          sex: 'girl',
        },
        {
          persent: "2/100",
          className: "B01教室",
          makeSetDownBool: false,
          sex: 'girl',
        },
        {
          persent: "2/100",
          className: "B01教室",
          makeSetDownBool: false,
          sex: 'girl',
        },
        
        
      ],
    };
  },
  mounted() {
    this.selSeatListFn();
  },
  methods: {
    ...mapMutations(["loadingFn"]),
    //studyroomId
    setDownFn(item) {
      if(item.state==1){
        return
      }
      this.seatSelectionFn(item);
      // this.listData[index].makeSetDownBool=!this.listData[index].makeSetDownBool
      // this.$router.push({
      //   name: "roomDetail",
      // });
     
    },
    seatSelectionFn(item){
      let studentNum=localStorage.getItem('studentNum');
      appPage.seatSelection({studyroomId:this.$route.query.id,
      studentNum,
      seatId:item.id,
      })
        .then((res) => {
          if(res.code==200){
            this.$message({
              message: res.message,
              type: 'success'
            });
            this.selSeatListFn();
          }
          else{
            this.$message.error(res.message);
          }
          console.log(res); //返回请求的结果
        })
        .catch((err) => {
          // console.log(err);
          this.$message.error(err.message);
        })
        .finally(() => {
          this.loadingFn(false);
        });
    },
     selSeatListFn(){
     appPage.selSeatList({studyroomId:this.$route.query.id})
        .then((res) => {
          if(res.code==200){
            this.listData=res.result.findForJdbc;
            // {"message":"操作成功","result":{"findForJdbc":[{"id":"1","studyroom_name":"自习室02","studyroom_code":"02","totalnum":30,"sjNum":"0"},{"id":"2","studyroom_name":"自习室03","studyroom_code":"03","totalnum":30,"sjNum":"0"},{"id":"3","studyroom_name":"自习室04","studyroom_code":"04","totalnum":30,"sjNum":"0"},{"id":"4","studyroom_name":"自习室05","studyroom_code":"05","totalnum":30,"sjNum":"0"},{"id":"40288a9d7964c1fa017964cdf7190003","studyroom_name":"自习室01","studyroom_code":"01","totalnum":30,"sjNum":"0"}]},"timestamp":1621009876349,"code":200,"success":true}
            // this.$message({
            //   message: res.message,
            //   type: 'success'
            // });
            // this.$router.push({
            //   name:'login'
            // })
          }
          else{
            this.$message.error(res.message);
          }
          console.log(res); //返回请求的结果
        })
        .catch((err) => {
          // console.log(err);
          this.$message.error(err.message);
        })
        .finally(() => {
          this.loadingFn(false);
        });
      },
    goBackFn(){
      this.$router.go(-1);
    }
  },
};
</script>
<style lang="scss">
.roomDetailPage {
  width: 100vw;
  height: 100vh;
  background: #fff;
  .backClassOut{
    display: flex;
    // justify-content: center;
    align-items: center;
    .backClass{
        padding:5px;
        width:10px;
        height: 20px;
        img{
          width:100%;
          height: 100%;
        }
      }
  }
  
  .all {
    padding: 10px 15px;
    display: flex;
    //   width:100%;
    flex-wrap: wrap;
    .room_every {
      padding-right:30px;
      margin-bottom: 20px;
      // width: calc(~"25% - 30px");
      width:25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .tipText {
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #d0826b;
        width: 100%;
        height: 120px;
        font-size: 26px;
        color: #b16a4c;
      }
      .chairBtn {
        margin-top:10px;
        height: 50px;
          border-radius: 20px;
        // width: calc(~"50%");
        background: #dc9b79;
        position: relative;
        .setType{
            width: 100%;
          position: absolute;
          bottom: 50%;
          // left: calc(~"50% - 30px");;
          left: 50%;
          img{
            width:70px;
            height:100px;
          }
        }
      }
    }
  }
}
</style>