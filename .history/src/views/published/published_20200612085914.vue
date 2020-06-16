<template>
  <div class="layout">
    <div class>
      <div v-for="(item,index) in Article" :key="index">
        <div class="fl">
          <div>
            <el-table
              ref="singleTable"
              :data="tableData"
              highlight-current-row
              style="width: 100%"
            >
              <el-table-column label="#" type="index" width="50"></el-table-column>
              <el-table-column property="date" label="标题" width="120"></el-table-column>
              <el-table-column property="name" label="作者" width="120"></el-table-column>
              <el-table-column property="address" label="类目"></el-table-column>
              <el-table-column property="address" label="来源"></el-table-column>
              <el-table-column property="address" label="重要"></el-table-column>
              <el-table-column property="address" label="发布"></el-table-column>
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
      sizeChange: 20,
      // 表格数据  一会就删掉
       tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: null
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
</style>