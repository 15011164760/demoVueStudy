import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import luckDraw from '@/components/luckDraw/luckDrawDetail'
import register from '@/components/register'
import rooms from '@/components/rooms'
import roomDetail from '@/components/roomDetail'
import showImg from '@/components/imgSports/showImg'
import editShow from '@/components/editShow.vue'
import waterImage from '@/components/waterImage.vue'
import fbx from '@/components/imgSports/fbx'
/* const login=()=>import('@/components/login');
const load=()=>import('@/components/load'); */
Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      // redirect: '/',
      component: waterImage
    },
    {
      path: '/editShow',
      // redirect: '/',
      component: editShow
    },
    {
      path: '/luckDraw',
      name: 'luckDraw',
      component: luckDraw
    },
    //登陆
    {
      path: '/',
      name: 'showImg',
      component: showImg
    },
    //注册
    {
      path: '/register',
      name: 'register',
      component: register
    },
    //注册
    {
      path: '/fbx',
      name: 'fbx',
      component: fbx
    },
    //教室列表
    {
      path: '/rooms',
      name: 'rooms',
      component: rooms
    },
    //教室详情
    {
      path: '/roomDetail',
      name: 'roomDetail',
      component: roomDetail
    },
  ]
})
export default router 
router.beforeEach((to,from,next)=>{
  console.log(to);
  console.log(from);
  document.title=to.name;
  next()
})
router.afterEach((to,from)=>{
  console.log('++++++');
})
