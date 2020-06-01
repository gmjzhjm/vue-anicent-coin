<template>
	<div class="userMenu">
		<h1>我的订单<router-link to="">查看全部订单<img src="../assets/images/arrow-right.png" /></router-link></h1>
		<ul class="list">
			<li v-for="(item,index) in userMenu" :key="index" >
				<router-link :to="item.url">
					<span><img :src="item.pic" /></span>
					<p>{{item.name}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'userMenu',
		data(){
			return {
				userMenu:[
					{
						pic:require('../assets/images/menuicon1.png'),
						name:'待付款',
						url:'/order/delay_pay'
					},
					{
						pic:require('../assets/images/menuicon2.png'),
						name:'待收货',
						url:'/order/delay_get'
					},
					{
						pic:require('../assets/images/menuicon3.png'),
						name:'待发货',
						url:'/order/delay_delivery'
					},
					{
						pic:require('../assets/images/menuicon4.png'),
						name:'评价',
						url:'/order/commend'
					},
					{
						pic:require('../assets/images/menuicon5.png'),
						name:'退款/售后',
						url:'/order/refund'
					}
				]
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
.userMenu{width: 90%;padding: 10px 2%;clear: both;margin: 0 auto;border-radius: 5px;background-color: #ffffff;}
.userMenu h1{font-size: 13px;width: 100%;height: 20px;line-height: 20px;text-align: left;margin-bottom: 10px;font-weight: normal;}
.userMenu h1 a{float: right;color: #999999;font-size: 12px;}
.userMenu h1 a img{width: 10px;}
.userMenu .list{display: flex;flex-direction: row;justify-content: space-between;}
.userMenu ul li a img{height: 25px;width: auto;}
.userMenu ul li a p{color: #333333;font-size: 12px;}
</style>