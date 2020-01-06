<template>
    <div class="recommend">
        <a :href="item.link" v-for="(item, index) in recommendList" :key="index">
            <img :src="item.image" alt="">
            <div class="title">{{item.title}}</div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'recommend',
    props:{
        recommendList: {
            type: Array,
            default: function() {
                return []
            }
        }
        
    }
}
</script>

<style scoped>
.recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px 0;
    border-bottom: 10px solid #eeeeee;
}

.recommend a {
    flex: 1;
}

.recommend img {
    height: 56px;
    width: 56px;
}

.title {
    margin-top: 5px;
}


</style>