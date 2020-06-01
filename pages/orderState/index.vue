<template>
	<div class="order">
		<titleBar :msg="pageTitles" />
		<p class="pt-40"></p>
		<order :orderList="orderList" />
	</div>
</template>

<script>
	import order from '../../components/order.vue'
	import titleBar from '../../components/titleBar.vue'
	export default {
		data(){
			return {
				title:'',
				orderList:[],
				pageTitles:'',
				goods: [
					{
					id: 1,
					img: require("../../assets/images/goodsImg1.jpg"),
					url: "/product/details/2",
					title: "古币商品古币商品1",
					desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
					oldPrice: "￥258.00",
					nowPrice: "￥199.00",
					orderState:'待付款',
					orderPath:'/order/delay_pay'
					},
					{
					id: 2,
					img: require("../../assets/images/goodsImg2.jpg"),
					url: "/product/details/2",
					title: "古币商品古币商品2",
					desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
					oldPrice: "￥129.00",
					nowPrice: "￥88.00",
					orderState:'待发货',
					orderPath:'/order/delay_delivery'
					},
					{
					id: 3,
					img: require("../../assets/images/goodsImg3.jpg"),
					url: "/product/details/3",
					title: "古币商品古币商品1",
					desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
					oldPrice: "￥328.00",
					nowPrice: "￥128.00",
					orderState:'待收货',
					orderPath:'/order/delay_get'
					},
					{
					id: 4,
					img: require("../../assets/images/goodsImg4.jpg"),
					url: "/product/details/4",
					title: "古币商品古币商品1",
					desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
					oldPrice: "￥216.00",
					nowPrice: "￥189.00",
					orderState:'评价',
					orderPath:'/order/commend'
					},
					{
					id: 5,
					img: require("../../assets/images/goodsImg5.jpg"),
					url: "/product/details/5",
					title: "古币商品古币商品1",
					desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
					oldPrice: "￥188.00",
					nowPrice: "￥108.00",
					orderState:'退款',
					orderPath:'/order/refund'
					}
				]			
			}
		},
		components: {
			order,
			titleBar
		},
		created(){
			this.pageTitle()
		},
		methods:{
			pageTitle(){
				var path=this.$route.path
				var _this=this
				for(let i=0;i<_this.goods.length;i++){
					if(_this.goods[i].orderPath==path){
						_this.orderList.push(_this.goods[i])	
						_this.pageTitles=_this.goods[i].orderState		
					}
				}
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