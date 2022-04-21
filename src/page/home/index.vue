<template>
  <div class="page">
    <div class="wrap1">
        <Header></Header>
      <div class="layer3 flex-row justify-between">
        <div class="wrap2 flex-col"></div>

        <div
          class="wrap3 flex-col justify-between"
          v-for="(item, index) in list"
          :key="index"
          @mouseenter="enterClick(index)"
          @mouseleave="leaveClick(index)"
          :class="{
            active: item.isActive,
            wrap3: item.isActive,
            wrap3a: !item.isActive,
          }"
        >
          <div class="mod1 flex-col" v-show="item.isActive"></div>
          <div class="mod2 flex-row justify-between">
            <img class="img1" referrerpolicy="no-referrer" :src="item.imgurl" />
            <div class="bd4 flex-col justify-between">
              <span class="word7">{{ item.tx1 }}</span>
              <span class="info1">{{ item.tx2 }}</span>
            </div>
          </div>
        </div>
        <div class="wrap2 flex-col"></div>
      </div>
      <div
        class="layer6 flex-row justify-between"
        v-for="(item2, index2) in list2"
        :key="index2"
      >
        <div class="mod5 flex-col">
          <div class="layer7 flex-col justify-between">
            <img
              class="img2"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng59d87a96011760c3c5a60ecf66e20e49f0cf9cbbb5c8f1709c62967d94bf1b90"
            />
            <span class="info2">{{ item2.children.info2 }}</span>
          </div>
        </div>
        <div class="mod6 flex-col justify-between">
          <div class="layer8 flex-col">
            <div class="box4 flex-row justify-between">
              <div class="box5 flex-col">
                <div class="group1 flex-col"></div>
              </div>
              <span class="word9">{{ item2.children.word9 }}</span>
            </div>
          </div>
          <div class="layer9 flex-col">
            <div class="box6 flex-row justify-between">
              <div class="mod7 flex-col">
                <div class="wrap5 flex-col"></div>
              </div>
              <span class="info3">{{ item2.children.info3 }}</span>
            </div>
          </div>
        </div>
        <div class="mod8 flex-col">
          <div class="box7 flex-col justify-between">
            <img
              class="pic1"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1c2d2fbeca8ea27d9407615aefc0f8b182649b6bce5d3f391846ee121c432059"
            />
            <span class="word10">{{ item2.children.word10 }}</span>
          </div>
        </div>
        <div class="mod9 flex-col justify-between">
          <div class="bd5 flex-col">
            <div class="box8 flex-row justify-between">
              <div class="box9 flex-col">
                <img
                  class="img3"
                  referrerpolicy="no-referrer"
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6c3e21a1372a0b43a5cf1ddbe5315bb4a6640f4ff45ad9ffe58f2747809210d4"
                />
              </div>
              <span class="txt7">{{ item2.children.txt7 }}</span>
            </div>
          </div>
          <div class="bd6 flex-col">
            <div class="wrap6 flex-row justify-between">
              <div class="main2 flex-col">
                <img
                  class="img4"
                  referrerpolicy="no-referrer"
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6c3e21a1372a0b43a5cf1ddbe5315bb4a6640f4ff45ad9ffe58f2747809210d4"
                />
              </div>
              <span class="word11">{{ item2.children.word11 }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="layer10">
          <div class="wrap7 flex-col">
            <div class="TextGroup3 flex-col justify-between">
              <span class="info4">Product&nbsp;Applications</span>
              <span class="txt8">产品应用</span>
            </div>
          </div>
        </div>
        <div class="layer11 flex-col"></div>
        <div class="picInfo">
          <div class="mod10 flex-col">
            <div class="wrap8 flex-row"></div>
            <div class="section2-0 flex-col">
              <div class="bg">
                <div class="TextGroup4-0 flex-col justify-between">
                  <span class="txt9-0">汽车信息娱乐</span>
                  <span class="word12-0"
                    >北半球经过验证的设计和工艺支持汽车市场的高可靠性和高热特性磁性和无源元件。</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="mod10 flex-col">
            <div class="wrap9 flex-row"></div>
            <div class="section2-0 flex-col">
              <div class="bg">
                <div class="TextGroup4-0 flex-col justify-between">
                  <span class="txt9-0">汽车照明</span>
                  <span class="word12-0"
                    >北半球经过验证的设计和工艺支持汽车市场的高可靠性和高热特性磁性和无源元件。</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="mod10 flex-col">
            <div class="wrap10 flex-row"></div>
            <div class="section2-0 flex-col">
              <div class="bg">
                <div class="TextGroup4-0 flex-col justify-between">
                  <span class="txt9-0">自动驾驶</span>
                  <span class="word12-0"
                    >北半球成熟的设计和工艺支持&nbsp;ADAS&nbsp;ECU&nbsp;和摄像头/雷达模块的高可靠性和小型化磁性和无源组件。</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="mod10 flex-col">
            <div class="wrap11 flex-row"></div>
            <div class="section2-0 flex-col">
              <div class="bg">
                <div class="TextGroup4-0 flex-col justify-between">
                  <span class="txt9-0">电动汽车</span>
                  <span class="word12-0"
                    >北半球开发了一系列用于&nbsp;电动汽车&nbsp;应用的高效高集成磁性元件和分流传感器。</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="TextGroup5 flex-col justify-between">
        <span class="info5">News&nbsp;Center</span>
        <span class="txt10">新闻中心</span>
      </div>
      <div class="layer12 flex-row justify-between">
        <div class="mod11 flex-row">
          <div class="group2-0 flex-col"></div>
          <div class="group2-1 flex-col"></div>
          <div class="group2-2 flex-col">
            <div class="TextGroup6-2 flex-col justify-between">
              <span class="info6-2"
                >用于高性能计算的高度集成&nbsp;60A&nbsp;电源块模块</span
              >
              <span class="word13-2"
                >7月8日，工业互联网产业联盟（简称AII）正式发布“工业互联网平台功能...</span
              >
            </div>
          </div>
          <div class="group2-3 flex-col">
            <div class="TextGroup6-3 flex-col justify-between">
              <span class="info6-3"
                >北半球与&nbsp;Xilinx&nbsp;合作通过&nbsp;DC-DC&nbsp;模块为&nbsp;FPGA&nbsp;供电</span
              >
              <span class="word13-3"
                >最近一个月，“朗新科技”频繁见诸于全国主流媒体。从地方性新闻...</span
              >
            </div>
          </div>
        </div>
        <div class="mod12 flex-col">
          <div class="section3 flex-col justify-between">
            <div class="TextGroup7 flex-col justify-between">
              <span class="word14"
                >北半球携手产业伙伴共同推动工业互联网发展</span
              >
              <span class="txt11">2019年6月30日</span>
            </div>
            <div class="TextGroup8 flex-col justify-between">
              <span class="info7">开放创新，共赢互联网新时代</span>
              <span class="word15">2019年6月28日</span>
            </div>
            <div class="TextGroup9 flex-col justify-between">
              <span class="info8">北半球科技深耕高度集成，再创斐然业绩</span>
              <span class="word16">2019年6月26日</span>
            </div>
            <div class="TextGroup10 flex-col justify-between">
              <span class="info9"
                >北半球科技去年净利润6.2亿元，同比增长228%</span
              >
              <span class="word17">2019年6月26日</span>
            </div>
            <div class="TextGroup11 flex-col justify-between">
              <span class="word18">北半球科技亮相华为2019全联接大会</span>
              <span class="info10">2019年6月15日</span>
            </div>
          </div>
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
      imgPath: process.env.IMG_ROOT,
      isActive: false,
      list: [
        {
          tx1: "电感器",
          tx2: "集成了仿真、磁性材料和生产工艺能力，以设计耐用、可靠的电感器。",
          isActive: false,
          imgurl:
            "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7b578a4a74b4a88401bd96b3d507f435655696f8f59beca3b210d1363dfee30e",
          children: {
            info2: "电感器12",
            word9: "电源",
            info3: "模块",
            word10: "保险",
            txt7: "PT",
            word11: "传感器",
          },
        },
        {
          tx1: "电源模块",
          tx2: "集成了仿真、磁性材料和生产工艺能力，以设计耐用、可靠的电感器。",
          isActive: false,
          imgurl:
            "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng21d637c034391822bb207e4a5039eb96e58a14d944c94e152578ed02a56a0659",
          children: {
            info2: "电感器34",
            word9: "电源模块",
            info3: "电源模块",
            word10: "保险丝",
            txt7: "PT传感器",
            word11: "34",
          },
        },
        {
          tx1: "电阻器和分流传感器",
          tx2: "电源模块是负载点(POL)DC-DC转换器，将控制器…",
          isActive: false,
          imgurl:
            "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9c6fa11557adca4c30b7bb11a696576dcee9198defb5b517acd48944966e3d5c",
          children: {
            info2: "电感器56",
            word9: "电源模块",
            info3: "电源模块",
            word10: "保险丝",
            txt7: "PT传感器",
            word11: "56",
          },
        },
        {
          tx1: "共模扼流圈",
          tx2: "我司开发的高噪声抑制共模扼流圈具有高可靠性、高热特性、可靠的机械强度…",
          isActive: false,
          imgurl:
            "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2b051f5d1fa275fbfc662a168778c8780a59081b7d832604d94d1a01781425f0",
          children: {
            info2: "电感器78",
            word9: "电源模块",
            info3: "电源模块",
            word10: "保险丝",
            txt7: "PT传感器",
            word11: "78",
          },
        },
      ],
      list2: [
        {
          children: {
            info2: "电感器",
            word9: "电源模块",
            info3: "电源模块",
            word10: "保险丝",
            txt7: "PT传感器",
            word11: "PT传感器",
          },
        },
      ],
      list3: [
        {
          imgurl:
            "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngaad1e099754b3ac6dbeaa7dff3adcd9ee293d3d7c8540d8c96f248dd543531cc",
        },
        {
          imgurl:
            "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga7ae75ff69df92be9d752d22d38aed7200b7d4002867eb0d62ed908e9002c5a5",
        },
        {
          imgurl:
            "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga4eca7f9654b76c1b898c20745d9bcc10cb8aa764af105e0b5994caba803cddf",
        },
        {
          imgurl:
            "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8147701036ce1470f4ddd0c7ac7021b08304a15ee7e1c60bd3ba422e39aa488a",
        },
      ],
      list4: [
        {
          tx3: "汽车信息娱乐",
          word12:
            "北半球经过验证的设计和工艺支持汽车市场的高可靠性和高热特性磁性和无源元件。",
        },
        {
          tx3: "汽车照明",
          word12:
            "北半球经过验证的设计和工艺支持汽车市场的高可靠性和高热特性磁性和无源元件。",
        },
        {
          tx3: "自动驾驶",
          word12:
            "北半球成熟的设计和工艺支持&nbsp;ADAS&nbsp;ECU&nbsp;和摄像头/雷达模块的高可靠性和小型化磁性和无源组件。",
        },
        {
          tx3: "电动汽车",
          word12:
            "北半球开发了一系列用于&nbsp;电动汽车&nbsp;应用的高效高集成磁性元件和分流传感器。",
        },
      ],
    };
  },
  components: {
    Footer,
    Header,
  },
  created() {
    // this.$api.get(this.$address.home.product, null, (h) => {
    //   // console.log(h);
    //   this.productInfo = h.obj;
    // });
  },
  methods: {
    // init () {
    //   this.getShare()
    // }
    enterClick(i) {
      this.list[i].isActive = true;
      this.list2[0].children = this.list[i].children;
    },
    leaveClick(i) {
      this.list[i].isActive = false;
    },
  },
};
</script>

