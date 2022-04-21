<template>
  <div>
    <div class="page-about-content-hr"></div>
    <div class="page-about-content-right">
      <div class="page-about-content-right-title">
        <p>推荐<span>产品</span></p>
      </div>
      <div class="left" id="left">
        <div id="leftWrap" ref="leftWrap" @mouseover="pasue()" @mouseout="play()">
          <div class="page-about-content-right-icon" v-for="(item,index) in data2" :key="index">
            <router-link to="#">
              <img :src="`${imgPath}${item.image}`" alt="">
              <p>{{item.description}}</p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="page-about-content-right-title">
        <p>热点<span>新闻</span></p>
      </div>
      <div class="page-about-content-right-new" v-for="(item,index) in rediandata" :key="index">
        <router-link @lick="innit()" :to="'/news/details/' + item.id">
          <p>{{item.updateDate}}</p>
          <p>{{item.title}}</p>
        </router-link>

      </div>

      <div class="page-about-content-right-title">
        <p>联系<span>我们</span></p>
      </div>
      <div class="page-about-content-right-lxwm">
        <img src="../../images/关于我们/2.jpg" alt="">
        <div>
          <p>扫描二维码</p>
          <p>关注官方微信平台</p>
          <p>更多惊喜</p>
        </div>
      </div>
      <p>公司名称: {{data.copyright}}</p>
      <p>电话: {{data.serviceTel}}</p>
      <p>传真: {{data.fax}}</p>
      <p>手机: {{data.mobile}}</p>
      <p>邮箱: {{data.email}}</p>
      <p>地址: {{data.address}}</p>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'aboutIndex',
    data() {
      return {
        num: 1,
        navnum: 0,
        imgPath: process.env.IMG_ROOT,
        timerLeft: "",
        // bandata:[],
        data: {},
        rediandata: JSON.parse(window.localStorage.getItem('rediandata_key') || '[]'),
        data2: JSON.parse(window.localStorage.getItem('data2_key') || '[]'),
      }
    },
    created() {
      this.init()
    },
    mounted() {

      this.autoPlayLeft();
    },
    updated () {
      // this.init()
    },
    methods: {
      init() {
        this.$api.get(this.$address.common.footer, null, r => { //尾部信息
          this.data = r.obj;
        })
      },
      innit(){
        this.$emit('initt')
      },
      autoPlayLeft() { //向上轮播 
        var speedup = 1; //初始化速度
        var leftWrap = this.$refs.leftWrap; //如果这里使用上面的方法不行的华，就使用refs来获取也行
        leftWrap.innerHTML += leftWrap.innerHTML; //图片内容*2
        var oImgs = document.getElementsByClassName(".page-about-content-right-icon");
        leftWrap.style.height = oImgs.length * 105 + "px"; //105 是一张图片高度

        this.timerLeft = setInterval(function () {
          if (leftWrap.offsetTop < -630) { //向上轮播，top移出到一半的时候，重新开始
            leftWrap.style.top = 0 + "px";
          }
          leftWrap.style.top = leftWrap.offsetTop - speedup + "px";
        }, 100);
      },
      pasue() {
        clearInterval(this.timerLeft);
      },
      play() {
        this.autoPlayLeft();
      },
    }
  }


</script>
<style lang="scss" scoped>
  @import "./contentright.scss";
</style>