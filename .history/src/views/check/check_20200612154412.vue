<template>
  <div class="layout">
    <!-- 文章的查看页面 -->
    <div>
      <el-row>
        <el-button type="primary" size="mini" @click=goback>返回</el-button>
      </el-row>
    </div>
    <div class="check-head m0">
      <div class="m0"><h2>{{edit.title}}</h2> </div>
    </div>
    <div>摘要:{{edit.abstract}}</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      edit:{}
    };
  },
  methods: {
    goback(){
      this.$router.go(-1)
    }
  },
  mounted() {
  this.edit =  this.$route.query.edit
  console.log(this.$route.query.edit);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.check-head {
  width: 100%;
  margin: 0 auto;
}
</style>