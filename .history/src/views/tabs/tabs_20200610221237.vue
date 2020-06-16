<template>
 <div class="tabs-content">
   <div>
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
   <div class="fl">
     <div class="fl j-between">
       <div></div>
       <div class="fl">
         <div></div>
         <div><el-button size="small">标为已读</el-button></div>
       </div>
     </div>
      
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
         {name:'系统通知，该系统将在今天凌晨2-5点进行系统维护进行维护升级',
          time:'2018-04-19 19:00:00'},
          {name:'系统通知，该系统将在今天凌晨2-5点进行系统维护进行维护升级',
          time:'2018-05-18 18:00:00'},
          {name:'系统通知，该系统将在今天凌晨2-5点进行系统维护进行维护升级',
          time:'2018-06-19 19:00:00'},
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
.tabs-content {
  margin: 40px 0 0 20px;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>