<template>
 <div>
   <div class="heade j-between fl">
     <div c>欢迎来到{{username}}后台管理系统</div>
     <div>中午好,亲爱的{{username}},上次登录时间是</div>
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
       username
     }
   },
   methods: {

   },
   mounted() {
   this.username =  sessionStorage.setItem('username')
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
  .heade {
    width: 100%;
  }
</style>