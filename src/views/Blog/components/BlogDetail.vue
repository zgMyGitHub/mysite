<template>
  <div class="blog-detail-container">
      <h1>{{blog.title}}</h1>
      <div class="aside">
          <span>日期:{{formatDate(blog.createDate)}}</span>
          <span>浏览:{{blog.scanNumber}}</span>
          <a href="#data-form-container">评论:{{blog.commentNumber}}</a>
          <router-link :to="{
              name:'CategoryBlog',
              params:{
                  categoryId:blog.category.id
              }
          }">{{blog.category.name}}</router-link>         
      </div>
      <div v-html="blog.htmlContent"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
export default {
    props:{
        blog:{
            type:Object,
            required:true
        }
    },
    methods:{
        formatDate
    }
}
</script>

<style scoped lang="less">
.aside{
    font-size: 12px;
    color: #ccc;
    span{
        margin-left: 10px;
    }
    a{
        margin-left: 10px;
    }
}
</style>