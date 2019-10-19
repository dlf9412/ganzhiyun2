<template>
  <div class="page1">
    <div class="contain1">
      <h3>首页轮播修改</h3>

      <el-upload
        class="upload-container"
        ref="upload"
        action="http://localhost:5000/user/imgAdd?index=1"
        :on-preview="handlePreview"
        :before-remove="handleRemove"
        :file-list="fileList"
        list-type="picture"
        :headers="uploadHeaders"
        :before-upload="beforeAvatarUpload"
        :auto-upload="false"
        :on-success="handleSucess"
        :on-error="handleError"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload"
        >上传到服务器</el-button>

        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10M</div>
      </el-upload>
    </div>
    <div class="contain2">
      <h3>关于公司广告位图片</h3>

      <el-upload
        class="upload-container"
        ref="upload1"
        action="http://localhost:5000/user/imgAdd?index=11"
        :on-preview="handlePreview"
        :before-remove="handleRemove"
        :file-list="fileList2"
        list-type="picture"
        :headers="uploadHeaders"
        :before-upload="beforeAvatarUpload"
        :auto-upload="false"
        :on-success="handleSucess"
        :on-error="handleError"
        :limit="1"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload1"
        >上传到服务器</el-button>

        <div slot="tip" class="el-upload__tip">只能上传1张jpg/png文件，且不超过10M，如果需要替换，请先删除当前图片</div>
      </el-upload>
    </div>

    <div class="contain3">
      <h3>新闻中心广告位图片</h3>

      <el-upload
        class="upload-container"
        ref="upload2"
        action="http://localhost:5000/user/imgAdd?index=12"
        :on-preview="handlePreview"
        :before-remove="handleRemove"
        :file-list="fileList3"
        list-type="picture"
        :headers="uploadHeaders"
        :before-upload="beforeAvatarUpload"
        :auto-upload="false"
        :on-success="handleSucess"
        :on-error="handleError"
        :limit="1"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload2"
        >上传到服务器</el-button>

        <div slot="tip" class="el-upload__tip">只能上传1张jpg/png文件，且不超过10M，如果需要替换，请先删除当前图片</div>
      </el-upload>
    </div>
    <div class="contain4">
      <h3>产品中心广告位图片</h3>

      <el-upload
        class="upload-container"
        ref="upload3"
        action="http://localhost:5000/user/imgAdd?index=13"
        :on-preview="handlePreview"
        :before-remove="handleRemove"
        :file-list="fileList4"
        list-type="picture"
        :headers="uploadHeaders"
        :before-upload="beforeAvatarUpload"
        :auto-upload="false"
        :on-success="handleSucess"
        :on-error="handleError"
        :limit="1"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload3"
        >上传到服务器</el-button>

        <div slot="tip" class="el-upload__tip">只能上传1张jpg/png文件，且不超过10M，如果需要替换，请先删除当前图片</div>
      </el-upload>
    </div>
    <div class="contain5">
      <h3>合作加盟广告位图片</h3>

      <el-upload
        class="upload-container"
        ref="upload4"
        action="http://localhost:5000/user/imgAdd?index=14"
        :on-preview="handlePreview"
        :before-remove="handleRemove"
        :file-list="fileList5"
        list-type="picture"
        :headers="uploadHeaders"
        :before-upload="beforeAvatarUpload"
        :auto-upload="false"
        :on-success="handleSucess"
        :on-error="handleError"
        :limit="1"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload4"
        >上传到服务器</el-button>

        <div slot="tip" class="el-upload__tip">只能上传1张jpg/png文件，且不超过10M，如果需要替换，请先删除当前图片</div>
      </el-upload>
    </div>
    <div class="contain5">
      <h3>联系我们广告位图片</h3>

      <el-upload
        class="upload-container"
        ref="upload5"
        action="http://localhost:5000/user/imgAdd?index=15"
        :on-preview="handlePreview"
        :before-remove="handleRemove"
        :file-list="fileList6"
        list-type="picture"
        :headers="uploadHeaders"
        :before-upload="beforeAvatarUpload"
        :auto-upload="false"
        :on-success="handleSucess"
        :on-error="handleError"
        :limit="1"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload5"
        >上传到服务器</el-button>

        <div slot="tip" class="el-upload__tip">只能上传1张jpg/png文件，且不超过10M，如果需要替换，请先删除当前图片</div>
      </el-upload>
    </div>
    <!--  -->
    <div class="contain6">
      <h3>企业风采图片</h3>

      <el-upload
        class="upload-container"
        ref="upload6"
        action="http://localhost:5000/user/imgAdd?index=16"
        :on-preview="handlePreview"
        :before-remove="handleRemove"
        :file-list="fileList7"
        list-type="picture"
        :headers="uploadHeaders"
        :before-upload="beforeAvatarUpload"
        :auto-upload="false"
        :on-success="handleSucess"
        :on-error="handleError"
        :limit="1"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload6"
        >上传到服务器</el-button>

        <div slot="tip" class="el-upload__tip">只能上传1张jpg/png文件，且不超过10M，如果需要替换，请先删除当前图片</div>
      </el-upload>
    </div>
    <!--  -->
    <!--  -->
    <div class="contain7">
      <h3>企业实力轮播图一</h3>

      <el-upload
        class="upload-container"
        ref="upload7"
        action="http://localhost:5000/user/imgAdd?index=17"
        :on-preview="handlePreview"
        :before-remove="handleRemove"
        :file-list="fileList8"
        list-type="picture"
        :headers="uploadHeaders"
        :before-upload="beforeAvatarUpload"
        :auto-upload="false"
        :on-success="handleSucess"
        :on-error="handleError"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload7"
        >上传到服务器</el-button>

        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10M，如果需要替换，请先删除当前图片</div>
      </el-upload>
    </div>
    <!--  -->
    <div class="contain8">
      <h3>企业实力轮播图二</h3>

      <el-upload
        class="upload-container"
        ref="upload8"
        action="http://localhost:5000/user/imgAdd?index=18"
        :on-preview="handlePreview"
        :before-remove="handleRemove"
        :file-list="fileList9"
        list-type="picture"
        :headers="uploadHeaders"
        :before-upload="beforeAvatarUpload"
        :auto-upload="false"
        :on-success="handleSucess"
        :on-error="handleError"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>

        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload8"
        >上传到服务器</el-button>

        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10M，如果需要替换，请先删除当前图片</div>
      </el-upload>
    </div>
    <!--  -->
  </div>
