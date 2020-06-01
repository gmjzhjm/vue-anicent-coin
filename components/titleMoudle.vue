<template>
  <div class="title">
    <h1><span></span>{{ msg }}</h1>
  </div>
</template>

<script>
	export default {
		name: 'titleMoudle',
		props: {
			msg: String
		}
	}
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
.title{width: 94%;margin: 0 auto; height: 20px;line-height: 20px;text-align: center;background-color: #ffffff;}
.title span{display: block;width: 2px;height: 14px;margin-top: 3px;background-color: #42b983;border-radius: 2px;float: left;margin-right: 6px;}
.title h1{font-size: 14px;color: #000000;font-weight: normal;float: left;}
</style>
