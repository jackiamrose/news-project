<template>
  <div class='ret' ref="bScroll">
     <Slide></Slide>
		 <div class="better-scroll">
			<ul>
				<li class='clearfix list' v-for='item  in data' :key="item.id">
						<div class='list-image'><img v-bind:src='item.url'></div>
						<div class='list-info'>
									<h4>{{item.title}}</h4>
									<p>{{item.content}}</p>
						</div>
				</li>
			</ul>
		 </div>
  </div>
</template>   
<style scoped>
		 .ret{
		 	margin:28px 0 41px 0;
		 	}
		 	
		 ul{
		 	padding:0 8px;
		 	}
	 	
    .list{
			position: relative;
			overflow:hidden;
    	padding:10px 0;
    	width:100%;
    	margin-top:3px;
    }

		.list:after{
			background: #dbdbdb;
			width:100%;
			height:1px;
			transform: scaleY(.5);
			position:absolute;
			bottom:0;
			left:0;
		}
    	
    .list-image{
    	float:left;
			margin-right:10px;
    }
    
    	
		.list-image img{
			width:60px;
			height:60px;
		}
		
	  .list-info{
			
	  } 
    .list-info p{
    	margin-top:4px;
    	font-size:14px;
    	text-overflow: ellipsis;
    	overflow: hidden;
    	white-space: nowrap;
    	
		}
	

</style> 
<script>
import Slide from './childrenComponents/Slide.vue';
import BScroll from 'better-scroll';

export default {
    data(){
    	return{
    		data:[]
    	}
		},
		beforeCreate(){
				var _this = this;
    		this.$http.get('src/assets/data/news.json').then( res => {
    			_this.data = res.data;
    		}).catch( err => {console.log(err)})
		},
    mounted(){
				if(!this.picScroll){
					this.picScroll = new BScroll(this.$refs.bScroll,{
						freeScroll:true,
						scrollX: true,
						eventPassthrough: 'vertical'
					})
				}else{
						this.picScroll.refresh();
				} 
    },
    methods:{
    },
    components:{
      Slide
    }

}


</script>  