import Vue from 'vue'
import Router from 'vue-router'

// 导入组件
import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(Router)

// 将路由映射单列出来
const routes = [
  // 路由默认界面
  {
    // 缺省值表示默认状态
    path: '/',
    // 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

export default new Router({
  // 配置路径和组件的映射关系
  routes,
  // mode模式，默认为hash，可以修改为HTML5的history模式
  mode: 'history',
  // linkActiveClass可以直接统一修改被激活时的样式
  linkActiveClass: 'active'
})
