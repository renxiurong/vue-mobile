<template>
  <div class="loading">
      <img class="img" :src="require('../../../static/img/loading.gif')" alt="">
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入样式表重置
@import "../../assets/sass/base.scss";


.loading{
	.img{
		width: 100%;
		display: block;
		margin-top: rem(300px);
	}
}

</style>
