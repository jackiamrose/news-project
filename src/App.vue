<template>
  <div id="app">
     <head-nav v-show='headerShow'></head-nav>
     <transition >
          <keep-alive>
             <router-view class='animated slideInRight'></router-view>
          </keep-alive>
     </transition>
     <my-footer v-show='footerShow'></my-footer>
  </div>
</template>

<script>
import header from './components/Nav.vue';
import footer from './components/Footer.vue'


import home from './components/Home.vue'


import {mapGetters} from 'vuex'

export default {
  name: 'app',
  components:{
    headNav:header,
    myFooter:footer,
    Home:home
   },
   computed:mapGetters([
     'headerShow','footerShow'
   ]),
   watch:{
     $route(to){
       var path=to.path.substring(1);
       this.showChange(path);
     }
   },
   methods:{
      showChange(path){
         if(path === 'live' || path === 'sub' || path ==='home'){
             this.$store.dispatch('showHeader');
         }else if(path === 'info' || path === 'shequ' || path === 'play' || path === 'weizhi'){
         	   this.$store.dispatch('hideHeader');
         }
         
      },
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
        font-size: 100%;
        font-weight: normal;
        /*清除标题标签的默认样式*/
    }

    a {
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
        height: 100%;
        width: 100%;
       
    }

    html {
        font-size:20px;
        font-family: "Consolas", "微软雅黑";
        -webkit-tap-highlight-color: transparent;

    }
</style>
