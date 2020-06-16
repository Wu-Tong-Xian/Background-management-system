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
        <el-table-column width="250" label="操作">
          <template slot-scope="scope">
            <div class="j-around fl">
              <!-- Form -->
              
                <el-button type="danger" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
             
              <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="商品" :label-width="formLabelWidth">
                    <el-input v-model="obj.NAME" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="原价" :label-width="formLabelWidth">
                    <el-input v-model="obj.ORI_PRICE" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="现价" :label-width="formLabelWidth">
                    <el-input v-model="obj.PRESENT_PRICE" autocomplete="off"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>

              <div>
                <el-button type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
              </div>
            </div>
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
      obj:{},
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
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
    handleEdit(index,row){
      this.dialogTableVisible=true
      this.obj=row
    },
    //  删除
    //  table自带的方法 然后找到id传过来  因为是后台数据就不用index了
    handleDelete(index, rows) {
      //这里的rows就代表当前点击项的所有内容 是一个对象所以不能用数组和字符串的方法
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.Article.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
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