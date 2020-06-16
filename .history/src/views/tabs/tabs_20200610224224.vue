<template>
 <div class="tabs-content">
   <div class="mark">
     <el-badge :value="3" class="item" type="primary">
       <el-button size="small">未读</el-button>
     </el-badge>
     <el-badge :value="1" class="item" type="warning">
       <el-button size="small">已读</el-button>
     </el-badge>
     <el-badge :value="2" class="item" type="warning">
       <el-button size="small">回收站</el-button>
     </el-badge>
   </div>
   <div class="">
     <div v-for="(item,index) in tabs" :key="index">
        <div class="tabs-for fl j-between">
          <div class="mg-l20">{{item.text}}</div>
           <div class="fl">
             <div>{{item.time}}</div>
             <div><el-button size="small" class="el-btn">标为已读</el-button></div>
           </div>
        </div>
     </div>
     <el-button size="small" type="primary" >全部标为已读</el-button></div>
   </div> 
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       tabs:[
         {text:'系统通知，该系统将在今天凌晨2-5点进行系统维护进行维护升级',
          time:'2018-04-19 19:00:00'},
          {text:'今晚11点整发大红包，先到先得',
          time:'2018-05-18 18:00:00'},
          {text:'系统通知您的100元优惠卷即将过期,请尽快实用',
          time:'2018-06-19 19:00:00'},
          {text:'今日特价,苹果、西瓜、葫芦娃、女神精病,不哟啊亲啊免费送',
          time:'2018-06-22 16:00:00'},
       ]
     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.mark {
  margin-bottom: 15px;
  width: 100%;
  border-bottom: 1px solid rgb(170, 168, 168);;
}
.tabs-content {
  margin: 35px 0 0 20px;
}
.tabs-for {
  width: 98%;
  height: 50px;
  background: #FFFFFF;
  line-height: 50px;
  border-bottom: 1px solid rgb(170, 168, 168);;
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