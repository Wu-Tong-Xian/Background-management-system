<template>
  <div class="layout">
    <div class>
      <div class="fl">
        <div>
          <el-table
            ref="singleTable"
            :data="Article.slice((currentPage-1)*sizeChange,currentPage*sizeChange)"
            highlight-current-row
            border
            style="width: 100%"
          >
            <el-table-column label="#" type="index" width="50"></el-table-column>
            <el-table-column property="title" label="标题" width="300"></el-table-column>
            <el-table-column property="author" label="作者" width="150"></el-table-column>
            <el-table-column property="category" label="类目" width="100"></el-table-column>
            <el-table-column property="source" label="来源" width="100"></el-table-column>
            <el-table-column property="star" label="重要性" width="100"></el-table-column>
            <el-table-column property="date" label="发布时间" width="300"></el-table-column>
            <el-table-column width="300" label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)" >删除</el-button>
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
    },
    
    // - 编辑文章: /article/update - post请求  - 参数:
      // id: 文章的id  title: 文章标题  abstract: 文章摘要    author: 作者
      //  category: 类目    source: 来源    star: 重要性       text: 文章内容  date: 发布时间
    handleEdit(index, row) {
      axios.post('/api/article/update',{
        
      }).then(res =>{
        console.log(res);
      }).catch(err =>{
        console.log(err);
      })
    },
    //  删除文章: /article/delete  - post请求 - 参数:   _id: 文章的_id 
    //  table自带的方法 然后找到id传过来  因为是后台数据就不用index了 
    handleDelete(ids) {
      axios.post('/api/article/delete',{_id:ids}).then(res =>{
        if(res.data.code===200){
          this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        });
         this.getallrticle()  //删除成功之后在重新调用获取文章的方法刷新
        }
      }).catch(err =>{
        console.log(err);
      })
    },
    // 查看
    handleClick(row) {
      console.log(row);
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
}
</style>