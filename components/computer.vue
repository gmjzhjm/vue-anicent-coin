<template>
	<div class="computer">
		<p>computer</p>
		<slot></slot>
		<div class="dian" @click="chuanzhi">点我</div>
	</div>
</template>

<script>
	export default {
		name: 'computer',
		methods:{
			chuanzhi(){
				this.$bus.$emit('getMessage','测试一下兄弟之间的通信')
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
</style>