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
      <div><i>*</i> 类目：
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
          label: 'Vue'
        }, {
          value: '选项2',
          label: 'React'
        }, {
          value: '选项3',
          label: 'Node.js'
        }, {
          value: '选项4',
          label: '性能优化'
        }, {
          value: '选项5',
          label: 'JavaScript'
        },{
          value: '选项6',
          label: '小程序'
        },{
          value: '选项7',
          label: '工具类'
        },{
          value: '选项8',
          label: '其它'
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
.i {
  color: red;
  font-size: 18px;
}
</style>