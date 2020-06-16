<template>
 <div  class="btn-box">
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
       arr:[]
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
    }
   },
   mounted() {
     this.getorder()
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
    height: 400px;
     background: #F1F3F4;
     margin: 40px 0px 0px 0px;
  }
  .order-box {
    padding: 20px;
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
    
  }
</style>