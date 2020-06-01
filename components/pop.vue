<template>
  <div class="popup">
    <div class="mask" @click="popClose"></div>
    <!-- 优惠券组件显示 开始-->
    <div class="popup-content">
      <h1>{{popTitle}}</h1>
      <p class="btn-close" @click="popClose">X</p>
      <h2>领券</h2>
      <coupon :coupon="couponList" v-if="popTitle=='优惠'" />
    </div>
    <!-- 优惠券组件显示 结束-->
  </div>
</template>

<script>
import coupon from "./coupon.vue";
export default {
  name: "popup",
  props: {
    popTitle: String
  },
  components: {
    coupon
  },
  data() {
    return {
      couponList: [
        {
          amount: 5,
          condition: "满50使用",
          expirationDate: "2020.04.04-2020.05.04"
        },
        {
          amount: 10,
          condition: "满100使用",
          expirationDate: "2020.04.04-2020.05.04"
        },
        {
          amount: 20,
          condition: "满200使用",
          expirationDate: "2020.04.04-2020.05.04"
        }
      ]
    };
  },
  methods: {
    popClose() {
      this.$emit("popHideFun");
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
.popup {
  width: 100%;
  height: 100%;
}
.popup .mask {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 333;
  background-color: #000;
  opacity: 0.6;
}
.btn-close {
  position: absolute;
  right: 10px;
  top: 15px;
  width: 20px;
  height: 20px;
  z-index: 334;
}
.popup .popup-content {
  position: fixed;
  width: 94%;
  padding: 10px 3%;
  height: auto;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3333;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.popup .popup-content h1 {
  font-size: 14px;
  padding: 5px 0;
}
.popup .popup-content h2 {
  font-size: 14px;
  color: #999;
  font-weight: normal;
  text-align: left;
  padding-bottom: 10px;
}
</style>
