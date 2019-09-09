<template>
  <div class="home">
    <div class="scroll">
      <el-carousel height="26vw">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="middle">
      <div class="left">
        <div class="header-btn">
          <el-radio-group v-model="messageShow" style="margin-bottom: 30px;">
            <el-radio-button label="false">公司新闻</el-radio-button>
            <el-radio-button label="true">行业新闻</el-radio-button>
          </el-radio-group>
          <div class="left-message">
            <div class="message1" v-if="messageShow==='false'">
              <div v-for="(item,index) in companyMes" :key="index">
                <img src="../../assets/img/new.png" alt="">
                <span>{{item.title}}</span>
              </div>
            </div>
            <div class="message1" v-else>
              <div v-for="(item,index) in industryMes" :key="index">
                <img src="../../assets/img/new.png" alt="">
                <span>{{item.title}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="Title">高管简介</div>
        <div class="rightContain">
          <div class="executiveInformation" v-for="(item,index) in executiveInformation" :key="index">
            <img :src="item.src" alt="">
            <div>{{item.name}}</div>
            <div class="detailMsg">{{item.msg}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="Title">
        驾培生态产品及服务
      </div>
      <div class="serviceContain">
        <div class="serviceInformation" v-for="(item,index) in serviceData" :key="index">
          <img :src="item.src" alt="">
          <div>{{item.title}}</div>
          <div v-for="data1 in item.msg">{{data1.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        messageShow: 'false',
        companyMes: [{
          title: '江西软件职业技术大学举办本科层次教育思想学习研讨班'
        }, {
          title: '江西软件职业技术大学举办本科层次教育思想学习研讨班'
        }, {
          title: '江西软件职业技术大学举办本科层次教育思想学习研讨班'
        }, {
          title: '江西软件职业技术大学举办本科层次教育思想学习研讨班'
        }, {
          title: '江西软件职业技术大学举办本科层次教育思想学习研讨班'
        }, {
          title: '江西软件职业技术大学举办本科层次教育思想学习研讨班'
        }],
        industryMes: [{
          title: '江西软件职业技术大学举办本科层次教育思想学习研讨班1'
        }, {
          title: '江西软件职业技术大学举办本科层次教育思想学习研讨班1'
        }, {
          title: '江西软件职业技术大学举办本科层次教育思想学习研讨班1'
        }, {
          title: '江西软件职业技术大学举办本科层次教育思想学习研讨班'
        }, {
          title: '江西软件职业技术大学举办本科层次教育思想学习研讨班'
        }, {
          title: '江西软件职业技术大学举办本科层次教育思想学习研讨班'
        }],
        executiveInformation: [{
          src: require('../../assets/img/tou1.jpg'),
          name: '张三',
          msg: '江西赣州人，毕业于江西先锋软件大学软件开发与设计专业；10年驾培行业实战工作经验；驾培模拟器行业资深经理人；理论+模拟+实操课程创始人；'
        }, {
          src: require('../../assets/img/tou1.jpg'),
          name: '张三',
          msg: '江西赣州人，毕业于江西先锋软件大学软件开发与设计专业；10年驾培行业实战工作经验；驾培模拟器行业资深经理人；理论+模拟+实操课程创始人；'
        }, {
          src: require('../../assets/img/tou1.jpg'),
          name: '张三',
          msg: '江西赣州人，毕业于江西先锋软件大学软件开发与设计专业；10年驾培行业实战工作经验；驾培模拟器行业资深经理人；理论+模拟+实操课程创始人；'
        }],
        serviceData: [{
          src: require('../../assets/img/tou1.jpg'),
          title: '简易练手驾驶模拟器',
          msg: [{
            text: '这是一条数据',
            
          },{
            text: '这是一条数据',
            
          },{
            text: '这是一条数据',
            
          },{
            text: '这是一条数据',
            
          },{
            text: '这是一条数据',
            
          },]
        },{
          src: require('../../assets/img/tou1.jpg'),
          title: '简易练手驾驶模拟器',
          msg: [{
            text: '这是一条数据',
            
          },{
            text: '这是一条数据',
            
          },{
            text: '这是一条数据',
            
          },{
            text: '这是一条数据',
            
          },{
            text: '这是一条数据',
            
          },]
        }]
      }
    }
  }

</script>
<style>
  .home .scroll {
    height: 26vw;
    width: 100%;
  }

  .home .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .home .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .home .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .home .el-carousel__button {
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 100%;
  }

  .home .middle {
    padding: 2% 8%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    color: black;
    flex-flow: wrap;

  }

  .home .middle .left {
    text-align: center;
    width: 50%;
    min-width: 400px;
  }

  .home .middle .left-message .message1>div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10%;
  }

  .home .middle .right {
    width: 50%;
    text-align: center;
  }

  .home .Title {
    font-size: 1.5rem;
  }

  .home .middle .right .executiveInformation {
    width: 13.5rem;
    margin: 0 1rem;
  }

  .home .middle .right .executiveInformation>img {
    width: 9.375rem;
    height: 9.375rem;
    margin: 5px 0;
  }

  .home .middle .right .detailMsg {
    text-align: left;
    margin: 5px 0;
  }

  .home .middle .right .rightContain {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;

  }

  .home .service {
    padding: 1rem 8%;
    background: #ccc;

  }
  .home .service .serviceContain{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      margin: 2rem 0; 
      flex-flow: wrap;
     
  }
  .home .service .serviceInformation{
      height: auto;
      width: 27%;
      margin: 0 2rem;
      border: 1px solid white;
  }
  .home .service .serviceInformation >img{
      width: 100%;
      height: 15rem;
      
  }

</style>
