<template>
  <div class="btn" @click="clickfun">
    {{msg}}
  </div>
</template>

<script>
	export default {
		name: 'btn',
		props:{
			msg:String
    },
    methods:{
      clickfun(){
        this.$emit("funclick")
      }
    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{width: 80%;height: 30px;line-height: 30px;background-color: #c80202;margin-top: 5px;padding: 0 10px;border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;color: #ffffff;font-size: 13px;}
</style>
