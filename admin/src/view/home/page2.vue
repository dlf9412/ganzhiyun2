<template>
  <div class="compony">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="高管信息" name="first">
        <div class="compony_contain1">
          <!-- <h3>高管信息</h3> -->
          <el-button class="add_btn" @click="compony_add">添加</el-button>
          <div v-if="componyData.length==0">暂无数据，请先添加高管信息</div>
          <div v-else>
            <ul class="compony_ul">
              <li v-for="(item,index) in componyData" :key="index" class="compony_people">
                <img :src="item.src" alt />
                <div>
                  <div class="people_title">{{item.name}}({{item.position}})</div>
                  <div class="people_Detail">{{item.detail}}</div>
                  <div style="margin-top:10px;text-align:center">
                    <el-button type="danger" @click="deleteData(item)">删除</el-button>
                    <el-button @click="update(item)">修改</el-button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-tab-pane>
      <!--  -->
      <el-tab-pane label="公司简介" name="second">
        <div class="add_Introduction">
          <div class="add_detail">公司名称</div>
          <el-input v-model="Introduction_name" placeholder="请输入公司名称"></el-input>
        </div>
        <div class="add_Introduction">
          <div class="add_detail">公司信条</div>
          <el-input v-model="Introduction_title" placeholder="请输入公司信条"></el-input>
        </div>
        <div class="add_Introduction">
          <div class="add_detail">公司简介</div>
          <!-- <el-input
            type="textarea"
            :autosize="{ minRows: 2}"
            placeholder="请输入公司简介文本"
            v-model="textarea"
          ></el-input>-->
          <editor
            :editordataec="textarea"
            :isupdata="isupdata"
            @updata="exceptData1"
            :isshowimg="false"
          ></editor>
        </div>
        <div style="margin-top:10px">
          <el-button @click="getData2">重置</el-button>
          <el-button type="success" @click="IntroductionAdd">提交</el-button>
        </div>
      </el-tab-pane>
      <!--  -->
      <el-tab-pane label="企业实力" name="third">
        <div class="compony_contain1">
          <!-- <h3>高管信息</h3> -->
          <el-button class="add_btn" @click="enterprise_add">添加</el-button>
          <div v-if="enterprise.length==0" style="line-height:45px">暂无数据，请先添加信息</div>
          <div v-else>
            <ul class="compony_ul">
              <li
                v-for="(item,index) in enterprise"
                :key="index"
                class="compony_people compony_enter"
              >
                <div class="enterSingle">
                  <div class="enter_title">{{item.title}}</div>
                  <div class="detail_enter" v-html="item.detail">{{}}</div>
                  <div style="margin-top:10px;text-align:center;width:100%">
                    <el-button type="danger" @click="deleteEnterData(item)">删除</el-button>
                    <el-button @click="Enterupdate(item)">修改</el-button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 高管信息弹窗 start -->
    <div class="addWrap" v-if="showAdd_">
      <div class="compony_add">
        <div class="add_title">{{titleMsg}}</div>
        <i class="el-icon-circle-close" @click="showAdd_=false;isDetail=false"></i>
        <div class="add_contain">
          <div class="add_left">
            <div class="add_left_contain">
              <div class="add_detail">头像</div>
              <el-upload
                ref="upload"
                class="avatar-uploader"
                action="http://120.79.222.61:5000/user/imgAdd?index=5"
                :show-file-list="false"
                :on-success="handleSucess"
                :before-upload="beforeAvatarUpload"
                :auto-upload="false"
                :before-remove="handleRemove"
                :on-change="changeImg"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="add_left_contain">
              <div class="add_detail">名字</div>
              <el-input v-model="name"></el-input>
            </div>
            <div class="add_left_contain">
              <div class="add_detail">职称</div>
              <el-input v-model="position"></el-input>
            </div>
            <div class="add_left_contain">
              <div class="add_detail">描述</div>
              <el-input v-model="detail"></el-input>
            </div>
            <!-- <div class="add_left_contain">
              <div class="add_detail">排序</div>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>-->
            <div style="margin-top:10px">
              <el-button @click="showAdd_=false;isDetail=false">取消</el-button>
              <el-button type="success" @click="submit">确认</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 高管信息弹窗 end -->
    <div class="addWrap" v-if="enterpriseShow">
      <div class="compony_add compony_add1">
        <div class="add_title">{{titleMsg}}</div>
        <i class="el-icon-circle-close" @click="enterpriseShow=false"></i>
        <div class="add_contain">
          <div class="add_left">
            <div class="add_left_contain">
              <div class="add_detail">标题</div>
              <el-input v-model="enterpriseTitle"></el-input>
            </div>
            <div class="add_left_contain">
              <div class="add_detail">内容</div>
              <editor
                :editordataec="editordata1"
                :isupdata="isupdata"
                @updata="exceptData"
                :isshowimg="false"
              ></editor>
            </div>
            <div style="margin-top:10px">
              <el-button @click="enterpriseShow=false">取消</el-button>
              <el-button type="success" @click="submitenter">确认</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import editor from "@/components/editor";
