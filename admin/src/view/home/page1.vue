<template>
  <div class="page1">
    <div class="contain1">
      <h3>首页轮播修改</h3>
      <el-upload class="upload-demo" action="" :on-preview="handlePreview" :on-remove="handleRemove"
        :file-list="fileList2" list-type="picture" :auto-upload="false" ref="upload" :http-request="
      uploadImg"
        :on-change="getFile">
         <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="uploadImg">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        
      </el-upload>
      
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fileList2: [{name:'',index:1}]
      }
    },
    mounted() {
      this.$post(this.url.homeImgSelect, {}).then(res => {
        console.log(res)
      })
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      uploadImg() {
          console.log(1111)
      },

      getFile(file, fileList) {
        console.log(file);
        this.getBase64(file.raw).then(res => {
          console.log(res)
        });
      },
      getBase64(file) {
        return new Promise(function (resolve, reject) {
          let reader = new FileReader();
          let imgResult = "";
          reader.readAsDataURL(file);
          reader.onload = function () {
            imgResult = reader.result;
          };
          reader.onerror = function (error) {
            reject(error);
          };
          reader.onloadend = function () {
            resolve(imgResult);
          };
        });
      }
    }
  }

</script>
<style>
  .page1 .contain1 {
    padding: 10px;
  }

  .page1 .contain1 h3 {
    text-align: left;
    margin: 0px;
    padding: 0;
  }

</style>
