import Vue from 'vue'
import VueRouter from "vue-router"

import Home from "../components/home.vue"
import Index from "../pages/index/index.vue"
import phone from "../components/phone.vue"
import tablet from "../components/tablet.vue"
import computer from "../components/computer.vue"
import User from "../pages/user/index.vue"
import Product from "../pages/product/index.vue"
import productList from "../pages/productList/index.vue"
import orderState from "../pages/orderState/index.vue"
import Classify from "../pages/classify/index.vue"
import Details from "../pages/details/index.vue"
import Profile from "../pages/user/profile.vue"
import Communicate from "../pages/communicate/index.vue"
import cart from "../pages/cart/index.vue"
import buyStepOne from "../pages/buyStep1/index.vue"
import login from "../pages/login/index.vue"
import news from "../pages/news/index.vue"
Vue.use(VueRouter)

const routes = [{
	path:'/index',
	component:Index,
	meta:{menuShow:true}
},
{
	path: "/home",
	component: Home,
	meta:{menuShow:true},
	children: [{
		path: "phone",
		component: phone
	},
	{
		path: "tablet",
		component: tablet
	},
	{
		path: "computer",
		component: computer
	},
	{
		path: "",
		component: phone
	}
	]

},
{
	path: '/login',
	component: login,
	meta:{menuShow:false}
},
{
	path:'/productlist/:id',
	component:productList,
	meta:{menuShow:false}
},
{
	path:'/order/:id',
	component:orderState,
	meta:{menuShow:false}
},
{
	path: "/user/:id",
	component: User,
	meta:{menuShow:true}
},
{
	path: "/user/:id/profile",
	component: Profile,
	meta:{menuShow:false}
},
{
	path: "/product/:id",
	component: Product,
	meta:{menuShow:true}
},
{
	path: "/cart",
	component: cart,
	meta:{menuShow:true}
},
{
	path: "/buyStep1/:id",
	component: buyStepOne,
	meta:{menuShow:false}
},
{
	path: "/communicate/:id",
	component: Communicate,
	meta:{menuShow:true}
},
{
	path: "/classify",
	component: Classify,
	meta:{menuShow:true}
},
{
	path: "/product/details/:id",
	component: Details,
	meta:{menuShow:false}
},
{
	path: '/news',
	component: news,
	meta:{menuShow:true}
},
{
	path: '/',
	redirect: '/login'
}

]


var router = new VueRouter({
	mode: "history",
	scrollBehavior() {
		return {
			x: 0,
			y: 0
		}
	},
	routes
})
router.beforeEach((to, from, next) => {
	let token = localStorage.getItem('Authorization');
	
	if (to.path === '/login') {
		if(token === null || token == ''){
			next()
		}else{
			next('/index')
		}
	}else {
		next();		
	}
});
export default router