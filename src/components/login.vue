<template>
  <div class="loginPage">
    <!-- --- {{$route.params.id}}
    HelloWorld组件
    <div style="width:100px;height:100px;" id="gb" >
    <img src="assets/logo.png" alt=""></div>
<div class="a">sds</div> -->
<div class="topTip">
           <marquee behavior="behavior" width="500" loop="20000000">{{noticenoticeContent}}</marquee>
        </div>
    <div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="学号" prop="studentNum">
          <el-input v-model="ruleForm.studentNum"></el-input>
        </el-form-item>
         <el-form-item label="登陆密码" prop="studentPassword">
      <el-input type="password" v-model="ruleForm.studentPassword" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="registerFn"
            >注册</el-button
          >
            <el-button type="primary" plain @click="submitForm('ruleForm')">登陆</el-button>
          <el-button @click="resetForm('ruleForm')" plain >重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import axios from 'axios';
// import {mapState} from './s  tore/store.js';
import aaa from "./aaa.vue";
import { appPage } from "./api";
export default {
  name: "HelloWorld",
  components: {
    aaa,
  },
  computed: {
    ...mapState(["isShow"]),
  },
  data() {
    return {
      noticenoticeContent:'',
   ruleForm: {
          studentNum: '',
          studentPassword: '',
        },
        rules: {
          studentNum: [
            { required: true, message: '请输入学号', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          studentPassword: [
            { required: true, message: '请输入登陆密码', trigger: 'blur' },
          ],
        }
    };
  },
  mounted() {
    this.findNoticenoticeFn();
    // // debugger
    // console.log(process.env);
    // this.aaa();
    // let aaa = 'yangdongxu'; let bbb = aaa.endsWith('xu')
    // console.log(bbb);
    // let arr = [
    //   { age: 1, name: "小里" },
    //   { age: 1, name: "小里" },
    //   { age: 1, name: "小里" },
    // ]
    // let result = arr.map((obj) => { return obj.name })
    // console.log(result);
  },
  methods: {
    ...mapMutations(["loadingFn"]),
    findNoticenoticeFn(){
     appPage.findNoticenotice()
        .then((res) => {
          if(res.code==200){
            this.noticenoticeContent=res.result.noticenoticeContent
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
    },
    registerFn(){
      this.$router.push({
        name:'register'
      })
    },
      submitForm(formName) {
        
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.userLoginFn();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
       userLoginFn(){
      // axios.post('/rest/userOpt/userRegister/?studentNum=aaa&studentPassword=hha&studentName=go&studentAge=11&sex=1&studentPhone=15011169999',this.ruleForm)
      // axios({
      //   method:'post',
      //   url:'/api/rest/userOpt/userRegister/',
      //   data:this.ruleForm
      // })
      //  ('')
     appPage.userLogin(this.ruleForm)
        .then((res) => {
          if(res.code==200){
            localStorage.setItem('studentNum',res.result.studentNum);
            // this.$message({
            //   message: res.message,
            //   type: 'success'
            // });
            this.$router.push({
              name:'rooms'
            })
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    clickChange(item) {
      // debugger
      item.value = "cao";
    },
    // nameLClick() {
    //   // this.nameList.splice(2, 0, '天津李四' + this.nameList.length)
    //   this.nameList[0] = "cao";
    //   console.log(this.nameList);
    //   console.log(this.$parent);
    //   console.log(this.$root);
    // },
    // changeName() {
    //   this.myName = "ggg";
    // },
    // changeMsg() {
    //   this.message.msg = "msg-ccc";
    //   this.message.aaa = "aaa-ccc";
    //   this.message.bbb = "bbb-ccc";
    //   this.message.jjj = { bbb: { bbb: "bbb-ccc" + new Date().getTime() } };
    //   this.message = {
    //     msg: "msg1",
    //     aaa: "aaa1",
    //     bbb: "bbb1",
    //     jjj: {
    //       bbb: {
    //         bbb: "bbb1",
    //       },
    //     },
    //   };
    // },
    // getData() {
    //   // 获取远程图片
    //   // axios({
    //   //   method:'get',
    //   //   url:'http://bit.ly/2mTM3nY',
    //   //   responseType:'stream'
    //   // })
    //   //   .then(function(response) {
    //   //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    //   // });
    //   //  this.loadingFn(true);
    //   //  setTimeout(()=>{
    //   //   this.loadingFn(false);
    //   //  },2000)
    //   // this.$axios.get('https://www.apiopen.top/journalismApi')
    //   // this.$axios.get('https://www.apiopen.top/journalismApi')
    //   appPage
    //     .journalismApi({ a: "aaa" })
    //     .then((res) => {
    //       console.log(res); //返回请求的结果
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    //     .finally(() => {
    //       this.loadingFn(false);
    //     });
    // },
    // aaa() {},
    // submitUpload() {
    //   this.$refs.upload.submit();
    // },
    // handleRemove(file, fileList) {
    //   console.log(file, fileList);
    // },
    // handlePreview(file) {
    //   console.log(file);
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.loginPage{
  width:100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  // background:#ddd ;
  background: url("../assets/images/logo_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  // background-color: cornsilk;
  .topTip{
    display: flex;
    margin-top:20px;
    margin-bottom:100px;
    justify-content: center;
    align-items: center;
    color:#333;
}
  .demo-ruleForm{
    width:1000px;
  }
}

</style>