<template>
 <div >

    <div class="fl">
      <div class="content fl">
        <img src="../../assets/人头像02.png" alt="" class="img">
        <div>
          <div>New visits</div>
          <div>{{visits}}</div>
        </div>
      </div>

      <div class="content fl">
        <img src="../../assets/信息.png" alt="" class="img">
        <div>
          <div>messages</div>
          <div>{{messages}}</div>
        </div>
      </div>
     
      <div class="content fl">
        <img src="../../assets/钱.png" alt="" class="img">
        <div>
          <div>purchases</div>
          <div>{{purchases}}</div>
        </div>
      </div>
      <div class="content fl">
        <img src="../../assets/购物车.png" alt="" class="img">
        <div>
          <div>shopping</div>
          <div>{{shopping}}</div>
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
       visits:'',
       messages:'',
       purchases:'',
       shopping:'',
      //  上面是计数器定义的4个数据

     }
   },
   methods: {
    //  计数器: /homeData (get请求)
     getdata(){
       axios.get('/api/homeData').then(res =>{
         console.log(res.data.data.shopping);
         if(res.data.code === 200){
           this.visits = res.data.data.visits
           this.messages = res.data.messages
           this.purchases = res.data.purchases
           this.shopping = res.data.shopping
         }
       }).catch(err =>{
         console.log(err);
       })
     }
   },
   mounted() {
     this.getdata()
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
     
   }
   .content {
     width: 20%;
     height: 80px;
     background: rgb(160, 147, 147);
   }
</style>