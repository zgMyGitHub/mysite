<template>
  <div class="blog-toc-container">
    <h1>目录</h1>
    <RightList :list="toWithSelect" @select="handleSelect" />
  
  </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from "@/utils";
export default {
    components:{
        RightList
    },
    props:{
        toc:{
            type:Array
        }
    },
    created(){
      this.setSelectDebounce = debounce(this.setSelect,50);
      this.$bus.$on("mainScroll",this.setSelectDebounce)

    },
    destroyed(){
        this.$bus.$off("mainScroll",this.setSelectDebounce)
    },
    methods:{
        handleSelect(item){
            location.hash = item.anchor;
        },
        setSelect(scrollDom){
          if(!scrollDom){
            return ;
          }
          this.activeAnchor = "";
          for(const dom of this.doms){
            //看一下当前这个dom元素是否被选中
            if(!dom){
              continue;
            }
            const top = dom.getBoundingClientRect().top;
            if(top >= 0 && top <= 100){
                //在规定的范围内
                this.activeAnchor = dom.id;
                return;
            }
          }
        }
    },
    data(){
      return {
        activeAnchor:""
      }
    },
    computed:{
      //根据toc属性得到带有iSselect数组的toc数组
      toWithSelect(){
        const getToc = (toc = [])=>{
          return toc.map(t=>({
            ...t,
            isSelect:t.anchor === this.activeAnchor,
            children:getToc(t.children)
          }));
        }
        return getToc(this.toc);
      },
      //根据toc得到对应
      doms(){
        const doms = [];
        const addDoms = (toc) =>{
          for(const t of toc){
           doms.push(document.getElementById(t.anchor));
            if(t.children && t.children.length){
              addDoms(t.children)
            }
          }
        };
        addDoms(this.toc);
        return doms;
      }
    }
}
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: 900;
    letter-spacing: 2px;
    margin: 0;
  }
}
</style>