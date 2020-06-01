<template>
  <div class="cart">
    <titleBar msg="购物车" />
    <div class="pb-40"></div>
    <div class="cart-list">
      <shopGoods :goods="car" @clickChecked="chooseChecked" @plusPrice="addGoodsPrice" @minusPrice="minusGoodsPrice" />
    </div>
    <van-submit-bar :price="price" button-text="结算" @submit="onSubmit" class="bottom-distance">
      <van-checkbox v-model="checked" @click="allChoose">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import titleBar from "../../components/titleBar.vue";
import shopGoods from "../../components/shopGoods.vue";
export default {
  name: "cart",
  components: {
    titleBar,
    shopGoods
  },
  data() {
    return {
     cartnum:0,
     checked:true,
     price:0,
     goods:[
        {
          id: 0,
          img: require("../../assets/images/goodsImg1.jpg"),
          url: "/product/details/1",
          title: "古币商品古币商品1",
          desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
          selected:false,
          oldPrice: "258.00",
          nowPrice: 19900
        },
        {
          id: 1,
          img: require("../../assets/images/goodsImg1.jpg"),
          url: "/product/details/2",
          title: "古币商品古币商品2",
          desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
          selected:true,
          oldPrice: "348.00",
          nowPrice: 28934
        },
        {
          id: 2,
          img: require("../../assets/images/goodsImg2.jpg"),
          url: "/product/details/3",
          title: "古币商品古币商品3",
          desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
          selected:true,
          oldPrice: "389.00",
          nowPrice: 25923
        },
        {
          id: 3,
          img: require("../../assets/images/goodsImg3.jpg"),
          url: "/product/details/4",
          title: "古币商品古币商品4",
          desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
          selected:false,
          oldPrice: "158.00",
          nowPrice: 9934
        }
     ]
    }
  },
  computed:{
    car(){
      return this.$store.state.car
    }
  },
  watch:{
    allPrice:{
      handler:'carPrice',
      immediate:true
    }
  },
  methods: {
    chooseChecked(id){
      var _this=this
      var num
      for(let i=0;i<_this.car.length;i++){
        if(_this.car[i].id==id){
          num=i
        }
      }
     if(_this.car[num].selected){ 
        _this.checked=false
        _this.price = _this.price - _this.car[num].price*_this.car[num].count
        _this.car[num].selected=false
      }else{
        
        _this.price+=_this.car[num].price*_this.car[num].count
        _this.car[num].selected=true
      }
    },
    onSubmit(){
      console.log(this.checked1)
    },
    onClickEditAddress(){
      console.log(this.checked1)
    },
    allChoose(){
      if(this.checked){
        this.checked=false
        this.price=0
      }else{
        this.checked=true
        this.carPrice()
      }
      for(let i=0;i<this.car.length;i++){
        
        this.car[i].selected=this.checked
      }
    },
    carPrice(){
      var _this=this
      _this.price=0
      for(let i=0;i<_this.car.length;i++){
        _this.price+=_this.car[i].price*_this.car[i].count
      }
      
    },
    addGoodsPrice(id){
      var _this=this
      for(let i=0;i<_this.car.length;i++){
        if(_this.car[i].id==id){
          _this.price+=_this.car[i].price
        }
      }
      
    },
    minusGoodsPrice(id){
      var _this=this
      for(let i=0;i<_this.car.length;i++){
        if(_this.car[i].id==id){
          _this.price-=_this.car[i].price
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.classify-goods {
  margin-top: 10px;
}
.pb-40{padding-bottom: 40px;}
.cart-list{margin-top: 10px;}
.bottom-distance{bottom: 60px;}
</style>