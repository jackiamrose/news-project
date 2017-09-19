<template>
 <div class="footer">
     <ul>
       <router-link to="/home"  tag="li">
         <a>
           <img src="../assets/images/red_zixun.png"  alt=""/>
           <img src="../assets/images/zixun.png" alt="" />
           <p>资讯</p>
         </a>
       </router-link>
       <router-link to="/play" tag="li">
         <a>
         <img src="../assets/images/red_play.png"  alt=""/>
         <img src="../assets/images/play.png"  alt="" />
         <p>视频</p>
         </a>
       </router-link>
       <router-link to="/weizhi" tag="li">
         <a>
         <img src="../assets/images/red_weizhi.png" alt="" />
         <img src="../assets/images/weizhi.png" alt=""/>
         <p>深圳</p>
         </a>
       </router-link>
       <router-link to="/shequ" tag="li">
         <a>
         <img src="../assets/images/red_shequ.png" alt="" />
         <img src="../assets/images/shequ.png" alt=""/>
         <p>社区</p>
         </a>
       </router-link>
       <router-link to="/info" tag="li"  >
         <a>
         <img src="../assets/images/red_my.png" alt="" />
         <img src="../assets/images/my.png" alt="" />
         <p>我的</p>
         </a>
       </router-link>
     </ul>
   </div>
</template>   
<style scoped>
  *{
   box-sizing: border-box
   };

   .footer{
   position:fixed;
   bottom:0;
   z-index:1000;
   width:100%;
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

   li:first-child a{
       color:#f00
   }

   img{	
   width:20px;
   height:20px;
   position:relative;
   left:50%;
   margin-left:-10px;
   }
   
   .footer li:first-child img:first-of-type{
   	display:block
   }
   
    .footer li:first-child img:last-of-type{
   	display:none
   }
   
    .footer li ~ li img:last-of-type{
   	display:block
   }
   
    .footer li ~ li img:first-of-type{
   	display:none
   }

   p{
   text-align:center
   }
</style> 
<script scoped>
export default {
   data(){
     return{}
   },
   mounted(){
   	this.setStyle();
   },
   methods:{
     setStyle(){
         $('.footer ul li').click(function(){
           $(this).find('img:first-of-type').show().end().find('img:last-of-type').hide();
           $(this).siblings().find('img:first-of-type').hide().end().find('img:last-of-type').show();
           $(this).find('a').css('color','#f00').end().siblings().find('a').css('color','#000000') 
           if($(this).index() == 0){
           	 $('.nav li a').attr('class','');
           	 $('.nav li a:eq('+$(this).index()+')').addClass('activeClass');
           	
           }
          })
       }
     }
}


</script>  