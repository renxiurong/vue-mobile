<template>
  <div id="app">
   <!--  {{$route}} -->
    <router-view/>
    <nav class="appNav">
      <ul>
        <router-link to="/Index" tag="li"  :class="resPath=='Index'?'mo':''">
          <div class="iconfont icon-shouye ico">
            <p>首页</p>
          </div>
        </router-link>
        <router-link to="/Gzh" tag="li" :class="resPath=='Gzh'?'mo':''">
          <div class="iconfont icon-saoyisao ico">
            <p>公众号</p>
          </div>
        </router-link>
        <router-link to="/Me" tag="li" :class="resPath=='Me'?'mo':''">
          <div class="iconfont icon-people ico">
            <p>我们</p>
          </div>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  //计算属性
  computed:{
    resPath:function(){
      //用'/'吧路径分割成数组
      console.log(this.$route.path)
      var array=this.$route.path.split('/');
      //把能够表示当前组件的字符串返回出去
      return array[1];
    }
  }
}
</script>

<style lang="scss">
  //引入样式表重置
  @import "./assets/sass/base.scss";

  //底部导航
  nav{
    position:fixed;
    bottom:0;
    left:0;
    width: rem(750px);
    height: rem(100px);
    background:#25a;
    ul{
      display:flex;
      li{
        width: 33.3%;
        height: rem(100px);
        text-align:center;
        color:#fff;
        font-size: rem(40px);
        .ico{
          width: 100%;
          text-align:center;
          margin-top: rem(5px);
          font-size: rem(40px);
          p{
            font-size: rem(40px);
    
          }
        }
      }
      .mo{
        width:33.3%;
        background:#ccc;
        color:#25a;
        font-weight:700;
      }
    }
  }
</style>
