<template>
  <div class='nav'>
      <ul>
          <router-link tag="li" to="/home">
              <a  class='activeClass'>热点</a>
          </router-link>
          <router-link tag="li" to="/sub">
              <a>订阅</a>
          </router-link>
          <router-link tag="li" to="/live" >
              <a>直播</a>
          </router-link>
          <router-link tag="li" to="/search">
              <a><span class='icon'></span></a>
          </router-link>
      </ul>
  </div>
</template>   
<style scoped>
	.nav{
	  position:fixed;
	  top:0;
	  width:100%;
	  z-index:1000;
	  background: #f00;
	 }
	 	
   ul{
   	display:flex;
   	font-size:18px;
   	
   	overflow: hidden;
   	padding-left:4px;
   	width:50%
   	}
   	
   ul:before,ul:after{
   	clear:both;
   	content:'';
   	height:0;
   	display:block;
   	}
   	
   li{
   	flex:1;
   	margin-right:3%;
   	}
   	
   	
   	
   li:last-child{
   	margin:0;
   	float:right;
   	width:30px;
   	}
   	
   a{
   	color:rgba(218,181,181,1);
   	padding-bottom:2px;
   	display:inline-block;
   	}
   	
   	.activeClass{
   		border-bottom:2px solid #ffffff;
   		color:#ffffff;
   	}
   	
   .icon{
   	width:20px;
   	height:20px;
   	position:absolute;
   	right:0;
   	top:3px;
   	background: url(../assets/images/搜索.png)  no-repeat;
   	}
   

</style> 
<script>
export default {
  data(){
  return {
    value:'',
    }
  },
  mounted(){
  	this.show();
  },
  methods:{
  	show:function(){
  		  $('.nav a').click(function(){
  			$('.nav a').attr('class','');
  	  	$(this).addClass('activeClass');
  	 })
  	}
  }
}


</script>  