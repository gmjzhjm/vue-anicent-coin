<template>
  <div class="detailsPage">
    <titleBar :msg="goodsDetail.goodsTitle" />
    <div class="pb-40"></div>
    <div class="goods-details">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in goodsDetail.goodsPictures" :key="index">
          <img :src="item" />
        </van-swipe-item>
      </van-swipe>
      <div class="goods-info">
        <p class="goods-price white_bg page_width">{{goodsDetail.price}}</p>
        <p class="marketPrice white_bg page_width">
          市场价：
          <span>{{goodsDetail.marketPrice}}</span>
        </p>
        <div class="flex-between page_width white_bg pt-08">
          <p class="discount">店铺券满500减50</p>
          <p class="arrow-right" @click="popShow()">
            领券
            <img src="../../assets/images/arrow-right.png" />
          </p>
        </div>
        <p class="goods-title white_bg page_width">{{goodsDetail.goodsTitle}}</p>
      </div>
      <div class="goods-address white_bg">
        <p class="flex-between page_width pt-10">
          <span class="page_width_20 f-grey">发货</span>
          <span class="page_width_60">江苏常州<em>|</em>快递：0.00</span>
          <span class="page_width_20 f-grey text-align-right">月销129</span>
        </p>
        <p class="flex-between page_width pt-10">
          <span class="page_width_20 f-grey">保障</span>
          <span class="page_width_60">假一赔十 & 极速退款</span>
          <span class="page_width_20 f-grey text-align-right">
            <img src="../../assets/images/arrow-right.png" />
          </span>
        </p>
      </div>
      <div class="commend">
        <div class="mt-10 page_width white_bg f-12 pt-10 text-left flex-between">
          <h1 class="f-12 ">宝贝评价({{goodsDetail.commend.length}})</h1>
          <router-link class="color-red" to="/communicate/1">查看全部</router-link>
        </div>
        <div class="content">
          <p>
            <span class="c-name"><img :src="goodsDetail.commend[0].avator" />{{goodsDetail.commend[0].name}}</span>
            <span class="c-commend">{{goodsDetail.commend[0].message}}</span>
          </p>
        </div>
      </div>
      <div class="details">
        <h1 class="f-12 mt-10 page_width white_bg f-12 pt-10 text-left ">宝贝详情</h1>
        <div class="content">
          <p v-for="(item,index) in goodsDetail.goodsPictures" :key="index">
            <img :src="item" />
          </p>
        </div>
      </div>
      
    </div>
    <!--优惠券弹出框-->
    <popup :popTitle="popTitle" v-show="isPopShow" @popHideFun="popHide" />
    <!--添加购物车成功弹出框-->
    <popToast v-show="toastShow" :toast="toast" />
     
    <div class="pb-40"></div>
    <div class="fixed-bottom">
      <p class="love">
        <router-link to=""><img src="../../assets/images/kefu.png" /></router-link>
        <router-link to="/productlist/collect"><img src="../../assets/images/love.png" /></router-link>
        <router-link to="/cart"><img src="../../assets/images/cart.png" /></router-link>
      </p>
      <div class="operate-btn flex-between">
        <btn class="btn1" msg="加入购物车" @funclick="addCart()" />
        <btn class="btn2" msg="立即购买" @funclick="buyStepOne()" />
      </div>
    </div>
  </div>
</template>

