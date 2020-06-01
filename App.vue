<template>
  <div id="app">
    <router-view></router-view>
    <Menu v-if="this.$route.meta.menuShow" :currentStyle="$route.path" />
  </div>
</template>

<script>
import Menu from "./components/menu.vue";
export default {
  name: "App",
  components: {
    Menu
  },
  data(){
    return {
      pagetitle:'watch测试'
    }
  }
};
</script>

<style>
*,
li,
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

img {
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>