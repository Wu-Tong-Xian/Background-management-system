<template>
  <div class="layout">
    <div class="fl content">
      <div class="content1 fl j-center">
        <div class="t-center">
          <div>今日信息</div>
          <div>{{22}}</div>
        </div>
        <img src="../../assets/人头像02.png" alt class="img" />
      </div>

      <div class="content2 fl j-center">
        <div class="t-center">
          <div>原创发布</div>
          <div>{{15}}</div>
        </div>
        <img src="../../assets/信息.png" alt class="img" />
      </div>

      <div class="content3 fl j-center">
        <div class="t-center">
          <div>新留言</div>
          <div>{{5}}</div>
        </div>
        <img src="../../assets/钱.png" alt class="img" />
      </div>
      <div class="content4 fl j-center">
        <div class="t-center">
          <div>新信息</div>
          <div>{{3}}</div>
        </div>
        <img src="../../assets/购物车.png" alt class="img" />
      </div>
    </div>
    <div class="census-box ">
      <div class="census-pie">
        <ve-pie :data="chartData1" ></ve-pie>
      </div>
      <div class="census-pie">
        <ve-pie :data="chartData2" :settings="chartSettings"></ve-pie>
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
    this.chartSettings = {
      roseType: "radius"
    };
    return {
     
      // 饼图
      chartData1: {
        //  columns 所有的图columns里面都是名字 不是值
       columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        
      },
      // 玫瑰图
      chartData2: {
         columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
      },
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
.census-pie {
  width: 300px;
  height: 300px;
}

</style>