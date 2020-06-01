<template>
	<div class="productList">
		<titleBar :msg="title" />
		<p class="pt-40"></p>
		<verticalGoodsList :goods="goods" />
	</div>
</template>

<script>
	import verticalGoodsList from '../../components/verticalGoodsList.vue'
	import titleBar from '../../components/titleBar.vue'
	export default {
		data(){
			return {
				title:'',
				goods: [
					{
					id: 1,
					img: require("../../assets/images/goodsImg1.jpg"),
					url: "/product/details/2",
					title: "古币商品古币商品1",
					desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
					oldPrice: "￥258.00",
					nowPrice: "￥199.00"
					},
					{
					id: 2,
					img: require("../../assets/images/goodsImg2.jpg"),
					url: "/product/details/2",
					title: "古币商品古币商品2",
					desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
					oldPrice: "￥129.00",
					nowPrice: "￥88.00"
					},
					{
					id: 3,
					img: require("../../assets/images/goodsImg3.jpg"),
					url: "/product/details/3",
					title: "古币商品古币商品1",
					desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
					oldPrice: "￥328.00",
					nowPrice: "￥128.00"
					},
					{
					id: 4,
					img: require("../../assets/images/goodsImg4.jpg"),
					url: "/product/details/4",
					title: "古币商品古币商品1",
					desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
					oldPrice: "￥216.00",
					nowPrice: "￥189.00"
					},
					{
					id: 5,
					img: require("../../assets/images/goodsImg5.jpg"),
					url: "/product/details/5",
					title: "古币商品古币商品1",
					desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
					oldPrice: "￥188.00",
					nowPrice: "￥108.00"
					}
				]			
			}
		},
		components: {
			verticalGoodsList,
			titleBar
		},
		created(){
			if(this.$route.path=='/productlist/collect'){
				this.title='我的收藏'
			}else if(this.$route.path=='/productlist/trace'){
				this.title='我的足迹'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.indexPage {
		background-color: #e6e6e6;
	}
	
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
	.pt-40{padding-top: 40px;}
	.goodsList {
		padding-top: 5px;
	}
</style>