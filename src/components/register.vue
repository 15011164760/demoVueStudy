<template>
  <div class="loginPage">
    <div class="topTip">
      <marquee behavior="behavior" width="200" loop="20000000"
        >通知公告内容:欢迎来到我的图书馆</marquee
      >
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
          <el-input
            type="password"
            v-model="ruleForm.studentPassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="学生姓名" prop="studentName">
          <el-input v-model="ruleForm.studentName"></el-input>
        </el-form-item>
        <el-form-item label="学生年龄" prop="studentAge">
          <el-input v-model.number="ruleForm.studentAge"></el-input>
        </el-form-item>
        <el-form-item label="学生手机号" prop="studentPhone">
          <el-input v-model.number="ruleForm.studentPhone"></el-input>
        </el-form-item>
        <el-form-item label="学生性别" prop="sex">
          <el-select v-model="ruleForm.sex" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm('ruleForm')" plain>重置</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from 'axios';
// import {mapState} from './s  tore/store.js';
import { appPage } from "./api";
export default {
  name: "HelloWorld",
  components: {
  },
  computed: {
    ...mapState(["isShow"]),
  },
  data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            // if (value < 18) {
            //   callback(new Error('必须年满18岁'));
            // } else {
            //   callback();
            // }
            callback();
          }
        }, 1000);
      };
      var checkStudentPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('手机号只能输入数字'));
          } else {
            // if (value < 18) {
            //   callback(new Error('必须年满18岁'));
            // } else {
            //   callback();
            // }
            callback();
          }
        }, 1000);
      };
    return {
      ruleForm: {
        studentNum: "",
        studentPassword: "",
        sex: "",
        studentName: "",
        studentAge: "",
        studentPhone: ""
      },
      rules: {
        studentNum: [
          { required: true, message: "请输入学号", trigger: "change" },
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        studentPassword: [
          { required: true, message: "请输入登陆密码", trigger: "change" },
        ],
        studentName: [
          { required: true, message: "请输入学生姓名", trigger: "change" },
        ],
        studentAge: [
          { required: true,validator: checkAge, trigger: 'change' }
        ],
        studentPhone: [
          { required: true, validator: checkStudentPhone, trigger: "change" },
        ],
        sex: [
          { required: true, message: "学生性别不能为空", trigger: "change" },
        ],
      },
    };
  },
  mounted() {
  },
  methods: {
    ...mapMutations(["loadingFn"]),
      submitForm(formName) {
        this.userRegisterFn()
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     this.userRegisterFn()
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      userRegisterFn(){
      // axios.post('/rest/userOpt/userRegister/?studentNum=aaa&studentPassword=hha&studentName=go&studentAge=11&sex=1&studentPhone=15011169999',this.ruleForm)
      // axios({
      //   method:'post',
      //   url:'/api/rest/userOpt/userRegister/',
      //   data:this.ruleForm
      // })
      //  ('')
     appPage.userRegister(this.ruleForm)
        .then((res) => {
          if(res.code==200){
            this.$message({
              message: res.message,
              type: 'success'
            });
            this.$router.push({
              name:'login'
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
<style lang="less">
.loginPage {
  width: 100vw;
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
  .topTip {
    display: flex;
    margin-top: 20px;
    margin-bottom: 100px;
    justify-content: center;
    align-items: center;
    color: #333;
  }
  .demo-ruleForm {
    width: 1000px;
  }
}
</style>