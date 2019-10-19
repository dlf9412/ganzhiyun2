<template>
  <div class="page5">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="市场现状" name="1"></el-tab-pane>
      <el-tab-pane label="盈利模式" name="2"></el-tab-pane>
      <el-tab-pane label="合作方式" name="3"></el-tab-pane>
      <el-tab-pane label="合作优势" name="4"></el-tab-pane>
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
      choseType: ""
    };
  },
  mounted() {
    this.getData("1");
  },
  methods: {
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

/* .page5 .w-e-text-container {
  height: 400px !important;
} */
</style>