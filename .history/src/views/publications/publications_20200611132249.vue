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
    return {
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    };
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