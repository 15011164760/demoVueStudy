<template>
  <div>
  <img id="myimg" :src="imgUrl" alt="">
  <div>
    {{aaa}}
  </div>
  </div>
</template>
<style>
  .seamless-warp {
    height: 229px;
    overflow: hidden;
  }
  #myimg{
    width:500px;
    height: 500px;
  }
</style>
<script>
export default {
  data () {
    return {
      aaa:`圈子或用户不存在   再找找别的？`,
      
      
      imgUrl: ''
    }
  },
  mounted () {
    // 调用方法传入对应的参数
    this.getImgUrl({
    //   url: 'http://172:8080/自己的图片地址',
      url: 'http://127.0.0.1:5500/logo_bg.jpg',
      content: '周末了撸串去啊',
      cb: (base64Url) => {
        debugger
        // 使用两种方法设置显示img的src都可以
        // document.getElementById('myimg').src = base64Url
        this.imgUrl = base64Url
      }
    })
  },
  methods: {
    getImgUrl ({
      url = 'http://127.0.0.1:5500/logo_bg.jpg',
      textAlign = 'left',
      textBaseline = 'top',
      font = '18px Microsoft Yahei',
      fillStyle = 'rgba(255, 255, 255, 0.5)',
      content = '我是默认的水印参数',
      cb = null,
      textX = 100,
      textY = 30
    } = {}) {
      // debugger
      // 创建所需要添加水印的img图片
      const img = new Image()
      img.src = url
      img.crossOrigin = 'anonymous'
      img.onload = function () {
        // 创建canvas，并将创建的img绘制成canvas
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')

        ctx.drawImage(img, 0, 0)
        ctx.textAlign = textAlign
        ctx.textBaseline = textBaseline
        ctx.font = font
        ctx.fillStyle = fillStyle
        ctx.rotate((Math.PI / 180) * 15)
        // 循环绘制水印
        // ctx.fillText(content, img.width - textX, img.height - textY)
        for (let i = 0; i < img.height / 120; i++) {
          for (let j = 0; j < img.width / 50; j++) {
            ctx.fillText(content, i * 200, j * 100, img.width)
          }
        }
        // 将绘制完成的canvas转换为base64的地址
        const base64Url = canvas.toDataURL()
        cb && cb(base64Url)
      }
    }
  }
}
</script>

