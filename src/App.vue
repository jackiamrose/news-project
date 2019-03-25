<template>
  <div id="app">
     <head-nav v-show='headerShow' :cur-page="page" ></head-nav>
     <transition :name="slidename">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
     </transition>
     <my-footer v-show='footerShow'></my-footer>
  </div>
</template>

<script>
import headNav from './components/Nav.vue';
import myFooter from './components/Footer.vue'


import Home from './components/Home.vue'


import {mapGetters} from 'vuex'

export default {
  name: 'app',
  components:{
    headNav,
    myFooter,
    Home
   },
   data(){
      return {
       page:0,
       path : [] ,
       slidename : ""
      }
   },
   computed:mapGetters([
     'headerShow','footerShow'
   ]),
   watch:{
     $route(to,from){
       var pathname = to.path.substring(1);
       this.showChange(pathname);
       var toIndex = to.query.index;
       var fromIndex = from.query.index;
       //console.log(toIndex,fromIndex);
       this.slidename = toIndex > fromIndex ? 'slide-left' : 'slide-right';
     }
   },
   methods:{
      showChange(path){
         if(path === 'live' || path === 'sub' || path ==='home'){
             this.page = Number(location.search.substring(1).match(/\S+(?=\=(\d*))/)[1]);
             this.$store.dispatch('showHeader');
         }else if(path === 'info' || path === 'shequ' || path === 'play' || path === 'weizhi'){
         	 this.$store.dispatch('hideHeader');
         }else if(path === 'zixun') {
             this.$store.dispatch('showHeader');
             this.page = 0;
         }
         
      },
   },
   mounted(){
      this.page = location.pathname.substr(1);
      this.showChange(this.page);
      var arrPath = this.$router.options.routes; //this.$router对象VueRouter下的option.rountes可以拿到路由路径
      this.path = arrPath.slice(0,arrPath.length-1); 
   }

}
</script>

<style>
 body,
    div,
    dl,
    dt,
    dd,
    ul,
    ol,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    pre,
    form,
    fieldset,
    input,
    textarea,
    p,
    blockquote,
    th,
    td {
        margin: 0;
        padding: 0;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    fieldset,
    img {
        border: 0 none;
        /*有些浏览器默认这些标签有边框，所以要清除默认边框*/
        display: block;
    }

    address,
    caption,
    cite,
    code,
    dfn,
    em,
    i,
    u,
    b,
    strong,
    th,
    var {
        font-style: normal;
        font-weight: normal;
        /*清除标签默认文本样式和加粗*/
    }

    input,
    textarea {
        outline: 0 none;
        /*去掉文本框的默认轮廓线*/
    }

    ol,
    ul {
        list-style: none;
        /*清除列表默认样式*/
    }

    caption,
    th {
        text-align: left;
        /*清除标签默认文本居中对齐*/
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: normal;
        /*清除标题标签的默认样式*/
    }

    h1{
        font-size:24px;
    }
    h2{
        font-size:20px;
    }
    h3{
        font-size:18px;
    }
    h4{
        font-size:16px;
    }
    h5{
        font-size:14px;
    }
    h6{
        font-size:12px;
    }

    a,a:hover{
        text-decoration: none;
        /*大部分页面中的链接没有下划线*/
    }

    .clearfix:after {
        height: 0;
        content: " ";
        display: block;
        overflow: hidden;
        clear: both;
    }

    .clearfix {
        zoom: 1;
        /*IE低版本浏览器不支持after伪类所以要加这一句*/
    }
    /*控制第一层容器都是撑满全屏*/

    html,
    body {
        position:relative;
        overflow:hidden;
        height: 100%;
        width: 100%;
        max-width:750px;
        margin: 0 auto;
    }

    html {
        -webkit-overflow-scrolling: touch;
        -webkit-tap-highlight-color: transparent;
        -webkit-text-size-adjust: none;
        -webkit-touch-callout: none;
        -webkit-font-smoothing: antialiased;
    }

    .inner-container::-webkit-scrollbar {
        display: none;
    }   
    .slide-left-leave-active,.slide-left-enter-active{
        transition:all .5s linear;
        transform: translateX(0);
    }
    .slide-left-enter{
        transform:translateX(100%);
    }
    .slide-left-leave-to{
        transform:translateX(-100%);
        opacity:0;
    }

    .slide-right-leave-active,.slide-right-enter-active{
        transition:all .5s linear;
        transform: translateX(0);
    }
    .slide-right-enter{
        transform:translateX(-100%);
        opacity: 0
    }
    .slide-right-leave-to{
        transform:translateX(100%);
    }
    #app{
        height:100%;
        overflow-y:auto;
    }
    .content-wrap{
		margin:28px 0 41px 0;
        overflow-y:auto;
	}
</style>
