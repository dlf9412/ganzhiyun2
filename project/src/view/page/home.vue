<template>
  <div class="home">
    <div class="scroll">
      <el-carousel height="31.5625rem">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="middle">
      <div class="left">
        <div class="header-btn">
          <div class="newTitle">新闻动态</div>
          <div class="left-message">
            <div class="message1" v-if="messageShow==='false'">
              <div v-for="(item,index) in companyMes" :key="index">
                <span>{{item.title}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="Title">高管简介</div>
        <div class="rightContain">
          <div class="bigBoss" v-for="(item,index) in bigBoss()" :key="index">
            <img :src="item.src" :alt="item.name+' '+ item.title">
            <div class="detail">
              <div class="peopleTitle">{{item.name}}（{{item.title}}）</div>
              <div class="detailMsg">{{item.msg}}</div>
            </div>
          </div>

          <div class="executiveInformation" v-for="(item,index) in otherPeoples()" :key="index">
            <img :src="item.src" :alt="item.name+' '+ item.title">
            <div class="detail">
              <div>{{item.name}}<br>（{{item.title}}）</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="Title">
        <span>驾培生态产品及服务</span>
      </div>
      <div class="serviceContain">
        <div class="serviceInformation" v-for="(item,index) in serviceData" :key="index">
          <img :src="item.src" alt="">
          <div class="homeBox3_title">{{item.title}}</div>
          <div class="homeBox3_contain">
            <div v-for="data1 in item.msg">{{data1.text}}</div>
          </div>
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
        },],
        executiveInformation: [{
          src: require('../../assets/img/people.jpg'),
          name: '刘武',
          isMain:true,
          title:'董事长',
          msg: '江西赣州人，毕业于江西先锋软件大学软件开发与设计专业；10年驾培行业实战工作经验；驾培模拟器行业资深经理人；理论+模拟+实操课程创始人；'
        }, {
          src: require('../../assets/img/people.jpg'),
          name: '杜耀',
          title:'软件总监',
          msg: '江西赣州人，毕业于江西先锋软件大学软件开发与设计专业；10年驾培行业实战工作经验；驾培模拟器行业资深经理人；理论+模拟+实操课程创始人；'
        }, {
          src: require('../../assets/img/people.jpg'),
          name: '张先胜',
          title:'硬件总监',
          msg: '江西赣州人，毕业于江西先锋软件大学软件开发与设计专业；10年驾培行业实战工作经验；驾培模拟器行业资深经理人；理论+模拟+实操课程创始人；'
        },{
          src: require('../../assets/img/people.jpg'),
          name: '熊思兵',
          title:'美术总监',
          msg: '江西赣州人，毕业于江西先锋软件大学软件开发与设计专业；10年驾培行业实战工作经验；驾培模拟器行业资深经理人；理论+模拟+实操课程创始人；'
        }],
        serviceData: [{
          src: require('../../assets/img/home.jpg'),
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
            
          }]
        },{
          src: require('../../assets/img/home.jpg'),
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
          src: require('../../assets/img/home.jpg'),
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
          src: require('../../assets/img/home.jpg'),
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
          src: require('../../assets/img/home.jpg'),
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
    },
    methods:{
      bigBoss(){
        return this.executiveInformation.filter(item=>item.isMain);
      },
      otherPeoples(){
        return this.executiveInformation.filter(item=>!item.isMain);
      }
    }
  }

</script>
<style >
  .home .scroll {
    height: 31.5625rem;
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
    padding: 15px 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    color: black;
    flex-flow: wrap;
  }

  .home .middle .left {
    text-align: center;
    width: 618px;
    padding-left: 2px;
  }
  .home .middle .left .newTitle,.home .middle .right .Title{
    margin-bottom: 1rem;
    font-size: 1.71875rem;
    text-align: left;
    border-bottom: 1px solid #ccc;
    width: 7rem;
    padding: 2px 5px;
    padding-bottom: 5px;
  }

  .home .middle .left-message .message1>div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    font-size: 1.09375rem;
    padding: 0.8rem 0;
    padding-left: 1.5rem;
  }

  .home .middle .right {
    width: 535px;
    padding-right: 5px;
    text-align: center;
  }

  .home .Title {
    font-size: 1.71875rem;
  }

  .home .middle .right .executiveInformation {
    width: 120px;
    margin: 5px 20px;
  }

  .home .middle .right .executiveInformation>img {
    width: 9.375rem;
    height: 9.375rem;
    margin: 5px 0;
    border-radius: 100%;
    background-color: #ccc;
  }
  .home .middle .right .bigBoss{
    width: 98%;
    display: flex;justify-content: flex-start;
    text-align: left !important;
    align-items: center;
    padding-left: 1%;
  
  }
  .home .middle .right .bigBoss img{
     width: 120px;
    height: 120px;
    margin: 5px 0;
    border-radius: 100%;
    background-color: #ccc;
  }

  .home .middle .right .peopleTitle{
    font-weight: 600;
    padding: 0 15px 10px 15px;
  }

  .home .middle .right .detailMsg {
    text-align: left;
    padding: 0 15px;
    line-height: 21px;
  }

  .home .middle .right .rightContain {
    display: flex;
    justify-content: flex-start;
    margin-top: 1.5rem;
    width: 100%;
    flex-flow: wrap;

  }

  .home .service {
    padding: 1rem 8%;
    /* background: #ccc; */

  }
  .home .service .Title span{
    border-bottom: 1px solid #ccc;
    padding-bottom: 8px;
    display: inline-block;
  }
  .home .service .serviceContain{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      margin: 2rem 0 0; 
      flex-flow: wrap;
     

     
  }
  .home .service .serviceInformation{
      height: 27rem;
      width: 29%;
      margin: 0 2% 2rem;
       border:1px solid rgb(237, 237, 237);
       text-align:left;
  }
  .home .service .serviceInformation >img{
      width: 100%;
      height: 15rem;
      
  }
  .home .homeBox3_title{
    padding-left: 1rem;
    color: rgb(255, 112, 67);
    font-size: 1.25rem;
  }
  .home .homeBox3_contain{
    font-size: 1rem;
    
  }
  .home .homeBox3_contain div{
    padding: 4px 0px 0px 1rem;
  }

</style>
