import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import Mint from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'mint-ui/lib/style.css';

Vue.use(VueRouter);
Vue.use(Mint);
Vue.use(VueAwesomeSwiper);


import App from './App.vue' //主页
import routes from './routerConfig.js' //引入路由
import store from './store/index.js' //引入状态管理器


const router=new VueRouter({
  mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes
});

Vue.prototype.$http = axios;
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
/*
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  stores.dispatch('showLoading')
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  stores.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});

*/
/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*//*

//axios.defaults.baseURL='http://localhost:8081/';
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了

*/
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
