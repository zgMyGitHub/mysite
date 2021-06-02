<template>
  <div class="right-list-container">
    <ul>
      <li v-for="(item, i) in list" :key="i">
        <span @click="handleClick(item)" :class="{ active: item.isSelect }" >{{ item.name }}</span>
        <span v-if="item.aside" class="little" :class="{active: item.isSelect,aside:true}">{{item.aside}}</span>
        <RightList :list="item.children" @select="handleClick" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RightList",
  //[name:"jda",isSelect:false,children:[name:"doakd",isSelect:false,childern:[]]]
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods:{
      handleClick(item){
          this.$emit("select",item)
      }
  }
};
</script>

<style scoped lang="less">
.right-list-container {
    ul{
        list-style: none;
        padding: 0;
    }
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 16px;
    cursor: pointer;
    .active {
      color: blue;
      font-weight: 900;
    }
  }
}
.little{
  color: #ccc;
  font-size: 12px;
}
.aside{
  margin-left: 25px;
}
</style>