<template>
 <div class='zhibo'>
 	<div class="content">
 		<div class='tj'>
 		   <h3>精彩推荐</h3>
 		</div>
	    <div class='liver'>
		  <ul>
			<li v-for='content in liveData' :key="content.id">
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
  	padding:0;
  }
  
  .tj h3{
  	font-size:14px;
  	font-weight:700;
  	text-align: center;
  	line-height:32px;
  }
  
  .liver ul{
	display: -webkit-box; /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
	display: -moz-box; /* Firefox 17- */
	display: -webkit-flex; /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
	display: -moz-flex; /* Firefox 18+ */
	display: -ms-flexbox; /* IE 10 */
	display: flex; /* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
  }

  li{
	width:32%;  
	margin-bottom:10px;
  	background-color: white;
  }
  
  li a{
  	color:#000;
  }
  
  li .wrap-top1,li .wrap-top2{
  	position:relative;
  	line-height:20px;
  	font-size:12px;
    color:#666;
	white-space: nowrap;
  }
  
  li .image{
	position:relative;
	overflow:hidden;
  }

  li .image:hover img{
     transform:scale(1.1);
  }
  .image img{
	transition:all .5s linear;
  	position:relative;
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
  
  li .image:hover .mask{
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
   beforeCreate(){
			var _this = this;
			this.$http.get('src/assets/data/live.json')
						.then( data =>{
							_this.liveData = data.data
						}).catch(err => console.log(err))

   },
   mounted(){
   	
   },
   methods:{

   }

}


</script>  