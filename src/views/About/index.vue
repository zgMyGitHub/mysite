<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
      <iframe v-if="src"
        :src="src"
        @load="srcLoaded = true"
        class="about-content" 
        frameborder="0"></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  data(){
    return {
      srcLoaded:false
    }
  },
  computed:{
    ...mapState("about",{
      src:"data",
      loading:"loading"
    }),
    
  },
  created(){
    this.$store.dispatch("about/fetchAbout");
  }
}
</script>

<style lang="less" scoped>
.about-container{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;
}
.about-content{
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  overflow-y: scroll;

}
</style>