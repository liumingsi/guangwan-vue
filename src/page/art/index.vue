<template>
    <div class="page-about">
            <Header :num="num"></Header>
        <div class="page-about-nav">
            <div class="page-about-nav-left">
                <div>
                    <router-link to="#">技术平台</router-link>
                </div>
                <div>
                    <router-link to="#">粉末冶金技术</router-link>
                </div>
                <div>
                    <router-link to="#">薄膜和厚膜技术</router-link>
                </div>
                <div>
                    <router-link to="#">先进封装技术</router-link>
                </div>
                <div>
                    <router-link to="#">储能技术</router-link>
                </div>
            </div>
            <div class="page-about-nav-right">
                <p>
                    <router-link to="#">技术</router-link>><router-link to="#">技术平台</router-link>
                </p>
            </div>
        </div>
        <div class="page-about-content"

        >
            <div class="page-about-content-left">
                <p>{{jsdata.description}}</p>
                <div class="page-about-content-left-top">
                    <img :src="`${imgPath}${jsdata.image}`" alt="">
                </div>
                <div class="page-about-content-main">
                    <p style="margin-top: 20px;">{{jsdata.title}}</p>
                    <p v-html="jsdata.content"></p>
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
        name:'name',
        data() {
            return {
                num:4,
                imgPath: process.env.IMG_ROOT,
                jsdata: JSON.parse(window.localStorage.getItem('jsdata_key') || '[]'),
            }
        },
        created () {
        },
        components: {
            Footer,
            Header,
            ContentRight
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../style/scss/_art.scss";
</style>