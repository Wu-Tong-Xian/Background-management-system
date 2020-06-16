<template>
 <div>
    
    <el-container>
      <el-header>欢迎来到<i>{{username}}</i>后台管理系统 </el-header>
      <el-container>
        <el-aside width="160px">
           <div>首页</div>
           <div>首页</div>
           <div>首页</div>
           <div>首页</div>
           <div>首页</div>
           <div>首页</div>
           <div>首页</div>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <router-view></router-view>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       username:''
     }
   },
   methods: {

   },
   mounted() {
    this.username = sessionStorage.getItem('username')
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-container {
    .el-aside {
      height: 800px;
    }
  }
</style>