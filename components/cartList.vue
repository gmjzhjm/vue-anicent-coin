<template>
  <div class="verticalGoodsList">
    <ul>
      <li v-for="(item,index) in goods" :key="index">
        <van-checkbox v-model="checked">复选框</van-checkbox>
        <router-link :to="goods[index].url">
          <div class="goodImg">
            <img :src="goods[index].img" />
          </div>
          <div class="goodInfo">
            <h1 class="goods-title">{{goods[index].title}}</h1>
            <p class="goods-desc">{{goods[index].desc}}</p>
          </div>
        </router-link>
        <p class="goos-bottom">
          <span class="goods-price">{{goods[index].nowPrice}}</span>
          <router-link to="/communicate"><img class="communicate" src="../assets/images/message.png" /></router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "verticalGoodsList",
  props: {
    goods: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      checked:false
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

.verticalGoodsList {
  width: 100%;
  height: auto;
}

.verticalGoodsList ul {
  width: 100%;
  background-color: #ffffff;
}

.verticalGoodsList ul li {
  width: 94%;
  padding: 10px 3%;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 10px;
  background-color: #ffffff;
  position: relative;
}

.verticalGoodsList ul li a {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.verticalGoodsList ul li a .goodImg {
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

.goos-bottom .communicate {
  width: 16px;height: 16px;margin-top: 2px;
}
</style>