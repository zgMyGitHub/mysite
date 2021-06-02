<template>
  <div class="project-container" v-loading="loading">
      <a v-for="item in data"
       :key="item.id"
        class="project-item"
        v-lazy="item.url ? item.url:'javascript:void(0)'"
        :target="item.url?'__blank':'_self'"
        >
        <img :src="item.thumb" class="thumb" alt="">
        <div class="info">
          <h2>{{item.name}}</h2>
          <p v-for="(desc,i) in item.description" :key="i">{{desc}}</p>
        </div>
      </a>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed:{
    ...mapState("project",["data","loading"])
  },
  created(){
    this.$store.dispatch("project/fetchProject")
  }
}
</script>

<style lang="less" scoped>
.project-container{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
}
.project-item{
  transform: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #000;
  &:hover{
    box-shadow: -1px 1px 5px #000;
    color: blue;
  }
  .thumb{
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info{
    line-height: 1.7;
    flex: 1 1 auto;
    h2{
      margin: 0;
    }
  }
}
</style>