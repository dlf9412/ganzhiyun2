<template>
  <div class="home">
    <div class="pictureList">
      <img v-if="imgList.length==0" src="../../assets/img/timg.jpg" alt />
      <el-carousel v-else height="31.5625rem">
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item.url" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="newsAndPeople">
      <div class="news">
        <div class="underLineTitle">新闻动态</div>
        <div class="newsList">
          <div style="text-align:center" v-if="newsList.length==0">暂无数据</div>
          <div v-ese v-for="(item,index) in newsList" :key="index" @click="showNewsDetail(item)">
            <span class="newsTitle">{{item.title}}</span>
            <span class="createTime">{{item.data}}</span>
          </div>
        </div>
      </div>
      <div class="peoples">
        <div class="underLineTitle">高管简介</div>
        <div class="rightContain">
          <div style="text-align:left" v-if="peopleList.length==0">暂无数据</div>
          <div v-else class="bigBoss" v-for="(item,index) in peopleList" :key="'bigBoss'+index">
            <img :src="item.src" :alt="item.name+' '+ item.title" />
            <div class="detail">
              <div class="peopleTitle">{{item.name}}（{{item.position}}）</div>
              <div class="detailMsg">{{item.detail}}</div>
            </div>
          </div>
          <div class="otherPeopleList">
            <div class="otherPeople" v-for="(item,index) in peopleList2" :key="'otherPeople'+index">
              <img :src="item.src" :alt="item.name+' '+ item.title" />
              <div class="detail">
                <div class="peopleTitle2">
                  {{item.name}}
                  <br />
                  （{{item.position}}）
                </div>
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
      <div style="text-align:center;" v-if="serviceList.length==0">暂无数据</div>
      <div v-else class="serviceList">
        <div
          class="serviceItem"
          :style="`margin-right:`+ getMarginRight(index)"
          v-for="(item,index) in serviceList"
          :key="index"
          @click="gotoproduct(item)"
        >
          <img :src="item.productImgUrl[0].url" :alt="item.title" />
          <div class="serviceItemTitle">{{item.title}}</div>
          <div class="serviceItemDetail">
            <div v-html="item.detail"></div>
            <!-- <div v-for="child in item.desc">{{child.item}}</div> -->
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
      peopleList2: [],
      serviceList: [],
      imgList: []
    };
  },
  mounted() {
    this.getNewsList();
    // this.peopleList = this.getPeopleList();
    // this.serviceList = this.getServiceList();
    this.getimgList();
  },
  methods: {
    getimgList() {
      this.$post(this.url.homeImgSelect, { index: 1 }).then(res => {
        if (res.code == 200) {
          // console.log()
          this.imgList = res.data;
        }
      });
      this.$post(this.url.componySelect, {}).then(res => {
        if (res.code == 200) {
          this.peopleList = [];
          this.peopleList2 = [];
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].position == "董事长") {
              this.peopleList.push(res.data[i]);
            } else {
              this.peopleList2.push(res.data[i]);
            }
          }
        }
      });
      this.$post(this.url.productSelect, {}).then(res => {
        if (res.code == 200) {
          this.serviceList = res.data;
        }
      });
    },
    getNewsList() {
      // const newsList = require("../../mockData/newsList.json");

      this.$post(this.url.newlistSelect, {
        pagesize: 10,
        currentPage: 1
      }).then(res => {
        if (res.code == 200) {
          for (let i = 0; i < res.data.length; i++) {
            res.data[i].data = res.data[i].data.substr(0, 10);
          }
          this.newsList = res.data;
        }
      });
      // return newsList.normal;
    },
    getMarginRight(index) {
      return (index + 1) % 3 === 0 ? "0" : "127px";
    },
    showNewsDetail(id) {
      this.$router.push({
        path: "/newsList",
        query: id
      });
    },
    gotoproduct(id) {
      this.$router.push({
        path: "/product",
        query: id
      });
    }
  }
};
</script>
<style >
/** 轮播栏 */
.home .pictureList {
  height: 31.5625rem;
  width: 100%;
}

.home .el-carousel__item img {
  /* color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0; */
  height: 100%;
  width: 100%;
}

.home .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.home .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.home .el-carousel__button {
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 100%;
}

/** 轮播栏 */

.underLineTitle {
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
  justify-content: space-between;
  font-size: 1rem;
  padding-left: 15px;
  padding-right: 50px;
  line-height: 35px;
  cursor: pointer;
  text-decoration: none;
  color: #2c3e50;
}

.home .newsAndPeople .news .newsList > div:hover {
  text-decoration: underline;
  color: blue;
}

.home .newsAndPeople .peoples {
  width: 535px;
  text-align: left;
}

.home .newsAndPeople .peoples img {
  width: 95px;
  height: 95px;
  margin: 5px 0;
  border-radius: 100%;
  background-color: #ccc;
}

.home .newsAndPeople .peoples .bigBoss {
  width: 98%;
  display: flex;
  justify-content: flex-start;
  text-align: left !important;
  align-items: center;
  flex-flow: nowrap;
  padding-left: 1%;
}

.home .newsAndPeople .peoples .otherPeopleList {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.home .newsAndPeople .peoples .peopleTitle {
  font-weight: 600;
  line-height: 30px;
  padding-left: 15px;
}

.home .newsAndPeople .peoples .peopleTitle2 {
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

.home .service .serviceList {
  display: flex;
  justify-content: space-start;
  flex-wrap: wrap;
}
.home .service .serviceList .serviceItem {
  height: 380px;
  width: 300px;
  margin-bottom: 20px;
  border: 1px solid rgb(237, 237, 237);
  text-align: left;
  cursor: pointer;
}

.home .service .serviceItem > img {
  width: 100%;
  height: 15rem;
  border: none;
}

.home .serviceItemTitle {
  line-height: 35px;
  padding-left: 10px;
  color: rgb(255, 112, 67);
  font-size: 1.25rem;
}
.home .serviceItemDetail {
  line-height: 22px;
  font-size: 1rem;
}

.home .serviceItemDetail div {
  padding: 4px 0px 0px 1rem;
}
.home .serviceItemDetail div p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.alignLeft {
  text-align: left;
}
</style>
