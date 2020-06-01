<template>
  <div class="horizontalGoodsList">
    <ul>
      <li v-for="(item,index) in goods" :key="index">
        <router-link :to="goods[index].url">
          <div class="goodImg">
            <img :src="goods[index].img" />
          </div>
          <div class="goodInfo">
            <h1 class="goods-title">{{goods[index].title}}</h1>
            <!-- <p class="goods-desc">{{goods[index].desc}}</p> -->
            <p class="goos-price">
              <!-- <span class="oldPrice">{{goods[index].oldPrice}}</span> -->
              <span class="nowPrice">{{goods[index].nowPrice}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "horizontalGoodsList",
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

.horizontalGoodsList {
  width: 100%;
  margin: 0 auto;
  height: auto;
}

.horizontalGoodsList ul {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.horizontalGoodsList ul li {
  width:47%;
  margin-left: 2%;
  float: left;
  background-color: #ffffff;
  margin-bottom: 10px;
}

.horizontalGoodsList ul li a {
  display: block;
  width: 100%;
}

.horizontalGoodsList ul li a .goodImg {
  width: 100%;
}

.goodInfo {
  text-align: left;
  width: 100%;
}

.goodInfo .goods-title {
  font-size: 13px;
  margin-top: 3px;
}

.goodInfo .goods-desc {
  font-size: 12px;
  color: #666;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 6px;
  line-height: 20px;
}

.goodInfo .goos-price {
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.goodInfo .goos-price .nowPrice {
  color: #c80202;
  font-size: 13px;
}

.goodInfo .goos-price .oldPrice {
  color: #999;
  text-decoration: line-through;
  font-size: 12px;
}
</style>