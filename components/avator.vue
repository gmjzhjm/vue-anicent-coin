<template>
	<div class="avator">
		<router-link to="/user/gmj/profile/">
			<p class="avator-pic"><img src="../assets/images/avator.jpg" /></p>
			<div class="avator-info">
				<p class="avator-name">{{dynamicSegment}}</p>
				<p class="avator-phone">18260052952</p>
			</div>
			<p class="arrow-right"><img src="../assets/images/arrow-right.png" /></p>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'avator',
		computed: {
			dynamicSegment() {
				return this.$route.params.id
			}
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
.avator{width: 94%;padding: 10px 0;margin: 0 auto; height: 100%;overflow: hidden;position: relative;}
.avator-pic{width: 60px;height: 60px;float: left;border-radius: 30px;overflow: hidden;border: 1px solid #e6e6e6;}
.avator-info{width: auto;float: left;padding-left: 10px;text-align: left;}
.avator-name{font-weight: 600;margin-top: 10px;color: #333333;}
.avator-phone{color: #8049fe;margin-top: 5px;font-size: 12px;}
.arrow-right{width: 15px;height: 15px;position: absolute;right: 10px;top: 35px;z-index: 2;}
.arrow-right img{width: 15px;}
</style>