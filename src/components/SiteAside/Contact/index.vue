<template>
  <div class="contact-container">
    <ul>
      <li>
        <a href="">
          <div class="icon">
              <Icon type="iconqq"/>
          </div>
            <span>2367408884</span>
        </a>
        <div class="pop">
            <img src="./qq.png" alt="">
        </div>
      </li>

      <li>
        <a href="">
          <div class="icon">
              <Icon type="iconweixin1x"/>
          </div>
            <span>zhangquanjie007</span>
        </a>
        <div class="pop">
            <img src="./weixin.png" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
.contact-container {
//   left: 50%;
  // margin: 0;
  ul{
    padding-top: 50px;
    padding-left: 10px;
  }
  li{
      height: 30px;
      line-height: 30px;
      margin: 10px 0;
      list-style: none;
      position: relative;
       &:hover{
          .pop{
            transform: scale(1);
          }
      }
      span{
        color:  rgb(243, 247, 243);
      }
  }
  a{
      display: flex;
      align-items: center;
      text-decoration: none;
      cursor: pointer;
     

  }
  .icon{
      font-size: 26px;
      color:  rgb(243, 247, 243);
      width: 36px;
      
  }
  .pop{
      width: 150px;
      height: 150px;
      position: absolute;
      left: 0;
      bottom: 30px;
      border-radius: 15px;
      transform: scale(0);
      transform-origin: center bottom;
      transition: .3s;
      &::after{
          content: "";
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          position: absolute;
          width: 8px;
          height: 8px;
          background: #fff;
          bottom: -4px;
      }
      img{
          width: 150px;
          height: 150px;
          object-fit: cover;
      }
  }

}
</style>