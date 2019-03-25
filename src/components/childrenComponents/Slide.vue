	<!--
	$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	$$$$$$      $$$$$$$$$$$     $$$$$$$$        $$$$$$$$         $$$$
	$$$$   $$$$   $$$$$$$   $$$   $$$$$$   $$$$   $$$$$$   $$$$$$$$$$
	$$$   $$$$$$$$$$$$$$   $$$$$   $$$$$   $$$$$   $$$$$   $$$$$$$$$$
	$$$  $$$$$$$$$$$$$$$  $$$$$$$  $$$$$   $$$$$$  $$$$$        $$$$$
	$$$   $$$$$$$$$$$$$$   $$$$$   $$$$$   $$$$$   $$$$$   $$$$$$$$$$
	$$$$   $$$$   $$$$$$$   $$$   $$$$$$   $$$$   $$$$$$   $$$$$$$$$$
	$$$$$$      $$$$$$$$$$$     $$$$$$$$        $$$$$$$$         $$$$
	$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	-->
<template>
  <div class="slide-wrap">
			<div v-if="newsData.length">
				<swiper  :options="swiperOption" ref="mySwiper" >
        <swiper-slide v-for="item in newsData" :key="item.id">
					<img :src="baseUrl+item.newImageUrl" :alt="item.newTitle" />
					<div class="infomat">
						<h2>{{item.newTitle}}</h2>
						<p>{{item.newFrom}}</p>
					</div>
				</swiper-slide>
				<!-- <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide> -->
				<!-- Optional controls -->
				<div class="swiper-pagination"  slot="pagination"></div>
				<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
				<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
				<!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
			</swiper>	
			</div>
			
        <!-- <div class="swiper-wrapper">
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
        </div> -->
    </div>	 
</template>   
<style scoped>
    /* @import "~swiper/dist/css/swiper.css"; */
		.swiper-container,.swiper-wrapper {
        width: 100%;
				height:150px;
    }
    .swiper-slide {
    	position:relative;
	    text-align: center;
			height:100%;
    }
    
    .swiper-slide img{
			width:100%;
    	height:100%;
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
import {swiper,swiperSlide} from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
export default {
	name:'carousel',
	components:{swiper,swiperSlide},
	async beforeCreate(){
		const data = await this.$http.get("./src/assets/data/swiperData.json")
		this.newsData = data.data.newsData;
									
	},
	created(){
		console.log("created")
	},
	data () {
    return {
			 bool:true,
			 newsData:[],
			 baseUrl:"../../src/assets/images/",
       swiperOption: {  
				 	// init: false,
				  // notNextTick: true,
          //循环
          loop:true,
          
					//freemode:true,
          //左右点击
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
          //分页器设置         
          pagination: {
              el: '.swiper-pagination',
              clickable :true
          }
        },
        // swiperSlides: [1, 2, 3]
		}
	},
	beforeMount(){
		console.log('beforeMount')
	},
	mounted:function(){
		//this.fnSlide();
		//可以使用swiper这个对象去使用swiper官网中的那些方法  
     console.log('this is current swiper instance object', this.swiper);
      // this.swiper.slideTo(0, 0, false);
	},
	methods:{
		// fnSlide:function(){
		// 	$(function(){
		// 		 var swiper = new Swiper('.swiper-container', {
		//         pagination: '.swiper-pagination',
		//         paginationClickable: true,
		//         speed:2000,
		//         autoplay:2000,
		//         loop:true       
    // });
		// 	})
		// }
	},
	computed:{
		iswiper() {  
			console.log("computed")
      return this.$refs.mySwiper.swiper;  
    }
	},
	watch: {
		newsData() {
			console.log("watch")
			setTimeout(() => {
				this.iswiper.init();
			},2000) 
			
		}
	}
  
}


</script>  