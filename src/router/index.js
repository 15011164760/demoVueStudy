import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import rooms from '@/components/rooms'
import roomDetail from '@/components/roomDetail'
/* const login=()=>import('@/components/login');
const load=()=>import('@/components/load'); */
Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
      component: login
    },
    //登陆
    {
      path: '/',
      name: 'login',
      component: login
    },
    //注册
    {
      path: '/register',
      name: 'register',
      component: register
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