<script>
import titleBar from "../../components/titleBar.vue";
import popup from "../../components/pop.vue";
import btn from "../../components/btn.vue";
import popToast from "../../components/popToast.vue";
export default {
  name: "goodsDetails",
  components: {
    titleBar,
    btn,
    popup,
    popToast
  },
  data() {
    return {
      isPopShow: false,
      show:false,
      toastShow:false,
      popTitle: "优惠",
      toast:[],
      goodsDetail: {
        id: 0,
        goodsTitle: "产品标题名称产品标题名称产品标题名称",
        desc:'商品描述',
        mainPic:require('../../assets/images/goodsImg1.jpg'),
        price: 32453,
        marketPrice: "￥199.00",
        commend: [
          { avator:require('../../assets/images/avator.jpg'),name: "user1", message: "很喜欢，特别有感觉" },
          { avator:require('../../assets/images/avator1.jpg'),name: "user2", message: "早就想要了，终于找到了，喜欢！" }
        ],
        goodsPictures: [
          require("../../assets/images/goodsImg1.jpg"),
          require("../../assets/images/goodsImg2.jpg"),
          require("../../assets/images/goodsImg3.jpg"),
          require("../../assets/images/goodsImg4.jpg"),
          require("../../assets/images/goodsImg5.jpg"),
          require("../../assets/images/goodsImg1.jpg")
        ]
      }
    };
  },
  methods: {
    showPopup(){
      this.show = true;
    },
    addCart() {
      
      var data=true;
      var _this=this
      //vuex保存加入购物车的商品id
      var goodsInfo = {
        img:_this.goodsDetail.mainPic,
        id: _this.goodsDetail.id,
        desc:_this.goodsDetail.desc,
        title:_this.goodsDetail.goodsTitle,
        count: 1,
        price: _this.goodsDetail.price,
        selected: true
      }
      console.log(goodsInfo)
      if(data){
        _this.toast=['加入购物车成功',require('../../assets/images/success.png')]
      }else{
        _this.toast=['加入购物车失败',require('../../assets/images/failed.png')]
       
      }
       _this.toastShow=true
      
      setTimeout(function(){
        _this.toastShow=false
      },3000)
      _this.$store.commit("addToCar", goodsInfo);
    },
    buyStepOne() {
      window.location.href="/buyStep1/"+this.goodsDetail.id
    },
    popShow() {
      this.isPopShow = true;
    },
    popHide() {
      this.isPopShow = false;
    }
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
.color-red{color: #c80202;}
a {
  color: #42b983;
}
.text-align-right {
  text-align: right;
}
.text-left{text-align: left;}
.f-grey {
  color: #999999;
}
.border-t{border-top: 1px solid #e6e6e6;}
.f-12{font-size: 12px;}
.flex-between {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.arrow-right img {
  width: 10px;
}
.detailsPage {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
}
.page_width {
  width: 94%;
  padding: 0 3%;
}
.white_bg {
  background-color: #fff;
}
.mt-10{
  margin-top: 10px;
}
.pt-10 {
  padding-top: 10px;
}
.pb-40 {
  padding-bottom: 40px;
}

.page_width_20 {
  width: 20%;
}
.page_width_40 {
  width: 40%;
}
.page_width_60 {
  width: 60%;
}
.pt-08 {
  padding-top: 8px;
}
.discount {
  width: auto;
  padding: 3px 5px;
  background-color: #fbd1b7;
  color: #c80202;
  font-size: 12px;
}
.arrow-right {
  color: #999999;
  font-size: 12px;
  padding: 3px 0;
}
.goods-title {
  height: 30px;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  color: #000;
  font-size: 14px;
  padding-bottom: 5px;
  padding-top: 5px;
}
.goods-price {
  color: #c80202;
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  padding-top: 10px;
}
.marketPrice {
  color: #999999;
  font-size: 12px;
  text-align: left;
  padding-top: 5px;
}
.marketPrice span {
  text-decoration: line-through;
}
.tabSlide {
  margin-top: 10px;
  height: 30px;
  line-height: 30px;
  border-top: 1px solid #8049fe;
  width: 100%;
  padding: 0;
  background-color: #8049fe;
}
.tabSlide p {
  float: left;
  font-size: 13px;
  padding: 0 20px;
  color: #fff;
}
.tabSlide p.current {
  color: #8049fe;
  background-color: #ffffff;
}
.content {
  background-color: #fff;
  width: 94%;
  padding: 0 3%;
  height: 100%;
  padding-top: 10px;
}
.content .c-name,
.content .c-commend {
  display: block;
  text-align: left;
}
.content .c-name img{float: left;width: 30px;border-radius: 15px;border: 1px solid #e6e6e6;box-sizing: border-box;margin-right: 5px;}
.content .c-name {
  line-height: 30px;
}
.content .c-commend {
  padding-top: 5px;
  padding-bottom: 10px;
  font-size: 12px;
  color: #666;
}
.goods-address {
  margin-top: 10px;
  width: 100%;
  text-align: left;
  font-size: 12px;
  padding-bottom: 10px;
}
.goods-address span img {
  width: 10px;
}

.fixed-bottom {
  width: 94%;
  padding: 0 3%;
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 33;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
}

.love img {
  width: 20px;float: left;margin-top: 10px;margin-right: 10px;
}
.btn1,.btn2{width: 80px;}
.btn1{border-radius: 0;border-top-left-radius: 15px;border-bottom-left-radius:15px;background-color:#dd9898;}
</style>