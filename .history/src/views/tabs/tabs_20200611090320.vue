<template>
 <div>
<!-- 标签页的三个子组件 未读 已读 回收站 -->
   <unreadMessage></unreadMessage>
   <readInformation></readInformation>
   <recycleBin></recycleBin>
 </div>
</template>

<script>
import unreadMessage from '../../components/tabsComponents/unreadMessage'
import readInformation from '../../components/tabsComponents/readInformation'
import recycleBin from '../../components/tabsComponents/recycleBin'
 export default {
   name: '',
   props: {
   },
   components: {
     unreadMessage,
     readInformation,
     recycleBin
   },
   data () {
     return {

     }
   },
   methods: {

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