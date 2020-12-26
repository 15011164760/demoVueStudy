<template>
  <div class="hello" style="border: 1px solid #ddd;">
    --- {{$route.params.id}}
    HelloWorld组件
    <div style="width:100px;height:100px;" id="gb" >
    <img src="assets/logo.png" alt=""></div>
<div class="a">sds</div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  // import axios from 'axios';
  // import {mapState} from './s  tore/store.js';
  import aaa from './aaa.vue';
  import { appPage } from './api';
  export default {
    name: 'HelloWorld',
    components: {
      aaa
    },
    computed: {
      ...mapState(["isShow"])
    },
    data() {
      return {
        nameList: ['yang', 'dong', 'kobo', 'zhangsan'],
        isActive: true,
        isLine: false,
        myName: 'yangdongxu',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: [],
        msg: 'Welcome to Your Vue.js App',
        message: {
          msg: 'msg',
          aaa: 'aaa',
          bbb: 'bbb',
          jjj: {
            bbb: {
              bbb: 'bbb'
            }
          }
        },
        fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }]
      }
    },
    mounted() {
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
      clickChange(item){
        // debugger
        item.value='cao';
      },
      nameLClick() {
        // this.nameList.splice(2, 0, '天津李四' + this.nameList.length)
        this.nameList[0]='cao';
        console.log(this.nameList);
        console.log(this.$parent);
        console.log(this.$root);
      },
      changeName() {
        this.myName = 'ggg'
      },
      changeMsg() {
        this.message.msg = 'msg-ccc';
        this.message.aaa = 'aaa-ccc';
        this.message.bbb = 'bbb-ccc';
        this.message.jjj = { bbb: { bbb: 'bbb-ccc' + new Date().getTime() } };
        this.message = {
          msg: 'msg1',
          aaa: 'aaa1',
          bbb: 'bbb1',
          jjj: {
            bbb: {
              bbb: 'bbb1'
            }
          }
        }
      },
      getData() {
        // 获取远程图片
        // axios({
        //   method:'get',
        //   url:'http://bit.ly/2mTM3nY',
        //   responseType:'stream'
        // })
        //   .then(function(response) {
        //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        // });
        //  this.loadingFn(true);
        //  setTimeout(()=>{
        //   this.loadingFn(false);
        //  },2000)
        // this.$axios.get('https://www.apiopen.top/journalismApi')
        // this.$axios.get('https://www.apiopen.top/journalismApi')
        appPage.journalismApi({ a: 'aaa' })
          .then(res => {
            console.log(res)//返回请求的结果
          })
          .catch(err => {
            console.log(err)
          }).finally(() => {
            this.loadingFn(false);
          })
      },
      aaa() {
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #gb{
    /* background-image: url('assets/logo.png'); */
  }
.a{
      width: 0;
      height: 0;
      border-width: 100px;
      border-style: solid;
      border-color: transparent transparent  #0099CC transparent;
      /* transform: rotate(90deg);  *//*顺时针旋转90°*/
}
  #color {
    color: green;
  }

  .hello {
    background: #ddd;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>