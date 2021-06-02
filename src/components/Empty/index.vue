<template>
  <div class="empty-container">
      <Icon type="iconempty"/>
      <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from '../Icon'
export default {
  components: { Icon },
  props:{
        text:{
            type:String,
            default:"无数据"
        }
    }

}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.empty-container{
    .self-center();
    text-align: center;
    color: chocolate;
}
.icon-container{
  font-size: 80px;
}
</style>
