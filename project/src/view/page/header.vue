<template>

  <div class="mainHeader">
  <div class="header">
    <div class="left">
      <img src="../../assets/img/logo1.png" alt="">
      <div class="left-text">
        <div>
          赣之韵
        </div>
        <div>
          GANZHIYUN
        </div>
      </div>
    </div>
    <div class="right">
        {{rightText}}
    </div>
  </div>
  
  </div>


</template>
  <script>
  export default {
      data(){
          return{
              rightText:'永恒、珍惜、守信、奋斗、坚持、爱心',
              
          }
      },
      
  }
  </script>
<style>
.mainHeader .header{
    padding: 0.625rem 1.875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
  .mainHeader .header .left {
    display: flex;
    width: 150px;
    align-items: center;
    
  }
 .mainHeader .header .left-text{
      font-size: 1rem;
      font-weight: bolder;
      color: #1cfa2a;
  }

.mainHeader .header img {
    width: 3.125rem;
    height: 3.125rem;
  }
.mainHeader  .header .right{
      color: black;
      font-size: 0.875rem;
  }


</style>
