import Vue from 'vue'
import Router from 'vue-router'
//引入首页组件
import Index from '@/components/Index'
//引入公众号组件
import Gzh from '@/components/Gzh'
//引入我们组件
import Me from '@/components/Me'
//引入全部主题列表组件
import All from '@/components/topics/All'
import Good from '@/components/topics/Good'
import Share from '@/components/topics/Share'
import Ask from '@/components/topics/Ask'
import Job from '@/components/topics/Job'
import Dev from '@/components/topics/Dev'
// 文章的详情页
import Show from '@/components/topics/Show'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      children:[
      	{
      		path:'/',
      		component: All
      	},
        {
          path:'Good',
          component: Good
        },
        {
          path:'Share',
          component: Share
        },
        {
          path:'Job',
          component: Job
        },
        {
          path:'Ask',
          component: Ask
        },
        {
          path:'Dev',
          component: Dev
        },
        // 文章的详情页
        {
          path:'show/:id',
          component:Show
        }
      ]
    },
    {
      path: '/Gzh',
      name: 'Gzh',
      component: Gzh	
    },
    {
      path: '/Me',
      name: 'Me',
      component:Me	
    },
     // 路由跳转
    {
      path:'/*',
      redirect: '/index'
    }
  ]
})
