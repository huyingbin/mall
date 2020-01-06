<template>
    <div class="shopCart">
        <nav-bar class="nav-bar">
            <div slot='nav-center'>购物车</div>    
        </nav-bar>   
       
        
    </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar.vue'
export default {
    name: 'shopCart',
    components: {
        navBar
    }
    
}
</script>

<style scoped>
.nav-bar {
    background-color: pink;
    color: #ffffff;
    font-size: 22px;
}

</style>>
