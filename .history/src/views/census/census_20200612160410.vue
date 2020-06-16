<template>
 <div>
  统计
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
    //  - 获取所有文章: /article/allArticle (get请求)  在做统计
    allArticle(){
      axios.get('/api/article/allArticle').then(res =>{
        console.log(res.data);
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