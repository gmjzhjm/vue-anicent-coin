<template>
	<div class="communicate">
		<titleBar msg="古币交流" />
	</div>
</template>

<script>
	import titleBar from "../../components/titleBar.vue";
	export default {
		name:"communicate",
		components:{
			titleBar
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
.profile{width: 100%;}
.flex-between{display: flex;flex-direction: row;justify-content: space-between;}
.avator-upload{width: 94%;margin: 8px auto;}
.arrow{height: 80px;line-height:80px;}
.avator-upload .arrow img{width: 14px;}
</style>