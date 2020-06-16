<template>
 <div  class="btn-box fl j-between">
  <div class="order-box">
    <div class="order-titler  fl j-around ">
        <div>Order-no</div>
        <div>price</div>
        <div>status</div>
    </div>
    <div class="   " v-for="(item,index) in arr" :key="index">
      <div class="fl j-around order">
        <div class="fz14">{{item.num}}</div>
        <div class="fz14">￥{{item.price}}</div>
        <div v-if="item.status===0"><el-row> <el-button type="danger" plain>pending</el-button></el-row></div>
        <div v-if="item.status===1"><el-row> <el-button type="success" plain>success</el-button></el-row></div>
      </div>
    </div>
  </div>
  <div class="todolist">
  <!--todolist 头部  -->
      <div class="to-title fl j-around" >
        <div> ⬇ </div>
        <div>Todo List</div>
      </div>
  </div>
  <!-- 进度条: /progress (get请求) -->
  <div class="progress">
  
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
       arr:[],
       todolist:[
         
       ]
     }
   },
   methods: {
    //  订单: /orderData (get请求)
    getorder(){ 
      axios.get('/api/orderData').then(res =>{
        console.log(res.data);
        this.arr=res.data.data
      }).catch(err =>{
        console.log(err);
      })
    },
    // 进度条: /progress (get请求)
    getprogress(){
      axios.get('/api/progress').then(res =>{
      // console.log(res.data);
    }).catch(err =>{
      console.log(err);
    })
    }
    
   },
   mounted() {
     this.getorder()
     this.getprogress()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
  .btn-box {
    width: 100%;
    height: 496px;
     background: #F1F3F4;
     margin: 20px 0px 0px 0px;
  }
  .order-box {
    padding: 10px;
    width: 48%;
  }
  .order-t {
    border-bottom: 1pa solid rosybrown;
  }
  .order {
    background: #FFFFFF;
    margin-top: 3px;
    line-height: 50px;
  }
  .order-titler {
    padding-bottom: 15px;
    padding-top: 15px;
    background: #FFFFFF
  }
  .todolist {
    width: 24%;
    margin: 10px 10px 15px 10px;
    background: #FFFFFF
  }
  .progress {
    width: 24%;
    background: #FFFFFF;
    margin: 10px 10px 15px 10px;
  }
  .to-title {
    height: 50px;
    line-height: 50px;
    border-bottom:1px solid rosybrown ;
  }

</style>