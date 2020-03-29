<template>
  <div class="product">
    <img class="titleImg" v-if="imgsrc==''" src="../../assets/img/timg.jpg" alt />
    <img v-else :src="imgsrc" alt class="titleImg" />
    <!---- 产品列表页面 ----->
    <div class="contain" v-if="choseIndexProduct==-1">
      <div class="productTitle">产品中心</div>
      <div v-if="productList.length==0" style="margin-top:20px">暂无数据</div>
      <div class="show1Product" v-else>
        <div
          v-for="(item,index) in productList"
          :key="index"
          :class="index%2==0?'leftshowProduct':'rightshowProduct'"
          @click="showDetail(index)"
        >
          <div class="productImgbox" v-if="index%2==0">
            <img :src="item.productImgUrl[0].url" alt="" />
          </div>
          <div class="productMsgBox">
            <div class="productMsgTitle">{{item.title}}</div>
            <div class="productMsgDetail" v-html="item.detail"></div>
          </div>
          <div class="productImgbox" v-if="index%2!==0">
            <img :src="item.productImgUrl[0].url" alt />
          </div>
        </div>
      </div>
    </div>

    <!--- 产品详细页面 ---->
    <div class="contain" v-if="choseIndexProduct!==-1">
      <div class="show2Product">
        <div class="productTitle">{{showDetailData.title}}</div>
        <div class="imgBox">
          <img
            v-for="(item,index) in showDetailData.productImgUrl"
            :key="index"
            :src="item.url"
            alt
          />
        </div>
        <div class="productDetailBox">
          <span class="left">产品参数:</span>
          <div>{{showDetailData.productNum}}</div>
        </div>
        <div class="productDetailBox" style="margin:0px;">
          <span class="left">产品描述:</span>
        </div>
        <div class="detail" v-html="showDetailData.detail"></div>
        <!-- 这是内容部分 -->
        <div @click="returnList" class="returnBack">
          <i class="el-icon-arrow-left"></i>
          返回
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      choseIndexProduct: -1,
      imgsrc: "",
      productList: [],
      showDetailData: []
    };
  },
  mounted() {
    this.showDetailData = this.$route.query;
    this.getData();
    if (this.showDetailData.title != undefined) {
      this.choseIndexProduct = 2;
      //   this.showNewsDetail(this.paramsData);
    }
  },
  methods: {
    getData() {
      this.$post(this.url.homeImgSelect, { index: 13 }).then(res => {
        console.log(res);
        if (res.code == 200) {
          // console.log()
          if (res.data.length > 0) {
            this.imgsrc = res.data[0].url;
          } else {
            this.imgsrc = "";
          }
        }
      });
      this.$post(this.url.productSelect, {}).then(res => {
        console.log(res);
        if (res.code == 200) {
          //   productList;
          if (res.data.length > 0) {
            this.productList = res.data;
          } else {
            this.productList = [];
          }
        }
      });
    },
    showDetail(index) {
      this.choseIndexProduct = index;
      this.showDetailData = this.productList[index];
      console.log(this.showDetailData);
    },
    returnList() {
      this.choseIndexProduct = -1;
      this.getData();
    }
  }
};
</script>
<style >
.product .titleImg {
  width: 100%;
  height: 21rem;
}
.product .contain {
  padding: 2rem 10% 2rem;
}
.product .contain .productTitle {
  font-size: 1.8rem;
}
.product .show1Product {
  margin: 2rem 0;
  width: 100%;
}
.product .show1Product img {
  width: 100%;
  height: 100%;
}
.product .productImgbox {
  width: 450px;
  height:288px ;
}
.product .productMsgBox {
  width: 45%;
}
.product .leftshowProduct {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  text-align: left;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
}
.product .rightshowProduct {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

  align-items: center;
  text-align: right;
  box-sizing: border-box;
  cursor: pointer;
}
.product .leftshowProduct .productImgbox {
  text-align: right;
}
.product .rightshowProduct .productImgbox {
  text-align: left;
}

.product .productMsgTitle {
  color: orange;
}
.product .productMsgDetail p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.product .show2Product .imgBox {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}
.product .show2Product .imgBox img {
  width: 30%;
  margin-right: 3%;
  height: 15.5rem;
}
.product .productDetailBox {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 20px 0;
  flex-flow: nowrap;
}
.product .productDetailBox .left {
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 10px;
  /* flex: 1; */
}
.product .detail {
  text-align: left;
  /* text-indent: 2rem; */
  line-height: 23px;
}
.returnBack {
  width: 100px;
  text-align: left;
  margin-top: 40px;
}
</style>