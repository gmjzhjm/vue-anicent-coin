<template>
	<div class="home">
		<div>
			<router-link to="/home/phone">手机</router-link>
			<router-link to="/home/tablet">平板</router-link>
			<router-link to="/home/computer">电脑</router-link>
		</div>
		<router-view></router-view>
		<div class="pagesss">
			<tablet />
			<computer> 
				<p>试试</p>
			</computer>
			<phone />
		</div>
	</div>
</template>

<script>
	import phone from '../components/phone.vue'
	import computer from '../components/computer.vue'
	import tablet from '../components/tablet.vue'
	export default {
		name: 'Home',
		components:{
			tablet,
			phone,
			computer
		},
		data() {
			return {
				msg: "我是home组件"
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
	.pagesss{display: flex;flex-direction: row;justify-content: space-between;margin-top: 100px;}
</style>