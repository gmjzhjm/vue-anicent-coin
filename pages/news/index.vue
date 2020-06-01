<template>
  <div class="newsPage">
    <titleBar msg="新闻列表" />
    <div class="pt-40"></div>
    <lazy-component>
      <newsList :newsList="newsList" />
    </lazy-component>
    
  </div>
</template>

<script>
import newsList from "../../components/newsList.vue";
import titleBar from "../../components/titleBar.vue";
export default {
  name: "newsPage",
  components: {
    titleBar,
    newsList
  },
  data() {
    return {
     newsList:[]
    }
  },
  created() {
    var _this=this
    _this.$axios.get(
        "/toutiao/index?type=yule&key=ed847111ef8b1fad64806c3e8902dc8e"
      )
      .then(function(res) {
        _this.newsList= res.data.result.data
        console.log(_this.newsList)
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pt-40{padding-top: 40px;}
</style>