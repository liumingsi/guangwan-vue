<template>
    <div class="header">
        <div class="nav">
            <div class="logo">
                <img src="../../images/首页_slices/北半球LOGO2.png" alt="">
            </div>
            <ul>
                <li v-for="(item,index) in dataList" :class="{bjyellow:num==index}" :key="index">
                    <router-link class="rr1" :to="item.urlLink">
                        <!-- <span> -->
                        {{item.name}}
                        <!-- </span> -->
                    </router-link>
                </li>
            </ul>
            <div class="lxfs">
                <img src="../../images/首页_slices/电话.png" alt="电话">
                <p>全国服务热线：{{data.serviceTel}}</p>
            </div>
        </div>
        <el-carousel height="603px" class="bannar" indicator-position>
            <el-carousel-item class="bannar-item" v-for="(item,index) in imgList" :key="index">
                <img :src="`${imgPath}${item.imageUrl}`" alt="" class="banner-item-img">
               
            </el-carousel-item>
        </el-carousel>
    </div>  
</template>

<script>
    export default {
        name: "Header",
        props: {
            num: {
                type: Number,
                default: 0
            }
        },
        created() {
        },
        data() {
            return {
                imgPath:process.env.IMG_ROOT,
                imgList:JSON.parse(window.localStorage.getItem('bandata_key') || '[]'),
                dataList: JSON.parse(window.localStorage.getItem('data_key') || '[]'),
                data:JSON.parse(window.localStorage.getItem('teldata_key') || '[]'),
            }
        },
        methods: {
        }
    }

</script>
<style lang="scss" scoped>
    @import "./header.scss";
</style>
<style>
    .bjyellow {
        background-image: url(../../images/首页_slices/矩形.png);
        color: white;
    }

    .bjyellow>.rr1 {
        color: white;
    }
</style>