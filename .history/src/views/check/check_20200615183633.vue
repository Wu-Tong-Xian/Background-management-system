<template>
  <div class="layout m0">
    <!-- 文章的查看页面 -->
    <div>
      <el-row>
        <el-button type="primary" size="mini" @click=goback>返回</el-button>
      </el-row>
    </div>
    <div class="check-head m0">
      <div class="m0 t-center"><h2>{{edit.title}}</h2> </div>
    </div>
    <div class="mg-t20 t-center" >摘要:{{edit.abstract}}</div>

    <div class="mg-t20 t-center">发表时间:{{edit.date}}</div>
   
    <div class="mg-t20 mg-l10">
      {{edit.text}}
    </div>
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
  // console.log(this.$route.query.edit);
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