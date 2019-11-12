<template>
  <div class="page5">
    <el-button size="small" class="add_table" @click="addTab(activeName)">添加新模块</el-button>
    <el-tabs
      v-model="activeName"
      type="card"
      @tab-click="handleClick"
      closable
      @tab-remove="removeTab"
    >
      <el-tab-pane
        :label="item.title"
        :name="item.name"
        v-for="(item,index) in editableTabs"
        :key="index"
      ></el-tab-pane>
      <!-- <el-tab-pane label="市场现状" name="1"></el-tab-pane>
      <el-tab-pane label="盈利模式" name="2"></el-tab-pane>
      <el-tab-pane label="合作方式" name="3"></el-tab-pane>
      <el-tab-pane label="合作优势" name="4"></el-tab-pane>-->
    </el-tabs>
    <div class="pageContain_5">
      <editor
        class="ediro"
        :editordataec="editordata1"
        :isupdata="isupdata"
        @updata="exceptData"
        :isshowimg="true"
      ></editor>
      <el-button class="updataBtn" @click="updata">{{choseId==''?'添加':'修改'}}</el-button>
    </div>
    <div class="page5Master" v-if="enterpriseShow">
      <div class="compony_add">
        <div class="add_title">{{titleMsg}}</div>
        <i class="el-icon-circle-close" @click="enterpriseShow=false"></i>
        <div class="add_contain">
          <div class="add_left">
            <div class="add_left_contain">
              <div class="add_detail">标题</div>
              <el-input v-model="cooperateModelTitle"></el-input>
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
      activeName: "1",
      editordata1: "",
      isupdata: false,
      choseId: "",
      choseType: "",
      editableTabsValue: "",
      tabIndex: 2,
      titleMsg: "添加新模块",
      enterpriseShow: false,
      cooperateModelTitle: "",
      isAddModel: false,
      editableTabs: [
        {
          title: "市场模式",
          name: "1"
        }
      ]
    };
  },
  mounted() {
    this.getTypeData();
    // this.getData("1");
  },
  methods: {
    submitenter() {
      if (this.cooperateModelTitle == "") {
        this.$message({
          type: "error",
          message: "标题为空，请先填写标题"
        });
        return;
      }
      let newTabName = String(
        Number(this.editableTabs[this.editableTabs.length - 1].name) + 1
      );
      console.log(newTabName);
      this.$post(this.url.cooporateModelAdd, {
        title: this.cooperateModelTitle,
        name: newTabName
      }).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.isAddModel = true;
          this.getTypeData();
          this.enterpriseShow = false;
          this.activeName = newTabName;
          this.getData(this.activeName);
        }
      });
    },
    addTab(activeName) {
      this.enterpriseShow = true;
    },
    removeTab(tagName) {
      this.$confirm(
        "此操作将永久删除该条模块以及模块底下的模块数据, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        }
      )
        .then(() => {
          this.$post(this.url.cooporateModelDelete, {
            name: String(tagName)
          }).then(res => {
            if (res.code == 200) {
              this.$post(this.url.cooporateDelete, {
                type: String(tagName)
              }).then(res1 => {
                if (res1.code == 200) {
                  this.$message({
                    type: "success",
                    message: "删除成功!"
                  });
                  this.getTypeData();
                } else {
                  this.$message({
                    type: "error",
                    message: "删除失败!"
                  });
                }
              });
            } else {
              this.$message({
                type: "error",
                message: "删除失败!"
              });
            }
            console.log(res);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      console.log(tagName);
    },
    handleClick() {
      // console.log(this.c);
      this.getData(this.activeName);
    },
    exceptData(data) {
      //接收子集数据
      console.log(this.choseType);
      this.isupdata = false;

      if (data == "<p><br></p>") {
        this.$message({
          type: "error",
          message: "当前新闻内容为空，请先填写新闻内容"
        });
        return;
      }

      if (this.choseId == "" && this.choseType == "") {
        this.$post(this.url.cooporateAdd, {
          type: this.activeName,
          html: data
        }).then(res => {
          if (res.code == 200) {
            this.$message({
              type: "success",
              message: "添加成功"
            });
          }
        });
      } else {
        this.$post(this.url.cooporateUpdata, {
          type: this.activeName,
          html: data,
          _id: this.choseId
        }).then(res => {
          if (res.code == 200) {
            this.$message({
              type: "success",
              message: "修改成功"
            });
          }
        });
      }
    },
    getTypeData() {
      this.$post(this.url.cooporateModelSelect, {}).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.editableTabs = res.data;

          if (this.isAddModel) {
            this.isAddModel = false;
          } else {
            this.activeName = res.data[0].name;
          }
          this.getData(this.activeName);
        }
      });
    },
    getData(type) {
      console.log(type);
      this.$post(this.url.cooporateSelect, {
        type: type
      }).then(res => {
        console.log(res);
        if (res.code == 200 && res.data.length > 0) {
          this.choseId = res.data[0]._id;
          this.editordata1 = res.data[0].html;
          this.choseType = res.data[0].type;
          //   this.total = res.count;
        } else {
          this.editordata1 = "";
          this.choseType = "";
          this.choseId = "";
        }
      });
    },
    updata() {
      this.isupdata = true; //像子集传递数据，使得子集触发事件将数据传递给父级
    }
  }
};
</script>
<style>
.page5 {
  position: relative;
  padding: 20px;
  /* width: 100%; */
  box-sizing: border-box;
  min-height: calc(100vh - 60px);
}
.page5 .updataBtn {
  margin-top: 20px;
  position: absolute;
  right: 12%;
}
.page5 .ediro {
  /* margin-left: 5%; */
  width: 90%;
}
.page5 .add_table {
  position: absolute;
  right: 20px;
  cursor: pointer;
  z-index: 1000;
}
.page5 .page5Master {
  position: absolute;
  top: 0px;
  left: -1px;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
}
.page5 .compony_add {
  width: 400px;
  height: 200px;
  background: white;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
.page5 .add_title {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background: green;
  color: white;
}
.page5 .el-icon-circle-close {
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  cursor: pointer;
}
.page5 .add_contain {
  padding: 10px 20px;
  padding-top: 0px;
  margin-top: 20px;
}
.page5 .add_left_contain,
.page5 .add_Introduction {
  display: flex;
  justify-content: flex-start;
  padding: 5px 0;
  align-items: center;
}
.page5 .add_detail {
  width: 50px;
}
/* .page5 .w-e-text-container {
  height: 400px !important;
} */
</style>