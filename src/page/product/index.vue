<template>
  <div class="page">
    <div class="wrap">
      <keep-alive>
        <Header :num="num"></Header>
      </keep-alive>

      <div class="wrap1">
        <div class="bd5 flex-col justify-end">
          <div class="box1 flex-row">
            <span
              class="txt3 info"
              v-for="(item, index) in productInfo"
              :key="index"
            >
              {{ item.name }}
            </span>
          </div>
          <span class="word5 info">产品中心&gt;电感器</span>
        </div>
        <div class="bd7 flex-col">
          <div class="bd8 flex-row">
            <div class="group4">
              <div
                class="group5 flex-col"
                v-for="(item, index) in list2"
                :key="index"
              >
                <div class="group6 flex-row">
                  <div class="ImageText1 flex-col">
                    <div class="bd9 flex-col justify-between">
                      <div class="outer1 flex-col"></div>
                      <div class="TextGroup1 flex-col">
                        <span class="word6">电源扼流圈</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="group7"></div>
            <div class="group9 flex-col"></div>
            <div class="group10 flex-col">
              <div class="group11 flex-col"></div>
              <div class="group12 flex-col"></div>
              <div class="group13 flex-col"></div>
            </div>
            <div class="group14 flex-col">
              <div class="layer2">
                <span class="word8">工具和</span>
                <span class="info8">服务</span>
              </div>
              <span class="txt5">零件编号搜素</span>
              <span class="info9">功率损耗计算器</span>
              <span class="info10">参数搜索</span>
              <div class="TextGroup3 flex-col">
                <div class="group15 flex-col justify-between">
                  <div class="group16">
                    <span class="word9">相关</span>
                    <span class="word10">文件</span>
                  </div>
                  <span class="txt6">2022&nbsp;年产品阵容指南</span>
                  <span class="txt7">2022&nbsp;功率扼流圈目录</span>
                </div>
              </div>
              <div class="TextGroup4 flex-col">
                <div class="box3 flex-col justify-between">
                  <div class="outer2">
                    <span class="txt8">相关</span>
                    <span class="word11">新闻</span>
                  </div>
                  <span class="infoBox1"
                    >2022.02.12<br />积极进军面板市场，发布高性能低损耗<br />薄型电感</span
                  >
                  <span class="infoBox2"
                    >2022.02.12<br />积极进军面板市场，发布高性能低损耗<br />薄型电感</span
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="group4 flex-col">
              <div class="group5 flex-row">
                <div class="ImageText1 flex-col">
                  <div class="bd9 flex-col justify-between">
                    <div class="outer1 flex-col"></div>
                    <div class="TextGroup1 flex-col">
                      <span class="word6">电源扼流圈</span>
                    </div>
                  </div>
                </div>
              </div> -->
          <!-- </div> -->
          <!-- <div class="group6 flex-col">
              <div class="layer1 flex-row">
                <div class="ImageText2 flex-col">
                  <div class="group7 flex-col justify-between">
                    <div class="group8 flex-col"></div>
                    <div class="TextGroup2 flex-col">
                      <span class="word7">电源扼流圈</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "../../components/footer/footer.vue";
import Header from "../../components/header/header.vue";
export default {
  data() {
    return {
      num: 2,
      productInfo: JSON.parse(
        window.localStorage.getItem("productInfo_key") || "[]"
      ),

      // list: [
      //   {
      //     children: {
      //       txt3: "电感器",
      //     },
      //   },
      //   {
      //     children: {
      //       txt3: "电源模块",
      //     },
      //   },
      //   {
      //     children: {
      //       txt3: "电阻器和分流传感器",
      //     },
      //   },
      //   {
      //     children: {
      //       txt3: "共模扼流圈",
      //     },
      //   },
      //   {
      //     children: {
      //       txt3: "保护器",
      //     },
      //   },
      //   {
      //     children: {
      //       txt3: "PT传感器",
      //     },
      //   },
      //   {
      //     children: {
      //       txt3: "汽车产品",
      //     },
      //   },
      // ],
      list2: [{}, {}],
    };
  },
  components: {
    Footer,
    Header,
  },
  created() {
    // this.$api.get(this.$address.product.proClass, null, (r) => {
    //   // console.log(r);
    //   this.productInfo = r.obj;
    // });
  },
  methods: {
    // init () {
    //   this.getShare()
    // }
    // enterClick(i) {
    //   this.list[i].isActive = true;
    //   console.log(this.list[i].children);
    // },
    // leaveClick(i) {
    //   this.list[i].isActive = false;
    // },
    // qwer(e) {
    //   console.log(e.target.innerText);
    //   let a = this.qwerr[e.target.innerText];
    //   this.qw = a.qw;
    //   this.er = a.er;
    // },
  },
};
</script>

