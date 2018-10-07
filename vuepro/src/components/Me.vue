<template>
  <div class="me">
    <h1>关于我们</h1>
    <div class="play">
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../static/img/1.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../static/img/2.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../static/img/3.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../static/img/4.jpg" alt=""></div>

        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
     <div class="play">
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../static/img/1.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../static/img/2.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../static/img/3.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../static/img/4.jpg" alt=""></div>

        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script >

// // 引入 swiper 滑动组件
// import Swiper from "swiper";
// import "swiper/dist/css/swiper.min.css";

export default {
  name: "Me",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  // 钩子函数
  mounted: function() {
    // 自己写的 js 代码  钩子函数里  
    // 调用 swiper 滑动插件的代码
    var swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入样式表重置
@import "../assets/sass/base.scss";
// @import "../../static/css/swiper.min.css";

.me {
  h1 {
    text-align: center;
    color:#25a;
    line-height: rem(100px);
  }
}

.play {
  width: rem(750px);
  margin: 0 auto;
  .swiper-container {
    img {
      width: rem(750px);
    }
  }
}

.ico{
  span{
    font-size: rem(100px);
    color:pink;
  }
}
</style>
