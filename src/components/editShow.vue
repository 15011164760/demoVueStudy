<template>
<div class='outer'>
  <EditorTool
    v-model="entityContent"
    :is-clear="isClear"
    @change="changeEditor"
  />
  <!-- <div @click="clearBTN">clearBTN</div> -->
</div>

</template>
 <script>
import EditorTool from "@/components/wangEditor/wangEditor";
export default {
  components: { EditorTool },
  data() {
    return {
      entityContent: "",
      isClear: false,
      detail: "",
    };
  },
  methods: {
    //   clearBTN(){
    //     this.isClear=!this.isClear;
    //     console.log(this.isClear);
    //   },
    changeEditor(val,text) {
      console.log(val,"text==="+text);
      this.isClear=val?true:false;
    },
  },
};
</script>
<style lang="sass" scoped>
.outer{
    width:100%;
    heigth: 600px;
}
</style>
 

