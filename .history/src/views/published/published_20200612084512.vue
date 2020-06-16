<template>
 <div class="layout">
   <div class="">
   
   </div>
   <div class="block ">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="sizeChange"
      layout="total, sizes, prev, pager, next, jumper"
      :total="Article.length">
    </el-pagination>
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
       Article:[],
       currentPage: 1,
       sizeChange:20
     }
   },
   methods: {
      // - 获取所有文章: /article/allArticle (get请求)
       getallrticle(){
         axios.get("/api/article/allArticle").then(res =>{
          
          this.Article =res.data.data
           console.log( this.Article);
         }).catch(err =>{
           console.log(err);
         })
       },
       handleSizeChange(val) {
        //  获取当前一夜的条数
        this.sizeChange=val
      },
      handleCurrentChange(val) {
        // 获取当前页
        this.currentPage=val
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