<template>
  <div class="product">
    <div class="list" v-if="!detail">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="产品中心" name="first">
          <ul>
            <li v-if="newlistData.length==0">暂无数据，请添加</li>

            <li
              class="listLi"
              v-else
              v-for="(item,index) in newlistData"
              :key="index"
              @click="gotoDetail(index)"
            >
              <div>{{item.title}}</div>

              <div>
                <span>{{item.data}}</span>

                <el-button @click.stop="deleteData(index)" style="margin-left:10px">删除</el-button>
              </div>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>

      <el-button class="addBtn" @click="addNew">添加产品</el-button>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="pagesize"
        layout="total, prev, pager, next"
        :total="total"
        :hide-on-single-page="total<20"
      ></el-pagination>
    </div>

    <div class="detail" v-else>
      <div class="productContain">
        <span>产品标题</span>

        <el-input v-model="title"></el-input>
      </div>

      <div class="productContain">
        <span>产品参数</span>

        <el-input v-model="value"></el-input>
      </div>
      <div class="productContain">
        <span>产品图片</span>

        <el-upload
          class="upload-container"
          ref="upload"
          action="http://localhost:5000/user/imgAdd?index=4"
          :before-remove="handleRemove"
          :file-list="fileList2"
          list-type="picture"
          :before-upload="beforeAvatarUpload"
          :auto-upload="false"
          :on-success="handleSucess"
          :on-error="handleError"
          :on-change="changeimgList"
          :limit="3"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

          <!-- <el-button
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="submitUpload"
          >上传到服务器</el-button>-->

          <div slot="tip" class="el-upload__tip">只能上传3张jpg/png文件，且不超过10M，如果需要替换，请先删除当前图片</div>
        </el-upload>
      </div>

      <div class="productContain">
        <span>产品描述</span>

        <editor
          :editordataec="editordata1"
          :isupdata="isupdata"
          @updata="exceptData"
          :isshowimg="false"
        ></editor>
      </div>

      <div class="bottom-btn">
        <el-button @click="cancle">取消</el-button>

        <el-button type="primary" @click.stop="submitUp">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import editor from "@/components/editor";
