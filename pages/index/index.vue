<template>
  <div class="indexPage">
    <!--banner-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="@/static/images/banner1.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/static/images/banner2.jpg" />
      </van-swipe-item>
    </van-swipe>
    <Nav />
    <div class="ad">
      <img src="@/assets/images/ad.jpg" />
    </div>
    <div class="weather">
      <p>{{weather.date_y}} {{weather.week}}  {{weather.city}} {{weather.temperature}}</p>
      <p class="dressing_advice">{{weather.dressing_advice}}</p>
    </div>
    <div class="recommend">
      <titleMoudle msg="新品上市" />
      <scrollGoodsList :goods="goods" />
    </div>
    <div class="goods-all">
      <titleMoudle msg="重点推荐" />
      <verticalGoodsList :goods="goods" />
    </div>
  </div>
</template>

<script>
import Nav from "../../components/nav.vue";
import titleMoudle from "../../components/titleMoudle.vue";
import verticalGoodsList from "../../components/verticalGoodsList.vue";
import scrollGoodsList from "../../components/scrollGoodsList.vue";
export default {
  name: "Index",
  components: {
    Nav,
    titleMoudle,
    verticalGoodsList,
    scrollGoodsList
  },
  data() {
    return {
      weather:{},
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
          url: "/product/details/4",
          title: "古币商品古币商品5",
          desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
          oldPrice: "￥216.00",
          nowPrice: "￥189.00"
        }
      ]
    };
  },
  created() {
    var _this=this
    _this.$axios.get(
        '/weather/index?cityname=%E5%B8%B8%E5%B7%9E&dtype=&format=&key=1a7a6003e80c845f8eaff77212064ed8'
      )
      .then(function(res) {
        _this.weather= res.data.result.today
        console.log(eval(res.data))
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
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
.flex-between {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.weather{width: 100%;background-color: #ffffff;margin-top: 5px;padding:10px 0;text-align: left;}
.weather p{width: 94%;margin: 0 auto;line-height: 20px; font-size: 12px;}
.dressing_advice{color: #999;}
.arrow {
  width: 14px;
  height: 14px;
  margin-top: 8px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #fff;
}

.indexPage .nav img {
  width: 40%;
}
.recommend,
.goods-all {
  width: 100%;
  padding-top: 10px;
  margin: 10px 0;
  background-color: #fff;
}
</style>