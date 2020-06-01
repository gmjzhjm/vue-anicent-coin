<template>
	<div class="recommend">
		<router-link to="">
			<img src="../assets/images/recommend.png" />商品推荐
		</router-link>
		<scrollGoodsList :goods="goods" />
	</div>
</template>

<script>
	import scrollGoodsList from "../components/scrollGoodsList.vue";
	export default {
		name: 'recommend',
		components:{
			scrollGoodsList
		},
		data() {
			return {
			goods: [
				{
				id: 1,
				img: require("../assets/images/goodsImg1.jpg"),
				url: "/product/details/2",
				title: "古币商品古币商品1",
				desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
				oldPrice: "￥258.00",
				nowPrice: "￥199.00"
				},
				{
				id: 2,
				img: require("../assets/images/goodsImg2.jpg"),
				url: "/product/details/2",
				title: "古币商品古币商品2",
				desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
				oldPrice: "￥129.00",
				nowPrice: "￥88.00"
				},
				{
				id: 3,
				img: require("../assets/images/goodsImg3.jpg"),
				url: "/product/details/3",
				title: "古币商品古币商品1",
				desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
				oldPrice: "￥328.00",
				nowPrice: "￥128.00"
				},
				{
				id: 4,
				img: require("../assets/images/goodsImg4.jpg"),
				url: "/product/details/4",
				title: "古币商品古币商品1",
				desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
				oldPrice: "￥216.00",
				nowPrice: "￥189.00"
				}
			]
			};
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
.recommend{width: 94%;clear: both;margin: 10px auto;padding-top: 10px;  border-radius: 5px;background-color: #ffffff;text-align: left;}
.recommend a{display: block;width: 94%;padding: 0 3%; font-size: 12px;color: #333333;text-align: left;line-height: 20px;font-size: 13px;}
.recommend a img{width: 20px;float: left;padding-right: 10px;}
</style>