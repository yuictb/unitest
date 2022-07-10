import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const  store=new Vuex.Store({
	state:{
		pub:123
	},
	mutations:{
		changePub(state,n){
			state.pub=n
		}
	},
	actions:{
		
	}
})
export default store;