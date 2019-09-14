<template>
    <div class="header">
      <div class="left">
        <img src="../assets/img/logo.png" alt="公司logo">
        <div class="left-text">{{companyName}}</div>
      </div>
      <div class="right">{{slogan}}</div>
    </div>
</template>
  <script>
  export default {
      data(){
          return{
            companyName:"广州赣之韵科技有限公司",
            slogan:'永恒、珍惜、守信、奋斗、坚持、爱心',
          }
      },
  }
  </script>
<style>
.header{
    display: flex;
    padding: auto 20px;
    height: 80px;
    line-height: 80px;
    justify-content: space-between;
    align-items: center;
}
  .header .left {
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
 .header .left-text{
      font-size: 1.8rem;
      font-weight: bolder;
      margin-left: 10px;
      color: #359b34;
  }

.header img {
  width: 64px;
  height: 64px;
  }
 .header .right{
      padding-right: 20px;
      color: black;
      font-size: 1.5rem;
      font-weight: bold;
      font-family: SourceHanSansSC;
  }


</style>
