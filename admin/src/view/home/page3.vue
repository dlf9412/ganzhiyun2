<template>
  <div class="newList">
    <div class="list" v-if="!detail">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="公司新闻" name="first">
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

        <el-tab-pane label="行业新闻" name="second">
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
        </el-tab-pane>
      </el-tabs>

      <el-button class="addBtn" @click="addNew">添加新闻</el-button>

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
      <div class="newListContain">
        <span class="span_title">标题</span>

        <el-input v-model="title"></el-input>
      </div>

      <div class="newListContain">
        <span class="span_title">新闻类型</span>

        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>

      <div class="newListContain">
        <span class="span_title">内容</span>

        <editor
          :editordataec="editordata1"
          :isupdata="isupdata"
          @updata="exceptData"
          :isshowimg="true"
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
      total: 0,
      pagesize: 5, //当前每页显示条数
      choseId: "",

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
    this.getData("公司新闻");
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage1 = val;
      if (this.activeName == "first") {
        this.getData("公司新闻");
      } else {
        this.getData("行业新闻");
      }
    },
    addNew() {
      this.detail = true;
      this.title = "";
      this.value = "";
      this.choseId = "";
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
            .$post(that.url.newlistDelete, {
              _id: that.choseId,
              html: that.newlistData[index].html
            })
            .then(res => {
              if (res.code == 200) {
                that.$message({
                  type: "success",
                  message: "删除成功"
                });

                if (that.activeName == "first") {
                  that.getData("公司新闻");
                } else {
                  that.getData("行业新闻");
                }
              }
            });
        })
        .catch(() => {
          return false;
        });
    },
    cancle() {
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
      this.value = this.newlistData[index].type;
      // let that = this;
      // this.options.forEach(element => {
      //   if (element.value == that.newlistData[index].type) {
      //     this.value = element.label;
      //   }
      // });
      this.editordata1 = this.newlistData[index].html;
      this.choseId = this.newlistData[index]._id;
    },
    getData(type) {
      this.$post(this.url.newlistSelect, {
        type: type,
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
      this.isupdata = true; //像子集传递数据，使得子集触发事件将数据传递给父级
    },
    exceptData(data) {
      //接收子集数据
      console.log(data);
      this.isupdata = false;
      if (this.title == "") {
        this.$message({
          type: "error",
          message: "请先填写标题"
        });
        return;
      }
      if (this.value == "") {
        this.$message({
          type: "error",
          message: "请先选择新闻类型"
        });
        return;
      }
      if (data == "<p><br></p>") {
        this.$message({
          type: "error",
          message: "当前新闻内容为空，请先填写新闻内容"
        });
        return;
      }

      if (this.choseId == "") {
        this.$post(this.url.newlistAdd, {
          title: this.title,
          type: this.value,
          html: data
        }).then(res => {
          if (res.code == 200) {
            this.$message({
              type: "success",
              message: "添加成功"
            });

            this.detail = false;
            if (this.value == "公司新闻") {
              this.activeName == "first";
            } else {
              this.activeName == "second";
            }
            if (this.activeName == "first") {
              this.getData("公司新闻");
            } else {
              this.getData("行业新闻");
            }
          }
        });
      } else {
        this.$post(this.url.newlistUpdata, {
          title: this.title,
          type: this.value,
          html: data,
          _id: this.choseId
        }).then(res => {
          if (res.code == 200) {
            this.$message({
              type: "success",
              message: "修改成功"
            });

            this.detail = false;
            // this.currentPage1 = 1;

            if (this.activeName == "first") {
              this.getData("公司新闻");
            } else {
              this.getData("行业新闻");
            }
          }
        });
      }
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
.newList {
  position: relative;
}

.newList .el-pagination {
  text-align: right;
}

.newList .el-input__suffix-inner,
.newList .el-input__suffix {
  width: auto !important;
}

.newList .listLi {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

.newList .newListContain {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  padding-left: 20px;
  /* flex-flow: nowrap; */
}

.newList .list {
  text-align: left;
  padding: 20px;
}

.newList .addBtn {
  position: absolute;
  top: 15px;
  right: 20px;
}

.newList .newListContain .span_title {
  display: inline-block;
  width: 100px;
  text-align: left;
}

.newList .newListContain .el-input {
  width: 80%;
}

.newList .bottom-btn {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  padding-right: calc(100% - 100px - 80%);
}
</style>