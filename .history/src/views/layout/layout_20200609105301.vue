<template>
 <div>
    
    <el-container>
      <el-header>欢迎来到<i>{{username}}</i>后台管理系统 </el-header>
      <el-container>
        <el-aside width="160px">
        <div class='fl'>
          <i class="el-icon-location-outline"></i>
          <div>首页</div>
        </div>
        <div class='fl'>
          <i class="el-icon-finished"></i>
          <div>已发布</div>
        </div>
        <div class='fl'>
          <i class="el-icon-s-order"></i>
          <div>统计</div>
        </div>
        <div class='fl'>
          <i class="el-icon-notebook-1"></i>
          <div>发表文章</div>
        </div>     
        <div class='fl'>
          <i class="el-icon-setting"></i>
          <div>发表文章</div>
        </div>
        <div class='fl'>
          <i class="el-icon-delete"></i>
          <div>导出excel</div>
        </div>
        <div class='fl'>
          <i class="el-icon-picture-outline"></i>
          <div>图片上传</div>
        </div>   
         <div class='fl'>
           <i class="el-icon-delete"></i>
           <div>退出登录</div>
         </div>
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
    line-height: 260px;
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