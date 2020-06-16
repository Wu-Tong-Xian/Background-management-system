<template>
  <div>
    <div class="heade fl">
      <el-row>
        <el-button type="success" disabled>查看</el-button>

        <el-button type="danger" disabled>发布</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>
  
<style scoped lang='scss'>
  .heade {
    margin:35px 0 20px 20px;
    width: 97%;
    height: 60px;
    background:#59A586 ;
  } 
</style>