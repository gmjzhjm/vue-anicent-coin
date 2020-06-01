<template>
  <div class="classifyNav">
    <span v-for="(item,index) in classifyNavList" :key="index" @click="currentStyle(index)">
      {{item.text}}
      <em v-if="index==currentId"></em>
    </span>
  </div>
</template>

<script>
export default {
  name: "classifyNav",
  data() {
    return {
      currentId: 0,
      classifyNavList: [
        { classifyId: 0, text: "古币" },
        { classifyId: 1, text: "机制币" },
        { classifyId: 2, text: "纸币" },
        { classifyId: 3, text: "鉴定" },
        { classifyId: 4, text: "记账" },
        { classifyId: 5, text: "工具书" }
      ]
    };
  },
  methods: {
    currentStyle(id) {
      this.$emit("funTabClick", this.classifyNavList[id].classifyId);
      this.currentId = id;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.classifyNav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #ffffff;
  font-size: 12px;
  margin-top: 10px;
}
.classifyNav span {
  position: relative;
}
.classifyNav span em {
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: #8049fe;
  bottom: 2px;
  left: 0;
}
</style>