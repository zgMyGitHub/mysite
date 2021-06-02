<template>
  <div class="test-container">
        <Menu />
  </div>
</template>

<script>
import Menu from "./index"
export default {
    components:{
        Menu
    },
    
}
</script>

<style scoped lang="less">
.test-container{
    width: 300px;
    height: 400px;
    border: 2px solid #000;
    margin: 0 auto;
}
</style>