<template>
  <nav class="menu-container">
      <router-link :exact="item.exact" v-for="item in items" :key="item.name" :to="{name:item.name}"
      
      active-class="selected"
      exact-active-class=""
      >
          <div class="icon">
              <Icon :type="item.icon" />
          </div>
          <span>{{item.title}}</span>

      </router-link>
  </nav>
</template>

<script>

import Icon from "@/components/Icon"
export default {
    components:{
        Icon
    },
    data(){
        return{
            items:[
                {
                    name:"Home",
                    title:"首页",
                    icon:"iconzhuye",
                    exact:true
                },
                {
                    name:"Article",
                    title:"文章",
                    icon:"iconblog",
                    exact:false
                },
                {
                    name:"About",
                    title:"关于我",
                    icon:"iconset_about_hov",
                    exact:true

                },
                {
                    name:"Project",
                    title:"项目",
                    icon:"iconcode",
                    exact:true
                },
                {
                    name:"Message",
                    title:"留言板",
                    icon:"iconliuyan",
                    exact:true
                }
            ]
        }
    }
}
</script>

<style scoped lang="less">
.menu-container{
    
    margin: 24px 0;
    a{
        padding: 0 50px;
        display: block;
        display: flex;
        text-decoration: none;
        align-items: center;
        height: 45px;
        color: rgb(243, 247, 243);
        .icon{
            width: 24px;
        }
        &:hover{
            color:  rgb(243, 247, 243);
            font-weight: 900;
        }
        &.selected{
            background-color:#ccc;
        }
    }

}
</style>