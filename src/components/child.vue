<template>
  <div class="hello" style="border: 1px solid #ddd;">
    <div @click="$emit('input',value+1)" >
      <span style="background: red;">点击事件click value加1</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'child',
    props:["value"],
    computed: {
    },
    data() {
      return {

      }
    }
  }
</script>
<style>
</style>