<template>
  <div class="scrollGoodsList">
    <van-swipe class="my-swipe" :autoplay="4000" indicator-color="white" :loop="false" :width="130">
      <van-swipe-item v-for="(item,index) in goods" :key="index">
        <router-link :to="goods[index].url">
          <div class="goodImg">
            <img :src="goods[index].img" />
          </div>
          <div class="goodInfo">
            <h1 class="goods-title">{{goods[index].title}}</h1>
            <p class="goos-price">
              <span class="nowPrice">{{goods[index].nowPrice}}</span>
            </p>
          </div>
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "scrollGoodsList",
  props: {
    goods: {
      type: Array,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #000;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

.scrollGoodsList {
  width: 94%;
  padding: 10px 3%;
  height: auto;
}

.scrollGoodsList a .goodImg {
  width: 100%;
}
.scrollGoodsList a .goodImg img{border-radius: 5px;}

.goodInfo {
  text-align: left;
  width: 100%;
}
.van-swipe-item a{display: block;width: 94%;}
.goodInfo .goods-title {
  font-size: 13px;
  margin-top: 3px;
  line-height: 20px;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}


.goodInfo .goos-price {
  margin-top: 6px;
 
}

.goodInfo .goos-price .nowPrice {
  color: #c80202;
  font-size: 13px;
}

</style>