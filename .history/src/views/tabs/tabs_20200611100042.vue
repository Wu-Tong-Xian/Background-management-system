<template>
  <div class="tabs-content">
    <div class="mark">
      <el-tabs type="border-card">
        <el-tab-pane label="未读信息">
          <div v-for="(item,index) in tabs" :key="index">
            <div v-if="item.flag ===1">
              <div class="tabs-for fl j-between">
                <div class="mg-l20">{{item.text}}</div>
                <div class="fl">
                  <div>{{item.time}}</div>
                  <div>
                    <el-button size="small" class="el-btn">标为已读</el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已读信息">
          <div v-for="(item,index) in tabs" :key="index">
            <div v-if="item.flag ===2">
              <div class="tabs-for fl j-between">
                <div class="mg-l20">{{item.text}}</div>
                <div class="fl">
                  <div>{{item.time}}</div>
                  <div>
                    <el-button size="small" class="el-btn">标为已读</el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="回收站">
          <div v-for="(item,index) in tabs" :key="index">
            <div v-if="item.flag ===3">
              <div class="tabs-for fl j-between">
                <div class="mg-l20">{{item.text}}</div>
                <div class="fl">
                  <div>{{item.time}}</div>
                  <div>
                    <el-button size="small" class="el-btn">标为已读</el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div>
          <el-button size="small" type="primary" class="el-all">全部标为已读</el-button>
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
      tabs: [
        {
          text: "系统通知，该系统将在今天凌晨2-5点进行系统维护进行维护升级",
          time: "2018-04-19 19:00:00",
          flag: 3
        },
        {
          text: "今晚11点整发大红包，先到先得",
          time: "2018-05-18 18:00:00",
          flag: 1
        },
        {
          text: "系统通知您的100元优惠卷即将过期,请尽快实用",
          time: "2018-06-19 19:00:00",
          flag: 2
        },
        {
          text: "今日特价,苹果、西瓜、葫芦娃、女神精病,不哟啊亲啊免费送",
          time: "2018-06-22 16:00:00",
          flag: 3
        },
        { text: "发红包了", time: "2019-12-13 12:02:45", flag: 1 },
        { text: "成都", time: "2019-12-13 12:02:45", flag: 1 },
        { text: "喜欢你", time: "2019-12-13 12:02:45", flag: 1 },
        { text: "南山南", time: "2019-12-13 12:02:45", flag: 2 },
        { text: "冷雨夜", time: "2019-12-13 12:02:45", flag: 2 },
        { text: "红包已过期", time: "2019-12-13 12:02:45", flag: 3 }
      ],
      activeIndex: "1"
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    num(){
      let sum =0
      this.tabs.map(item =>{
        
      })
    }
  }
};
</script>

<style scoped lang='scss'>
.mark {
  margin-bottom: 15px;
  width: 98%;
  border-bottom: 1px solid rgb(170, 168, 168);
}
.hover1:hover {
  width: 70px;
  border-bottom: 2px solid #409eff;
}
.tabs-content {
  margin: 35px 0 0 20px;
}
.tabs-for {
  width: 98%;
  height: 50px;
  background: #ffffff;
  line-height: 50px;
  border-bottom: 1px solid rgb(170, 168, 168);
}
.el-all {
  margin: 20px 0 20px 20px;
}
.el-btn {
  margin-left: 20px;
  margin-right: 20px;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>