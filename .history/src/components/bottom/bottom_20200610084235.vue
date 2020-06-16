<template>
 <div  class="btn-box">
    <div class="order">
       
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

     }
   },
   methods: {
    //  订单: /orderData (get请求)
    getorder(){ 
      axios.get('/api/orderData').then(res =>{
        console.log(res.data);
      }).
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