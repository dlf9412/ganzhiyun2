<template>
  <div class="top-div">
    <div ref="editor" style="text-align:left"></div>
  </div>
</template>
 
<script>
import E from "wangeditor";
export default {
  props: ["editordataec", "isupdata", "isshowimg"],
  name: "appEditArt",
  data() {
    return {
      editor: null,
      saveImgData: [],
      editorData: "",
      getData: "",
      uploadImgList: []
    };
  },
  mounted() {
    console.log(this.isshowimg);
    this.seteditor();
    console.log(this.editordataec);
    if (this.editordataec !== "") {
      let img = this.editordataec.split("src=");
      for (let i = 0; i < img.length; i++) {
        if (i < img.length - 1) {
          this.saveImgData.push(
            img[i + 1]
              .split(" ")[0]
              .replace('"', "")
              .replace('"', "")
          );
        }
      }
    } else {
      this.saveImgData = [];
    }
    this.editor.txt.html(this.editordataec);
  },
  computed: {
    recpData() {
      return this.editordataec;
    }
  },

  watch: {
    isupdata() {
      console.log(this.isupdata);
      if (this.isupdata) {
        this.uploadData();
        this.$emit("updata", this.editorData);
      }
    },
    editordataec() {
      console.log(this.editordataec);
      this.editor.txt.html(this.editordataec);
    }
  },
  methods: {
    getDataList() {},
    uploadData() {
      this.uploadImgList = [];
      this.editorData = this.editor.txt.html();
      let img = this.editorData.split("src=");

      for (let i = 0; i < img.length; i++) {
        if (i < img.length - 1) {
          this.uploadImgList.push(
            img[i + 1]
              .split(" ")[0]
              .replace('"', "")
              .replace('"', "")
          );
        }
      }
      var imgdeletlist = this.subSet(this.uploadImgList, this.saveImgData);
      for (let i = 0; i < imgdeletlist.length; i++) {
        this.deleteImg(imgdeletlist[i]);
      }
    },
    deleteImg(url) {
      this.$post(this.url.homeImgDelete, {
        url: url
      }).then(res => {
        // console.log(res);
        // if (res.code == 200) {
        //   this.$message({
        //     type: "success",
        //     message: "删除成功!"
        //   });
        // } else {
        //   this.$message({
        //     type: "success",
        //     message: res.msg
        //   });
        // }
      });
    },
    subSet(arr1, arr2) {
      var subset = [];
      for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          subset.push(arr2[i]);
        }
      }
      return subset;
    },
    seteditor() {
      this.editor = new E(this.$refs.editor);
      if (this.isshowimg) {
        this.editor.customConfig.menus = [
          "head",
          "bold",
          "italic",
          "underline",
          "image"
        ];
      } else {
        this.editor.customConfig.menus = [
          "head",
          "bold",
          "italic",
          "underline"
        ];
      }

      this.editor.customConfig.zIndex = 100;
      //关闭粘贴样式的过滤
      this.editor.customConfig.pasteFilterStyle = false;
      //忽略粘贴内容中的图片
      this.editor.customConfig.pasteIgnoreImg = true;
      // 将图片大小限制为 3M
      this.editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
      // 限制一次最多上传 5 张图片
      this.editor.customConfig.uploadImgMaxLength = 1;
      //上传图片到服务器可显示上传

      var url = "http://localhost:5000/user/imgAdd?index=3";
      this.editor.customConfig.uploadImgServer = url;

      //自定义上传图片
      let that = this;
      this.editor.customConfig.customUploadImg = function(files, insert) {
        // files 是 input 中选中的文件列表
        // insert 是获取图片 url 后，插入到编辑器的方法

        if (files == null || files == undefined) {
          layer.msg("请选择图片");

          return;
        }

        var formData = new FormData();
        formData.append("file", files[0]);

        var url = "http://localhost:5000/user/imgAdd?index=3";
        that.$post(url, formData).then(res => {
          console.log(res);
          if (res.code == 200) {
            that.saveImgData.push(res.data.url);
            that.editor.cmd.do(
              "insertHTML",
              '<img src="' +
                res.data.url +
                '" alt="" width="100%" height="200px">'
            );
            // insert(img.url);
          }
        });
      };
      //隐藏网络图片
      this.editor.customConfig.showLinkImg = false;
      this.editor.create();
    }
  }
};
</script>
 
<style >
.top-div {
  /* position: relative; */
  width: 80%;
  /* margin: 0 auto; */
}

.uploadimg {
  position: absolute;
  color: rgb(153, 153, 153);
  font-size: 20px;
  top: 6px;
  left: 159px;
}
.w-e-text-container {
  height: 400px !important;
}
</style>
