<template>
  <div class="roomsPage">
    <div class="all">
      <div class="room_every" v-for="(item, index) in listData" :key="index" @click="goRoomDetailFn(item.id)">
        <div class="order">{{index+1}}</div>
        <div class="right">
          <div class="className">{{ item.studyroom_name }}</div>
          <div class="classStatus">{{ `自习中: (${item.sjNum}/${item.totalnum})` }}</div>
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
      persent: "2/12",
      listData: [
        
      ],
    };
  },
  mounted() {
this.findStudyroomFn();
  },
  methods: {
    ...mapMutations(["loadingFn"]),
    findStudyroomFn(){
     appPage.findStudyroom()
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
    goRoomDetailFn(id){
        this.$router.push({
            name:'roomDetail',
            query: {
             id
           }
            // selSeatList
        })
    }
  },
};
</script>
<style lang="less">
.roomsPage {
  width: 100vw;
  height: 100vh;
  background: #ba835c;
  .all {
    padding: 10px 15px;
    display: flex;
    //   width:100%;
    flex-wrap: wrap;
    // justify-content: space-between;
    .room_every {
      margin-bottom: 10px;
      background: #fff;
      margin-right:20px;
      width: calc(~"25% - 20px");
      height: 100px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      .order {
        margin-left: 10px;
        font-size: 30px;
        // font-style: italic;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 35px;
        border-radius: 48%;
        background: #ba835c;
        color: #fff;
      }
      .right {
        margin-left: 5px;
        .className {
          font-size: 26px;
          color: #b08e82;
          margin-bottom: 10px;
        }
        .classStatus {
          font-size: 20px;
          color: #878382;
        }
      }
    }
  }
}
</style>