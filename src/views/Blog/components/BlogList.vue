<template>
  <div v-loading="isLoading" ref="mainContainer" class="blog-list-container">
      <ul>
          <li v-for="item in data.rows" :key="item.id">
              <div class="thumb" v-if="item.thumb">
                  <router-link :to="{
                      name:'BlogDetail',
                      params:{
                          id:item.id
                      }
                  }">
                      <img v-lazy="item.thumb" :alt="item.title" :title="item.title">
                  </router-link>
              </div>
              <div class="main">
                  <router-link :to="{
                      name:'BlogDetail',
                      params:{
                          id:item.id
                      }
                  }">
                      <h2>{{item.title}}</h2>
                  </router-link>
                  <div class="aside">
                      <span>日期：{{formatDate(item.createDate)}}</span>
                      <span>浏览：{{item.scanNumber}} </span>
                      <span>评论: {{item.commentNumber}}</span>
                      <router-link :to="{
                          name:'CategoryBlog',
                          params:{
                              categoryId:item.category.id
                          }
                      }">{{item.category.name}}</router-link>
                  </div>
                  <div class="desc">
                      {{item.description}}
                  </div>
              </div>
          </li>
      </ul>
      <Pager v-if="data.total" 
      :total="data.total" 
      :current="this.routeInfo.page" 
      :limit="this.routeInfo.limit" 
      @pageChange="handlePageChange"
       />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData";
import {getBlogs} from "@/api/blog";
import { formatDate } from "@/utils";
import mainScroll from "@/mixins/mainScroll";
export default {
    mixins:[fetchData({}),mainScroll("mainContainer")],
    components:{
        Pager
    },
    methods:{
        async fetchData(){
            return await getBlogs(this.routeInfo.page,this.routeInfo.limit,this.routeInfo.categoryId);
        },
        formatDate,
        handlePageChange(newPage){
            const query = {
                page:newPage,
                limit:this.routeInfo.limit
            }
            //跳转到。当前分类id 当前的也容量 newPage页码
            //article？page=$(newPage)&limit-${this.routeInfo.limit}
            //article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
            if(this.routeInfo.categoryId === -1){
                //没有分类
                //article？page=$(newPage)&limit-${this.routeInfo.limit}
                this.$router.push({
                    name:"Article",
                    query
                })

            }
            else{
                //article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
                this.$router.push({
                    name:"CategoryBlog",
                    query,
                    params:{    
                        categoryId:this.routeInfo.categoryId
                    }
                })
            }
        },
    },
    watch:{
        async $route(){
            this.isLoading = true;
            this.$refs.mainContainer.scrollTop = 0;
             this.data = await this.fetchData();
             this.isLoading = false;
        }
    },
    computed:{
        routeInfo(){
            const categoryId = +this.$route.params.categoryId || -1;
            const page = +this.$route.query.page || 1;
            const limit = +this.$route.query.limit || 10;

            return {
                categoryId,
                page,
                limit
            }

        }
    }
}
</script>

<style lang="less" scoped>
.blog-list-container{
    line-height: 1.7;
    position: relative;
    padding: 20px;
    overflow: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
}
li{
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid #ccc;
    .thumb{
        flex: 0 0 auto;
        margin-right: 15px;
        img{
            display: block;
            min-width: 200px;
            max-width: 300px;
            border-radius: 5px;
        }
    }
}
.main{
    flex: 1 1 auto;
    h2{
        margin: 0;
        color: blue;
    }
}
.aside{
    font-size: 12px;
    color: #ccc;
    span{
    margin-right: 3px;

    }
}
.desc{
    margin: 15px 0;
    font-size: 14px;
}
</style>