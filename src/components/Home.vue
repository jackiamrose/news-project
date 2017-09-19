<template>
  <div class='ret'>
     <Slide></Slide>
     <ul>
      <li class='clearfix list' v-for='item  in data '>
           <div class='left'><img v-bind:src='item.url'></div>
           <div class='right'>
                <h3>{{item.title}}</h3>
                <p>{{item.content}}</p>
           </div>
      </li>
     </ul>
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
    	padding-bottom:3px;
    	width:100%;
    	margin-top:3px;
    	border-bottom:1px solid #999;
    	}
    	
    .left{
    	float:left;
    }
    
    	
		.left img{
			width:60px;
			height:60px;
		}
		
	  .right{
	  	padding-left:60px;
	  } 
    .right p{
    	margin-top:4px;
    	font-size:14px;
    	text-overflow: ellipsis;
    	overflow: hidden;
    	white-space: nowrap;
    	
		}
	

</style> 
<script>

import slide from './childrenComponents/Slide.vue'
export default {
    data(){
    	return{
    		data:[]
    	}
    },
    mounted(){
    	 this.getData();
    },
    methods:{
    	getData(){
    		var _this=this;
    		this.$http.get('src/assets/data/news.json').then((res) => {
    			_this.data = res.data;
    			
    		}).catch((err) => {console.log(err)})
    	}
    },
    components:{
      Slide:slide
    }

}


</script>  