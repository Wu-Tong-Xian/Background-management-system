<template>
  <div>
    <div class="heade j-between fl">
      <div class="mg-l20">欢迎来到{{username}}后台管理系统</div>
      <div class="mg-r20">中午好,亲爱的{{username}},上次登录时间是</div>
    </div>
    <div>
      <div>
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
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
      username
    };
  },
  methods: {},
  mounted() {
    this.username = sessionStorage.setItem("username");
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.heade {
  width: 100%;
}
</style>