export default {
  components: { editor: editor },
  data() {
    return {
      componyData: [],
      activeName2: "first",
      imageUrl: "",
      value: "",
      options: [],
      showAdd_: false,
      name: "",
      position: "",
      detail: "",
      isDetail: false,
      choseId: "",
      imgChange: "",
      titleMsg: "添加高管信息",
      textarea: "",
      Introduction_name: "",
      Introduction_title: "",
      // 企业实力
      enterprise: [],
      enterpriseShow: false,
      enterpriseTitle: "",
      editordata1: "",
      isupdata: false,
      enterId: ""
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    //
    compony_add() {
      this.showAdd_ = true;
      this.isDetail = false;
      this.imgChange = false;
      this.titleMsg = "添加高管信息";
      this.imageUrl = "";
      this.name = "";
      this.position = "";
      this.detail = "";
    },
    handleClick() {
      switch (this.activeName2) {
        case "second":
          this.getData2();
          break;
        case "first":
          this.getData();
          break;
        case "third":
          this.titleMsg = "添加企业实力";
          this.getData3();
          break;
        default:
          break;
      }
    },
    submit() {
      if (this.name == "") {
        this.$message({
          type: "error",
          message: "请先填写名字"
        });
        return;
      }
      if (this.position == "") {
        this.$message({
          type: "error",
          message: "请先填写职称"
        });
        return;
      }
      if (this.detail == "") {
        this.$message({
          type: "error",
          message: "请先填写描述"
        });
        return;
      }
      if (this.imgChange) {
        this.$refs.upload.submit();
      } else {
        this.submitData();
      }
    },
    submitData() {
      if (this.isDetail) {
        console.log(11111);
        this.$post(this.url.componyUpdata, {
          _id: this.choseId,
          name: this.name,
          src: this.imageUrl,
          detail: this.detail,
          position: this.position
        }).then(res => {
          console.log(res);
          this.showAdd_ = false;
          this.getData();
          this.$message({
            type: "success",
            message: "修改成功"
          });
          return;
        });
      } else {
        this.$post(this.url.componyAdd, {
          name: this.name,
          src: this.imageUrl,
          detail: this.detail,
          position: this.position
        }).then(res => {
          console.log(res);
          if (res.code == 200) {
            this.showAdd_ = false;
            this.getData();
            this.$message({
              type: "success",
              message: "添加成功"
            });
          }
        });
      }
    },
    getData() {
      this.$post(this.url.componySelect, {}).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.componyData = res.data;
        }
      });
    },
    update(item) {
      this.isDetail = true;
      this.showAdd_ = true;
      this.imageUrl = item.src;
      this.name = item.name;
      this.position = item.position;
      this.detail = item.detail;
      this.choseId = item._id;
      this.imgChange = false;
      this.titleMsg = "修改高管信息";
    },
    deleteData(item) {
      this.handleRemove(item);
    },
    changeImg(file, fileList) {
      this.imgChange = true;
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === "image/jpeg";
      // const isLt2M = file.size / 1024 / 1024 < 2;
      // if (!isJPG) {
      //   this.$message.error("上传头像图片只能是 JPG 格式!");
      // }
      // if (!isLt2M) {
      //   this.$message.error("上传头像图片大小不能超过 2MB!");
      // }
      // return isJPG && isLt2M;
    },
    //上传成功过后
    handleSucess(response, file, fileList) {
      console.log(response);
      if (response.code == 200) {
        this.imageUrl = response.data.url;
        this.submitData();
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
    handleRemove(item) {
      return this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$post(this.url.componyDelete, item).then(res => {
            console.log(res);
            if (res.code == 200) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.getData();
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
    },
    // 公司简介
    exceptData1(data) {
      // this.textarea=data;
      if (this.Introduction_name == "") {
        this.$message({
          type: "error",
          message: "公司名称不能为空"
        });
        return;
      }
      if (this.Introduction_title == "") {
        this.$message({
          type: "error",
          message: "公司信条不能为空"
        });
        return;
      }
      if (this.textarea == "") {
        this.$message({
          type: "error",
          message: "公司简介不能为空"
        });
        return;
      }
      this.$post(this.url.componyintroAdd, {
        name: this.Introduction_name,
        detail: data,
        intro: this.Introduction_title
      }).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.$message({
            type: "success",
            message: "提交成功"
          });
          this.isupdata = false;
        } else {
          this.$message({
            type: "error",
            message: "提交失败"
          });
          this.isupdata = false;
        }
      });
    },
    IntroductionAdd() {
      this.isupdata = true;
    },
    getData2() {
      this.$post(this.url.componyintroSelect, {}).then(res => {
        console.log(res);
        if (res.code == 200 && res.data.length > 0) {
          this.Introduction_name = res.data[0].name;
          this.Introduction_title = res.data[0].intro;
          this.textarea = res.data[0].detail;
        } else {
          this.Introduction_name = "";
          this.Introduction_title = "";
          this.textarea = "";
        }
      });
    },
    // 企业实力
    getData3() {
      this.$post(this.url.enterpriseSelect, {}).then(res => {
        if (res.code == 200) {
          this.enterprise = res.data;
        }
      });
    },
    enterprise_add() {
      this.enterpriseShow = true;
      this.enterpriseTitle = "";
      this.editordata1 = "";
    },
    deleteEnterData(item) {
      return this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$post(this.url.enterpriseDelete, {
            _id: item._id
          }).then(res => {
            if (res.code == 200) {
              this.getData3();
              this.$message.success("删除成功");
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
          return false;
        });
    },
    Enterupdate(item) {
      this.enterpriseShow = true;
      this.enterpriseTitle = item.title;
      this.editordata1 = item.detail;
      this.enterId = item._id;
      this.isupdata = false;
    },
    exceptData(data) {
      if (data == "<p></p>") {
        this.$message({
          type: "error",
          message: "当前内容为空，请先填写内容"
        });
        return;
      }
      if (this.enterpriseTitle == "") {
        this.$message({
          type: "error",
          message: "标题为空，请先填写标题"
        });
        return;
      }
      if (this.enterId == "") {
        this.$post(this.url.enterpriseAdd, {
          title: this.enterpriseTitle,
          detail: data
        }).then(res => {
          if (res.code == 200) {
            this.$message.success("添加成功");
            this.enterpriseShow = false;
            this.isupdata = false;
            this.getData3();
          }
        });
      } else {
        this.$post(this.url.enterpriseUpdata, {
          _id: this.enterId,
          title: this.enterpriseTitle,
          detail: data
        }).then(res => {
          console.log(res);
          if (res.code == 200) {
            this.$message.success("添加成功");
            this.enterpriseShow = false;
            this.isupdata = false;
            this.getData3();
          }
        });
      }
    },
    submitenter() {
      this.isupdata = true;
    }
  }
};
</script>
<style>
.compony {
  padding: 10px 20px;
  width: 100%;
  position: relative;
  min-height: calc(100vh - 60px);
  box-sizing: border-box;
}
.compony .compony_ul {
  display: flex;
  justify-content: flex-start;
  flex-flow: wrap;
  width: calc(100% - 100px);
}
.compony .compony_ul .el-button {
  padding: 8px 15px;
}
.compony .compony_people {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  border: 1px solid #ccc;
  padding: 10px;
  width: 350px;
  margin: 1%;
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 8px;
}
.compony .compony_people img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  /* flex: 1; */
}
.compony .people_title {
  font-weight: bold;
  margin-bottom: 10px;
}
.compony .people_Detail {
  margin: 10px 0;
}
.compony .compony_contain1 {
  position: relative;
  min-height: 100px;
}
.compony h3 {
  text-align: left;
  margin-bottom: 20px;
}
.compony .add_btn {
  position: absolute;
  top: 0;
  right: 0;
}
.compony .addWrap {
  position: absolute;
  top: 0px;
  left: -1px;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
}

