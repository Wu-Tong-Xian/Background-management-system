<template>
  <!-- 已发布页面 -->
  <div class="layout">
    <div class>
      <div class="fl">
        <div >
          <el-table
          
            ref="singleTable"
            :data="Article.slice((currentPage-1)*sizeChange,currentPage*sizeChange)"
            highlight-current-row
            border
            style="width: 100%"
          >
             <el-table-column label="#" type="index" width="80"></el-table-column>
           <el-table-column property="title" label="名称" width="400"></el-table-column>
            <el-table-column property="author" label="商品编号" width="200"></el-table-column>
            <el-table-column property="category" label="原价" width="200"></el-table-column>
            <el-table-column property="source" label="现价" width="200"></el-table-column>
            <el-table-column width="250" label="操作" >
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
              </template>
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
import dayjs from "dayjs";
import axios from "axios";
export default {
  name: "edit",
  props: {},
  components: {},
  data() {
    return {
      // 接收请求拿到的数据
      Article: [],
      // 分页的两个默认页和条数
      currentPage: 1,
      sizeChange: 10,
      // 点击编辑之后跳转路由 这里应该把点击项全部存起来传参过去
      edit: [] //  用于接收编辑 和查看拿到的数据,
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
    },
    // 点击编辑之后跳转路由 这里应该把点击项全部存起来传参过去
    // - 编辑文章: /article/update - post请求  - 参数:
    // id: 文章的id  title: 文章标题  abstract: 文章摘要    author: 作者
    //  category: 类目    source: 来源    star: 重要性       text: 文章内容  date: 发布时间
    handleEdit(row) {
      axios
        .post("/api/article/update", {
          id: row._id,
          title: row.title,
          abstract: row.abstract,
          author: row.author,
          category: row.category,
          source: row.source,
          star: row.star,
          text: row.text,
          date: row.date
        })
        .then(res => {
          // console.log(res.data.data);
          // 把点击项的数据赋值给edit这个数组
          this.edit = res.data.data;
          //  跳转路由到edit并通过query传参传递的名字是自定义(edit),值是shis.edit
          this.$router.push({ name: "edit", query: { edit: this.edit } });
        })
        .catch(err => {
          console.log(err);
        });
    },
    //  删除文章: /article/delete  - post请求 - 参数:   _id: 文章的_id
    //  table自带的方法 然后找到id传过来  因为是后台数据就不用index了
    handleDelete(ids) {
      axios
        .post("/api/article/delete", { _id: ids })
        .then(res => {
          if (res.data.code === 200) {
            this.$message({
              message: "恭喜你，删除成功",
              type: "success"
            });
            this.getallrticle(); //删除成功之后在重新调用获取文章的方法刷新
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    
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
 
}
.el-table__footer-wrapper {
 margin: 0 auto;
  text-align: center;
  justify-content: center;
  margin-left: 20px;;
}
</style>