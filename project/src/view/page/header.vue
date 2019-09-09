<template>

  <div class="mainHeader">
  <div class="header">
    <div class="left">
      <img src="../../assets/img/logo1.png" alt="">
      <div class="left-text">
        <div>
          广州赣之韵科技有限公司
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
    padding: 0.625rem 8.875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
  .mainHeader .header .left {
    display: flex;
    align-items: center;
    
  }
 .mainHeader .header .left-text{
   
      font-size: 1.5rem;
      font-weight: bolder;
      color: #359b34;
  }

.mainHeader .header img {
    width: 3.125rem;
    height: 3.125rem;
  }
.mainHeader  .header .right{
      color: black;
      font-size: 1.2rem;
      font-weight: bold;
  }


</style>