</template>
<<script>
let self;
export default {

	data() {

		return {
			//上传图片参数
			fileList:[],
			fileList2:[],
			fileList3:[],
			fileList4:[],
			fileList5:[],
      fileList6:[],
      fileList7:[],
      fileList8:[],
      fileList9:[]
		}
	},
	computed: {
		//计算属性
		uploadHeaders() {
			return {
				// Authorization: this.$store.state.id_token
			}
		}
	},
	mounted() {
		self = this;
		this.getimgList()
	
	},
	methods: {
		getimgList() {
			this.$post(this.url.homeImgSelect, { index: 1 }).then(res => {
				console.log(res)
				if (res.code == 200) {
					this.fileList = res.data
				}
			})
			this.$post(this.url.homeImgSelect, { index: 11 }).then(res => {
				console.log(res)
				if (res.code == 200) {
					this.fileList2 = res.data
				}
			})
			this.$post(this.url.homeImgSelect, { index: 12 }).then(res => {
				console.log(res)
				if (res.code == 200) {
					this.fileList3 = res.data
				}
			})
			this.$post(this.url.homeImgSelect, { index: 13 }).then(res => {
				console.log(res)
				if (res.code == 200) {
					this.fileList4 = res.data
				}
			})
			this.$post(this.url.homeImgSelect, { index: 14 }).then(res => {
				console.log(res)
				if (res.code == 200) {
					this.fileList5 = res.data
				}
			})
			this.$post(this.url.homeImgSelect, { index: 15 }).then(res => {
				console.log(res)
				if (res.code == 200) {
					this.fileList6 = res.data
				}
      })
      this.$post(this.url.homeImgSelect, { index: 16 }).then(res => {
				console.log(res)
				if (res.code == 200) {
					this.fileList7 = res.data
				}
      })
       this.$post(this.url.homeImgSelect, { index: 17 }).then(res => {
				console.log(res)
				if (res.code == 200) {
					this.fileList8 = res.data
				}
      })
       this.$post(this.url.homeImgSelect, { index: 18 }).then(res => {
				console.log(res)
				if (res.code == 200) {
					this.fileList9 = res.data
				}
			})
		},
		
		
		submitUpload() {
			this.$refs.upload.submit();
		},
		submitUpload1() {
			this.$refs.upload1.submit();
		},
		submitUpload2(){
			this.$refs.upload2.submit();
		},
		submitUpload3(){
			this.$refs.upload3.submit();
		},
		submitUpload4(){
			this.$refs.upload4.submit();
		},
		submitUpload5(){
			this.$refs.upload5.submit();
    },
    submitUpload6(){
			this.$refs.upload6.submit();
    },
    submitUpload7(){
			this.$refs.upload7.submit();
    },
    submitUpload8(){
			this.$refs.upload8.submit();
		},
		handleRemove(file, fileList) {
			console.log(file);
			return this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				self.$post(this.url.homeImgDelete, { index: file.index, url: file.url }).then(res => {
					console.log(res)
					if (res.code == 200) {
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
					} else {
						this.$message({
							type: 'error',
							message: res.msg
						});
					}
				})

				return true
			}).catch(() => {
				console.log(1121)
				this.$message({
					type: 'info',
					message: '已取消删除'
				});
				return reject
			});


		},
		handlePreview(file) {
			console.log(file);
		},
		//图片上传前
		beforeAvatarUpload(file) {
			const isJPG = (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png');
			const isLt2M = file.size / 1024 / 1024 < 10;
			if (!isJPG || !isLt2M) {
				this.$notify({
					title: "提示",
					message: '只能上传 jpg/jpeg/png文件，且不超过10M',
					type: "warning",
					duration: 3000
				});

			}
			return isJPG && isLt2M;
		},
		//上传成功过后
		handleSucess(response, file, fileList) {
			console.log(response);
			if (response.code == 200) {
				// let data = response.data;

				// let file = {};
				// file.name = data.name;
				// file.url =  data.url;
				// self.fileList[0] = file;
				// console.log(self.fileList)
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

	}

}
</script>
<style>
.page1 .contain1,
.page1 .contain2,
.page1 .contain3,
.page1 .contain4,
.page1 .contain5,
.page1 .contain6,
.page1 .contain7,
.page1 .contain8 {
  padding: 10px;
}

.page1 .contain1 .upload-container {
  margin-top: 20px;
}

.page1 .contain1 h3,
.page1 .contain2 h3,
.page1 .contain3 h3,
.page1 .contain4 h3,
.page1 .contain5 h3,
.page1 .contain6 h3,
.page1 .contain7 h3,
.page1 .contain8 h3 {
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
