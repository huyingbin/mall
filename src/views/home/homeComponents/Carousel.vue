<template>
    <div class="carousel"> 
         <Swiper>
            <swiper-item v-for="(item, index) in bannerList" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </Swiper>  
    </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
export default {
    name: 'carousel',
    components: {
        Swiper, 
        SwiperItem
    },
    props: {
        bannerList: {
            type: Array,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return []
            }
        }

    }
}
</script>