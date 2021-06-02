<template>
  <div>
    <h1>组件</h1>
    <Pager :total="total" :current="current"
     @pageChange="handlePageChange($event)"/>
  </div>
</template>

<script>
import Pager from './index';
export default {
  components: {
    Pager
  },
  data(){
    return {
      total:360,
      current:1
    }
  },
  methods:{
    handlePageChange(newPage){
      this.current = newPage;
    }
  }
};
</script>

<style>

</style>