<template>
 <div  class="btn-box fl j-between">
  <div class="order-box">
    <div class="order-titler  fl j-around ">
        <div>Order-no</div>
        <div>price</div>
        <div>status</div>
    </div>
    <div class="   " v-for="(item,index) in list" :key="index">
      <div class="fl j-around order">
        <div class="fz14">{{item.num}}</div>
        <div class="fz14">￥{{item.price}}</div>
        <div v-if="item.status===0"><el-row> <el-button type="danger" plain>pending</el-button></el-row></div>
        <div v-if="item.status===1"><el-row> <el-button type="success" plain>success</el-button></el-row></div>
      </div>
    </div>
  </div>
  <div class="todolist">
  <!--todolist 头部  -->
      <div class="to-title fl j-around c-pointer" >
        <div  @click="inverse" :v-model="checkbox"> ⬇⬇ </div>
        <div>Todo List</div>
      </div>
      <div v-for="(item,index) in arr " :key='index' class="">
        <div class="x-box  fl  j-between mg-t20 c-pointer">
          <div class="fl">
            <input type="checkbox" class="ipt mg-t10 mg-l20" v-model="item.checked">
            <div class="mg-l20">{{item.name}}</div>
          </div>
          <div @click="del(item)" class="mg-r20 x-none">X</div>
        </div>
      </div>
      <div class="fl  j-around mg-t20 to-bottom c-pointer">
        <div class="to-bottom-text">{{num}} items left</div>
        <div class="to-bottom-text" @click='all'>All</div>
        <div class="to-bottom-text" @click="active">Active</div>
        <div class="to-bottom-text" @click="completed">Completed</div>
      </div>
  </div>
  <!-- 进度条: /progress (get请求) -->
  <div class="progress">
  <div><img src="../../assets/jdt.png" alt=""></div>
  <div v-for="item in progress " :key="item">
      <div class="fz12">{{item.name}}</div>
      <!-- <el-progress :percentage="Number(item.progress *100)" :format="format"></el-progress> -->
  </div>
    
    
  </div>
 </div>
</template>

<script>
  import axios from 'axios'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       list:[],  //盛放订单
       checkbox: false,
       arr1:[], //用作todolist的 未完成 和已完成单独展示数据
       progress:[], //盛放进度条
      arr: [
        {
          name: "star this repository",
          checked: false
        },
        {
          name: "fork this repository",
          checked: false
        },
        {
          name: "follow author",
          checked: true
        },
        {
          name: "vue-admin",
          checked: false
        },
        {
          name: "vue",
          checked: false
        },
        {
          name: "element-ui",
          checked: false
        },
        {
          name: "axios",
          checked: true
        },
        {
          name: "webpack",
          checked: true
        }
      ],
     }
   },
   methods: {
    //  订单: /orderData (get请求)
    getorder(){ 
      axios.get('/api/orderData').then(res =>{
        // console.log(res.data);
        this.list=res.data.data
      }).catch(err =>{
        console.log(err);
      })
    },
    // 进度条: /progress (get请求)
    getprogress(){
      axios.get('/api/progress').then(res =>{
      console.log(res.data.data);
      this.progress =res.data.data
    }).catch(err =>{
      console.log(err);
    })
    },

    // todolist的方法
    
    // 反选 反选效果
    inverse(){
       // 点击之后改变checkbox为相反的状态
      this.checkbox = !this.checkbox;
      // map循环通过v-model改变其他所有状态跟他一样
      this.tolist.map(item => {
        // 全选和全部选
        item.checked = this.checkbox;
        // 全选和反选  需要把上面checkbox为相反状态去掉
      // item.checked = ! item.checked
      })
    },
    //删除
    // 这里的items 时循环数组todolist的每一项 形参 任意名字都行 上面时实参（item）
    del(items){
     this.arr = this.arr.filter(item =>{
       return item !== items
     })
     this.arr1 =this.arr1.filter(item1 =>{
       return item1 !==items
     })
     
    },
    // 显示所有
    all(){
      this.arr=this.arr1.filter(item=>{
        return item
      })
    
    },
    // 未完成
    active(){
     this.arr=this.arr1.filter(item =>{
        return item.checked ===false
      })
    },
    // 已完成
    completed(){
      this.arr=this.arr1.filter(item =>{
        return item.checked ===true
      })
    },
    // 进度条
     format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      }
   },
   mounted() {
    //  页面加载在就把todolist的数据赋值给tolist
     this.arr1=this.arr
     this.getorder()
     this.getprogress()
   },
   watch: {

   },
   computed: {
     num(){
       let sum =0;
       this.arr.map(item =>{
         if(item.checked ===false){
           sum ++
         }
       })
       return sum
     }
   }
 }
</script>

<style scoped lang='scss'>
  .btn-box {
    width: 100%;
    height: 496px;
     background: #F1F3F4;
     margin: 20px 0px 0px 0px;
  }
  .order-box {
    padding: 10px;
    width: 48%;
  }
  .order-t {
    border-bottom: 1pa solid rosybrown;
  }
  .order {
    background: #FFFFFF;
    margin-top: 3px;
    line-height: 50px;
  }
  .order-titler {
    padding-bottom: 15px;
    padding-top: 15px;
    background: #FFFFFF
  }
  .todolist {
    width: 24%;
    margin: 10px 10px 15px 10px;
    background: #FFFFFF
  }
  .progress {
    width: 24%;
    background: #FFFFFF;
    margin: 10px 10px 15px 10px;
  }
  /* 下面时todolist  */
  .todolist {
    color: rgb(83, 78, 78);
  }
  .to-title {
    height: 50px;
    line-height: 50px;
    border-bottom:1px solid rosybrown ;
  }
  .x-none {
    display: none;
  }
  .x-box:hover{
    .x-none  {
    display: block;
    color: sandybrown;
  }
  }
  .to-bottom {
    padding-top: 10px;;
    border-top: 1px solid rgb(212, 182, 182);
  }
  .to-bottom-text:hover {
    border: 1px solid rgb(223, 75, 75);
    color: gold;
  }
</style>