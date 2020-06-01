import Vue from 'vue'
import Vuex from 'vuex';


Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car') || '[]')
const store = new Vuex.Store({
	state: {
		// 存储token
		Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
		car: car
	},
	mutations: {
		// 修改token，并将token存入localStorage
		changeLogin(state, user) {
			state.Authorization = user.Authorization;
			localStorage.setItem('Authorization', user.Authorization);
		},
		addToCar(state, goodsInfo) {
			var i = state.car.findIndex(item => item.id == goodsInfo.id)
			if (i == -1) {
				state.car.push(goodsInfo)
			} else {
				state.car[i].count += parseInt(goodsInfo.count)
				state.car[i].img = goodsInfo.img
				state.car[i].desc = goodsInfo.desc
				state.car[i].title = goodsInfo.title
				state.car[i].price = goodsInfo.price
				state.car[i].selected = goodsInfo.selected
			}
			localStorage.setItem('car', JSON.stringify(state.car))
		}
	}
})


export default store

