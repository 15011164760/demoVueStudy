<template>  
	<div>    
		<div ref="box"></div>  
	</div>
</template>
<script>  
//引用  
import E from "wangeditor";  
export default {    
	data() {      
		return {        
			//将富文本示例放在data里        
			editor:'',      
		}    
	},  
    watch: {
    isClear(val) {
      console.log(val,"isClear===");
      // 触发清除文本域内容
      if (val) {
        this.editor.txt.clear();
        this.info_ = null;
      }
    },
    value: function (value) {
      if (value !== this.editor.txt.html()) {
        this.editor.txt.html(this.value);
      }
    },
    // value为编辑框输入的内容，这里我监听了一下值，当父组件调用得时候，如果给value赋值了，子组件将会显示父组件赋给的值
  },  
	mounted() {      
		//初始化      
		this.editor = new E(this.$refs.box);
    /* setTimeout(()=>{
	   this.editor.disable();
    },1000)
    setTimeout(()=>{
	   this.editor.enable();
    },2000) */
		// 设置编辑区域高度为 500px
this.editor.config.height = 500;
//设置内容
this.editor.txt.html('<p>用 JS 设置的内容</p>');
//获取html内容
this.editor.txt.html();
//获取text内容
this.editor.txt.text();
//获取json
this.editor.txt.getJSON();
//清空内容
this.editor.txt.clear(); 
// 取消自动 focus
this.editor.config.focus = true;
setTimeout(()=>{
	this.editor.create();  
  //设置内容
this.editor.txt.html('<p>用 JS 设置的内容</p>');
})
  this.editor.config.onchange = (html) => {
        this.info_ = html; // 绑定当前逐渐地值
        this.$emit("change", this.info_,this.editor.txt.text()); // 将内容同步到父组件中
      };
      const SINA_URL_PATH = 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal'
//表情配置
this.editor.config.emotions = [
    {
        title: '新浪', // tab 的标题
        type: 'image', // 'emoji' 或 'image' ，即 emoji 形式或者图片形式
        content: [
            { alt: '[坏笑]', src: `${SINA_URL_PATH}/50/pcmoren_huaixiao_org.png` },
            { alt: '[舔屏]', src: `${SINA_URL_PATH}/40/pcmoren_tian_org.png` },
            { alt: '[污]', src: `${SINA_URL_PATH}/3c/pcmoren_wu_org.png` },
        ]
    },
    {
        title: 'emoji',  // tab 的标题
        type: 'emoji', // 'emoji' / 'image'
        // emoji 表情，content 是一个数组即可
        content: '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😓 😪 😴 🙄 🤔 😬 🤐'.split(/\s/),
    }
]
// 隐藏菜单栏提示
this.editor.config.showMenuTooltips = true
//可以通过editor.config.menuTooltipPosition配置显示上标还是下标。up/down
this.editor.config.menuTooltipPosition = 'down'
//字体配置
this.editor.config.fontSizes = {
    'x-small': { name: '10px', value: '1' },
    'small': { name: '13px', value: '2' },
    'normal': { name: '16px', value: '3' },
    'large': { name: '18px', value: '4' },
    'x-large': { name: '24px', value: '5' },
    'xx-large': { name: '32px', value: '6' },
    'xxx-large': { name: '48px', value: '7' },
}
this.editor.config.menus = [  
  "head", // 标题
        "bold", // 粗体
        "fontSize", // 字号
        "fontName", // 字体
        "italic", // 斜体
        "lineHeight", // 行高
        "underline", // 下划线
        "strikeThrough", // 删除线
        "foreColor", // 文字颜色
        "backColor", // 背景颜色
        "link", // 插入链接
        "list", // 列表
        "justify", // 对齐方式
        "quote", // 引用
        "emoticon", // 表情
        // 'image', // 插入图片
        "table", // 表格
        // 'video', // 插入视频
        // 'code', // 插入代码
        "undo", // 撤销
        "redo", // 重复
        // 'fullscreen' // 全屏
]
	},  
}
</script>