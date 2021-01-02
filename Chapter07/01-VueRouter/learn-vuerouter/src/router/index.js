import Vue from 'vue'
import Router from 'vue-router'

// 导入组件(原生写法)
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

// 导入组件(路由懒加载)
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

Vue.use(Router)

// 将路由映射单列出来
const routes = [
  // 路由默认界面
  {
    // 缺省值表示默认状态
    path: '/',
    // 重定向
    redirect: '/home',
    meta: {
      title: 'Index'
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Home'
    },
    // 配置子路由
    children: [
      {
        // 默认显示
        path: '',
        component: HomeMessage
      },
      {
        // 子路由路径不能加/
        path: 'message',
        component: HomeMessage
      },
      {
        // 子路由路径不能加/
        path: 'news',
        component: HomeNews
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: 'User'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: 'Profile'
    }
  }
]

const router = new Router({
  // 配置路径和组件的映射关系
  routes,
  // mode模式，默认为hash，可以修改为HTML5的history模式
  mode: 'history',
  // linkActiveClass可以直接统一修改被激活时的样式
  linkActiveClass: 'active'
})

// 配置全局守卫
router.beforeEach(((to, from, next) => {
  // 从from跳转到to(获取to的meta中title)
  document.title = to.matched[0].meta.title
  console.log(to);
  // next一定要调用，不调用Vue会拒绝跳转
  next()
}))

export default router
