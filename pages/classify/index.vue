<template>
  <div class="classify">
    <titleBar msg="产品分类" />
    <div class="pb-40"></div>
    <classifyNav @funTabClick="tabClick" />
    <div class="classify-goods" id="classifyGoods">
      <horizontalGoodsList :goods="goods" />
    </div>
  </div>
</template>

<script>
import titleBar from "../../components/titleBar.vue";
import classifyNav from "../../components/classifyNav.vue";
import horizontalGoodsList from "../../components/horizontalGoodsList.vue";
export default {
  name: "Classify",
  components: {
    titleBar,
    classifyNav,
    horizontalGoodsList
  },
  data() {
    return {
      goods: [
        {
          id: 0,
          img: require("../../assets/images/goodsImg1.jpg"),
          url: "/product/details/2",
          title: "古币商品古币商品1",
          desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
          oldPrice: "￥258.00",
          nowPrice: "￥199.00"
        }
      ]
    };
  },
  methods: {
    tabClick(classifyId) {
      var datas = [
        {
          classifyId: 0,
          goods: [
            {
              id: 0,
              img: require("../../assets/images/goodsImg1.jpg"),
              url: "/product/details/1",
              title: "古币商品古币商品1",
              desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
              oldPrice: "￥258.00",
              nowPrice: "￥199.00"
            }
          ]
        },
        {
          classifyId: 1,
          goods: [
            {
              id: 1,
              img: require("../../assets/images/goodsImg2.jpg"),
              url: "/product/details/2",
              title: "古币商品古币商品2",
              desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
              oldPrice: "￥358.00",
              nowPrice: "￥299.00"
            }
          ]
        },
        {
          classifyId: 2,
          goods: [
            {
              id: 2,
              img: require("../../assets/images/goodsImg3.jpg"),
              url: "/product/details/3",
              title: "古币商品古币商品3",
              desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
              oldPrice: "￥358.00",
              nowPrice: "￥299.00"
			},
			{
              id: 6,
              img: require("../../assets/images/goodsImg3.jpg"),
              url: "/product/details/6",
              title: "古币商品古币商品6",
              desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
              oldPrice: "￥358.00",
              nowPrice: "￥299.00"
            }
          ]
        },
        {
          classifyId: 3,
          goods: [
            {
              id: 3,
              img: require("../../assets/images/goodsImg4.jpg"),
              url: "/product/details/4",
              title: "古币商品古币商品4",
              desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
              oldPrice: "￥358.00",
              nowPrice: "￥299.00"
            }
          ]
        },
        {
          classifyId: 4,
          goods: [
            {
              id: 4,
              img: require("../../assets/images/goodsImg5.jpg"),
              url: "/product/details/5",
              title: "古币商品古币商品5",
              desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
              oldPrice: "￥358.00",
              nowPrice: "￥299.00"
            }
          ]
        },
        {
          classifyId: 5,
          goods: [
            {
              id: 5,
              img: require("../../assets/images/goodsImg3.jpg"),
              url: "/product/details/6",
              title: "古币商品古币商品6",
              desc: "古币商品描述古币商品描述古币商品描述古币商品描述",
              oldPrice: "￥358.00",
              nowPrice: "￥299.00"
            }
          ]
        }
      ];
      for (var i = 0; i < datas.length; i++) {
        if (datas[i].classifyId == classifyId) {
          this.goods = datas[i].goods;
        }
      }
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
.classify-goods {
  margin-top: 10px;
}
.pb-40{padding-bottom: 40px;}
</style>