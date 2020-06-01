<template>
  <div class="coupon">
    <div class="coupon-con" v-for="(item,index) in coupon" :key="index">
      <div class="dotted">
        <span class="d-top"></span>
        <span class="d-bottom"></span>
      </div>
      <p class="border-dotted"></p>
      <div class="coupon-left">
        <p class="amount">￥<em>{{item.amount}}</em>店铺优惠券
        </p>
        <p class="condition">{{item.condition}}</p>
        <p class="expirationDate">有效期：{{item.expirationDate}}</p>
      </div>
      <div class="coupon-right">立即领取</div>
    </div>
	<div class="finish-btn" @click="popClose">完成</div>
  </div>
</template>

<script>
export default {
  name: "coupon",
  props: {
    coupon: {
      type: Array,
      required: true
    }
  },
  methods: {
    popClose() {
      this.$parent.popClose();
    }
  }
};
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
.coupon {
  width: 100%;
  height: 100%;
}
.coupon-con {
  margin-bottom: 10px;
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  background-color: #faebe0;
  border-radius: 5px;
  padding: 10px 0%;
  text-align: left;
  color: #c80202;
}
.coupon-con .coupon-left p em{font-style: normal;font-size: 20px;padding-right: 3px;}
.coupon .dotted {
  position: absolute;
  left: 70%;
  width: 12px;
  height: 100%;
  z-index: 22;
}
.coupon-left{width: 67%;float: left;padding-left: 3%;}
.coupon-right{width: 29%;float: right;text-align: center;font-size: 14px;height: 60px;line-height: 60px;}
.amount{font-size: 13px;}
.expirationDate,.condition{font-size: 12px;}
.coupon .dotted span {
  display: block;
  width: 12px;
  height: 12px;
  background-color: #ffffff;
  border-radius: 50%;
}
.coupon .dotted .d-top{position: absolute;left: 0;top: -14px;}
.coupon .dotted .d-bottom{position: absolute;left: 0;bottom: 6px;}
.border-dotted {
  width: 2px;
  height: 70%;
  position: absolute;
  left: 70%;
  box-sizing: border-box;
  border-right: 1px dotted #c80202;
  margin-left: 4px;
  top: 15%;
}
.finish-btn{
	width: 100%;
	height: 30px;
	border-radius: 15px;
	color: #ffffff;
	font-size: 14px;
	text-align: center;
    background: linear-gradient(to right, #f76e0b 0%,#c80202 100%);
	line-height: 30px;
}
</style>
