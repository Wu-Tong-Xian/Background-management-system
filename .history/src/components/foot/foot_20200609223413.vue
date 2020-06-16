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
    <ve-line :data="chartData" ></ve-line>
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
       chartData: {
        //  columns 第一个数据时下面的日期 后两个时显示在上面的 要跟rows里面的数据名字对应（一样？）
          columns: ["data", "expected", "actual"],
          // rows 里面就是所有的数据  所以把通过请求拿到的数据赋值给他 就ok了
          rows: [     ]
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
         this.chartData.rows = res.data.data
      }).catch(err =>{
        console.log(err);
      })
    }
     
   },
   mounted() {
     this.gethomeData()
     this.gethomeChat()
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
     margin: 40px 20px 40px 20px;
   }
</style>