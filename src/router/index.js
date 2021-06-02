import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home/index.vue"
if(!window.VueRouter){
  Vue.use(VueRouter)

}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:"首页"
    }
  },
  {
    path: '/about',
    name: 'About',
    meta:{
      title:"关于我"
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About/index.vue')
  },
  {
    path: '/Blog',
    name: 'Article',
    meta:{
      title:"文章"
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog/index.vue')
  },
  {
    path: '/article/:id',
    meta:{
      title:"文章"
    },
    name: 'BlogDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog/Detail.vue')
  },
  {
    path: '/article/cate/:categoryId',
    name: 'CategoryBlog',
    meta:{
      title:"文章详情"
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog/index.vue')
  },
  {
    path: '/project',
    name: 'Project',
    meta:{
      title:"项目"
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Project/index.vue')
  },
  {
    path: '/message',
    name: 'Message',
    meta:{
      title:"留言板"
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Message/index.vue')
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.afterEach((to,from)=>{
  if(to.meta.title){
    document.title = to.meta.title;
  }
})
export default router
