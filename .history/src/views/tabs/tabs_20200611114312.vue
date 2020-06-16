<template>
  <div class="tabs-content">
    <div class="mark">
      <el-tabs type="border-card">
      <div class="pagination fl"><div>({{sum1}})</div><div class="sum2">({{sum2}})</div><div>({{sum3}})</div></div>
        <el-tab-pane label="未读信息">
        
          <div v-for="(item,index) in tabs" :key="index">
            <div v-if="item.flag ===1">
              <div class="tabs-for fl j-between">
                <div class="mg-l20">{{item.text}}</div>
                <div class="fl">
                  <div>{{item.time}}</div>
                  <div>
                    <el-button size="small" class="el-btn" @click="flag(item)">标为已读</el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <el-button size="small" type="primary" class="el-all" @click="flag1()">全部标为已读</el-button>
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
                    <el-button size="small" type="danger" class="el-btn" @click="del(item)">删除</el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <el-button size="small" type="danger" class="el-all" @click="del1()">删除全部</el-button>
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
                    <el-button size="small" class="el-btn" type="warning" @click="restore(item)">还原</el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <el-button size="small" type="info" class="el-all" @click="empty()">清空回收站</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
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
          flag: 1
        },
        {
          text: "今晚11点整发大红包，先到先得",
          time: "2018-05-18 18:00:00",
          flag: 1
        },
        {
          text: "系统通知您的100元优惠卷即将过期,请尽快实用",
          time: "2018-06-19 19:00:00",
          flag: 1
        },
        {
          text: "今日特价,苹果、西瓜、葫芦娃、女神精病,不哟啊亲啊免费送",
          time: "2018-06-22 16:00:00",
          flag: 1
        },
        { text: "发红包了", time: "2019-12-13 12:02:45", flag: 1 },
        { text: "成都", time: "2019-12-13 12:02:45", flag: 2 },
        { text: "喜欢你", time: "2019-12-13 12:02:45", flag: 2 },
        { text: "南山南", time: "2019-12-13 12:02:45", flag: 2},
        { text: "冷雨夜", time: "2019-12-13 12:02:45", flag: 3 },
        { text: "红包已过期", time: "2019-12-13 12:02:45", flag: 3 }
      ],
      activeIndex: "1"
    };
  },
  methods: {
    // 点击标记之后把未读的放到已读里面
    flag(item){
      item.flag =2
    },
    // 标记全部 ，都放到已读
    flag1() {
      this.tabs.map(item =>{
        item.flag =2
      })
    },
    // 点击删除之后把已读的删除到回收站里面
    del(item){
      item.flag =3
    },
    // 删除全部 都放到回收站里
    del1(){
      this.tabs.map(item =>{
        item.flag =3
      })
    },
    // 点击还原之后把回收站的东西放到已读页面
    restore(item) {
      item.flag =2
    },
    // 清空回收站
    empty(){
      this.tabs = this.tabs.filter(item =>{
        return item.flag !=3
      })
    }
  },
  mounted() {},
  watch: {},
  computed: {
    sum1(){
      let num =0
      this.tabs.map(item =>{
        if(item.flag ===1){
          num++
        }
      })
      return  num
    },
    sum2(){
      let num =0
      this.tabs.map(item =>{
        if(item.flag ===2){
          num++
        }
      })
      return  num
    },
    sum3(){
      let num =0
      this.tabs.map(item =>{
        if(item.flag ===3){
          num++
        }
      })
      return  num
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
.el-tab-pane {
  position: relative;
}
.pagination {
  position: absolute;
  top: -1px;
  z-index: 999;
} 
.sum2 {
  margin: 0 30px 0 30px;
}
</style>