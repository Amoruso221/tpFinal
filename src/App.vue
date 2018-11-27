<template>
    <router-view/>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{}
  }
}
</script>

<style>
  * {
    margin: 0px;
    box-sizing: border-box;
  }

  html, body, .el-container, .el-aside, .tac.el-row, 
  .el-col.el-col-24, .el-menu-vertical-demo.el-menu,
  .el-main {
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
</style>
