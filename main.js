import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from "axios"

import router from "./router/router.js"
import bus from "./bus/bus.js"
import store from "./store/store.js"
// import VueAxios from 'vue-axios'
import { Swipe, SwipeItem } from 'vant'
import { Button } from 'vant'
import { Image } from 'vant'
import { Grid, GridItem } from 'vant'
import { Card } from 'vant'
import { Cell, CellGroup } from 'vant';
import { ActionSheet } from 'vant';
import { Uploader } from 'vant';
import { Field } from 'vant';
import { Calendar } from 'vant';
import { DatetimePicker } from 'vant';
import { Picker } from 'vant';
import { Popup } from 'vant';
import { Form } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Stepper } from 'vant';
import { SubmitBar } from 'vant';
import { Lazyload } from 'vant';

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});
Vue.use(SubmitBar);
Vue.use(Stepper);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Form);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(DatetimePicker);
Vue.use(Calendar);
Vue.use(Field);
Vue.use(Uploader);
Vue.use(ActionSheet);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Vuex)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Image)
Vue.use(Button)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Card)

Vue.prototype.$axios = axios
Vue.prototype.$bus = bus
Vue.config.productionTip = false

new Vue({
	el: "#app",
	store,
	router,
	render: h => h(App),
}).$mount('#app')
