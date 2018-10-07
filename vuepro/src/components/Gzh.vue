<template>
  <div class="gzh">
    <h1>公众号</h1>
    <img src="../../static/img/gzh.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Gzh',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // 引入样式表重置
  @import '../assets/sass/base.scss';

  .gzh{
    h1{
      text-align: center;
      font-size: rem(50px);
      line-height: rem(100px);
      color:pink;
    }
    img{
      width: 80%;
      display: block;
      margin: rem(10px) auto;
    }
  }

</style>

