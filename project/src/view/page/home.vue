<template>
  <div class="home">
    <div class="pictureList">
      <el-carousel height="31.5625rem">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="newsAndPeople">
      <div class="news">
          <div class="underLineTitle">新闻动态</div>
          <div class="newsList">
              <div v-for="(item,index) in newsList" :key="index" @click="showNewsDetail(item.id)">
                <span class="newsTitle">{{item.title}}</span>
                <span class="createTime">{{item.createDate}}</span>
              </div>
          </div>
      </div>
      <div class="peoples">
        <div class="underLineTitle">高管简介</div>
        <div class="rightContain">
          <div class="bigBoss" v-for="(item,index) in bigBoss()" :key="'bigBoss'+index">
            <img src="../../assets/img/people.jpg" :alt="item.name+' '+ item.title">
            <div class="detail">
              <div class="peopleTitle">{{item.name}}（{{item.title}}）</div>
              <div class="detailMsg">{{item.desc}}</div>
            </div>
          </div>
          <div class="otherPeopleList">
            <div class="otherPeople" v-for="(item,index) in otherPeoples()" :key="'otherPeople'+index">
              <img src="../../assets/img/people.jpg" :alt="item.name+' '+ item.title">
              <div class="detail">
                <div class="peopleTitle2">{{item.name}} <br/>（{{item.title}}）</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="underLineTitle">
        <span>驾培生态产品及服务</span>
      </div>
      <div class="serviceList">
        <div class="serviceItem" :style="`margin-right:`+ getMarginRight(index)" v-for="(item,index) in serviceList" :key="index">
          <img src="../../assets/img/product.png" :alt="item.title">
          <div class="serviceItemTitle">{{item.title}}</div>
          <div class="serviceItemDetail">
            <div v-for="child in item.desc">{{child.item}}</div>
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
        newsList: [],
        peopleList: [],
        serviceList:[]
      }
    },
    mounted(){
      this.newsList = this.getNewsList();
      this.peopleList = this.getPeopleList();
      this.serviceList = this.getServiceList();
    },
    methods:{
      getNewsList(){
        const newsList = require("../../mockData/newsList.json");
        return newsList.normal;
      },
      getPeopleList(){
        return require("../../mockData/peopleList.json");
      },
      getServiceList(){
        return require("../../mockData/serviceList.json");
      },
      bigBoss(){
        return this.peopleList.filter(item=>item.isMain);
      },
      otherPeoples(){
        return this.peopleList.filter(item=>!item.isMain);
      },
      getMarginRight(index){
       return  (index+1)%3===0?'0':'127px';
      },
      showNewsDetail(id){
          this.$router.push({
          path: '/newsList',
          query: {
            id: id
          }
        });
      }
    }
  }

</script>
<style >
/** 轮播栏 */
  .home .pictureList {
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

/** 轮播栏 */

  .underLineTitle{
    font-size: 1.7rem;
    text-align: left;
    display: inline-block;
    border-bottom: 1px solid #ccc;
    padding-left: 0 5px;
    line-height: 40px;
    margin-bottom: 15px;
  }

/** 新闻动态与高管简介 */
  .home .newsAndPeople {
    padding: 15px 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    color: black;
    flex-flow: wrap;
    border-bottom: 1px solid #ccc;
  }

  .home .newsAndPeople .news {
    text-align: left;
    width: 618px;
    padding-left: 2px;
  }

  .home .newsAndPeople .news .newsList > div {
    display: flex;
    justify-content:space-between;
    font-size: 1rem;
    padding-left: 15px;
    padding-right: 50px;
    line-height: 35px;
    cursor: pointer;
    text-decoration: none;
    color:  #2c3e50;
  }

  .home .newsAndPeople .news .newsList > div:hover {
    text-decoration: underline;
    color: blue;
  }

  .home .newsAndPeople .peoples {
    width: 535px;
    text-align: left;
  }

    .home .newsAndPeople .peoples img{
    width: 95px;
    height: 95px;
    margin: 5px 0;
    border-radius: 100%;
    background-color: #ccc;
  }

  .home .newsAndPeople .peoples .bigBoss{
    width: 98%;
    display: flex;
    justify-content: flex-start;
    text-align: left !important;
    align-items: center;
    padding-left: 1%;
  }

  .home .newsAndPeople .peoples .otherPeopleList{
      width: 90%;
      display: flex;
      justify-content:space-between;
      margin-top:20px;
  }

  .home .newsAndPeople .peoples .peopleTitle{
    font-weight: 600;
    line-height: 30px;
    padding-left: 15px;
  }

  .home .newsAndPeople .peoples .peopleTitle2{
    text-align: center;
  }

  .home .newsAndPeople .peoples .detailMsg {
    text-align: left;
    padding: 0 15px;
    line-height: 21px;
  }

  .home .newsAndPeople .peoples .peoplesContain {
    display: flex;
    justify-content: flex-start;
    margin-top: 1.5rem;
    width: 100%;
    flex-flow: wrap;
  }

  .home .service {
    text-align: center;
    margin-top: 20px;
  }

  .home .service .serviceList{
      display: flex;
      justify-content:space-start;
      flex-wrap: wrap;
  }
  .home .service .serviceList .serviceItem{
      height: 380px;
      width: 300px;
      margin-bottom: 20px;
      border:1px solid rgb(237, 237, 237);
      text-align:left;
  }

  .home .service .serviceItem >img{
      width: 100%;
      height: 15rem;
      border: none;
  }

  .home .serviceItemTitle{
    line-height: 35px;
    padding-left: 10px;
    color: rgb(255, 112, 67);
    font-size: 1.25rem;
  }
  .home .serviceItemDetail{
    line-height: 22px;
    font-size: 1rem;
  }

  .home .serviceItemDetail div{
    padding: 4px 0px 0px 1rem;
  }

  .alignLeft{
    text-align: left;
  }

</style>
