<template>
	<div class="page">
		<avator />
		<amount :amountMoney="[200,455]"/>
		<userMenu />
		<recommend />
		<collect />
		<trace />
	</div>
</template>

<script>
	import avator from "../../components/avator.vue";
	import amount from "../../components/amount.vue";
	import userMenu from "../../components/userMenu.vue";
	import collect from "../../components/collect.vue";
	import trace from "../../components/trace.vue";
	import recommend from "../../components/recommend.vue";
	export default {
		components:{
			avator,
			amount,
			userMenu,
			collect,
			trace,
			recommend
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
.page{background-color: #f7f7f7;}
</style>