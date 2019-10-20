<template>
  <div class="homeIndex">
    <div class="title">
      <div class="leftText">广州赣之韵科技有限公司后台管理系统</div>
      <div class="rightUser">
        <div>用户:{{userName}}</div>
        <div @click="goback" class="el-icon-s-home"></div>
      </div>
    </div>
    <el-col :span="4" class="homeIndex_">
      <el-menu
        :default-active="defultActive"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item
          :index="item.url"
          v-for="(item,index) in router"
          :key="index"
          @click="goto(item.url)"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defultActive: "/home/firstPage",
      userName: "",
      router: [
        {
          url: "/home/firstPage",
          title: "图片修改",
          icon: "el-icon-menu"
        },
        {
          url: "/home/secondPage",
          title: "公司信息",
          icon: "el-icon-menu"
        },
        {
          url: "/home/page3",
          title: "新闻中心",
          icon: "el-icon-menu"
        },
        {
          url: "/home/page4",
          title: "产品中心",
          icon: "el-icon-menu"
        },
        {
          url: "/home/page5",
          title: "合作加盟",
          icon: "el-icon-menu"
        },
        {
          url: "/home/page6",
          title: "联系我们",
          icon: "el-icon-menu"
        }
      ]
    };
  },
  mounted() {
    if (this.$route.query.user) {
      this.userName = this.$route.query.user;
    }
    console.log(this.$route.query);
    this.defultActive = this.$route.path;
  },
  methods: {
    goback() {
      // http://localhost:8080/#/home/firstPage?user=123456
      sessionStorage.removeItem("userInfoStorage");
      this.$router.push("/");
    },
    goto(url) {
      if (this.$route.path == url) {
        return;
      }

      this.$router.push(url);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.homeIndex .title {
  font-size: 20px;
  color: white;
  text-align: left;
  padding: 5px 20px;
  background: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.homeIndex .homeIndex_ {
  min-height: calc(100vh - 60px) !important;
  height: 100%;
}

.homeIndex .homeIndex_ ul {
  min-height: calc(100vh - 60px) !important;
  height: 100%;
}
.homeIndex .el-menu-item {
  padding-left: 30px !important;
  text-align: left;
}
.el-col-20 {
  height: calc(100vh - 60px) !important ;
  overflow: scroll;
}
.homeIndex .rightUser {
  display: flex;
  align-items: center;
}
.homeIndex .rightUser div:nth-child(1) {
  margin-right: 10px;
}
.el-icon-s-home {
  cursor: pointer;
}
</style>
