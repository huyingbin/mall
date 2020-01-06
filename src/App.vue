<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item toRouterPath = '/home' acriveColor='blue'>
        <img slot = 'item-icon' src="~assets/image/tabbar/home.svg" alt="首页"/>
        <img slot = 'item-icon-active' src="~assets/image/tabbar/home_active.svg" alt="首页" />
        <div slot = 'item-title' class="title">首页</div>  
      </tab-bar-item>
      <tab-bar-item toRouterPath = '/category'>
        <img slot = 'item-icon' src="~assets/image/tabbar/category.svg" alt="分类"/>
        <img slot = 'item-icon-active' src="~assets/image/tabbar/category_active.svg" alt="分类" />
        <div slot = 'item-title' class="title">分类</div>  
      </tab-bar-item>
      <tab-bar-item toRouterPath = '/shopCart'> 
        <img slot = 'item-icon' src="~assets/image/tabbar/shopcart.svg" alt="购物车"/>
        <img slot = 'item-icon-active' src="~assets/image/tabbar/shopcart_active.svg" alt="购物车" />
        <div slot = 'item-title' class="title">购物车</div>  
      </tab-bar-item>
      <tab-bar-item toRouterPath = '/profile'>
        <img slot = 'item-icon' src="~assets/image/tabbar/profile.svg" alt="我的"/>
        <img slot = 'item-icon-active' src="~assets/image/tabbar/profile_active.svg" alt="我的" />
        <div slot = 'item-title' class="title">我的</div>  
      </tab-bar-item>
    </tab-bar>
   
  </div>
</template>

<script>
import tabBar from 'components/common/tabbar/TabBar.vue'
import tabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  name: 'app',
  components: {
    tabBar,
    tabBarItem
 
  }
}
</script>

<style scoped>


@import "assets/css/base.css"
</style>
