<template>
  <div class="callMe">
    <img class="titleImg" v-if="imgsrc==''" src="../../assets/img/timg.jpg" alt />
    <img v-else :src="imgsrc" alt class="titleImg" />
    <div class="callMe_contain">
      <div class="callMe_left" v-if="companyInfo==null">暂无数据</div>
      <div class="callMe_left" v-if="companyInfo!==null">
        <h3>联系我们</h3>
        <div>招商电话：{{companyInfo.merchant}}</div>
        <div>公司地址：{{companyInfo.address}}</div>
        <div>售后电话：{{companyInfo.aftersales}}</div>
        <div>电子传真：{{companyInfo.fax}}</div>
      </div>
      <div class="callMe_right">
        <img v-if="companyInfo==null" src="../../assets/img/timg.jpg" alt />
        <!-- <div v-if="companyInfo==null">暂无图片</div> -->
        <img v-else :src="companyInfo.callMeImgUrl.url" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      companyInfo: null,
      imgsrc: ""
    };
  },
  mounted() {
    // this.companyInfo = this.getCompanyInfo();
    this.getData();
    this.setMapPos();
  },
  methods: {
    getData() {
      this.$post(this.url.homeImgSelect, { index: 15 }).then(res => {
        if (res.code == 200) {
          if (res.data.length == 0) {
            this.imgsrc = "";
            return;
          }
          this.imgsrc = res.data[0].url;
        }
      });
      this.$post(this.url.callMeSelect, {}).then(res => {
        if (res.code == 200) {
          if (res.data.length == 0) {
            this.companyInfo = null;
            return;
          }
          this.companyInfo = res.data[0];
        }
      });
    },

    setMapPos() {}
  }
};
</script>
<style>
.callMe .titleImg {
  width: 100%;
  height: 21rem;
}
.callMe .callMe_contain {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
}
.callMe .callMe_left {
  text-align: left;
  margin-right: 8rem;
}
.callMe .callMe_left h3 {
  font-size: 1.5rem;
}
.callMe .callMe_left div {
  margin: 10px 0;
}
.callMe .callMe_right {
  border: 1px solid #cccccc;
  margin-bottom: 3rem;
  width: 735px;
  min-height: 500px;
}
</style>