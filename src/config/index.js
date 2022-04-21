/**
 * Created by swain on 2018/7/6.
 */
export default {
  common: {
    dict: '/api/dict/parent', // 数据字典
    footer: '/api/basic/getCopyright',//尾部版权
    footer2: '/api/basic/getProductTypeNoAuto',//尾部产品 类型
    header: '/api/basic/getColumnList',//头部导航栏
    rediannew: '/api/basic/getHotNews'//热点新闻   
  }, // 公共
  home: {}, // 首页
  product: {
    proClass: '/api/basic/getProductTypeNoAuto'//产品类别
  },
  user: {},// 我的
  about: {
    aboutNav: '/api/basic/getChildColumnList',//关于我们二级nav
    bannar: '/api/basic/getBannerList',//轮播图
    abouttext: '/api/basic/getByColumn'//关于我们文章
  },
  news: {
    newscontent: '/api/basic/viewNews',//新闻文章
    newslist: '/api/basic/pages',//新闻列表
    newsNav: '/api/basic/getChildColumnList'//新闻二级nav
  }
  // 参数
}
