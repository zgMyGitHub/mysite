<template>
    <span class="iconfont icon-container" :class="type"></span>
</template>

<script>

export default {
    props:{
        type:{
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>
    @import "//at.alicdn.com/t/font_2429439_mfd4m0wmp2.css";
    .iconfont{
        color: inherit;
        font-size: inherit;
    }
</style>