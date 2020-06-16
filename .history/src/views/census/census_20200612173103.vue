<template>
  <div class="layout">
    <div class="fl content">
      <div class="content1 fl j-center">
        <div class="t-center">
          <div>New visits</div>
          <div>{{5}}</div>
        </div>
        <img src="../../assets/人头像02.png" alt class="img" />
      </div>

      <div class="content2 fl">
        <div class="t-center">
          <div>messages</div>
          <div>{{5}}</div>
        </div>
        <img src="../../assets/信息.png" alt class="img" />
      </div>

      <div class="content3 fl">
        <div class="t-center">
          <div>purchases</div>
          <div>{{5}}</div>
        </div>
        <img src="../../assets/钱.png" alt class="img" />
      </div>
      <div class="content4 fl">
        <div class="t-center">
          <div>shopping</div>
          <div>{{5}}</div>
        </div>
        <img src="../../assets/购物车.png" alt class="img" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      allarticle: []
    };
  },
  methods: {
    //  - - 获取所有文章: /article/allArticle (get请求)  在做统计
    allArticle() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          // if(res.data.cood ===200 ){
          console.log(res.data.data);
          this.allarticle = res.data.data;
          // }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.allArticle();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-left: 50px;
}
.content {
  width: 100%;
  height: 50px;
  padding-bottom: 5px;
}
.content1 {
  width: 25%;
  
  background: #8375a3;
}
.content2 {
  width: 25%;

  background: #e88a87;
}
.content3 {
  width: 25%;

  background: #7ccabf;
}
.content4 {
  width: 25%;

  background: #9fcec1;
}
</style>