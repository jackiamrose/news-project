<template>
  <div class='nav'>
      <ul>
          <router-link v-for="(item,index) in liveData" :key="item.id" tag="li" :to="item.path +'?index=' + index" @click.native="changeClass(index)">
              <a v-if="index !== liveData.length-1" :class="{activeClass:nowPage==index}">{{item.text}}</a>
							<a v-else><span class="icon"></span></a>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {
	props:{
		curPage:{
			type:Number
		}
	},
	computed:{
		nowPage:{
			set(){},
			get(){
				return this.curPage
			}	
		}
	},
  data(){
  return {
		liveData:[{text:'热点',path:'/home'},{text:'订阅',path:'/sub'},{text:'直播',path:'live'},{text:'',path:'/search'}],
    value:'',
    }
  },
  mounted(){
  
	},
	beforeCreate() {
		 
	},
  methods:{
  	changeClass(index){
			if(index==this.liveData.length-1) return;
			this.nowPage =  index;
		}
  }
}
</script>  
<style scoped>
	.nav{
	  position:fixed;
	  top:0;
	  width:100%;
		max-width:750px;
	  z-index:1000;
	  background: #f00;
	 }
	 	
   ul{
   	display:flex;
   	font-size:16px;
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