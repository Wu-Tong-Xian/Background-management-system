<template>
  <div class="layout">
    <div class="fl content ">
      <div class="content1 fl">
        <div >
          <div>New visits</div>
          <div>{{5}}</div>
        </div>
        <img src="../../assets/人头像02.png" alt class="img" />
      </div>

      <div class="content2 fl">
        <div >
          <div>messages</div>
          <div>{{5}}</div>
        </div>
        <img src="../../assets/信息.png" alt class="img" />
      </div>

      <div class="content3 fl">
        <div >
          <div>purchases</div>
          <div>{{5}}</div>
        </div>
        <img src="../../assets/钱.png" alt class="img" />
      </div>
      <div class="content4 fl">
        <div >
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
  margin: 0 auto;
}
.content {
  width: 100%;
  height: 50px;
}
.content1 {
  width: 25%;
  text-align: center;
  background:  #8375A3;
}
.content2 {
  width: 25%;
  text-align: center;
  background: #E88A87;
}
.content3 {
  width: 25%;
  text-align: center;
  background: #7CCABF;
}
.content4 {
  width: 25%;
  text-align: center;
  background: #9FCEC1;
}
</style>