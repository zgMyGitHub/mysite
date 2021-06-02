<template>
  <div
    v-loading="loading"
    class="home-container"
    ref="container"
    @wheel="handleWheel"
  >
    <ul
      @transitionend="handleTransition"
      class="carousel-container"
      :style="{ marginTop }"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :datas="item" />
      </li>
    </ul>
    <div
      v-show="index >= 1"
      @click="switchTo(index - 1)"
      class="icon icon-down"
    >
      <Icon type="icontubiaozhizuo- " />
    </div>
    <div
      v-show="index < data.length - 1"
      class="icon icon-up"
      @click="switchTo(index + 1)"
    >
      <Icon type="iconico_open" />
    </div>

    <ul class="indictor">
      <li
        :class="{
          active: i === index,
        }"
        v-for="(item, i) in data"
        :key="item.id"
      ></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex"
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";
export default {
  components: {
    // CarouseItem
    CarouselItem,
    Icon,
  },
  data() {
    return {
      index: 0, //当前显示的是第几张录播图
      containerHeight: 0, //容器的高度
      switching: false,
    };
  },
  created(){
    this.$store.dispatch("banner/fetchBanner")
  },

  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    ...mapState("banner",["loading","data"]),
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      // console.log(111)
      if (this.switching) {
        // console.log(222)
        return;
      }
      if (e.deltaY <= -5 && this.index > 0) {
        this.switching = true;
        this.index--;
      } else if (e.deltaY >= 5 && this.index < this.data.length - 1) {
        this.switching = true;

        this.index++;
      }
    },
    handleTransition() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.home-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  // z-index: 999;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
    }
  }
}
.icon {
  font-size: 30px;
  .self-center();
  cursor: pointer;
  transform: translateX(-50%);
  &.icon-up {
    bottom: 15px;
    top: auto;
    animation: jump 2s infinite;
  }
  &.icon-down {
    top: 25px;
    animation: jump 2s infinite;
  }
}
.indictor {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 25px;
  li {
    list-style: none;
    width: 7px;
    height: 7px;
    cursor: pointer;
    margin-bottom: 15px;
    border-radius: 50%;
    border: 1px solid #000;
    box-sizing: border-box;
    transition: 0.2s;
    &.active {
      background-color: blue;
    }
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}
@keyframes jump {
  0% {
    transform: translate(-50%, 10px);
  }
  50% {
    transform: translate(-50%, -10px);
  }
  100% {
    transform: translate(-50%, 10px);
  }
}
</style>