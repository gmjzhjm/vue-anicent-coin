<template>
  <div class="verticalGoodsList">
    <ul>
      <li v-for="(item,index) in goods" :key="index" class="flex-between">
        <van-checkbox v-model="item.selected" @click="choosed(index)"></van-checkbox>
        <router-link to="#" class="flex-between">
          <div class="goodImg">
            <img :src="goods[index].img" />
          </div>
          <div class="goodInfo">
            <h1 class="goods-title">{{goods[index].title}}</h1>
            <p class="goods-desc">{{goods[index].desc}}</p>
          </div>
        </router-link>
        <p class="goos-bottom">
          <span class="goods-price">￥{{goods[index].price/100}}</span>
          <van-stepper v-model="goods[index].count" @plus="plus(index)" @minus="minusPrice(index)" /> 
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
      seletedNum:1
    }
  },
  methods:{
    choosed(index){
      this.$emit('clickChecked',this.goods[index].id)
    },
    plus(index){
      this.$emit('plusPrice',this.goods[index].id)
    },
    minusPrice(index){
      this.$emit('minusPrice',this.goods[index].id)
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
.flex-between{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  width: 92%;
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
  width: 55%;
  left: 42%;
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