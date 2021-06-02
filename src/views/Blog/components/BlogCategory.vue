<template>
  <div v-loading="isLoading" class="blog-category-container">
    <h1>文章分类</h1>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import fetchData from "@/mixins/fetchData";
import { getBlogCategories } from "@/api/blog";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    list() {
      const totalArticleCount = this.data.reduce((a, b, index, arr) => {
        return a + b.articleCount;
      }, 0);
      // console.log(totalArticleCount);
      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];
      const res = result.map((it) => ({
        ...it,
        isSelect: it.id === this.categoryId,
        aside:`${it.articleCount}篇`
      }));
      // console.log(res)
      return res;
    },
    limit(){
      return +this.$route.query.limit || 10;
    }
  },
  methods: {
    async fetchData() {
      return await getBlogCategories();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      //跳转到。当前分类id 当前的也容量 newPage页码
      //article？page=$(newPage)&limit-${this.routeInfo.limit}
      //article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
      if (item.id === -1) {
        //没有分类
        //article？page=$(newPage)&limit-${this.routeInfo.limit}
        this.$router.push({
          name: "Article",
          query,
        });
      } else {
        //article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  h2 {
    font-weight: 900;
    letter-spacing: 2px;
    margin: 0;
  }
}
</style>