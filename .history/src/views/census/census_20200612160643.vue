<template>
 <div>
  统计
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
       allarticle:[]
     }
   },
   methods: {
    //  - 获取所有文章: /article/allArticle (get请求)  在做统计
    allArticle(){
      axios.get('/api/article/allArticle').then(res =>{
        if(res.data.cood ===200 ){
          console.log(res.data);
          this.allarticle =res.data.data
        }
        
      }).catch(err =>{
        console.log(err);
      })
    }

   },
   mounted() {
     this. allArticle()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>