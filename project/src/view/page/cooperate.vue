<template>
  <div class="cooperate">
    <img class="titleImg" v-if="imgsrc==''" src="../../assets/img/timg.jpg" alt />
    <img v-else :src="imgsrc" alt class="titleImg" />
    <div class="cooperate_contain">
      <div class="cooperate_left_menu">
        <div class="leftTitle">{{this.title}}</div>
        <div
          v-for="item in list"
          :key="`cooperate-${item.name}`"
          class="leftMsg"
          :class="{'active':currId== item.name}"
          @click="changeType(item)"
        >> {{item.title}}</div>
      </div>
      <div style="width:850px;text-align:center" v-if="dataList.length==0">暂无数据</div>
      <div v-else class="cooporate_right_text">
        <h2 style="text-align:center">{{title}}</h2>
        <div v-html="dataList[0].html"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "招商加盟",
      list: [],
      currId: 1,
      imgsrc: "",
      dataList: [],
      title: "市场现状"
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    changeType(item) {
      this.currId = item.name;
      this.title = item.title;
      this.getListData(item.name);
    },
    getData() {
      this.$post(this.url.homeImgSelect, { index: 14 }).then(res => {
        if (res.code == 200) {
          if (res.data.length == 0) {
            this.imgsrc = "";
            return;
          }
          this.imgsrc = res.data[0].url;
        }
      });
      this.$post(this.url.cooporateModelSelect, {}).then(res => {
        if (res.code == 200) {
          this.list = res.data;
          this.getListData(this.list[0].name);
        }
      });
    },
    getListData(type) {
      this.$post(this.url.cooporateSelect, {
        type: type
      }).then(res => {
        this.dataList = res.data;
      });
    }
  }
};
</script>

<style>
.cooperate .titleImg {
  width: 100%;
  height: 21rem;
}

.cooperate .cooperate_contain {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.cooperate .cooperate_left_menu {
  width: 200px;
  background: rgb(242, 242, 242);
  font-size: 1rem;
  text-align: left;
  height: min-content;
  margin-right: 8rem;
  flex-grow: 0;
  flex-shrink: 0;
}

.cooperate .leftTitle {
  font-size: 1.1rem;
  font-weight: bold;
  text-align: left;
  line-height: 45px;
  padding: 0 15px;
  background: rgb(145, 144, 144);
}

.cooperate .leftMsg {
  padding: 0 30px;
  line-height: 40px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}

.cooperate .leftMsg:hover {
  background: rgb(251, 251, 251);
}

.cooperate .active {
  background: rgb(251, 251, 251);
}

.cooperate .cooporate_right_text {
  width: 850px;
  padding: 20px;
  text-align: left;
}
.cooperate .cooporate_right_text p {
  text-indent: 2rem;
  line-height: 23px;
}
</style>
