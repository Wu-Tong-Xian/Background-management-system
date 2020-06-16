<template>
 <div class="layot">
    <div>
      
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
       edit:[]
     }
   },
   methods: {

   },
   mounted() {
    this.edit = this.$route.query.edit
    console.log(this.edit);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>