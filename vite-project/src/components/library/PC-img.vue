<template>
<!-- 首页--精品家居 -->
  <div>
  <el-row :gutter="20">
    <el-col :span="12"><div class="grid-content bg-purple">
      <img src="@/assets/images/you_2021_09.png" alt="">
      </div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple">
      <img src="@/assets/images/you_2021_10.png" alt="">
      </div></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="10"><div class="grid-content bg-purple">
            <img src="@/assets/images/5fd483021b741.png" alt="">
      </div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple" >
            <img src="@/assets/images/5e60c917cc5c0.jpg" alt="">
      </div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple" >
            <img src="@/assets/images/5e60c8d4ecac2.jpg" alt="">
      </div></el-col>
  </el-row>
  </div>
 
</template>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.bg-purple {
  /* background: #d3dce6; */
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  /* background-color: #f9fafc; */
}
</style>
