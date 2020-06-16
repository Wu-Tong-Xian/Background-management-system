<template>
 <div >

    <div>
      <div>
        <img src="../../assets/人头像02.png" alt="">
        <div></div>
        <div></div>
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

     }
   },
   methods: {
    //  计数器: /homeData (get请求)
     getdata(){
       axios.get('/api/homeData').then(res =>{
         console.log(res.data);
         if(res.data.code === 200){
           this.visits=res.data.visits
           this.messages=res.data.messages
           this.purchases=res.data.purchases
           this.visits=res.data.visits
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
  
</style>