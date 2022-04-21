<template>
    <div class="page-news">
        <Header :num="num"></Header>
        <div class="page-news-nav">
            <div class="page-news-nav-left">
                <div v-for="(item,index) in newsnavdata" :key="index" :class="{navclass:navnum == index}"
                    @click="bian(index)">
                    <router-link :to="item.urlLink">
                        <p>{{item.name}}</p>
                    </router-link>
                </div>
            </div>
            <div class="page-news-nav-right">
                <p>
                    <router-link to="#">新闻中心</router-link>><router-link to="#">公司新闻</router-link>
                </p>
            </div>
        </div>
        <div class="page-news-content">
            <div class="page-news-content-left">
                <div v-for="(item,index) in newslist" :key="index">
                    <router-link :to="'/news/details/' + item.id">
                        <img :src="`${imgPath}${item.image}`" alt="">
                        <div>
                            <p>{{item.title}}</p>
                            <p><img src="../../images/news/shijian.jpg" alt=""><span>2022-03-04</span></p>
                            <p><img src="../../images/news/yanjing.jpg" alt=""><span>浏览次数：{{item.viewNum}}</span>
                            </p>
                            <p>{{item.description}}</p>
                        </div>
                    </router-link>
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
        name: 'newsIndex',
        data() {
            return {
                num: 6,
                navnum: 0,
                imgPath: process.env.IMG_ROOT,
                newsnavdata: JSON.parse(window.localStorage.getItem('newsnav_key') || '[]'),
                newslist: JSON.parse(window.localStorage.getItem('newsdatalist_key') || '[]'),
                currentPage1: 2,
                currentPage2: 2,
                currentPage3: 2,
                currentPage4: 2
            }
        },
        components: {
            Footer,
            Header,
            ContentRight
        },
        created() {

        },
        mounted() {


        },
        methods: {
            bian(index) {
                this.navnum = index;
            },
        },
    }
</script>
<style lang="scss" scoped>
    @import "../../style/scss/_news.scss";
</style>