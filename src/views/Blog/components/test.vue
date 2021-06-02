<template>
  <div class="test-container">
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  methods:{
      handleSelect(item){
          console.log(item)
      }
  },
  data() {
    return {
      list: [
        {
          name: "a",
          isSelect: true,
        },
        {
          name: "b",
          isSelect: false,
          children: [
            {
              name: "1-1",
              isSelect: false,
            },
            {
              name: "1-2",
              isSelect: true,
            },
            {
              name: "1-2",
              isSelect: true,
              children: [
                {
                  name: "2-1",
                  isSelect: false,
                },
                {
                  name: "2-2",
                  isSelect: false,
                },
              ],
            },
          ],
        },
        {
          name: "c",
          isSelect: false,
        },
        {
          name: "d",
          isSelect: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>