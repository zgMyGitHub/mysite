<template>
    <div class="test-container">
       <Empty />
    </div>
</template>

<script>
import Empty from "./index"
export default {
    components:{
        Empty
    },
    
}
</script>

<style>
.test-container{
    width: 600px;
    height: 400px;
    margin: 0 auto;
    border: 1px solid #000;
    position: relative;
}
</style>