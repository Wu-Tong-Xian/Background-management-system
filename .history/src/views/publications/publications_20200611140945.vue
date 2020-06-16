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
      <div class="layout fl">
        <img src="../../assets/必填.png" alt class="tag" />作者：
        <el-input v-model="value" clearable placeholder="请选择">
          
        </el-input>
      </div>
      <div class="layout">
        <img src="../../assets/必填.png" alt class="tag" />类目：
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="layout">
        <img src="../../assets/必填.png" alt class="tag" />来源：
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="layout">
        <img src="../../assets/必填.png" alt class="tag" />重要性：
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="layout">
        
        <div class="block">
        <img src="../../assets/必填.png" alt class="tag" />发布时间：
          <el-date-picker
            v-model="valueitem2"
            align="right"
            type="date"
            placeholder="选择时间日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
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
      options1: [
        {
          value: "选项1",
          label: "Vue"
        },
        {
          value: "选项2",
          label: "React"
        },
        {
          value: "选项3",
          label: "Node.js"
        },
        {
          value: "选项4",
          label: "性能优化"
        },
        {
          value: "选项5",
          label: "JavaScript"
        },
        {
          value: "选项6",
          label: "小程序"
        },
        {
          value: "选项7",
          label: "工具类"
        },
        {
          value: "选项8",
          label: "其它"
        }
      ],
      options2: [
 
        {
          value: "选项1",
          label: "原创"
        },
        {
          value: "选项2",
          label: "转载"
        },
        {
          value: "选项3",
          label: "他人合作"
        }
        ],
      options3: [
        {
          value: "选项1",
          label: "1♥"
        },
        {
          value: "选项2",
          label: "2♥"
        },
        {
          value: "选项3",
          label: "3♥"
        }, 
        {
          value: "选项4",
          label: "4♥"
        }, 
        {
          value: "选项5",
          label: "5♥"
        }, 
        ],
      
      value: "",
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        valueitem1: '',
        valueitem2: '',
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
.tag {
  width: 16px;
}
</style>