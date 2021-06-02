<template>
    <div class="test-container">
        <Layout>
            <template #left>
                <div class="left">
                这是左边栏区域
                </div>
            </template>
            <div class="main">
                这是珠区域
            </div>
            <template #right>
                <div class="right">
                这是右边栏区域
                </div>
            </template>
        </Layout>
    </div>
    
</template>

<script>
import Layout from "./index"
export default {
    components:{
        Layout
    }
}
</script>

<style>
.test-container{
    width: 100%;
    height: 600px;
    border: 1px solid #000;
    background-color: lightseagreen;
}
.left{
    width: 200px;
    height: 100%;
    background-color: red;
}
.main{
    width: 100%;
    height: 100%;
    background-color: limegreen;
}
.right{
    width: 150px;
    height: 100%;
    background-color: magenta;
}
</style>