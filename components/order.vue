<template>
  <div class="order">
    <ul>
		<li v-for="(item,index) in orderList" :key="index">
			<router-link :to="orderList[index].url">
				<div class="goodImg">
					<img :src="orderList[index].img" />
				</div>
				<div class="goodInfo">
					<h1 class="goods-title">{{orderList[index].title}}</h1>
					<p class="goods-price">{{orderList[index].nowPrice}}</p>
				</div>
			</router-link>
			<p class="order-state">{{orderList[index].orderState}}</p>
		</li>
	</ul>
  </div>
</template>

<script>
	export default {
		name: 'order',
		props:{
			orderList:{
				type:Array,
				required:true
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order {
  width: 100%;
  height: auto;
}

.order ul {
  width: 100%;
  background-color: #ffffff;
}

.order ul li {
  width: 94%;
  padding: 10px 3%;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 10px;
  background-color: #ffffff;
  position: relative;
}

.order ul li a {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #333;
}

.order ul li a .goodImg {
  width: 34%;
}

.goodInfo {
  text-align: left;
  width:66%;
  margin-left: 4%;
}

.goodInfo .goods-title {
  font-size: 13px;
  margin-top: 3px;
}

.goodInfo .goods-desc {
  font-size: 12px;
  color: #666;
  margin-top: 6px;
  line-height: 20px;
}

.goos-bottom {
  position: absolute;
  bottom: 15px;
  width: 60%;
  left: 37%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 20px;
  line-height: 20px;
}

.goods-price {
  color: #c80202;
  font-size: 13px;
}
.order-state{position: absolute;bottom: 15px;right: 10px;z-index: 3;color: #c80202;font-size: 12px;}
</style>
