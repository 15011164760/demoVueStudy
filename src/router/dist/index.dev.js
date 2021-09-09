"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _login = _interopRequireDefault(require("@/components/login"));

var _luckDrawDetail = _interopRequireDefault(require("@/components/luckDraw/luckDrawDetail"));

var _register = _interopRequireDefault(require("@/components/register"));

var _rooms = _interopRequireDefault(require("@/components/rooms"));

var _roomDetail = _interopRequireDefault(require("@/components/roomDetail"));

var _showImg = _interopRequireDefault(require("@/components/imgSports/showImg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* const login=()=>import('@/components/login');
const load=()=>import('@/components/load'); */
_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  routes: [{
    path: '*',
    redirect: '/',
    component: _showImg["default"]
  }, //登陆
  {
    path: '/',
    name: 'showImg',
    component: _showImg["default"]
  }, //注册
  {
    path: '/register',
    name: 'register',
    component: _register["default"]
  }, //教室列表
  {
    path: '/rooms',
    name: 'rooms',
    component: _rooms["default"]
  }, //教室详情
  {
    path: '/roomDetail',
    name: 'roomDetail',
    component: _roomDetail["default"]
  }]
});
var _default = router;
exports["default"] = _default;
router.beforeEach(function (to, from, next) {
  console.log(to);
  console.log(from);
  document.title = to.name;
  next();
});
router.afterEach(function (to, from) {
  console.log('++++++');
});