<style scoped>
.flex-col {
  display: flex;
  flex-direction: column;
}
.justify-end {
  display: flex;
  justify-content: flex-end;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.page {
  background-color: rgba(248, 249, 251, 1);
  position: relative;
  width: 1920px;
  height: 1177px;
  /* overflow: hidden; */
}
.wrap {
  width: 1920px;
  height: 1177px;
}
.wrap1 {
  height: 519px;
  width: 1920px;
}
.bd5 {
  background-color: rgba(255, 255, 255, 1);
  height: 50px;
  width: 1920px;
}
.info:hover {
  border-bottom: 2px solid rgba(247, 208, 6, 1);
  color: rgb(12, 129, 237);
  cursor: pointer;
}
.box1 {
  width: 1189px;
  height: 50px;
  margin: 20px 0 -50px 370px;
  /* background-color: red; */
  /* display: flex; */
  /* justify-content: space-between; */
  /* float: left; */
}
.txt3 {
  width: auto;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: center;
  white-space: nowrap;
  line-height: 50px;
  display: block;
  padding-right: 30px;
  padding: 0 10px 0;
  /* background-color: green; */
}
.info5 {
  width: 56px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 50px;
  margin-left: 30px;
  display: block;
}
.word3 {
  width: 126px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 50px;
  margin-left: 30px;
  display: block;
}
.txt4 {
  width: 70px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 50px;
  margin-left: 30px;
  display: block;
}
.info6 {
  width: 42px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 50px;
  margin-left: 30px;
  display: block;
}
.info7 {
  width: 60px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 50px;
  margin-left: 30px;
  display: block;
}
.word4 {
  width: 56px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 50px;
  margin-left: 30px;
  display: block;
}
.word5 {
  width: 92px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 12px;
  font-family: PingFangSC-Regular;
  text-align: right;
  white-space: nowrap;
  line-height: 50px;
  display: block;
  float: right;
  /* margin: 2px 0 0 465px; */
  margin-left: 1600px;
}
.box2 {
  width: 60px;
  height: 2px;
  margin: 13px 0 0 360px;
}

.bd7 {
  background-color: rgba(255, 255, 255, 1);
  height: 497px;
  width: 1200px;
  margin: 2px 0 0 359px;
}
.bd8 {
  width: 1183px;
  height: 457px;
  margin: 20px 0 0 1px;
}
.group4 {
  width: 612px;
  height: 369px;
  margin-top: 8px;
}
.group5 {
  /* box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2); */
  /* background-color: rgba(238, 238, 238, 1); */
  height: 369px;
  margin-top: 8px;
  float: left;
  width: 287px;
  margin-right: 15px;
}

.group6 {
  width: 267px;
  height: 339px;
  margin: 10px 0 0 10px;
}
.ImageText1 {
  height: 339px;
  width: 267px;
}
.bd9 {
  width: 267px;
  height: 339px;
}
.outer1 {
  margin: 10px 10px 20px 10px;
  width: 267px;
  height: 297px;
  background: url("../../images/产品中心/2.jpg") 100% no-repeat;
}
.TextGroup1 {
  height: 22px;
  width: 80px;
  margin: 20px 0 0 94px;
}
.word6 {
  width: 80px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  display: block;
}
.group6 {
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(238, 238, 238, 1);
  height: 369px;
  width: 287px;
  float: left;
  margin: 8px 0 0 17px;
}
.group7 {
  width: 310px;
  height: 457px;
}
.group9 {
  background-color: rgba(216, 216, 216, 1);
  width: 1px;
  height: 457px;
  /* margin-left: 321px; */
}
.group10 {
  width: 3px;
  height: 254px;
  margin: 2px 0 0 19px;
}
.group11 {
  background-color: rgba(247, 208, 6, 1);
  width: 3px;
  height: 20px;
}
.group12 {
  background-color: rgba(247, 208, 6, 1);
  width: 3px;
  height: 20px;
  margin-top: 112px;
}
.group13 {
  background-color: rgba(247, 208, 6, 1);
  width: 3px;
  height: 20px;
  margin-top: 82px;
}
.group14 {
  width: 241px;
  height: 396px;
  margin: 1px 0 0 7px;
}
.layer2 {
  width: 80px;
  height: 22px;
  overflow-wrap: break-word;
  font-size: 0;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-left: 3px;
}
.word8 {
  width: 80px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
}
.info8 {
  width: 80px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(247, 208, 6, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
}
.txt5 {
  width: 84px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  display: block;
  margin: 10px 0 0 3px;
}
.info9 {
  width: 98px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  display: block;
  margin: 10px 0 0 3px;
}
.info10 {
  width: 56px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  display: block;
  margin: 10px 0 0 3px;
}
.TextGroup3 {
  height: 82px;
  margin-top: 20px;
  width: 140px;
}
.group15 {
  width: 140px;
  height: 82px;
}
.group16 {
  width: 64px;
  height: 22px;
  overflow-wrap: break-word;
  font-size: 0;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
}
.word9 {
  width: 64px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
}
.word10 {
  width: 64px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(247, 208, 6, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
}
.txt6 {
  width: 137px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  display: block;
  margin: 10px 0 0 3px;
}
.txt7 {
  width: 137px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  display: block;
  margin: 10px 0 0 3px;
}
.TextGroup4 {
  height: 162px;
  margin-top: 20px;
  width: 241px;
}
.box3 {
  width: 241px;
  height: 162px;
}
.outer2 {
  width: 64px;
  height: 22px;
  overflow-wrap: break-word;
  font-size: 0;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
}
.txt8 {
  width: 64px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
}
.word11 {
  width: 64px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(247, 208, 6, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
}
.infoBox1 {
  width: 238px;
  height: 60px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  line-height: 20px;
  white-space: nowrap;
  display: block;
  margin: 10px 0 0 3px;
}
.infoBox2 {
  width: 238px;
  height: 60px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  line-height: 20px;
  white-space: nowrap;
  display: block;
  margin: 10px 0 0 3px;
}
</style>