<style scoped>
.active {
  /* background-color: green; */
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.justify-between {
  display: flex;
  /* justify-content: space-between; */
}
.page {
  background-color: rgba(248, 249, 251, 1);
  position: relative;
  width: 1920px;
  height: 2966px;
}
.wrap1 {
  width: 1920px;
  height: 2966px;
}
.layer3 {
  width: 1920px;
  height: 220px;
}

.wrap2 {
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  width: 360px;
  height: 220px;
}

.wrap3 {
  width: 304px;
  height: 188px;
}
.wrap3a {
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  width: 304px;
  height: 220px;
}

.mod1 {
  background-color: rgba(247, 208, 6, 1);
  width: 304px;
  height: 4px;
}

.mod2 {
  width: 271px;
  height: 140px;
  margin: 44px 0 0 16px;
}

.img1 {
  width: 120px;
  height: 140px;
}

.bd4 {
  width: 135px;
  height: 118px;
}

.word7 {
  margin-left: 16px;
  width: 49px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  text-align: center;
  white-space: nowrap;
  line-height: 22px;
  display: block;
}

.info1 {
  margin-left: 16px;
  width: 135px;
  height: 80px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  line-height: 20px;
  margin-top: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.wrap4 {
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  height: 220px;
  width: 1256px;
}

.layer4 {
  width: 888px;
  height: 140px;
  margin: 48px 0 0 16px;
}

.mod3 {
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  height: 140px;
  width: 120px;
}

.main1 {
  width: 120px;
  height: 140px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng21d637c034391822bb207e4a5039eb96e58a14d944c94e152578ed02a56a0659)
    100% no-repeat;
}

.mod4 {
  width: 135px;
  height: 118px;
  margin-left: 16px;
}

.txt3 {
  width: 68px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  display: block;
}

.txt4 {
  width: 135px;
  height: 80px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  line-height: 20px;
  margin-top: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.ImageText1 {
  height: 140px;
  margin-left: 33px;
  width: 280px;
}

.box1 {
  width: 280px;
  height: 140px;
}

.outer1 {
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  height: 140px;
  width: 120px;
}

.section1 {
  width: 120px;
  height: 140px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9c6fa11557adca4c30b7bb11a696576dcee9198defb5b517acd48944966e3d5c)
    100% no-repeat;
}

.TextGroup1 {
  height: 120px;
  width: 144px;
}

.infoBox1 {
  width: 144px;
  height: 44px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  text-align: left;
  line-height: 22px;
  white-space: nowrap;
  display: block;
}

.txt5 {
  width: 135px;
  height: 60px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  line-height: 20px;
  margin-top: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.ImageText2 {
  height: 140px;
  margin-left: 24px;
  width: 280px;
}

.box2 {
  width: 280px;
  height: 140px;
}

.layer5 {
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  height: 140px;
  width: 120px;
}

.box3 {
  width: 120px;
  height: 140px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2b051f5d1fa275fbfc662a168778c8780a59081b7d832604d94d1a01781425f0)
    100% no-repeat;
}

.TextGroup2 {
  height: 118px;
  width: 144px;
}

.txt6 {
  width: 144px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  display: block;
}

.word8 {
  width: 135px;
  height: 80px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  line-height: 20px;
  margin-top: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.layer6 {
  width: 1199px;
  height: 362px;
  margin: 24px 0 0 360px;
}

.mod5 {
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  height: 360px;
  width: 287px;
}

.layer7 {
  width: 227px;
  height: 288px;
  margin: 30px 0 0 30px;
}

.img2 {
  width: 227px;
  height: 220px;
}
.layer7:hover .img2 {
  transform: translateY(-18px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.info2 {
  width: 74px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  text-align: center;
  white-space: nowrap;
  line-height: 33px;
  display: block;
  margin: 35px 0 0 77px;
}

.mod6 {
  width: 288px;
  height: 362px;
}

.layer8 {
  background-color: rgba(255, 255, 255, 1);
  height: 172px;
  width: 288px;
}

.box4 {
  width: 238px;
  height: 140px;
  margin: 16px 0 0 16px;
}

.box5 {
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  height: 140px;
  width: 140px;
}

.group1 {
  width: 140px;
  height: 140px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng351ee460080703163d632a9858e2255c8985a3352c7078946e91978806d05628)
    100% no-repeat;
}
.layer8:hover .group1 {
  transform: translateY(-18px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.word9 {
  margin-left: 26px;
  width: 68px;
  height: 66px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  text-align: left;
  line-height: 33px;
  margin-top: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.layer9 {
  background-color: rgba(255, 255, 255, 1);
  height: 172px;
  margin-top: 18px;
  width: 288px;
}

.box6 {
  width: 238px;
  height: 140px;
  margin: 16px 0 0 16px;
}

.mod7 {
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  height: 140px;
  width: 140px;
}

.wrap5 {
  width: 140px;
  height: 140px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng351ee460080703163d632a9858e2255c8985a3352c7078946e91978806d05628)
    100% no-repeat;
}
.layer9:hover .wrap5 {
  transform: translateY(-18px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.info3 {
  margin-left: 26px;
  width: 68px;
  height: 66px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  text-align: left;
  line-height: 33px;
  margin-top: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.mod8 {
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  height: 362px;
  width: 287px;
}

.box7 {
  width: 227px;
  height: 288px;
  margin: 30px 0 0 30px;
}

.pic1 {
  width: 227px;
  height: 221px;
}
.box7:hover .pic1 {
  transform: translateY(-18px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.word10 {
  width: 74px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  text-align: center;
  white-space: nowrap;
  line-height: 33px;
  display: block;
  margin: 34px 0 0 77px;
}

.mod9 {
  width: 287px;
  height: 360px;
}

.bd5 {
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  height: 172px;
  width: 287px;
}

.box8 {
  width: 238px;
  height: 140px;
  margin: 16px 0 0 16px;
}

.box9 {
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  height: 140px;
  width: 140px;
}

.img3 {
  width: 140px;
  height: 140px;
}
.box9:hover .img3 {
  transform: translateY(-18px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.txt7 {
  margin-left: 26px;
  width: 68px;
  height: 66px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  text-align: left;
  line-height: 33px;
  margin-top: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.bd6 {
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  height: 172px;
  margin-top: 16px;
  width: 287px;
}

.wrap6 {
  width: 238px;
  height: 140px;
  margin: 16px 0 0 16px;
}

.main2 {
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  height: 140px;
  width: 140px;
}

.img4 {
  width: 140px;
  height: 140px;
}
.main2:hover .img4 {
  transform: translateY(-18px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.word11 {
  margin-left: 26px;
  width: 68px;
  height: 66px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  text-align: left;
  line-height: 33px;
  margin-top: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
.product {
  position: relative;
  width: 1920px;
  height: 844px;
  margin-top: 50px;
}
.layer10 {
  /* position: absolute; */
  width: 1920px;
  height: 484px;
  /* margin-top: 50px; */
}

.wrap7 {
  background-color: rgba(255, 255, 255, 1);
  height: 360px;
  width: 1920px;
}

.TextGroup3 {
  height: 50px;
  width: 179px;
  margin: 50px 0 0 368px;
}

.info4 {
  width: 179px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 18px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  display: block;
}

.txt8 {
  width: 72px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 18px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  display: block;
}
.picInfo {
  position: absolute;
  display: flex;
  height: 500px;
  width: 1216px;
  top: 124px;
  left: 360px;
  z-index: 3;
}
.wrap8 {
  width: 287px;
  height: 360px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngaad1e099754b3ac6dbeaa7dff3adcd9ee293d3d7c8540d8c96f248dd543531cc)
    100% no-repeat;
  /* transition: all 0.3s; */
  /* margin: 124px 0 0 -1560px; */
}
.mod10:hover .bg {
  height: 140px;
  background-color: #f7d006;
}
.mod10:hover .wrap8 {
  width: 287px;
  height: 360px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngaad1e099754b3ac6dbeaa7dff3adcd9ee293d3d7c8540d8c96f248dd543531cc)
    100% no-repeat;
  transform: scale(0.9);
  transition: all 0.1s;
}
.mod10:hover .wrap9 {
  width: 287px;
  height: 360px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga7ae75ff69df92be9d752d22d38aed7200b7d4002867eb0d62ed908e9002c5a5)
    100% no-repeat;
  transform: scale(0.9);
  transition: all 0.1s;
}
.mod10:hover .wrap10 {
  width: 287px;
  height: 360px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga4eca7f9654b76c1b898c20745d9bcc10cb8aa764af105e0b5994caba803cddf)
    100% no-repeat;
  transform: scale(0.9);
  transition: all 0.1s;
}
.mod10:hover .wrap11 {
  width: 287px;
  height: 360px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8147701036ce1470f4ddd0c7ac7021b08304a15ee7e1c60bd3ba422e39aa488a)
    100% no-repeat;
  transform: scale(0.9);
  transition: all 0.1s;
}

.wrap9 {
  width: 287px;
  height: 360px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga7ae75ff69df92be9d752d22d38aed7200b7d4002867eb0d62ed908e9002c5a5)
    100% no-repeat;
  /* margin: 124px 0 0 17px; */
}

.wrap10 {
  width: 287px;
  height: 360px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga4eca7f9654b76c1b898c20745d9bcc10cb8aa764af105e0b5994caba803cddf)
    100% no-repeat;
  /* margin: 124px 0 0 17px; */
}

.wrap11 {
  width: 287px;
  height: 360px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8147701036ce1470f4ddd0c7ac7021b08304a15ee7e1c60bd3ba422e39aa488a)
    100% no-repeat;
  /* margin: 124px 361px 0 17px; */
}

.layer11 {
  /* position: absolute; */
  height: 360px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng603ce0a1bd8235ac78deb3c7433787c1865b83c529ae572e24fd53b75f77aed0)
    100% no-repeat;
  margin-top: -124px;
  width: 1920px;
}

.mod10 {
  width: 287px;
  height: 500px;
  justify-content: space-between;
  margin: 0 0 0 17px;
}

.section2-0 {
  height: 140px;
  margin-right: 17px;
  width: 287px;
  background: rgba(255, 255, 255, 1);
  /* background: rgba(247, 208, 6, 1); */
}
.bg {
  transition: height 1s;
  /* position: absolute; */
  height: 0;
  width: 287px;
  /* bottom: 0; */
  /* z-index: 2; */
}
.TextGroup4-0 {
  /* position: absolute; */
  height: 90px;
  width: 256px;
  margin: 16px 0 0 16px;
  /* z-index: 4; */
}

.txt9-0 {
  width: 102px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-family: PingFangSC-Semibold;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  display: block;
}

.word12-0 {
  width: 256px;
  height: 60px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  line-height: 20px;
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.section2-1 {
  height: 140px;
  margin-right: 17px;
  width: 287px;
  background: rgba(255, 255, 255, 1);
}

.TextGroup4-1 {
  height: 90px;
  width: 256px;
  margin: 16px 0 0 16px;
}

.txt9-1 {
  width: 102px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-family: PingFangSC-Semibold;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  display: block;
}

.word12-1 {
  width: 256px;
  height: 60px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  line-height: 20px;
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.section2-2 {
  height: 140px;
  margin-right: 17px;
  width: 287px;
  background: rgba(255, 255, 255, 1);
}

.TextGroup4-2 {
  height: 90px;
  width: 256px;
  margin: 16px 0 0 16px;
}

.txt9-2 {
  width: 102px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-family: PingFangSC-Semibold;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  display: block;
}

.word12-2 {
  width: 256px;
  height: 60px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  line-height: 20px;
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.section2-3 {
  height: 140px;
  margin-right: 17px;
  width: 287px;
  background: rgba(255, 255, 255, 1);
}

.TextGroup4-3 {
  height: 90px;
  width: 256px;
  margin: 16px 0 0 16px;
}

.txt9-3 {
  width: 102px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-family: PingFangSC-Semibold;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  display: block;
}

.word12-3 {
  width: 256px;
  height: 60px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  line-height: 20px;
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
.TextGroup5 {
  height: 50px;
  width: 110px;
  margin: 50px 0 0 360px;
}

.info5 {
  width: 110px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 18px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  display: block;
}

.txt10 {
  width: 72px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 18px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  display: block;
}

.layer12 {
  width: 1200px;
  height: 404px;
  margin: 25px 0 0 360px;
}

.mod11 {
  width: 795px;
  height: 404px;
  flex-wrap: wrap;
}

.group2-0 {
  height: 246px;
  margin-right: 17px;
  width: 389px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb316fa4f0d096c5a02208cf79a552db2ffddfc6b3c0ea07ee5c026bdc335478d)
    100% no-repeat;
}
.goup2-2:hover .group2-0 {
  transform: scale(1.2);
  transition: all 0.6s;
}

.group2-1 {
  height: 246px;
  margin-right: 0;
  width: 389px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng15244567962a8d532553a476f69890cb6c30cfd2a26c92a537e0ed48ea9f167c)
    100% no-repeat;
}

.group2-2 {
  height: 246px;
  margin-right: 17px;
  width: 389px;
  margin-bottom: 0;
  background: rgba(248, 248, 248, 1);
}

.TextGroup6-2 {
  height: 101px;
  width: 335px;
  margin: 24px 0 0 24px;
}

.info6-2 {
  width: 335px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 18px;
  font-family: PingFangSC-Medium;
  text-align: left;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.word13-2 {
  width: 335px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(119, 119, 119, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  line-height: 20px;
  margin-top: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.group2-3 {
  height: 246px;
  margin-right: 0;
  width: 389px;
  margin-bottom: 0;
  background: rgba(248, 248, 248, 1);
}

.TextGroup6-3 {
  height: 101px;
  width: 335px;
  margin: 24px 0 0 24px;
}

.info6-3 {
  width: 335px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 18px;
  font-family: PingFangSC-Medium;
  text-align: left;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.word13-3 {
  width: 335px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(119, 119, 119, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  line-height: 20px;
  margin-top: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.mod12 {
  background-color: rgba(248, 248, 248, 1);
  height: 404px;
  width: 389px;
}

.section3 {
  width: 319px;
  height: 304px;
  margin: 24px 0 0 21px;
}

.TextGroup7 {
  height: 48px;
  width: 280px;
}

.word14 {
  width: 280px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  display: block;
}

.txt11 {
  width: 99px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(119, 119, 119, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-top: 8px;
  display: block;
}

.TextGroup8 {
  height: 48px;
  margin-top: 16px;
  width: 182px;
}

.info7 {
  width: 182px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  display: block;
}

.word15 {
  width: 99px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(119, 119, 119, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-top: 8px;
  display: block;
}

.TextGroup9 {
  height: 48px;
  width: 318px;
  margin: 16px 0 0 1px;
}

.info8 {
  width: 318px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  display: block;
}

.word16 {
  width: 117px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(119, 119, 119, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-top: 8px;
  display: block;
}

.TextGroup10 {
  height: 48px;
  margin-top: 16px;
  width: 299px;
}

.info9 {
  width: 298px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-left: 1px;
  display: block;
}

.word17 {
  width: 99px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(119, 119, 119, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-top: 8px;
  display: block;
}

.TextGroup11 {
  height: 48px;
  margin-top: 16px;
  width: 227px;
}

.word18 {
  width: 227px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  display: block;
}

.info10 {
  width: 96px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(119, 119, 119, 1);
  font-size: 14px;
  font-family: PingFangSC-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-top: 8px;
  display: block;
}
</style>
