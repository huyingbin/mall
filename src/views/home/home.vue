<template>
    <div class="home">
        <nav-bar class="nav-bar"><div slot="nav-center">购物街</div></nav-bar>
        <carousel :bannerList = 'bannerList'></carousel>
        <recommend :recommendList = 'recommendList'></recommend>
       
        
    </div>
</template>

<script>
import {homeMultidata} from 'network/home.js'
import NavBar from 'components/common/navbar/NavBar.vue'
import Carousel from './homeComponents/Carousel.vue'
import recommend from './homeComponents/recommend.vue'


export default {
    name: 'home',
    components: {
        NavBar,
        Carousel,
        recommend
    },
    data() {
        return {
          bannerList: [],
          recommendList: [],  
        }
    },

    created(){
        homeMultidata().then(result => {
            console.log(result);
            this.bannerList = result.data.data.banner.list;
            this.recommendList = result.data.data.recommend.list;

        }).catch(err => {

        })
        

    }
}
</script>

<style scoped>
.nav-bar {
    background: pink;
    font-size: 22px;
}

</style>