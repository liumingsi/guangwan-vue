<template>
  <div class="page-about">
    <Header :num="num"></Header>
    <div class="page-about-nav">
      <div class="page-about-nav-left">
        <div v-for="(item,index) in navdata" :class="{navclass:navnum == index}" :key="index" @click="bian(index)">
          <router-link to="#">{{item.name}}</router-link>
        </div>
      </div>
      <div class="page-about-nav-right">
        <p>
          <router-link to="#">首页</router-link>><router-link to="#">产品中心</router-link>><router-link to="#">电感器
          </router-link>
        </p>
      </div>
    </div>
    <div class="page-about-content">
      <div v-if="navnum==0" class="page-about-content-left">
        <div class="page-about-content-left-top">
          <img :src="`${imgPath}${textdata.image}`" alt="">
        </div>
        <div v-html="textdata.content" class="page-about-content-main">
        </div>
      </div>
      <div v-if="navnum==1" class="page-about-content-left">
        <div class="page-about-content-left-top">
          <img :src="`${imgPath}${textdata2.image}`" alt="">
        </div>
        <div v-html="textdata2.content" class="page-about-content-main">
        </div>
      </div>
      <div v-if="navnum==2" class="page-about-content-left">
        <div class="page-about-content-left-top">
          <img :src="`${imgPath}${textdata3.image}`" alt="">
        </div>
        <div v-html="textdata3.content" class="page-about-content-main">
        </div>
      </div>
      <ContentRight></ContentRight>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '../../components/footer/footer.vue'
  import Header from '../../components/header/header.vue'
  import ContentRight from '../../components/contentright/contentright.vue'
  export default {
    name: 'aboutIndex',
    data() {
      return {
        num: 1,
        imgPath: process.env.IMG_ROOT,
        navnum: 0,
        navdata: JSON.parse(window.localStorage.getItem('todos_key') || '[]'),
        textdata: JSON.parse(window.localStorage.getItem('textdata_key') || '[]'),
        textdata2: JSON.parse(window.localStorage.getItem('textdata2_key') || '[]'),
        textdata3: JSON.parse(window.localStorage.getItem('textdata3_key') || '[]'),
      }
    },
    components: {
      Footer,
      Header,
      ContentRight
    },
    created() {


    },
    methods: {
      bian(index) {
        this.navnum = index;
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/scss/_about.scss";
</style>