<template>
 <div>
    <div class="upload">
      <div><h3>支持拖拽</h3><h6>Element自带组件</h6></div>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
    <div id="image">
      <!--上传图片的按钮-->
      <a class="btn" @click="toggleShow">设置头像</a>
      <!--组件主体-->
      <my-upload field="img" @crop-success="cropSuccess" v-model="show" :width="400" :height="200" img-format="jpg" :size="size"></my-upload>
      <img :src="avatar">
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
  .upload {
    margin: 30px 0 30px 30px;
  }
</style>