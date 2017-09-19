<template>
  <div class="lunbo">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
            	<img src="../../assets/images/one.jpg" alt="解放军建军90周年大阅兵" />
            	<div class="infomat">
               <h2>解放军建军90周年大阅兵</h2>
               <p>中华新闻社</p>
              </div>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/images/two.jpg" alt="解放军建军90周年大阅兵" />
            	<div class="infomat">
               <h2>中国蓝盔：我们为和平而来 </h2>
               <p>央视网</p>
              </div>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/images/three.jpg" alt="解放军建军90周年大阅兵" />
            	<div class="infomat">
               <h2>反制措施升级！普京：美国外交人员必须离境</h2>
               <p>海外网</p>
              </div>
            </div>
        </div>
    </div>
  </div>	
  
</template>   
<style scoped>
		.swiper-container {
        width: 100%;
        height:100%;
    }
    .swiper-slide {
    	position:relative;
	    text-align: center;
    }
    
    .swiper-slide img{
    	width:100%;
    }
	
   .swiper-slide .infomat{
	   	position:absolute;
	   	bottom:0;
	   	left:0;
	   	background-color:black;
	   	opacity:0.5;
	   	width:100%;
	   	color:white;
   	}
   	
   .swiper-slide .infomat h2{
   	  font-size:14px;
   	}
   	
   .swiper-slide .infomat p{
   	  font-size:12px;
   	}
   	
</style> 
<script>
	 
    
   
export default {
	mounted:function(){
		this.fnSlide();
	},
	methods:{
		fnSlide:function(){
			$(function(){
				 var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        speed:2000,
		        autoplay:2000,
		        loop:true
        
    });
			})
		}
	}
  
}


</script>  