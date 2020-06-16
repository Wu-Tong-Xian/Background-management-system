<template>
 <div >

    <div class="fl j-between">
      <div class="content fl">
        <img src="../../assets/人头像02.png" alt="" class="img ">
        <div class="mg-t20">
          <div>New visits</div>
          <div> {{obj.visits}}</div>
        </div>
      </div>

      <div class="content fl">
        <img src="../../assets/信息.png" alt="" class="img">
        <div class="mg-t20">
          <div>messages</div>
          <div >{{obj.messages}}</div>
        </div>
      </div>
     
      <div class="content fl ">
        <img src="../../assets/钱.png" alt="" class="img">
        <div class="mg-t20">
          <div>purchases</div>
          <div>{{obj.purchases}}</div>
        </div>
      </div>
      <div class="content fl">
        <img src="../../assets/购物车.png" alt="" class="img">
        <div class="mg-t20">
          <div>shopping</div>
          <div> {{obj.shopping}}</div>
        </div>
      </div>
    </div>
    <!-- 折线图: /homeChat (get请求)-->
    <div>
      <ve-line :data="chartData1" ></ve-line>
    </div>
    <div class='box-data2 fl'>
      <!-- - 雷达图: /radarChat (get请求) -->
      <div class="Data2">
        <ve-radar :data="chartData2"></ve-radar>
      </div>
      <!-- - - 饼图: /ringChat (get请求) -->
      <div class="Data2">
        <ve-pie :data="chartData3"></ve-pie>
      </div>
      <!-- 柱状图: /homeData (get请求) 数据跟曲线图一样-->  
      <div class="Data2">
        <ve-histogram :data="chartData4"></ve-histogram>
      </div>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       obj:{},
      //  上面是计数器定义的4个数据
      // 曲线图
       chartData1: {
        //  columns 第一个数据时在下面的日期  后两个时显示在上面也是途中的数据信息 都是数据拿到的所以要跟rows里的数据名一样
          columns: ["date", "expected", "actual"],
          rows: [         ]
        },
        // 雷达图
        chartData2: {
        //  columns 所有的图columns里面都是名字 不是值
          columns: ["name", "sales", "ministration","techology","delelopmer","marketing"],
          rows: [         ]
        },
        // 饼图
        chartData3: {
        //  columns 所有的图columns里面都是名字 不是值
          columns: ["name", "data"],
          rows: [         ]
        },
        // 柱状图
        chartData4: {
        //  columns 第一个数据时在下面的日期  后两个时显示在上面也是途中的数据信息 都是数据拿到的所以要跟rows里的数据名一样
          columns: ["date", "expected", "actual"],
          rows: [         ]
        }
     }
   },
   methods: {
    //  计数器: /homeData (get请求)
     gethomeData(){
       axios.get('/api/homeData').then(res =>{
        //  console.log(res.data);
         this.obj =res.data.data
         
       }).catch(err =>{
         console.log(err);
       })
     },
    //  - 折线图: /homeChat (get请求)
    gethomeChat(){
      axios.get('/api/homeChat').then(res =>{
        // console.log(res.data.data);
         this.chartData1.rows = res.data.data
         this.chartData4.rows = res.data.data
      }).catch(err =>{
        console.log(err);
      })
    },
     //  - 雷达图: /radarChat (get请求)
    getradarChat(){
      axios.get('/api/radarChat').then(res =>{
        // console.log(res.data.data);
         this.chartData2.rows = res.data.data
      }).catch(err =>{
        console.log(err);
      })
    },
    //  - - 饼图: /ringChat (get请求)
    getringChat(){
      axios.get('/api/ringChat').then(res =>{
        // console.log(res.data.data);
         this.chartData3.rows = res.data.data
      }).catch(err =>{
        console.log(err);
      })
    },
     
   },
   mounted() {
     this.gethomeData()  //计数器
     this.gethomeChat()  //折线图
     this.getradarChat() //雷达图
     this.getringChat()  //饼图
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
   .img {
     width: 40px;
     height: 40px;
     margin-top: 20px;
   }
   .content {
     width: 22%;
     height: 80px;
     background: rgb(160, 147, 147);
     justify-content: space-around;
     margin: 40px 20px 0px 20px;
   }
   .Data2 {
     width: 30.33%;
   }
   .box-data2 {
     margin-top: 20px;
     width: 100%;
     background: #F1F3F4;
   }
</style>