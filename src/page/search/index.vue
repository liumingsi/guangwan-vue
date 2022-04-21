<template>
    <div class="page-search">
            <Header :num="num"></Header>
        <div class="page-search-nav">
            <div class="page-search-nav-left">
                <div>
                    <router-link to="#">零件编号搜索</router-link>
                </div>
            </div>
            <div class="page-search-nav-right">
                <p>
                    <router-link to="#">产品搜索</router-link>><router-link to="#">零件编号搜索</router-link>
                </p>
            </div>
        </div>
        <div class="page-search-content">
            <div class="page-search-content-left">
                <div>
                    <img src="../../images/产品搜索/1649918704(1).jpg" alt="">
                    选择产品/输入型号:
                </div>
                <el-select popper-class="re" style="width:280px;height:32px;border-radius: 2px;margin-left: 21px;"
                    v-model="value" placeholder="--">
                    <el-option style="width:280px;height:32px;" v-for="(item,index) in options" :key="index"
                        :label="item.label" class="eles" :value="item.value"
                        >
                    </el-option>
                </el-select>
                <input class="text" type="text">
                <button class="button">搜索</button>
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
        name:'searchIndex',
        data() {
            return {
                num:5,
                imgPath: process.env.IMG_ROOT,
                options: [{
                    value: '电感器',
                    label: '电感器',
                },
                {
                    value: '电源模块',
                    label: '电源模块',
                   
                },
                {
                    value: '电阻器和分流传感器',
                    label: '电阻器和分流传感器',
                    
                },
                {
                    value: '共模扼流圈',
                    label: '共模扼流圈',
                    
                },
                {
                    value: '保护者',
                    label: '保护者',
                    
                },
                {
                    value: 'PT传感器',
                    label: 'PT传感器',
                }
                ],
                value: '',
            }
        },
        components: {
            Footer,
            Header,
            ContentRight
        },
        created() {
           
        }
  }
</script>
<style lang="scss" scoped>
    @import "../../style/scss/_search.scss";
</style>
<style>
     .eles:hover{
        background-color: yellow;
    }
    .ziti{
        color: rgb(32, 31, 31);
        font-weight: 400;
    }
</style>