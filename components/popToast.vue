<template>
  <div class="popToast">
    <div class="mask"></div>
	<p><img :src="toast[1]" />{{toast[0]}}</p>
  </div>
</template>

<script>
	export default {
		name: 'popToast',
		props:{
			toast:{
				type:Array,
				required:true
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.popToast{width: 128px;position: fixed;top: 40%;z-index: 333;border-radius: 5px;left: 50%;margin-left: -64px;height: 40px;overflow:hidden;}
.mask{width: 100%;height: 100%;position: absolute;left: 0;top: 0;z-index: 334;background-color: #000000;opacity: 0.7;}
.popToast p{width: 100%;height: 100%;position: absolute;left: 0;top: 0;z-index: 335;color: #ffffff;font-size: 12px;text-align: center;line-height: 40px;}
.popToast p img{width: 14px;float: left;margin-top: 13px;margin-left: 10px;}
</style>
