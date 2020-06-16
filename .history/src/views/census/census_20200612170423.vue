<template>
 <div class="layout">
  21222
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
    
    allArticle(){
      axios.post('/api/api/article/create',{
        
      }).then(res =>{
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

</style>