let self;
export default {
  components: { editor: editor },
  data() {
    return {
      editordata1: "",
      title: "",
      isupdata: false,
      childrenData: "",
      detail: false,
      activeName: "first",
      newlistData: [],
      value: "",
      currentPage1: 1, //当前显示第几页
      total: 30,
      pagesize: 5, //当前每页显示条数
      choseId: "",
      fileList2: [],
      fileList3: [],
      fileList4: [],
      imgList: [],
      imgChange: false,
      exceptDataSave: "",
      options: [
        {
          value: "公司新闻",
          label: "公司新闻"
        },
        {
          value: "行业新闻",
          label: "行业新闻"
        }
      ]
    };
  },
  mounted() {
    this.getData("");
    self = this;
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage1 = val;
      this.getData();
    },
    addNew() {
      this.detail = true;
      this.title = "";
      this.value = "";
      this.choseId = "";
      this.fileList2 = [];
    },

    deleteData(index) {
      this.detail = false;
      this.choseId = this.newlistData[index]._id;
      console.log(this.newlistData[index]);
      let that = this;
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(1111);
          that
            .$post(that.url.productDelete, {
              _id: that.choseId,
              productImgUrl: that.newlistData[index].productImgUrl
            })
            .then(res => {
              if (res.code == 200) {
                that.$message({
                  type: "success",
                  message: "删除成功"
                });
                that.getData("");
              }
            });
        })
        .catch(() => {
          return false;
        });
    },
    cancle() {
      //取消
      console.log(this.fileList3);
      console.log(this.fileList2);
      let arr = this.fileList3; //如果取消时图片发生修改，并且已经提交服务器，则要删除图片数据
      for (let i = 0; i < this.fileList3.length; i++) {
        for (let j = 0; j < this.fileList2.length; j++) {
          if (this.fileList2[j].name == this.fileList3[i].name) {
            arr.splice(i, 1);
          }
        }
      }
      console.log(arr);
      if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
          this.$post(this.url.homeImgDelete, {
            index: arr[i].index,
            url: arr[i].url
          }).then(res => {
            console.log(res);
            if (res.code == 200) {
              // this.$message({
              // 	type: 'success',
              // 	message: '删除成功!'
              // });
            } else {
              // this.$message({
              // 	type: 'error',
              // 	message: res.msg
              // });
            }
          });
        }
      }
      if (this.fileList2.length) {
      }
      this.detail = false;
      this.title = "";
      this.value = "";
      this.editordata1 = "";
      this.choseId = "";
    },
    gotoDetail(index) {
      console.log(this.newlistData[index]);
      this.detail = true;
      this.title = this.newlistData[index].title;
      this.value = this.newlistData[index].productNum;
      // let that = this;
      // this.options.forEach(element => {
      //   if (element.value == that.newlistData[index].type) {
      //     this.value = element.label;
      //   }
      // });
      this.fileList2 = this.newlistData[index].productImgUrl;
      this.fileList3 = this.newlistData[index].productImgUrl;
      this.editordata1 = this.newlistData[index].detail;
      this.choseId = this.newlistData[index]._id;
      this.isupdata = false;
      this.imgChange = false;
    },
    getData(type) {
      this.$post(this.url.productSelect, {
        pagesize: this.pagesize,
        currentPage: this.currentPage1
      }).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.newlistData = res.data;
          this.total = res.count;
        }
      });
    },
    submitUp() {
      // console.log("进来");
      this.isupdata = true; //像子集传递数据，使得子集触发事件将数据传递给父级
    },
    exceptData(data) {
      //接收子集数据
      this.exceptDataSave = data;
      this.submitUpload();
      // return data;
    },
    uploadData() {
      console.log(this.exceptDataSave);
      this.isupdata = false;

      // if (this.fileList4.length > this.fileList3.length) {
      //   this.$message({
      //     type: "error",
      //     message: "请先将图片全部上传到服务器后再提交数据"
      //   });
      //   return;
      // }
      console.log(this.fileList3);
      if (this.choseId == "") {
        this.$post(this.url.productAdd, {
          title: this.title,
          productNum: this.value,
          detail: this.exceptDataSave,
          productImgUrl: this.fileList3
        }).then(res => {
          if (res.code == 200) {
            this.$message({
              type: "success",
              message: "添加成功"
            });

            this.detail = false;
            this.getData("");
          }
        });
      } else {
        console.log(123456);
        console.log(this.fileList3);
        this.$post(this.url.productUpdata, {
          title: this.title,
          productNum: this.value,
          detail: this.exceptDataSave,
          productImgUrl: this.fileList3,
          _id: this.choseId
        }).then(res => {
          if (res.code == 200) {
            this.$message({
              type: "success",
              message: "修改成功"
            });

            this.detail = false;
            // this.currentPage1 = 1;
            this.getData("");
          }
        });
      }
    },
    changeimgList(file, fileList) {
      console.log(fileList);
      this.fileList4 = fileList;
      this.imgChange = true;
    },
    //图片上传前
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
    //上传成功过后
    handleSucess(response, file, fileList) {
      console.log(response);
      console.log(fileList);
      this.fileList3 = [];
      if (response.code == 200) {
        // this.fileList2.push(response)
        for (let i = 0; i < fileList.length; i++) {
          if (fileList[i].response == undefined) {
            this.fileList3.push(fileList[i]);
          } else {
            this.fileList3.push(fileList[i].response.data);
          }
          this.uploadData();
        }
        return;
      } else {
        this.$notify({
          title: "失败",
          message: response.message,
          type: "warning",
          duration: 2000
        });
      }
    },
    //上传失败
    handleError(err, file, fileList) {
      console.log(err);
      this.$notify({
        title: "失败",
        message: "上传失败",
        type: "warning",
        duration: 2000
      });
    },

    submitUpload() {
      // this.submitUp();
      if (this.title == "") {
        this.$message({
          type: "error",
          message: "请先填写产品标题"
        });
        return;
      }
      if (this.value == "") {
        this.$message({
          type: "error",
          message: "请先选择产品参数"
        });
        return;
      }
      // if (this.fileList3.length == 0) {
      //   this.$message({
      //     type: "error",
      //     message: "请先添加产品图片"
      //   });
      //   return;
      // }
      if (this.exceptDataSave == "<p><br></p>") {
        this.$message({
          type: "error",
          message: "当前新闻内容为空，请先填写新闻内容"
        });
        return;
      }
      if (this.imgChange) {
        this.$refs.upload.submit();
      } else {
        this.uploadData();
      }
      // this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file);
      this.fileList4 = fileList;
      // this.fileList3.indexOf(fil)
      console.log(fileList);
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
                  for (let i = 0; i < this.fileList3.length; i++) {
                    console.log(141414);
                    console.log(this.fileList3);
                    console.log(file);
                    if (this.fileList3[i].url == file.url) {
                      this.fileList3.splice(i, 1);
                    }
                  }
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
      // console.log(file);
    },
    handleClick() {
      this.currentPage1 = 1;
      if (this.activeName == "first") {
        this.getData("公司新闻");
      } else {
        this.getData("行业新闻");
      }
    }
  }
};
</script>
<style>
.product {
  position: relative;
}

.product .el-pagination {
  text-align: right;
}

.product .el-input__suffix-inner,
.product .el-input__suffix {
  width: auto !important;
}

.product .listLi {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  align-items: center;
}

.product .productContain {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  padding-left: 20px;
  /* flex-flow: nowrap; */
}

.product .list {
  text-align: left;
  padding: 20px;
}

.product .addBtn {
  position: absolute;
  top: 15px;
  right: 20px;
}

.product .productContain span {
  display: inline-block;
  width: 100px;
  text-align: left;
}

.product .productContain .el-input {
  width: 80%;
}
.product .top-div {
  width: 80%;
}

.product .bottom-btn {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  padding-right: calc(100% - 100px - 80%);
}
.product .el-button--success span,
.product .el-button--primary span {
  width: 80px;
  text-align: center;
}
.product .el-upload-list li {
  width: 200px;
  margin-left: 10px;
}
.product .el-upload-list {
  width: 100%;
  display: flex;
  flex-flow: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}
.product .upload-container {
  width: 80%;
}
.product .el-upload-list__item-name {
  margin-right: 10px;
}
</style>