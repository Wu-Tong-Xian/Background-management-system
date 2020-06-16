<template>
  <div class="layout">
    <div class>
      <div v-for="(item,index) in Article" :key="index">
        <div class="fl">
          <div>
            <el-table
              ref="singleTable"
              :data="Article"
              highlight-current-row
              style="width: 100%"
            >
              <el-table-column label="#" type="index" width="50"></el-table-column>
              <el-table-column property="title" label="标题" width="120"></el-table-column>
              <el-table-column property="author" label="作者" width="120"></el-table-column>
              <el-table-column property="abstract" label="类目"></el-table-column>
              <el-table-column property="source" label="来源"></el-table-column>
              <el-table-column property="star" label="重要性"></el-table-column>
              <el-table-column property="date" label="发布时间"></el-table-column>
              <el-table-column  label="操作" width="120" class="fl">
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </el-table-column>
            </el-table>
          </div>
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
        :total="40"
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

      // 分页的默认页和当前页的条数
      currentPage: 1,
      sizeChange: 20,
     
    };
  },
  methods: {
    // - 获取所有文章: /article/allArticle (get请求)
    getallrticle() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          this.Article = res.data
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
</style>