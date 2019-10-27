<template>
  <div class="callMe">
    <h3>联系我们</h3>
    <div class="callMe_contain">
      <div class="call_Me">
        <span class="call_title">招商电话：</span>
        <el-input v-model="phone"></el-input>
      </div>
      <div class="call_Me">
        <span class="call_title">售后电话：</span>
        <el-input v-model="phone1"></el-input>
      </div>
      <div class="call_Me">
        <span class="call_title">电子传真：</span>
        <el-input v-model="phone2"></el-input>
      </div>
      <div class="call_Me">
        <span class="call_title">公司地址：</span>
        <el-input v-model="address"></el-input>
      </div>
      <div class="call_Me" style="align-items:flex-start;margin-top:30px;">
        <span class="call_title">公司地址图片:</span>
        <el-upload
          class="upload-container"
          ref="upload"
          action="http://120.79.222.61:5000/user/imgAdd?index=5"
          :before-remove="handleRemove"
          :file-list="fileList2"
          list-type="picture"
          :before-upload="beforeAvatarUpload"
          :auto-upload="false"
          :on-success="handleSucess"
          :on-error="handleError"
          :on-change="changeimgList"
          :limit="1"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <div slot="tip" class="el-upload__tip">只能上传1张jpg/png文件，且不超过10M，如果需要替换，请先删除当前图片</div>
        </el-upload>
      </div>
    </div>
    <div>
      <el-button @click="submit">提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: "",
      phone1: "",
      phone2: "",
      address: "",
      addressUrl: "",
      fileList2: [],
      saveImg: "",
      choseId: ""
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    submit() {
      if (this.phone == "") {
        this.$message({
          type: "error",
          message: "请先填写招商电话"
        });
        return;
      }
      if (this.phone1 == "") {
        this.$message({
          type: "error",
          message: "请先填写售后电话"
        });
        return;
      }
      if (this.phone1 == "") {
        this.$message({
          type: "error",
          message: "请先填写电子传真"
        });
        return;
      }
      if (this.address == "") {
        this.$message({
          type: "error",
          message: "请先填写公司地址"
        });
        return;
      }
      // if (this.saveImg == "") {
      //   this.$message({
      //     type: "error",
      //     message: "请先选择公司地址图片"
      //   });
      //   return;
      // }

      if (this.saveImg !== "") {
        this.$refs.upload.submit();
      } else {
        if (this.choseId !== "") {
          this.updateData();
        } else {
          this.uploadData();
        }
      }
    },
    getData() {
      this.$post(this.url.callMeSelect, {}).then(res => {
        if (res.code == 200) {
          if (res.data.length == 0) {
            return;
          }
          this.phone = res.data[0].merchant;
          this.phone1 = res.data[0].aftersales;
          this.phone2 = res.data[0].fax;
          this.address = res.data[0].address;
          this.choseId = res.data[0]._id;
          this.fileList2 = [res.data[0].callMeImgUrl];
          this.addressUrl = res.data[0].callMeImgUrl;
          this.saveImg = "";
        }
      });
    },
    beforeAvatarUpload(file) {
      const isJPG =
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isJPG || !isLt2M) {
        this.$notify({
          title: "提示",
          message: "只能上传 jpg/jpeg/png文件，且不超过10M",
          type: "warning",
          duration: 3000
        });
      }
      return isJPG && isLt2M;
    },
    handleSucess(response, file, fileList) {
      console.log(response);

      if (response.code == 200) {
        console.log(this.choseId);
        this.addressUrl = response.data;
        if (this.choseId !== "") {
          this.updateData();
        } else {
          this.uploadData();
        }
      }
    },
    uploadData() {
      console.log(121212);
      this.$post(this.url.callMeAdd, {
        merchant: this.phone,
        aftersales: this.phone1,
        fax: this.phone2,
        address: this.address,
        callMeImgUrl: this.addressUrl
      }).then(res => {
        if (res.code == 200) {
          this.$message({
            type: "success",
            message: "添加成功"
          });
        }
        this.saveImg = "";
        this.getData();
      });
    },
    updateData() {
      this.$post(this.url.callMeUpdata, {
        merchant: this.phone,
        aftersales: this.phone1,
        fax: this.phone2,
        address: this.address,
        callMeImgUrl: this.addressUrl,
        _id: this.choseId
      }).then(res => {
        if (res.code == 200) {
          this.$message({
            type: "success",
            message: "修改成功"
          });
        }
        this.saveImg = "";
        this.getData();
      });
    },
    handleError() {},
    changeimgList(file, fileList) {
      this.saveImg = fileList;
    },
    handleRemove(file, fileList) {
      let self = this;
      console.log(file);
      if (file.response !== undefined || file.index !== undefined) {
        return this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            self
              .$post(this.url.homeImgDelete, {
                index:
                  file.response !== undefined
                    ? file.response.data.index
                    : file.index,
                url:
                  file.response !== undefined
                    ? file.response.data.url
                    : file.url
              })
              .then(res => {
                console.log(res);
                if (res.code == 200) {
                  this.$message({
                    type: "success",
                    message: "删除成功!"
                  });
                  this.addressUrl = {};
                  // for (let i = 0; i < this.fileList3.length; i++) {
                  //   console.log(141414);
                  //   console.log(this.fileList3);
                  //   console.log(file);
                  //   if (this.fileList3[i].url == file.url) {
                  //     this.fileList3.splice(i, 1);
                  //   }
                  // }
                } else {
                  this.$message({
                    type: "error",
                    message: res.msg
                  });
                }
              });

            return true;
          })
          .catch(() => {
            console.log(1121);
            this.$message({
              type: "info",
              message: "已取消删除"
            });
            return reject;
          });
      }
    }
  }
};
</script>
<style >
.callMe {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.callMe h3 {
  text-align: left;
}
.callMe .call_title {
  width: 120px;
  text-align: left;
}
.callMe .el-input {
  width: 300px;
}
.callMe .call_Me {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
}
.callMe .callMe_contain {
  margin-top: 10px;
}
</style>