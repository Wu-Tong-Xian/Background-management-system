<template>
 <div class="layout">
    <div class="fl j-between">
      <div class="content fl">
        <img src="../../assets/人头像02.png" alt="" class="img ">
        <div >
          <div>New visits</div>
          <div> {{5}}</div>
        </div>
      </div>

      <div class="content fl">
        <img src="../../assets/信息.png" alt="" class="img">
        <div >
          <div>messages</div>
          <div >{{5}}</div>
        </div>
      </div>
     
      <div class="content fl ">
        <img src="../../assets/钱.png" alt="" class="img">
        <div >
          <div>purchases</div>
          <div>{{5}}</div>
        </div>
      </div>
      <div class="content fl">
        <img src="../../assets/购物车.png" alt="" class="img">
        <div >
          <div>shopping</div>
          <div> {{5}}</div>
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
       allarticle:[]
     }
   },
   methods: {
    //  - - 获取所有文章: /article/allArticle (get请求)  在做统计
    allArticle(){
      axios.get('/api/article/allArticle').then(res =>{
        // if(res.data.cood ===200 ){
          console.log(res.data.data);
          this.allarticle =res.data.data
        // }
        
      }).catch(err =>{
        console.log(err);
      })
    }

   },
   mounted() {
     this.allArticle()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
  .img {
     width: 30px;
     height: 30px;
     margin-top: 10px;
   }
   .content {
     width: 22%;
     height: 50px;
     background: rgb(150, 218, 119);
   }
</style>