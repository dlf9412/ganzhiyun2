<template>
  <div class="page1">
    <div class="contain1">
      <h3>首页轮播修改</h3>
      <el-upload class="upload-demo" action="" :on-preview="handlePreview" :on-remove="handleRemove"
        :file-list="fileList2" list-type="picture" :auto-upload="false" ref="upload" :http-request="
      uploadImg" :on-change="getFile" :before-upload="beforeAvatarUpload">
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
        fileList2: [],
        saveIndex: ''

      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.$post(this.url.homeImgSelect, {}).then(res => { //首页轮播查询
          console.log(res)
          if (res.code == 200) {
            if (res.data.length > 0) {
              this.saveIndex = res.data[0].index;
            }
            this.fileList2 = res.data;
          }
        })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
        this.getFile(file, fileList)
      },
      beforeAvatarUpload(file) {

        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 1
        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!')
        // }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 1MB!')
        }
        // file.index=1212;
        return isLt2M
      },
      handlePreview(file) {
        console.log(file);
      },
      uploadImg() {
        if (this.saveIndex !== '') {
          console.log(this.fileList2)
          this.$post(this.url.homeImgUpdate, {
            index: this.saveIndex,
            fileList: this.fileList2
          }).then(res => {
            console.log(res)
            this.$message.success('上传成功')
            // let that=this;
            // setTimeout(() => {
            //   that.getData()
            // }, 1000);
          })
        } else {
          this.$post(this.url.homeImgAdd, this.fileList2).then(res => {
            console.log(res)
            if (res.code == 200) {
              this.$message.success('上传成功')
            } else {
              this.$message.error('上传失败，请重新上传')
            }
            // this.getData()
          })
        }


      },

      getFile(file, fileList) {
        console.log(file)
        const isLt2M = file.size / 1024 / 1024 < 1;

        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 1MB!');
          // fileList.pop()
          // console.log(this.fileList2)
          return
        }
        this.fileList2 = [];
        let i = 0;
        fileList.forEach(file => {
          console.log(file)
          if (file.raw !== undefined) {
            this.getBase64(file.raw).then(res => {
              let obj = {
                name: file.name,
                url: res,
                index: i
              }
              this.fileList2.push(obj)
            })
          } else {
            this.fileList2.push(file)
          }


        });
        console.log(fileList);
        // this.getBase64(file.raw).then(res => {
        //   console.log(res)
        // });
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

  .page1 .el-upload-list--picture .el-upload-list__item {
    width: 22%;
    margin-left: 10px;
  }

  .page1 .el-upload-list--picture {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: wrap;
  }

</style>
