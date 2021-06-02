<template>
  <ul class="data-list-container">
      <li v-for="item in list" :key="item.id">
          <Avatar :url="item.avatar" :size="44" />
          <div class="data">
              <div class="nickname">
                  {{item.nickname}}
              </div>
              <div class="content">
                  {{item.content}}
              </div>
              <div class="time">{{formatDate(item.createDate,true)}}</div>
          </div>
      </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
import {formatDate} from "@/utils"
export default {
    components:{
        Avatar
    },
    props:{
        list:Array,
        default:()=>[]
    },
    methods:{
        formatDate,
    }
}
</script>

<style scoped lang="less">
    .data-list-container{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li{
        display: flex;
        border-bottom: 1px solid #000;
        padding: 15px 0;
    }
    .avatar-container{
        margin-right: 15px;
    }
    .nickname{
        color: orchid;
    }
    .content{
        font-size: 15px;
    }
    .data{
        flex: 1 1 auto;
        position: relative;
    }
    .time{
        position: absolute;
        right: 0;
        top: 0px;
        font-size: 12px;
        color:#ccc;
    }
</style>