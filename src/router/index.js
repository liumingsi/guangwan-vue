import Vue from 'vue'
import Router from 'vue-router'
const HomeIndex = () => import('@/page/home/index')
const AboutIndex = () => import('@/page/about/index')
const ProductIndex = () => import('@/page/product/index')
const ApplicationIndex = () => import('@/page/application/index')
const ArtIndex = () => import('@/page/art/index')
const SearchIndex = () => import('@/page/search/index')
const NewsIndex = () => import('@/page/news/index')
const ProDetailIndex = () => import('@/page/proDetail/index')
const NewsDetails = () => import('@/page/news/details')

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [{
      path: '/',
      redirect: {
        name: 'homeIndex'
      }
    }, {
      path: '/homepage', // 首页
      name: 'homeIndex',
      meta: {
        title: '北半球官网'
      },
      component: HomeIndex
    }, {
      path: '/about-us', // 关于我们
      name: 'aboutIndex',
      component: AboutIndex,
      meta: {
        title: '关于我们'
      },
    },
    {
      path: '/product-center', // 产品中心
      name: 'productIndex',
      component: ProductIndex,
      meta: {
        title: '产品中心'
      },
    },
    {
      path: '/proDetail/index', // 产品详情
      name: 'proDetailIndex',
      component: ProDetailIndex,
      meta: {
        title: '产品详情'
      }
    }, {
      path: '/product-apply', // 产品应用
      name: 'applicationIndex',
      component: ApplicationIndex,
      meta: {
        title: '产品应用'
      },
    }, {
      path: '/technical', // 技术
      name: 'artIndex',
      component: ArtIndex,
      meta: {
        title: '产品技术'
      },
    },
    {
      path: '/product-search', // 产品搜索
      name: 'searchIndex',
      component: SearchIndex,
      meta: {
        title: '产品搜索'
      },
    },
    {
      path: '/news-center', // 新闻中心
      name: 'newsIndex',
      component: NewsIndex,
      meta: {
        title: '新闻中心'
      },
    },
    {
      path: '/news/details/:id', // 新闻详情
      name: 'newsDetails',
      component: NewsDetails,
      meta: {
        title: '新闻详情'

      },
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  window.history.replaceState(null, null, window.location.href)
  next()
})

export default router
