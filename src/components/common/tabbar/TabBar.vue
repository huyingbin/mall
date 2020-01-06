<template>
     <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
      // isActive: true,
    }
  },
  computed:{
   

  },
  methods:{
  

  }
    
}
</script>

<style scoped>
.tab-bar {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
}


</style>