<template>
    <div class="page-details">
        <Header :num="num"></Header>
        <div class="page-details-nav">
            <div class="page-details-nav-left">
                <div v-for="(item,index) in newsnavdata" :key="index" :class="{navclass:navnum == index}"
                    @click="bian(index)">
                    <router-link :to="item.urlLink">
                        <p>{{item.name}}</p>
                    </router-link>
                </div>
            </div>
            <div class="page-details-nav-right">
                <p>
                    <router-link to="#">新闻中心</router-link>><router-link to="/news-center">公司新闻</router-link>>
                    <router-link to="/news/details">新闻详情</router-link>
                </p>
            </div>
        </div>
        <div class="page-details-content">
            <div class="page-details-content-left">
                <p>{{newsdata.title}}</p>
                <p><img src="../../images/news/shijian.jpg" alt=""><span>{{newsdata.createDate}}</span></p>
                <p><img src="../../images/news/yanjing.jpg" alt=""><span>浏览次数: {{newsdata.viewNum}}</span></p>
                <img class="nd" :src="`${imgPath}${newsdata.image}`" alt="">
                <p v-html="newsdata.content"></p>
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
        name: 'newsDetails',
        data() {
            return {
                num: 6,
                navnum: 1,
                imgPath: process.env.IMG_ROOT,
                // newsdata: JSON.parse(window.localStorage.getItem('newsdata1_key') || '[]'),
                newsdata:[],
                newsnavdata: JSON.parse(window.localStorage.getItem('newsnav_key') || '[]'),
            }
        },
        components: {
            Footer,
            Header,
            ContentRight
        },
        created() {
            this.$api.get(this.$address.news.newscontent, { id: this.$route.params.id }, r => { //新闻文章
                this.newsdata = r.obj;
            })

        },
        mounted() {

        },
        methods: {

        },
        // watch: {
        //     newsdata1: {
        //         deep: true,
        //         handler: function (value) {
        //             window.localStorage.setItem('newsdata_key', JSON.stringify(value))
        //         }
        //     },
        // }
    }
</script>
<style lang="scss" scoped>
    /* @import "../../style/scss/details.scss"; */
</style>