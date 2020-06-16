<template>
  <div>
    <div class="heade j-between fl">
      <div class="mg-l20">欢迎来到小爱后台管理系统</div>
      <div class="mg-r20">
      <span>
          <span v-if="hours>=0&&hours<6">该睡觉咯，亲</span>
          <span v-if="hours>=6&&hours<12">早上好</span>
          <span v-if="hours>=12&&hours<14">中午好</span>
          <span v-if="hours>=14&&hours<18">下午好</span>
          <span v-if="hours>=18&&hours<24">晚上好</span>
        </span>
      
      ,亲爱的{{username}},本次登录时间为{{time}}</div>
    </div>
    <div>
      <div class="dh">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              :default-active="$route.path"
              
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="/" class="">
                <i class="el-icon-location-outline"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-menu-item index="/published">
                <i class="el-icon-check"></i>
                <span slot="title">已发布</span>
              </el-menu-item>
              <el-menu-item index="/census" >
                <i class="el-icon-document"></i>
                <span slot="title">统计</span>
              </el-menu-item>
               <el-menu-item index="/publications" >
                <i class="el-icon-document"></i>
                <span slot="title">发表文章</span>
              </el-menu-item>
              <el-menu-item index="/tabs">
                <i class="el-icon-setting"></i>
                <span slot="title">标签页</span>
              </el-menu-item>
              <el-menu-item index="/export">
                <i class="el-icon-setting"></i>
                <span slot="title">导出excel</span>
              </el-menu-item>
              <el-menu-item index="/imageUpload">
                <i class="el-icon-picture-outline"></i>
                <span slot="title">图片上传</span>
              </el-menu-item>
              <el-menu-item index="/quit">
                <i class="el-icon-delete"></i>
                <span slot="title">退出登录</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      username:'',
      time:''  //
    };
  },
  methods: {
    chantime(){
      this.ho
    }
  },
  mounted() {
    this.username = localStorage.getItem("username");
    this.time = sessionStorage.getItem("time");   //获取存储的登录时间
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.heade {
  width: 100%;
  background: #2E5E85;
  height: 58px;
  line-height: 58px;
  color: rgb(241, 233, 233);
  letter-spacing:3px;
}
.dh {
  width: 25%; 
}
.el-menu-item {
  margin: 12px 0 12px 0;
}
</style>