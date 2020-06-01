<template>
	<div class="nav">
		<ul>
			<li v-for="(item,index) in navList" :key="index">
				<router-link :to="item.url">
					<img :src="item.icon" />
					<p>{{item.text}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Nav',
		data() {
			return {
				navList: [{
						url: "product/1",
						icon: require("../assets/images/icon-1.jpg"),
						text: "古币"
					},
					{
						url: "product/2",
						icon: require("../assets/images/icon-2.jpg"),
						text: "机制币"
					},
					{
						url: "product/3",
						icon: require("../assets/images/icon-3.jpg"),
						text: "纸币"
					},
					{
						url: "product/4",
						icon: require("../assets/images/icon-4.jpg"),
						text: "鉴定"
					},
					{
						url: "product/5",
						icon: require("../assets/images/icon-5.jpg"),
						text: "记账"
					},
					{
						url: "product/6",
						icon: require("../assets/images/icon-6.jpg"),
						text: "工具书"
					}
				]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	a{color: #000000;}
	.nav{width: 100%;height: auto;padding-top: 10px;background-color: #FFFFFF;}
	.nav ul{width: 100%;height: 100%;overflow: hidden;}
	.nav ul li{width: 32%;float: left;margin-left: 1%;margin-bottom: 10px;}
	.nav ul li a{font-size: 12px;}
	.nav ul li a img{width: 50%;}
</style>