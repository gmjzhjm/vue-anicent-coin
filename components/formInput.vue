<template>
  <div class="formInput">
    <div class="div-input" v-for="(item,index) in inputList" :key="index">
		<div class="input-mask"></div>
		<div class="input-con flex-between">
			<span class="pageWidth10"><img :src="item.icon" /></span>
			<input :class="[item.verifyCode ? 'pageWidth70' : 'pageWidth90']" type="text" :placeholder="item.text" v-model="item.value"  />
			<em class="pageWidth20" v-if="item.verifyCode">验证码</em>
		</div>
	</div>
  </div>
</template>

<script>
	export default {
		name: 'formInput',
		props:{
			inputList:{
				type:Array,
				required:true
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-between{display: flex;flex-direction: row;justify-content: space-between;}
.pageWidth10{width: 10%;}
.pageWidth20{width: 20%;}
.pageWidth30{width: 30%;}
.pageWidth40{width: 40%;}
.pageWidth50{width: 50%;}
.pageWidth60{width: 60%;}
.pageWidth70{width: 70%;}
.pageWidth80{width: 80%;}
.pageWidth90{width: 90%;}
.pageWidth100{width: 100%;}

::-webkit-input-placeholder { /* WebKit browsers */
  color: #fff;
  font-size: 13px;
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #fff;
  font-size: 13px;
}

:-ms-input-placeholder { /* Internet Explorer 10+ */
  color: #fff;
  font-size: 13px;
}  

.formInput .div-input img{width: 20px;}
.div-input{width: 80%;margin: 0 auto;height:40px;border-radius: 20px;margin-top: 10px;position: relative;text-align: left;}
.div-input .input-mask{width: 100%;height: 100%; opacity: 0.75;background-color: #cde5fa;position: absolute;left: 0;top: 0;bottom: 0;right: 0;z-index: 2;border-radius: 20px;}
.div-input .input-con{width: auto; height: 20px;line-height: 20px;padding: 10px;position: absolute;left: 0;right: 0;top: 0;bottom: 0;z-index: 3;}
.div-input .input-con input{background: none;border: none;outline: none;font-size: 13px;line-height: 20px;color: #ffffff;}
.div-input .input-con em{font-size: 13px;}

</style>
