<template>
  <div class="layout">
    <div class>
      <div class="fl">
        <div>
          <el-table
            ref="singleTable"
            :data="Article.slice((currentPage-1)*sizeChange,currentPage*sizeChange)"
            highlight-current-row
            style="width: 100%"
          >
            <el-table-column label="#" type="index" width="50"></el-table-column>
            <el-table-column property="title" label="标题" width="300"></el-table-column>
            <el-table-column property="author" label="作者" width="150"></el-table-column>
            <el-table-column property="category" label="类目" width="100"></el-table-column>
            <el-table-column property="source" label="来源" width="100"></el-table-column>
            <el-table-column property="star" label="重要性" width="100"></el-table-column>
            <el-table-column property="date" label="发布时间" width="300"></el-table-column>
            <el-table-column label="操作" width="320" class="fl">
              <el-button type="primary" size="mini">编辑</el-button>
              <el-button type="danger" size="mini">删除</el-button>
              <el-button type="success" size="mini">查看</el-button>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!--分页-->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="sizeChange"
        layout="total, sizes, prev, pager, next, jumper"
        :total="Article.length"
      ></el-pagination>
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
      Article: [],

      currentPage: 1,
      sizeChange: 10
    };
  },
  methods: {
    // - 获取所有文章: /article/allArticle (get请求)
    getallrticle() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          this.Article = res.data.data;
          console.log(this.Article);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      //  获取当前一夜的条数
      this.sizeChange = val;
    },
    handleCurrentChange(val) {
      // 获取当前页
      this.currentPage = val;
    }
  },
  mounted() {
    this.getallrticle();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-table {
  margin: 0 auto;
  text-align: center;
  border: 1px solid rosybrown;
}
</style>