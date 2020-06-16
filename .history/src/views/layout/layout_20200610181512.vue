<template>
  <div class="ceiling">
    <!-- 本页面为公共页面只写有头部和侧边栏部分 -->
    <!-- 头部开始 -->
    <div class="head">
      <div>欢迎来到Panda后台管理系统</div>
      <div>亲爱的{{name}}, 
      <span>
        <span v-if="hours <=6">夜深了，早点休息吧</span>
        <span v-if="hours >6 && hours<=12">早上好</span>
        <span v-if="hours >12 && hours<=14">中午好</span>
        <span v-if="hours >14 && hours<=18">下午好</span>
        <span v-else>晚上好</span>
      
      </span>
      本次登录时间为{{time}}</div>
    </div>
    <!-- 侧边栏开始 -->
    <div class="box">
      <div class="box-left">
        <el-row class="tac">
          <el-col>
            <el-menu
              :default-active="$route.path"
              router:true
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="/" @click="go('/')">
                <i class="el-icon-menu"></i>
                <span slot="title" >首页</span>
              </el-menu-item>

              <el-menu-item index="/published" @click="go('published')">
                <i class="el-icon-menu"></i>
                <span slot="title" >已发布</span>
              </el-menu-item>

              <el-menu-item index="/census" @click="go('census')">
                <i class="el-icon-menu"></i>
                <span slot="title" >统计</span>
              </el-menu-item>
              <el-menu-item index="/publications" @click="go('publications')">
                <i class="el-icon-menu"></i>
                <span slot="title" >发布文章</span>
              </el-menu-item>
              <el-menu-item index="/tabs" @click="go('tabs')">
                <i class="el-icon-menu"></i>
                <span slot="title" >标签页</span>
              </el-menu-item>
              <el-menu-item index="/export" @click="go('export')">
                <i class="el-icon-menu"></i>
                <span slot="title" >导出excel</span>
              </el-menu-item>
              <el-menu-item index="/imageUpload" @click="go('imageUpload')">
                <i class="el-icon-menu"></i>
                <span slot="title" >图片上传</span>
              </el-menu-item>
              <el-menu-item index="/quit" @click="go('quit')">
                <i class="el-icon-menu"></i>
                <span slot="title" >退出系统</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <!-- 这是子路由也是主页的内容，写在home中 -->
      <div class="box-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data() {
    return {
      name: "",
      time: "",
      hours:''
    };
  },
  components: {},
  methods: {
   go(path){
     this.$router.push(path)
   },
    getTime(){
      this.hours=dayjs().hour
    }
    
  },
  mounted() {
    this.name = localStorage.getItem("username");
    this.time = sessionStorage.getItem('time');
    this.getTime();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.ceiling {
  
}
.head {
  position: fixed;
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: aliceblue;
  background: rgb(46, 94, 133);
  overflow: hidden;
}
.head div {
  margin: 0 30px 0 30px;
}
.box-left {
  width: 10%;
  // height:720px;
  background: #545c64;
}
.box {
  display: flex;
}
.box-right {
  width: 100%;
  height: 540px;
  background: #F0F2F5;
}
</style>