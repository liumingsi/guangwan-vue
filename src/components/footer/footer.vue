<template>
  <div class="footer"  >
    <div class="f1">
      <p>产品展示</p>
      <p v-for="(item,index) in data2" :key="index"><router-link to="#">{{item.name}}</router-link></p>

    </div> 
    <div class="f2">
      <p>服务支持</p>
      <p><router-link to="#">技术支持</router-link></p>
      <p><router-link to="#">定制服务</router-link></p>
    </div>
    <div class="f3">
      <p>联系我们</p>
      <span><img src="../../images/首页_slices/电话.png" alt=""></span><p>全国免费服务热线</p>
      <p>{{data.serviceTel}}</p>
      <img class="icon" src="../../images/首页_slices/微博.png" alt="微博">
      <img class="icon" src="../../images/首页_slices/QQ.png" alt="QQ">
      <img class="icon" src="../../images/首页_slices/微信.png" alt="微信">
    </div>
    <div class="f4">
      <p>{{data.copyright}}</p>
      <p>邮箱：{{data.email}}</p>
      <p>电话：{{data.mobile}}</p>
      <p>地址：{{data.address}}</p>
    </div>
    <div class="f5">
      <img src="../../images/首页_slices/二维码图片_4月2日13时34分06秒.png" alt="">
      <p>关注官方微信<br/>
        了解更多产品信息</p>
      
    </div>
     <div class="f6">©2022 {{data.copyright}} {{data.permitNum}}  {{data.gaPermitNum}}</div>
  </div>
 
</template>
<script>
  export default {
    name: "Footer",
    props: {
      tab: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        data:{},
        data2:JSON.parse(window.localStorage.getItem('data2_key') || '[]'),
        
      }
    },
    created () {
      this.$api.get(this.$address.common.footer, null, r => {
        this.data = r.obj;
        // console.log(this.data)
      })
      // this.$api.get(this.$address.common.footer2, null, r => {
      //   this.data2 = r.obj;
      //   // console.log(this.data2)
      // })
    },
    methods: {
      goLink(item) {
        this.$router.push({
          path: item.path
        })
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "./footer.scss";
</style>
