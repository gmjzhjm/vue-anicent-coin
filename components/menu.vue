<template>
  <div class="menu">
    <div class="padding-bottom"></div>
    <ul>
      <li v-for="(item,index) in menuList" :key="index">
        <router-link :to="item.url" :class="{active:item.url==currentStyle}">
          <img v-if="item.url==currentStyle" :src="item.iconCurrent" />
          <img v-else :src="item.icon" />
          <p>{{item.text}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    currentStyle: String
  },
  data() {
    return {
      menuList: [
        {
          url: "/index",
          icon: require("../assets/images/menu1.png"),
          iconCurrent: require("../assets/images/menu1_purple.png"),
          text: "首页"
        },
        {
          url: "/classify",
          icon: require("../assets/images/menu2.png"),
          iconCurrent: require("../assets/images/menu2_purple.png"),
          text: "分类"
        },
        {
          url: "/cart",
          icon: require("../assets/images/menu5.png"),
          iconCurrent: require("../assets/images/menu5_purple.png"),
          text: "购物车"
        },
        {
          url: "/news",
          icon: require("../assets/images/menu3.png"),
          iconCurrent: require("../assets/images/menu3_purple.png"),
          text: "头条"
        },
        {
          url: "/user/gmj",
          icon: require("../assets/images/menu4.png"),
          iconCurrent: require("../assets/images/menu4_purple.png"),
          text: "我的"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #000000;
}

.padding-bottom {
  padding-bottom: 50px;
}

.menu {
  width: 100%;
  height: auto;
  background-color: #ffffff;
}

.menu ul {
  position: fixed;
  z-index: 333333;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #ffffff;
  box-shadow: -1px -1px 15px #cccccc;
}

.menu ul li {
  padding: 5px 0;
}

.menu ul li img {
  height: 20px;
  width: 20px;
}

.menu ul li p {
  font-size: 12px;
}
.active {
  color: #8049fe;
}
</style>