<template>
  <div class="main">
    <div class="account">
          <ul>
           <li class="login">
               <span>登录账号<i>&gt;</i></span>
           </li>
           <li class="register">
                <span>注册账号<i>&gt;</i></span>
           </li>
          </ul>
    </div>
    <div>
      <ul>
        <li>消息中心<i class="arrows">&gt;</i></li>
        <li>推送资讯<i class="arrows">&gt;</i></li>
        <li>积分商城<i class="arrows">&gt;</i></li>
        <li>活动中心<i class="arrows">&gt;</i></li>
      </ul>
    </div>
    <div>
        <ul>
          <li>设置<i class="arrows">&gt;</i></li>
          <li>问题与建议<i class="arrows">&gt;</i></li>
          <li>检测更新<i class="arrows">&gt;</i></li>
          <li>关于<i class="arrows">&gt;</i></li>
        </ul>
    </div>
   </div>
</template>   
<style scoped>
       .main {
           background-color:#f8f8f8
       }
       .main div{
           background-color:#ffffff
       }

       .login {
           display: flex;
           flex-direction: column;
           flex: 4;
       }

       .login span:first-child .register span:first-child{
            font-size: 16px;
       }

       .login span:last-child .register span:last-child{
           font-size: 16px;;
       }

       ul{
          padding: 0 20px;
          margin-bottom:10px;
       }
       ul:first-child{
           margin-bottom:20px;
       }

       ul li {
           padding: 4 0;
           font-size: 18px;
           border-bottom: 1px solid rgba(1, 1, 1, .1);
           line-height: 40px;
       }

        ul li:last-child {
           border-bottom: none;
       }

</style> 
<script>
export default {
   

}


</script>  