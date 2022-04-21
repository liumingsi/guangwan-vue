<template>
    <div class="page-application">
        <Header :num="num"></Header>
      <div class="page-application-nav">
        <div class="page-application-nav-left">
          <div><router-link to="#">汽车信息娱乐</router-link></div>
          <div><router-link to="#">汽车照明</router-link></div>
          <div><router-link to="#">自动驾驶</router-link></div>
          <div><router-link to="#">电动汽车</router-link></div>
          <div><router-link to="#">手机</router-link></div>
          <div><router-link to="#">服务器/基站</router-link></div>
          <div><router-link to="#">可穿戴/物联网</router-link></div>
          <div><router-link to="#">电视</router-link></div>
        </div>
        <div class="page-application-nav-right">
          <p><router-link to="#">应用</router-link>><router-link to="#">汽车信息娱乐</router-link></p>
        </div>
      </div>
      <div class="page-application-content">
      <div class="page-application-content-left">
                <div class="page-application-content-left-top">
                    <img :src="`${imgPath}${ysdata.image}`" alt="">
                </div>
                <div class="page-application-content-main">
                    <p style="margin-top: 20px;font-size: 24px;color: #000; font-weight: 400">{{ysdata.title}}</p>
                    <p v-html="ysdata.content"></p>
                </div>
      </div>
      <div class="page-application-content-hr"></div>
      <div class="page-application-content-right">
        <div class="page-application-content-right-title">
          <p>相关<span>新闻</span></p>
        </div>
        <div class="page-application-content-right-new">
          <p>2202.02.12</p>
          <p>积极进军面板市场，发布高性能低损耗薄型电感</p>
        </div>
        <div class="page-application-content-right-new">
          <p>2202.02.12</p>
          <p>积极进军面板市场，发布高性能低损耗薄型电感</p>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
    import Footer from '../../components/footer/footer.vue'
    import Header from '../../components/header/header.vue'
    export default {
      name:'applicationIndex',
      data() {
        return {
          num:3,
          imgPath: process.env.IMG_ROOT,
          ysdata: JSON.parse(window.localStorage.getItem('yydata_key') || '[]'),
        }
      },
      components: {
        Footer,
        Header
      },
      created() {
        this.init()
      },
      methods: {
        init() {
          this.getShare()
        }
      }
    }
  </script>
  <style lang="scss" scoped>
    @import "../../style/scss/_application.scss";
  </style>