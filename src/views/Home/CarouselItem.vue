<template>
  <div class="carousel-item-container" ref="container" 
  @mousemove="handleMousemove"
  @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" :style="imgPosition" ref="image">
      <img :src="datas.bigImg" alt="" />
    </div>
    <div ref="title" class="title">
      {{ datas.title }}
    </div>
    <div ref="desc" class="desc">
      {{ datas.description }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["datas"],
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null,
      innerSize: null,
      mouseX:0,
      mouseY:0
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.showWords();

    this.setSize();
    this.mouseX= this.cneter.x;
    this.mouseY = this.cneter.y
    window.addEventListener("resize",this.setSize);
  },
  destroyed(){
     window.removeEventListener("resize",this.setSize);
  },
  methods: {
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "2s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = "2s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    handleMousemove(e){
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
      // console.log(rect)

    },
    handleMouseLeave(){
      this.mouseX= this.cneter.x;
      this.mouseY = this.cneter.y
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },
  },
  computed: {
    imgPosition() {
      if(!this.innerSize || !this.containerSize){
        return ;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width;
      const extraHeight = this.innerSize.height - this.containerSize.height;
      const left = -extraWidth / this.containerSize.width * this.mouseX;
      const top = -extraHeight / this.containerSize.height * this.mouseY;

      return {
        // left: left + "px",
        // top: top + "px",
        transform:`translate(${left}px,${top}px)`
      };
    },
    cneter(){
      return {
        x:this.containerSize.width / 2,
        y:this.containerSize.height / 2
      }
    }
  },
};
</script>



<style lang="less" scoped>
.carousel-item-container {
  // padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
    overflow: hidden;

  .carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    z-index: -1;
    transition: 500ms;
    left: 0;
    top: 0;
    img {
      // position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.title,
.desc {
  position: absolute;
  left: 50px;
  top: 50%;
  white-space: nowrap;
  overflow: hidden;
}
.title {
  color: red;
  font-size: 30px;
  letter-spacing: 3px;
  top: calc(50% - 50px);
}
.desc {
  color: green;
  font-size: 16px;
  letter-spacing: 2px;
}
</style>