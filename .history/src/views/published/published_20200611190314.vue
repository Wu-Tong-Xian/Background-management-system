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
       Article:[]
     }
   },
   methods: {
      // - 获取所有文章: /article/allArticle (get请求)
       getallrticle(){
         axios.get("/api/article/allArticle").then(res =>{
          
          this.Article.arr =res.data.data
           console.log( this.Article);
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