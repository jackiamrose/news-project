<template>
 <div class='zhibo'>
 	<div class="content">
 		<div class='tj'>
 		   <h3>精彩推荐</h3>
 		</div>
	    <div class='liver'>
		  <ul>
			<li v-for='content in liveData'>
				<a :href="content.http" :title='content.data.title'>
					<div class='image'>
						<img :src="content.src" :alt="content.data.title" />
						<div class='mask'></div>
					</div>
					<div class='wrap-top1'>
						<h3 class='descontent'>{{content.data.title}}</h3>
						<span class='kind'>{{content.data.kind}}</span>
					</div>
					<div class='wrap-top2'>
						<div class='author'>
							<span>{{content.data.author}}</span>
						</div>
						<div class='number'>
							<span>{{content.data.number}}万</span>
						</div>
					</div>
				</a>
			</li>
		  </ul>
	    </div>
 	</div>
 </div>
</template>   
<style scoped>
  .zhibo{
  	margin:28px 0 41px 0;
  	
  	}
  	
  .content{
  	padding:0 8px;
  }
  	
  .tj{
  	
  	border-bottom:1px solid #ccc;
  }	
  
  .tj h3{
  	font-size:14px;
  	font-weight:700;
  	text-align: center;
  	line-height:32px;
  }
  
  li{
  	background-color: white;
  	width:30%;
  	margin:3px 0 5px;
  	margin-right:3%;
  	display:inline-block;
  }
  
  li:hover{
  	box-shadow: 0 2px 0 #999;
  }
  
  
  li a{
  	color:black;
  }
  
  li .wrap-top1,li .wrap-top2{
  	position:relative;
  	line-height:20px;
  	font-size:12px;
    color:#666
  }
  
  .image{
  	position:relative;
  }
  
  .image img{
  	width:100%
  }
  
  .wrap-top1 .descontent{
  	color:#333;
  	width:100px;
  	font-size:14px;
  	overflow: hidden;
  	text-overflow: ellipsis;
  	white-space: nowrap;
  }
  
  .wrap-top1 .kind{
  	color:#f00;
  	position:absolute;
  	right:0;
  	top:0;
  }
  
  li:hover .author{
  	color:#f00
  }
  
  .wrap-top2 .author span,.wrap-top2 .number span{
  	padding-left:20px;
  	display:inline-block;
  }
  
  .author span{
  	background:url(../../assets/images/num1.png) no-repeat;
  }
  
  .number{
  	position:absolute;
  	right:0;
  	top:0;
  }
  
  .number span{
  	background:url(../../assets/images/num2.jpg) no-repeat 0 -2px;
  }
  
  .mask{
  	width:100%;
  	height:100%;
  	position:absolute;
  	top:27%;
    left:0;
    z-index:-999;
    background:url(../../assets/images/bofang.png) no-repeat center center; 
    opacity:0.8;
  }
  
  li:hover .mask{
  	transition:all 0.1s linear;
  	top:0;
  	z-index:999;
  }
  
</style> 
<script>
export default {
   data(){
   	return{
   		liveData:[]
   	}
   },
   mounted(){
   	this.getData()
   },
   methods:{
   	getData(){
   		var _this=this;
   		$(function(){
   			$.ajax({
   				url:'src/assets/data/live.json',
   				dataType:'json',
   				async:true,
   				success:function(data){
   					_this.liveData=data
   				},
   				error:function(err){
   					console.log(err)
   				}
   			})
   		})
   	}
   }

}


</script>  