.compony .compony_add {
  width: 500px;
  height: 470px;
  background: white;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
.compony .compony_add1 {
  width: 800px;
  height: 610px;
}
/* .compony .top-div {
  height: 300px;
} */
.compony .fr-element {
  height: 300px;
}
.compony .el-icon-circle-close {
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  cursor: pointer;
}
.compony .add_title {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background: green;
  color: white;
}
.compony .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.compony .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.compony .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 158px;
  height: 158px;
  line-height: 158px;
  text-align: center;
}
.compony .avatar {
  width: 158px;
  height: 158px;
  display: block;
}
.compony .add_contain {
  padding: 10px 20px;
  padding-top: 0px;
}
.compony .add_left_contain,
.compony .add_Introduction {
  display: flex;
  justify-content: flex-start;
  padding: 5px 0;
  align-items: center;
}
.compony .add_detail {
  width: 120px;
}
.compony .add_left {
  padding-top: 20px;
}
.compony .el-input,
.compony .el-textarea {
  width: calc(100% - 130px);
}
.compony .el-select .el-input {
  width: 100%;
}
.compony .add_Introduction .el-input {
  width: 400px;
}
.compony .w-e-text-container {
  height: 200px !important;
}
.compony .enterSingle {
  width: 100%;
}
.compony .enterSingle .detail_enter span {
  color: #14e5e7;
  font-size: 1.3rem;
}
.compony .enterSingle .detail_enter {
  margin-bottom: 20px;
}
.compony .enterSingle p {
  margin: 0;
  padding: 0;
}
.compony .compony_enter {
  /* width: 24%; */
  background: #44878a;
  color: white;
  padding: 15px 15px 20px;
  border-radius: 5px;
  margin: 10px 3%;
}
.compony .enter_title {
  font-size: 1.3rem;
  color: #fefb07;
  text-align: center;
  margin-bottom: 10px;
}
</style>
