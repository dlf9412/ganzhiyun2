<template>
  <div class="login">
    <img src="http://www.33lc.com/article/UploadPic/2012-8/20128181094736375.jpg" alt />
    <div class="form_box">
      <div class="title">赣之韵后台管理系统</div>
      <div class="input_box">
        <div>用户名：</div>
        <el-input v-model="input" placeholder="请输入用户名"></el-input>
      </div>
      <div class="input_box">
        <div>密&nbsp&nbsp 码：</div>
        <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
      </div>
      <div class="btn">
        <el-button>取消</el-button>
        <el-button type="success" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.input == "" || this.password == "") {
        this.$message.closeAll();
        this.$message.error("请确认用户密码都已经输入");
        return;
      }
      this.$post(this.url.login, {
        username: this.input,
        password: this.password
      }).then(res => {
        if (res.code == 200) {
          sessionStorage.setItem("userInfoStorage", this.input);
          this.$router.push({
            path: "/home",
            query: {
              user: String(this.input)
            }
          });
        } else {
          this.$message.error(res.msg);
        }
      });
    }
  }
};
</script>
<style>
.login {
  position: relative;
}
.login img {
  width: 100%;
  height: 100vh;
}
.login .form_box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 25rem;
  background: white;
  padding-bottom: 2rem;
}
.login .form_box .title {
  font-size: 1.5rem;
  background: green;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 2rem;
}
.login .form_box .input_box {
  width: 100%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
.login .el-input {
  width: 50%;
  margin-left: 10px;
}
.login .btn {
  margin-top: 2rem;
}
.login .el-button--success {
  background-color: green;
  border-color: green;
}
</style>