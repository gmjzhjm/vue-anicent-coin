<template>
  <div class="news">
    <div class="newsInfo" v-for="(item,index) in newsList" :key="index">
      <a :href="newsList[index].url" class="flex-between">
        <div class="thumbnail_pic_s">
          <img :src="newsList[index].thumbnail_pic_s" />
        </div>
        <div class="newsDetails">
          <h1 class="new-title">{{newsList[index].title}}</h1>
          <p class="new-date">{{newsList[index].date}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  props: {
    newsList: {
      type: Array,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-between{display: flex;flex-direction: row;justify-content: space-between;}
.newsInfo a{color: #333;font-size: 12px;margin-top: 10px;position: relative;}
.thumbnail_pic_s{width: 30%;}
.newsDetails{width: 65%;text-align: left;padding-left: 3%;padding-right: 2%;}
.new-title{font-size: 13px;}
.new-date{position: absolute;right: 10px;bottom: 10px;z-index: 2;color: #999;}
</style>