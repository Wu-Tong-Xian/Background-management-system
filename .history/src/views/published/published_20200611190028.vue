<template>
 <div>
  已发布
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
      //  Article:[]
     }
   },
   methods: {
      // - 获取所有文章: /article/allArticle (get请求)
       getallrticle(){
         axios.get("/api/article/allArticle").then(res =>{
           if(res.data.cood ===200){
            //  this.Article =res.data.data
             console.log(res.data.data); 
           }
         }).catch(err =>{
           console.log(err);
         })
       }
   },
   mounted() {
     this.getallrticle()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>