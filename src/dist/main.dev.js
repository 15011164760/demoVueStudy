"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _less = _interopRequireDefault(require("less"));

require("../static/style/common.scss");

var _App = _interopRequireDefault(require("./App"));

var _router = _interopRequireDefault(require("./router"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

var _store = _interopRequireDefault(require("./store/store.js"));

require("@/directive.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import './assets/icon/iconfont.css';
// import '@/assets/css/element-variables.scss'
// import './element-css/index.css';// 2.3、引入ElementUI的自定义的主题样式
// import axios from './axios/axios.js'
// Vue.prototype.$axios = axios;  //在Vue的原型上添加$axios方法
_vue["default"].use(_elementUi["default"]);

_vue["default"].use(_less["default"]);

_vue["default"].config.productionTip = false; // 引入自定义指令p

/* eslint-disable no-new */
new _vue["default"]({
  el: '#app',
  router: _router["default"],
  store: _store["default"],
  components: {
    App: _App["default"]
  },
  template: '<App/>'
});