import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import load from '@/components/load'
/* const HelloWorld=()=>import('@/components/HelloWorld');
const load=()=>import('@/components/load'); */
Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
      // component: HelloWorld
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/load',
      name: 'load',
      component: load
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
