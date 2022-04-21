<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      data: [],
      data2: [],
      todos: [],
      teldata: [],
      bandata: [],
      textdata: [],
      textdata2: [],
      textdata3: [],
      rediandata: [],
      newsnav: [],
      jsdata: [],
      yydata: [],
      newsdatalist: [],
      productInfo: [],
    };
  },
  created() {
    this.$api.get(this.$address.common.header, null, (r) => {
      //首页一级标题
      this.data = r.obj;
    });

    this.$api.get(this.$address.about.aboutNav, { code: "AboutUs" }, (r) => {
      //关于我们二级标题
      this.todos = r.obj;
    });

    this.$api.get(this.$address.common.footer, null, (r) => {
      //尾部信息
      this.teldata = r.obj;
    });
    this.$api.get(
      this.$address.about.bannar,
      { columnCode: "HomePage" },
      (r) => {
        //轮播图
        this.bandata = r.obj;
      }
    );
    this.$api.get(
      this.$address.about.abouttext,
      { channelCode: "CompanyProfile", columnCode: "AboutUs" },
      (r) => {
        //首页一级标题
        this.textdata = r.obj;
      }
    );
    this.$api.get(
      this.$address.about.abouttext,
      { channelCode: "ManagementIdea", columnCode: "AboutUs" },
      (r) => {
        //首页一级标题 简介
        this.textdata2 = r.obj;
      }
    );
    this.$api.get(
      this.$address.about.abouttext,
      { channelCode: "CompanyEnvironment", columnCode: "AboutUs" },
      (r) => {
        //首页一级标题 理念
        this.textdata3 = r.obj;
      }
    );
    this.$api.get(
      this.$address.about.abouttext,
      { channelCode: "CompanyEnvironment", columnCode: "AboutUs" },
      (r) => {
        //首页一级标题  环境
        this.textdata3 = r.obj;
      }
    );
    this.$api.get(this.$address.common.rediannew, null, (r) => {
      //热点新闻
      this.rediandata = r.obj;
    });
    this.$api.get(this.$address.common.footer2, null, (r) => {
      //推荐产品
      this.data2 = r.obj;
    });
    this.$api.get(this.$address.news.newsNav, { code: "NewsCenter" }, (r) => {
      //新闻二级nav
      this.newsnav = r.obj;
    });
    this.$api.get(
      this.$address.news.newscontent,
      { id: "23b012e392e5e7e7aa1f2d232abda7db" },
      (r) => {
        //新闻文章
        this.jsdata = r.obj;
      }
    );
    this.$api.get(
      this.$address.news.newscontent,
      { id: "eece9644ea968e463b0ee38eae2325a0" },
      (r) => {
        //新闻文章
        this.yydata = r.obj;
      }
    );
    this.$api.post(
      this.$address.news.newslist,
      { currentPage: 1, pageSize: 10 },
      (r) => {
        //新闻列表
        this.newsdatalist = r.obj.records;
      }
    );
    this.$api.get(this.$address.product.proClass, null, (r) => {
      this.productInfo = r.obj;
    });
  },
  mounted() {},
  watch: {
    data: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem("data_key", JSON.stringify(value));
      },
    },
    data2: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem("data2_key", JSON.stringify(value));
      },
    },
    todos: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem("todos_key", JSON.stringify(value));
      },
    },
    teldata: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem("teldata_key", JSON.stringify(value));
      },
    },

    bandata: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem("bandata_key", JSON.stringify(value));
      },
    },
    textdata: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem("textdata_key", JSON.stringify(value));
      },
    },
    textdata2: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem("textdata2_key", JSON.stringify(value));
      },
    },
    textdata3: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem("textdata3_key", JSON.stringify(value));
      },
    },
    rediandata: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem("rediandata_key", JSON.stringify(value));
      },
    },
    newsnav: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem("newsnav_key", JSON.stringify(value));
      },
    },
    jsdata: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem("jsdata_key", JSON.stringify(value));
      },
    },
    yydata: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem("yydata_key", JSON.stringify(value));
      },
    },
    newsdatalist: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem("newsdatalist_key", JSON.stringify(value));
      },
    },
    productInfo: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem("productInfo_key", JSON.stringify(value));
      },
    },
  },
};
</script>

<style lang="scss">
@import "./style/style.scss";
</style>