<template>
    <div class="tab-bar-item" @click="toRouter">
        <div class="img" v-if="!isActive"><slot name="item-icon"></slot></div>
        <div class="img-active" v-else><slot name="item-icon-active"></slot></div>
        <div :style="styleActive" class="title"><slot name="item-title"></slot> </div>   
    </div>
</template>

<script>
export default {
    name: 'TabBarItem', 
    data() {
        return {
            // isActive: true
        }
    },
    props:{
      toRouterPath: String,  
      acriveColor: {
          type: String,
          default: 'red'
      }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.toRouterPath) !== -1
        },
        styleActive() {
            return this.isActive ? {color : this.acriveColor} : {}
        }
    },
    methods: {
        toRouter() { 
            this.$router.push(this.toRouterPath);
        }
    }

}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  cursor: pointer;
}

.tab-bar-item img {

  height: 26px;
  width: 26px;
  vertical-align: middle;
  margin-top: 3px;
}

.tab-bar-item .title{
  margin-top: 2px;
}

.active {
    color: red;
}
</style>