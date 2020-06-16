
    
<template>
 <div class="box">
  <div ><img src="../../assets/login3.jpg" alt="" class="bg-img"></div>
  <div class="login-box">
     <div class="textStyle">期待您的下次光临</div>
     <div class="quit" @click="quit"><el-row><el-button type="danger" >确定退出</el-button></el-row></div>
  </div>
  
</div>
</template>

<script>
  import axios from 'axios'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
 
     return {
       
     
     }
   },
   methods: {
      // - 退出登录: /user/logout (get请求)
      getlogout(){
        axios.get('/api/user/logout').then(res =>{
        console.log(res.data);
        if(res.data.code ===0){
          this.$message.sc();
        }
      }).catch(err =>{
        console.log(err);
      })
      },
     quit(){
       
     }
   },
   mounted() {
     this.getlogout()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
  .login-box {
    position: absolute;
    top:180px;
    left: 420px;
    margin: 0 auto;
    width: 400px;
    height: 300px;
    background: rgb(212, 221, 201);
    box-shadow: 0 0 10px rgb(174, 211, 170);
    opacity: 0.5;
  }
  .textStyle {
    font-size: 30px;
    border: 1px solid rgb(120, 172, 113);
    text-align: center;
  }

  .box {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .bg-img {
     width: 100%;
     height: 710px;
  }
  .loginbox {
    margin-left: 160px;
  }
  .quit {
    position: relative;
    left: 140px;
    top:80px
  }
</style>