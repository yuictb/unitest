import App from './App'
import store from './store'
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
import uView from "uview-ui";
Vue.use(uView);
const app = new Vue({
    ...App,
	store
})
// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor.js'
// Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif