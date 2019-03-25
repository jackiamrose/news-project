<template>
 <div class="footer">
     <ul>
       <router-link :qid="index" v-for="(item,index) in iconData" @click.native="addClass(index)" :key="item.id" :to="item.path+'?index='+index" tag="li">
         <a>
           <img :src="curIndex === index?(baseUrl + 'red_'+ item.imageUrl):(baseUrl + item.imageUrl)"  :alt="item.title"/>
           <p>{{item.title}}</p>
         </a>
       </router-link>
     </ul>
   </div>
</template>   
<style scoped>
   .footer{
   position:fixed;
   bottom:0;
   z-index:1000;
   width:100%;
   max-width:750px;
   background-color:#f8f8f8;
   }
   
   ul{
   	width:100%;
   	display:flex;
   }

   ul li{
     flex:1;
   }

   a{
     color:#000000;
     display:block;
     font-size:80%;
   }

   li.router-link-active a{
       color:#f00
   }

   img{	
   width:20px;
   height:20px;
   position:relative;
   left:50%;
   margin-left:-10px;
   }

   p{
   text-align:center
   }
</style> 
<script scoped>
export default {
   data(){
     return{
       baseUrl:"./src/assets/images/",
       curIndex:-1,
       iconData:[
         {
           path:"/zixun",
           title:"资讯",
           imageUrl:"zixun.png",
         },
          {
            path:"/play",
           title:"视频",
           imageUrl:"play.png",

         },
         {
           path:"/weizhi",
           title:"深圳",
           imageUrl:"weizhi.png",

         },
         {
           path:"/shequ",
           title:"社区",
           imageUrl:"shequ.png",
         },
         {
           path:"/info",
           title:"我的",
           imageUrl:"my.png",

         }
       ]
     }
   },
   computed:{

   },
   mounted(){
       this.curIndex = Number(location.search.substring(1).match(/\S+(?=\=(\d*))/)[1]);
   },
   beforeCreate() {
     
   },
   created(){
      //this.$route.curIndex = 
   },
   methods:{
     addClass(index){
       if(index==0){
         
       }
       this.curIndex = index;
     }
     }
}


</script>  