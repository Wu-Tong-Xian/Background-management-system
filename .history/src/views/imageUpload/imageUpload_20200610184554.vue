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
     <div id="app" style="text-align: center">
    <img :src="defaultImage" style="width: 100px;height: 100px">
    <VueImageUploadCroppie :defaultImage.sync="defaultImage" :height="100" :width="100" :circle="true" :trans="trans"></VueImageUploadCroppie>
  </div>
 </div>
</template>

<script>
import VueImageUploadCroppi from 'vue-image-upload-croppie'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
        'defaultImage': '',
      'trans': { 
          'cropImage': '裁剪图片', 
          'chooseImage':'选择图片', 
          'confirmCutting': '确认裁剪'
      }
     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {
      'defaultImage': function(value) {
          if (value) {
            // do whatever you want with image value,(upload ..)
          }
      }
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