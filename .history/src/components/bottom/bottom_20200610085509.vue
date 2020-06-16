<template>
 <div  class="btn-box">
    <div class="order" v-for="(item,index) in arr" :key="index">
      <div>{{item.num}}</div>
      <div>{{item.price}}</div>
      <div v-if="item.status===0"></div>
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
        console.log(res.data.data);
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
    height: 300px;
     background: #F1F3F4;
     margin: 40px 0px 0px 0px;
  }
</style>