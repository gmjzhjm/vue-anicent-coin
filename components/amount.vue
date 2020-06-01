<template>
  <div class="amount">
    <div class="flex-around">
		<p class="amount-money">
			<span>余额</span>
			<span class="color-red amount-span">￥{{amountMoney[0]}}</span>
		</p>
		<p class="border-middle"></p>
		<p class="amount-integral">
			<span>积分</span>
			<span class="color-red amount-span">{{amountMoney[1]}}</span>
		</p>
	</div>
  </div>
</template>

<script>
	export default {
		name: 'amount',
		props:{
			amountMoney:{
				type:Array,
				required:true
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.amount{width: 94%;margin: 0 auto;height: auto;padding: 10px 0;border-radius: 5px;background-color: #ffffff;margin-bottom: 10px;text-align: center;}
.flex-around{display: flex;flex-direction: row;justify-content: space-around;}
.amount-money,.amount-integral{font-size: 12px;}
.amount-money span,.amount-integral span{display: block;}
.color-red{color: #c80202;}
.border-middle{background-color: #e6e6e6;width: 1px;height: auto;}
.amount-span{font-size: 14px;padding-top: 6px;}
</style>
