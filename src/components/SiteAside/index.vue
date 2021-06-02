<template>
  <div class="site-saide-container">

      <Avatar url="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=141156173,2221205300&fm=26&gp=0.jpg" 
       />
      <Menu />
      <Contact />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar"
import Menu from "@/components/SiteAside/Menu"
import Contact from "@/components/SiteAside/Contact"

export default {
    components:{
        Avatar,
        Menu,
        Contact
    }
}
</script>

<style scoped lang="less">
.site-saide-container{
    box-sizing: border-box;
}
.avatar-container{
    margin: 0 auto;
    padding: 10px 0;
}
</style>