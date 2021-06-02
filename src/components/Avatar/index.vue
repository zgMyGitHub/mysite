<template>
  <img :src="url" class="avatar-container" :style="{
      width:size + 'px',
      height:size + 'px',
  }" alt="">
</template>

<script>
export default {
    props:{
        url:{
            type:String,
            required:true
        },
        size:{
            type:Number,
            default:100
        }
    }
}
</script>

<style scoped>
.avatar-container{
    border-radius: 50%;
    object-fit: cover;
    display: block;

}
</style>
