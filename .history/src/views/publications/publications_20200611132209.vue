<template>
  <div>
    <div class="heade fl j-between">
      <div></div>
      <div>
        <el-row>
          <el-button type="danger">查看</el-button>
          <el-button type="primary">发布</el-button>
        </el-row>
      </div>
    </div>
    <div>
      <div>
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
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
  margin: 35px 0 20px 20px;
  width: 97%;
  height: 50px;
  background: #59a586;
}
.el-button {
  margin: 5px 10px 0 0;
}
</style>