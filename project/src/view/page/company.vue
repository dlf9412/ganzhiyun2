<template>
  <div class="company">
    <!-- <el-image v-if="imgsrc==''">
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>-->
    <img v-if="imgsrc==''" src="../../assets/img/timg.jpg" alt />
    <img v-else :src="imgsrc" alt />
    <div class="contain_1">
      <div class="left"></div>
      <div class="right">
        <p v-if="companyDesc==null">暂无数据</p>
        <p v-else v-html="companyDesc">{{}}</p>
      </div>
    </div>
    <div class="splitLine"></div>
    <div class="contain_2">
      <div class="title">企业实力</div>
      <h2 v-if="containData.length===0" style="text-align:center">暂无数据</h2>
      <div v-else class="contain_2_contain">
        <div v-for="(item,index) in containData" :key="index" class="contain_2_wrap">
          <div class="msgTitle">{{item.title}}</div>
          <div class="msgContain" v-html="item.detail"></div>
        </div>
      </div>
      <div class="swiper_box" v-if="swiperImg.length!=0" >
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in swiperImg" :key="index">
              <img :src="item.url" alt />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          <!-- 如果需要滚动条 -->
          <!-- <div class="swiper-scrollbar"></div> -->
        </div>

        <div class="swiper-container1" v-if="swiperImg1.length!=0">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in swiperImg1" :key="index">
              <img :src="item.url" alt />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination1"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          <!-- 如果需要滚动条 -->
          <!-- <div class="swiper-scrollbar"></div> -->
        </div>
      </div>
    </div>
    <div class="splitLine"></div>
    <div class="qyfc">
      <div class="title">企业风采</div>
      <div class="qyfc_container">
        <img v-if="imgsrc2==''" src="../../assets/img/timg.jpg" alt />
        <!-- <el-image v-if="imgsrc2==''">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>-->
        <img v-else :src="imgsrc2" alt="企业风采" />
      </div>
    </div>
  </div>
</template>
<script>
// import Swiper from "swiper";

export default {
  data() {
    return {
      companyDesc: null,
      imgsrc: "",
      imgsrc2: "",
      swiperImg: [],
      swiperImg1: [],
      containData: []
    };
  },
  mounted() {
    // this.companyDesc = this.getCompanyDesc();
    this.getimgList();
    let that = this;
    // window.onload = function() {
    //   that.initSwiper();
    // };
  },
  methods: {
    initSwiper() {
      var swiper = new Swiper(".swiper-container", {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 6,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    },
    initSwiper1() {
      var swiper1 = new Swiper(".swiper-container1", {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 6,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination1",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    },
    getimgList() {
      this.$post(this.url.homeImgSelect, { index: 11 }).then(res => {
        console.log(res);
        if (res.code == 200) {
          if (res.data.length == 0) {
            return;
          }

          this.imgsrc = res.data[0].url;
        }
      });
      this.$post(this.url.homeImgSelect, { index: 16 }).then(res => {
        console.log(res);
        if (res.code == 200) {
          if (res.data.length == 0) {
            return;
          }
          this.imgsrc2 = res.data[0].url;
        }
      });
      this.$post(this.url.homeImgSelect, { index: 17 }).then(res => {
        console.log(res);
        if (res.code == 200) {
          if (res.data.length == 0) {
            return;
          }
          this.swiperImg = res.data;
          setTimeout(() => {
            this.initSwiper();
          }, 100);
        }
      });
      this.$post(this.url.homeImgSelect, { index: 18 }).then(res => {
        console.log(res);
        if (res.code == 200) {
          if (res.data.length == 0) {
            return;
          }
          this.swiperImg1 = res.data;
          setTimeout(() => {
            this.initSwiper1();
          }, 100);
        }
      });
      this.$post(this.url.componyintroSelect, {}).then(res => {
        console.log(res);
        if (res.code == 200) {
          if (res.data.length > 0) {
            this.companyDesc = res.data[0].detail;
          } else {
            this.companyDesc = null;
          }
        }
      });
      this.$post(this.url.enterpriseSelect, {}).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.containData = res.data;
        }
      });
    }
  }
};
</script>
<style>
.title {
  font-size: 2.5rem;
  color: #f37237;
  font-weight: bold;
  margin-bottom: 10px;
}
.splitLine {
  width: 100%;
  height: 10px;
  border-bottom: 1px solid #ccc;
}
.company img {
  width: 100%;
  height: 21rem;
}

.company .contain_1 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.company .contain_1 .left {
  background-image: url("../../assets/img/about_icon.png");
  width: 279px;
  height: 400px;
  font-size: 3rem;
  display: flex;
  align-items: center;
  margin: auto;
}
.company .contain_1 .right {
  width: 750px;
  text-align: left;
  text-indent: 2rem;
  line-height: 30px;
  padding: 40px 20px;
}
.company .contain_1 p {
  font-size: 1.09375rem;
}
.company .contain_2 {
  box-sizing: border-box;
  margin: 10px;
}
.company .contain_2 .contain_2_contain {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: wrap;
}
.company .contain_2 .contain_2_wrap {
  width: 24%;
  background: #44878a;
  color: white;
  padding: 15px 15px 20px;
  border-radius: 5px;
  margin: 10px 3%;
  min-height: 120px;
}
.company .contain_2 .contain_2_wrap .msgTitle {
  font-size: 1.3rem;
  color: #fefb07;
}
.company .contain_2 .contain_2_wrap .msgContain {
  font-size: 0.9rem;
  text-indent: 2rem;
  text-align: left;
  line-height: 1.6rem;
}
.company .contain_2 .contain_2_wrap .msgContain span {
  color: #14e5e7;
  font-size: 1.3rem;
}

.company .qyfc {
  margin-top: 10px;
}
.company .qyfc .qyfc_container {
  width: 1160px;
  height: 420px;
}
.company .qyfc .qyfc_container img {
  width: 100%;
  height: 100%;
}
.company .swiper-container,
.company .swiper-container1 {
  width: 100%;
  height: 350px;
  position: relative;
}
.company .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  /* width: auto; */
}
.company .swiper_box {
  /* height: 350px; */
}
/* .company .swiper-slide img {
  height: 350px;
  width: 250px;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  margin: 0 5px;
} */
</style>
