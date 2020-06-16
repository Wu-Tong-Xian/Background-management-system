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
         console.log(res);
       }).catch(err =>{
         console.log(err);
       })
     }
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
  
</style>