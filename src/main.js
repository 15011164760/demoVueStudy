// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import less from 'less'
import App from './App'
import router from './router'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './assets/icon/iconfont.css';
// import '@/assets/css/element-variables.scss'
// import './element-css/index.css';// 2.3、引入ElementUI的自定义的主题样式
// import axios from './axios/axios.js'
import store from './store/store.js'
// Vue.prototype.$axios = axios;  //在Vue的原型上添加$axios方法
Vue.use(Element);
Vue.use(less);
Vue.config.productionTip = false
// 引入自定义指令p
import '@/directive.js';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
