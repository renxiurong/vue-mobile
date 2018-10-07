<template>
  <div class="index">
  	
    <div class="swiper-container topnav">
	    <div class="swiper-wrapper nav-cont">
	      <router-link to="/Index/" tag="div" class="swiper-slide hua " :class="(resPath=='' || resPath== undefined)?'mo':''">全部</router-link>
	      <router-link to="/Index/Good" tag="div" class="swiper-slide hua" :class="resPath=='Good'?'mo':''">精华</router-link>
	      <router-link to="/Index/Dev" tag="div" class="swiper-slide hua" :class="resPath=='Dev'?'mo':''">测试</router-link>
	      <router-link to="/Index/Share" tag="div" class="swiper-slide hua" :class="resPath=='Share'?'mo':''">分享</router-link>
	      <router-link to="/Index/Ask" tag="div" class="swiper-slide hua" :class="resPath=='Ask'?'mo':''">问答</router-link>
	      <router-link to="/Index/Job" tag="div" class="swiper-slide hua" :class="resPath=='Job'?'mo':''">招聘</router-link>
	      <router-link to="" tag="div" class="swiper-slide hua">weex</router-link>
	      <router-link to="" tag="div" class="swiper-slide hua">分享</router-link>
	      <router-link to="" tag="div" class="swiper-slide hua">问答</router-link>
	      <router-link to="" tag="div" class="swiper-slide hua">招聘</router-link>
	      <router-link to="" tag="div" class="swiper-slide hua">weex</router-link>
	      <router-link to="" tag="div" class="swiper-slide hua">分享</router-link>
	    </div>
	    <!-- Add Pagination -->
	    <!-- <div class="swiper-pagination"></div> -->
	</div>
	<router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },

  // 钩子函数
  mounted: function() {
    // 自己写的 js 代码  钩子函数里  
    // 调用 swiper 滑动插件的代码
    var swiper = new Swiper('.topnav', {
          slidesPerView: 4,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
  },
  
  // 计算属性
  computed:{
    resPath: function(){
      // 用 '/' 把路径分割成数组
      var array = this.$route.path.split('/');
			// 把能够表示当前 组件的 字符串 返回出去
      return array[2];
    }
  }
};


</script>

<style scoped lang="scss">
 //引入样式表重置
  @import "../assets/sass/base.scss";
//顶部滑动导航
.index{
	width: 100%;
	height: rem(100px);
	.topnav{
		background:#ccc;
		height: rem(100px);
		position:fixed;
		top:0;
		left:0;
		.nav-cont{
			height: 100%;
			display:flex;
			
			align-items:center;
			margin:0 rem(10px);
			.hua{
				color:#25a;
				font-size: rem(40px);
				
				height: rem(70px);
				text-align:center;
				line-height: rem(70px);
				border-radius: rem(16px);
			}
			.mo{
				width: rem(40px);
				color:#fff;
				background: #25a;
			}
		}
	}
}

</style>
