<template>
  <div class="blog-comment-blog">
      <MessageArea title="评论列表" :subTitle="`(${data.total})`" 
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
      
      />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import {getComment,postComment} from "@/api/blog.js"
export default {
    mixins:[fetchData({total:0,row:[]})],
    components:{
        MessageArea
    },
    data(){
        return {
            page:1,
            limit:10
        }
    },
    mounted(){
        this.$bus.$on("mainScroll",this.handleScroll);

    },
    computed:{
        hasMore(){
            return this.data.rows.length  <this.data.total;
        }
    },
    destroyed(){
        this.$bus.$off("mainScroll",this.handleScroll);
    },

    methods:{
        handleScroll(dom){
            const range = 100;
            if(this.isLoading || !dom){
                return;
            }
            //定义一个可接受的方位，这个范围都到底部
            const dec = Math.abs((dom.scrollTop + dom.clientHeight) - dom.scrollHeight);
            if(dec <= range){
                this.fetchMore();
            }
        },
        async fetchData(){
          return await getComment(this.$route.params.id,this.page,this.limit)
        },
        async fetchMore(){
            if(!this.hasMore){
                return;
            }
            this.isLoading = true;
            this.page ++;
            const resp =await this.fetchData();
            this.data.total = resp.total;
            this.data.rows = this.data.rows.concat(resp.rows);
            this.isLoading = false;
        },
        async handleSubmit(formData,callback){
          const resp =  await  postComment({
                blogId:this.$route.params.id,
                ...formData
            });
            this.data.rows.unshift(resp);
            this.data.total ++;
            callback("评论成功");
           

        }
    }
}
</script>

<style scoped lang="less">
.blog-comment-container{
    margin: 30px 0;
}
</style>