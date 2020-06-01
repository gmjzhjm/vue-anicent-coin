<template>
  <div class="buyStepOne">
    <titleBar msg="购买" />
    <div class="pb-40"></div>
    
  </div>
</template>

<script>
import titleBar from "../../components/titleBar.vue";

export default {
  name: "buyStepOne",
  components: {
    titleBar
  },
  data() {
    return {
     cartnum:0 
    }
  },
  methods: {
    cart(){
      console.log(this.cartnum)
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