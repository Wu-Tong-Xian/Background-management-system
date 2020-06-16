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
      <a class="btn" @click="toggleShow">上传头像</a>
      <!--组件主体-->
      <my-upload field="img" @crop-success="cropSuccess" v-model="show" :width="400" :height="200" img-format="jpg" :size="size"></my-upload>
      <img :src="avatar">
    </div>

 </div>
</template>

<script>
import 'babel-polyfill'
import myUpload from 'vue-image-crop-upload'
 export default {
   name: '',
   props: {
   },
   components: {
     "my-upload": myUpload
   },
   data () {
     return {
        avatar: "",  //用于存储剪切完图片的base64Data和显示回调图片
        show: false,  //剪切框显示和隐藏的flag
        size:2.1
     }
   },
   methods: {
      //控制剪切框的显示和隐藏
      toggleShow() {
        this.show = !this.show;
      },
      //剪切成功后的回调函数
      cropSuccess(imgDataUrl) {
        //  imgDataUrl其实就是图片的base64data码
        this.avatar = imgDataUrl;
        console.log(imgDataUrl)//这里打印出来的是base64格式的资源
    },
 
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
  #image{
    padding-top: 50px;
  }
  .btn{background-color: indianred;padding: 7px 12px;color: white;}
</style>