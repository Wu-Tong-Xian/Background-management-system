<template>
  <!-- 已发布页面 -->
  <div class="layout">
      <div class="fl table1-box">
          <el-table
            ref="singleTable"
            :data="Article.slice((currentPage-1)*sizeChange,currentPage*sizeChange)"
            highlight-current-row
            border
            style="width: 100%"
          >
             <el-table-column label="#" type="index" width="80"></el-table-column>
             <el-table-column property="NAME" label="名称" width="350"></el-table-column>
             <el-table-column property="GOODS_SERIAL_NUMBER" label="商品编号" width="250"></el-table-column>
             <el-table-column property="ORI_PRICE" label="原价" width="200"></el-table-column>
             <el-table-column property="PRESENT_PRICE" label="现价" width="200"></el-table-column>
             <el-table-column width="250" label="操作"  >
              <template slot-scope="scope" class=" j-around fl">
                <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button class="el-button" size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
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
      sizeChange: 20,
      // 点击编辑之后跳转路由 这里应该把点击项全部存起来传参过去
      edit: [] //  用于接收编辑 和查看拿到的数据,
    };
  },
  methods: {
   
    // - 表格数据: /tableData (get请求)
    getallrticle() {
      axios
        .get("/api/tableData")
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
    
    // - 编辑文章: 
    handleEdit(row) {
     
    },
    //  删除
    //  table自带的方法 然后找到id传过来  因为是后台数据就不用index了
    handleDelete(ids) {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          ids.splice()
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
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
  .el-button {
    margin-left: 40px;
  }

</style>