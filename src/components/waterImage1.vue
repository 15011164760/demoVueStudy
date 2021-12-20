
//   <template>
//   <div class="roomsPage" @click="imgWatermarkFn">
//       <img id="imgId" src="https://pic.rmb.bdstatic.com/bjh/news/82047dee776ba1935180722f74387c71.jpeg" alt="">
//     <button>水印图片</button>
//     <div ref="imgRef"></div>
//   </div>
// </template>

// <script>
// export default {
//   name: "waterImage",
//   components: {
//     // aaa,
//   },
//   computed: {},
//   data() {
//     return {
//       persent: "2/12",
//       listData: [],
//     };
//   },
//   mounted() {},
//   methods: {
//     imgWatermarkFn() {
//       let dom = this.$refs.imgRef;
//       this.imgWatermark(dom, "aaa000000");
//     },
//     blobToImg(blob) {
//       return new Promise((resolve, reject) => {
//         let reader = new FileReader();
//         reader.addEventListener("load", () => {
//           let img = new Image();
//           img.src = reader.result;
//           img.addEventListener("load", () => resolve(img));
//         });
//         reader.readAsDataURL(blob);
//       });
//     },
//     imgToCanvas(img) {
//       let canvas = document.createElement("canvas");
//       canvas.width = img.width;
//       canvas.height = img.height;
//       let ctx = canvas.getContext("2d");
//       ctx.drawImage(img, 0, 0);
//       return canvas;
//     },
//     watermark(canvas, text) {
//       return new Promise((resolve, reject) => {
//         let ctx = canvas.getContext("2d");
//         // 设置填充字号和字体，样式
//         ctx.font = "24px 宋体";
//         ctx.fillStyle = "#FFC82C";
//         // 设置右对齐
//         ctx.textAlign = "right";
//         // 在指定位置绘制文字，这里指定距离右下角20坐标的地方
//         ctx.fillText(text, canvas.width - 20, canvas.height - 20);
//         canvas.toBlob((blob) => resolve(blob));
//       });
//     },
//     imgWatermark(dom, text) {
//       let input = document.createElement("input");
//       input.setAttribute("type", "file");
//       input.setAttribute("accept", "image/*");
//       input.onchange = async () => {
//         let img = await this.blobToImg(input.files[0]);
//         console.log(img);
//         let canvas = this.imgToCanvas(img);
//         let blob = await this.watermark(canvas, text);
//         // 此处将Blob读取到img标签，并在dom内渲染出来；如果是上传文件，可以将blob添加到FormData中
//         let newImage = await this.blobToImg(blob);
//         dom.appendChild(newImage);
//       };
//       input.click();
//     },
//   },
// };
// </script>
// <style lang="scss">
// </style>
