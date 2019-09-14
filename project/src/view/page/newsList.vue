<template>
  <div class='newsPage'>
    <img src="../../assets/img/news.png" alt="">
    <div class="contain_Msg">
      <div class="left">
        <div class="leftTitle">
          新闻动态
        </div>
         <div v-for="item in newsTypeList" 
          :key="`newsType`+item.id" 
          class="leftMsg" 
          :class="{'active':currNewsType==item.id}"
          @click="selectNewsType(item.id)">
          > {{item.value}}
        </div>
      </div>
      <div class="right">
        <div class="newsTypeList" v-if="newsDetailId==-1">
          <div class="infoListData" v-for="(item,index) in newsList" :key="index" @click="showNewsDetail(index)">
            <div><span>·</span>{{item.title}}</div>
            <div>{{item.data}}</div>
          </div>
          <div class="pagination_">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
              :current-page="currPageIndex" :page-size="pageSize" layout=" total,prev, pager, next, jumper" :total="totalCount">
            </el-pagination>
          </div>
        </div>
        <div class="newsInfo" v-if='newsDetailId!==-1'>
          <h2 class="newsTitle">{{newsDetailInfo.title}}</h2>
          <div class="newsOthers">          
            <span>{{newsDetailInfo.newsType}}</span>
            <span>{{newsDetailInfo.createDate}}</span>
          </div>
          <div class="newsContent">
            {{newsDetailInfo.desc}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { isNumber } from 'util';
  export default {
    data() {
      return {
        leftMsgChose: 0,
        newsList: [],
        newsDetailInfo:null,
        newsDetailId: -1,
        newsTypeList:[
          {id:1,value:"公司新闻"},
          {id:2,value:"行业新闻"},
        ],
        currNewsType:1,   // 新闻类型  1:公司新闻  2:行业新闻
        currPageIndex:1,
        pageCount:1,
        pageSize:10,  // 需要后台分页筛选好给到前台,此处模拟分页效果
        totalCount:0
      }
    },
    mounted(){
      const paramId = this.$route.query.id
      if(!!paramId){
        this.showNewsDetail(paramId);
      }else{
        this.newsList = this.getNewsList();
        this.totalCount = this.getTotalCount();
        this.pageCount = this.totalCount/ this.pageSize;
      }
    },
    methods: {
      getNewsList(){
        const totalNews = require("../../mockData/newsList.json");
        let currTypeNews = null;
        if(this.currNewsType === 1){
          currTypeNews = totalNews.companyNews;
        }else{
          currTypeNews = totalNews.tradeNews;
        }

        const startIndex = (this.currPageIndex-1) * this.pageSize;
        let endIndex = this.currPageIndex *this.pageSize;
        if(endIndex > currTypeNews.length){
          endIndex = currTypeNews.length-1;
        }
        currTypeNews =  currTypeNews.slice(startIndex,endIndex);
        return currTypeNews;
      },
      getTotalCount(){
        const totalNews = require("../../mockData/newsList.json");
        let currTypeNews = null;
        if(this.currNewsType === "公司新闻"){
          currTypeNews = totalNews.companyNews;
        }else{
          currTypeNews = totalNews.companyNews;
        }

        return currTypeNews.length;
      },
      handleSizeChange(val) {
        console.log("change size");
      },
      handleCurrentChange(val) {
        console.log(val);
        this.currPageIndex = val;
        this.newsList = this.getNewsList();
      },
      showNewsDetail(index){
        this.newsDetailId = index;
        // get detail 
        // show detail

        const newsDetailInfo = require("../../mockData/newsDetail.json");
        this.newsDetailInfo =  newsDetailInfo;
      },
      selectNewsType(index){
        this.newsDetailId = -1;
        this.currNewsType = index;
        this.currPageIndex = 1;

        this.newsList = this.getNewsList();
        this.totalCount = this.getTotalCount();
        this.pageCount = this.totalCount/ this.pageSize;
      }
    }
  }

</script>

<style>
  .newsPage img {
    width: 100%;
    height: 21rem;
  }

  .newsPage .contain_Msg {
    display: flex;
    justify-content: space-between;
    margin:20px 0;
  }

  .newsPage .left {
    width: 200px;
    background: rgb(242, 242, 242);
    font-size: 1rem;
    text-align: left;
    height: min-content;
  }

  .newsPage .left .leftTitle {
    font-size: 1.1rem;
    font-weight: bold;
    text-align: left;
    line-height: 45px;
    padding:0 15px;
    background: rgb(145, 144, 144);
  }

  .newsPage .left .leftMsg {
    padding: 0 30px;
    line-height: 40px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
  }

  .newsPage .leftMsg:hover {
    background: rgb(251, 251, 251)
  }

  .newsPage .active {
    background: rgb(251, 251, 251);
  }

  .newsPage .right {
    width: 850px;
  }

  .newsPage .right .infoListData {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 830px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    line-height: 40px;
  }

  .newsPage .right  .pagination_{
    margin-top: 20px;
  }

  .newsPage .newsInfo .newsContent{
    padding: 0;
    margin: 0;
    line-height: 50px;
  }

  .newsPage .newsInfo .newsOthers{
    margin: 0 auto;
    width: 200px;
    display: flex;
    justify-content: space-between;
  }

  .newsPage .newsInfo .newsContent{
    padding:20px;
  }
</style>
