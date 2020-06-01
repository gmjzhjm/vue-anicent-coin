<template>
  <div class="title">
    <img class="goBack" @click="back()" src="../assets/images/arrow-left.png" />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
	export default {
		name: 'titleBar',
		props: {
			msg: String
    },
    data(){
      return {
        tps:'sde'
      }
    },
    methods:{
      back(){
        this.$router.go(-1);//返回上一层
      }
    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.title{width: 100%;height: 40px;line-height: 40px;text-align: center;background-color: #ffffff;box-shadow: 0px 1px 5px #ccc;position: fixed;top: 0;left: 0;right: 0;z-index: 33;}
.goBack{position: absolute;left: 3%;width: 14px;height: 14px;top:13px;display: block;}
.title h1{font-size: 14px;color: #000000;font-weight: normal;}
</style>
