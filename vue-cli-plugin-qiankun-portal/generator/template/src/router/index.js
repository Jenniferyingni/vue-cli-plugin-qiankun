import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/demo1'
  },
  {
    path: '/demo1*',
    name: 'demo1',
    component: () => import(/* webpackChunkName: "about" */ '../components/demo1')
  },
  {
    path: '/demo2*',
    name: 'demo2',
    component: () => import(/* webpackChunkName: "about" */ '../components/demo2')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router