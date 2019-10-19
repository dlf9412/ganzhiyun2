<template>
  <div class="newInfo">
    <img
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567346890962&di=4d81bf7f4dc2249e3f6da290c2c9b149&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F11531599e1b645c722c8d3220f8e64f66d485edd19aba-OCWxd4_fw658"
      alt
    />
    <div class="contain_Msg">
      <div class="left">
        <div class="leftTitle">新闻动态</div>
        <div class="leftMsg" :class="{'leftMsgChose':leftMsgChose==1}" @click="changeType(1)">> 公司新闻</div>
        <div class="leftMsg" :class="{'leftMsgChose':leftMsgChose==2}" @click="changeType(2)">> 行业新闻</div>
      </div>
      <div class="right">
        <div class="show1" v-if="choseIndex==-1">
          <div
            class="infoListData"
            v-for="(item,index) in infoList"
            :key="index"
            @click="chose(index)"
          >
            <div>
              <span>·</span>
              {{item.title}}
            </div>
            <div>{{item.data}}</div>
          </div>
          <div class="pagination_">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-size="10"
              layout=" total,prev, pager, next, jumper"
              :total="400"
            ></el-pagination>
          </div>
        </div>
        <div class="show2" v-if="choseIndex!==-1">这是详情页面</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftMsgChose: 0,
      infoList: [
        {
          title: "这是一条公司新闻",
          data: "2019.1.20"
        },
        {
          title: "这是一条公司新闻",
          data: "2019.1.20"
        },
        {
          title: "这是一条公司新闻",
          data: "2019.1.20"
        },
        {
          title: "这是一条公司新闻",
          data: "2019.1.20"
        },
        {
          title: "这是一条公司新闻",
          data: "2019.1.20"
        },
        {
          title: "这是一条公司新闻",
          data: "2019.1.20"
        },
        {
          title: "这是一条公司新闻",
          data: "2019.1.20"
        },
        {
          title: "这是一条公司新闻",
          data: "2019.1.20"
        },
        {
          title: "这是一条公司新闻",
          data: "2019.1.20"
        },
        {
          title: "这是一条公司新闻",
          data: "2019.1.20"
        }
      ],
      currentPage4: 4,
      choseIndex: -1
    };
  },
  mounted() {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    chose(index) {
      this.choseIndex = index;
    },

    changeType(index) {
      this.leftMsgChose = index;
      this.choseIndex = -1;
    }
  }
};
</script>

<style>
.newInfo img {
  width: 100%;
  height: 21rem;
}

.newInfo .contain_Msg {
  width: 100%;
  padding: 30px 10% 20px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.newInfo .left {
  width: 175px;
  background: rgb(242, 242, 242);
  font-size: 1.25rem;
  text-align: left;
  height: min-content;
}

.newInfo .leftTitle {
  font-size: 1.40625rem;
  font-weight: bold;
  text-align: left;
  padding: 8px 15px;
  background: rgb(232, 232, 232);
}

.newInfo .leftMsg {
  padding: 8px 20px;
  cursor: pointer;
}

.newInfo .leftMsg:hover {
  background: rgb(251, 251, 251);
}

.newInfo .leftMsgChose {
  background: rgb(251, 251, 251);
}

.newInfo .right {
  width: calc(100% - 150px - 7rem);
  margin-left: 7rem;
}

.newInfo .right .infoListData {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  font-size: 1.25rem;
}

.newInfo .right .pagination_ {
  margin-top: 20px;
  text-align: right;
}
</style>
