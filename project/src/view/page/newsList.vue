<template>
  <div class="newsPage">
    <img v-if="imgsrc==''" src="../../assets/img/timg.jpg" alt />
    <img v-else :src="imgsrc" alt />
    <div class="contain_Msg">
      <div class="left">
        <div class="leftTitle">新闻动态</div>
        <div
          v-for="item in newsTypeList"
          :key="`newsType`+item.id"
          class="leftMsg"
          :class="{'active':currNewsType==item.id}"
          @click="selectNewsType(item.id)"
        >> {{item.value}}</div>
      </div>
      <div class="right">
        <div class="newsTypeList" v-if="newsDetailId==-1">
          <div
            class="infoListData"
            v-for="(item,index) in newsList"
            :key="index"
            @click="showNewsDetail(item)"
          >
            <div>
              <span>·</span>
              {{item.title}}
            </div>
            <div>{{item.data}}</div>
          </div>
          <div v-if="newsList.length==0">暂无数据</div>
          <div class="pagination_" v-if="newsList.length>10">
            <!-- <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currPageIndex"
              :page-size="pageSize"
              layout=" total,prev, pager, next, jumper"
              :total="totalCount"
            ></el-pagination>-->
            <el-pagination
              small
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageCount"
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="totalCount"
            ></el-pagination>
          </div>
        </div>
        <div class="newsInfo" v-if="newsDetailId!==-1">
          <div class="returnList" @click="newsDetailId=-1;getData(currNewsType=='1'?'公司新闻':'行业新闻')">
            <i class="el-icon-arrow-left"></i>
            返回列表
          </div>
          <h2 class="newsTitle">{{newsDetailInfo.title}}</h2>
          <div class="newsOthers">
            <span>{{newsDetailInfo.type}}</span>
            <span>{{newsDetailInfo.data}}</span>
          </div>
          <div class="newsContent" v-html="newsDetailInfo.html"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftMsgChose: 0,
      newsList: [],
      newsDetailInfo: null,
      newsDetailId: -1,
      imgsrc: "",
      newsTypeList: [
        { id: 1, value: "公司新闻" },
        { id: 2, value: "行业新闻" }
      ],
      currNewsType: 1, // 新闻类型  1:公司新闻  2:行业新闻
      currPageIndex: 1,
      pageCount: 1,
      pageSize: 10, // 需要后台分页筛选好给到前台,此处模拟分页效果
      totalCount: 0,
      paramsData: ""
    };
  },
  mounted() {
    this.paramsData = this.$route.query;
    console.log(this.paramsData);
    this.getImgSelect();
    if (this.paramsData.type != undefined) {
      this.showNewsDetail(this.paramsData);
    } else {
      this.getData("公司新闻");
      // this.totalCount = this.getTotalCount();
      // this.pageCount = this.totalCount / this.pageSize;
    }
  },
  methods: {
    getData(type) {
      this.$post(this.url.newlistSelect, {
        type: type,
        pagesize: this.pageSize,
        currentPage: this.pageCount
      }).then(res => {
        if (res.code == 200) {
          for (let i = 0; i < res.data.length; i++) {
            res.data[i].data = res.data[i].data.substr(0, 10);
          }
          this.newsList = res.data;
          this.totalCount = res.data.count;
        }
      });
    },
    getImgSelect() {
      this.$post(this.url.homeImgSelect, { index: 12 }).then(res => {
        if (res.code == 200) {
          // console.log()
          if (res.data.length == 0) {
            this.imgsrc = "";
            return;
          }
          this.imgsrc = res.data[0].url;
        }
      });
    },
    getNewsList() {
      // const totalNews = require("../../mockData/newsList.json");
      let currTypeNews = null;
      if (this.currNewsType === 1) {
        currTypeNews = totalNews.companyNews;
      } else {
        currTypeNews = totalNews.tradeNews;
      }

      const startIndex = (this.currPageIndex - 1) * this.pageSize;
      let endIndex = this.currPageIndex * this.pageSize;
      if (endIndex > currTypeNews.length) {
        endIndex = currTypeNews.length - 1;
      }
      currTypeNews = currTypeNews.slice(startIndex, endIndex);
      return currTypeNews;
    },
    // getTotalCount() {
    //   const totalNews = require("../../mockData/newsList.json");
    //   let currTypeNews = null;
    //   if (this.currNewsType === "公司新闻") {
    //     currTypeNews = totalNews.companyNews;
    //   } else {
    //     currTypeNews = totalNews.companyNews;
    //   }

    //   return currTypeNews.length;
    // },
    handleSizeChange(val) {
      console.log("change size");
    },
    handleCurrentChange(val) {
      console.log(val);
      if (this.totalCount > val * this.pagesize) {
        this.currentPage = val;
        this.getData();
      }

      // this.newsList = this.getNewsList();
    },
    showNewsDetail(paramsData) {
      this.newsDetailId = 1;
      console.log(paramsData);
      this.newsDetailInfo = paramsData;
      // get detail
      // show detail

      // const newsDetailInfo = require("../../mockData/newsDetail.json");
      // this.newsDetailInfo = newsDetailInfo;
    },
    selectNewsType(index) {
      if (index == 1) this.getData("公司新闻");
      else this.getData("行业新闻");
      this.newsDetailId = -1;
      // this.currNewsType = index;
      // this.currPageIndex = 1;

      // this.newsList = this.getNewsList();
      // this.totalCount = this.getTotalCount();
      // this.pageCount = this.totalCount / this.pageSize;
    }
  }
};
</script>

<style>
.newsPage .returnList {
  text-align: left;
  cursor: pointer;
  width: 100px;
}
.newsPage img {
  width: 100%;
  height: 21rem;
}

.newsPage .contain_Msg {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
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
  padding: 0 15px;
  background: rgb(145, 144, 144);
}

.newsPage .left .leftMsg {
  padding: 0 30px;
  line-height: 40px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}

.newsPage .leftMsg:hover {
  background: rgb(251, 251, 251);
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

.newsPage .right .pagination_ {
  margin-top: 20px;
}

.newsPage .newsInfo .newsContent {
  padding: 0;
  margin: 0;
  line-height: 50px;
}

.newsPage .newsInfo .newsOthers {
  margin: 0 auto;
  width: 200px;
  display: flex;
  justify-content: space-between;
}

.newsPage .newsInfo .newsContent {
  padding: 20px;
}
</style>
