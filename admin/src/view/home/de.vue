<template>
  <div class="page1">
    <div class="contain1">
      <h3>首页轮播修改</h3>
    
<el-upload class="upload-container" ref="upload" action="http://localhost:8080/api/upload"
            :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture-card"
            :limit='1' :headers='uploadHeaders' :before-upload="beforeAvatarUpload" :auto-upload="false"
            :on-success='handleSucess' :on-error='handleError'>
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10M</div>

</el-upload>
    </div>
  </div>
</template>
<<script>

let self;
export default {
 
	data() {
 
		return {
			//上传图片参数
			fileList: [{
				name: 'food.jpeg',
				url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
			}],
		},
  },
		computed: {
				//计算属性
				uploadHeaders() {
					return {
						Authorization: this.$store.state.id_token
					}
				}
			},
			mounted() {
				self = this;
			},
			methods: {
				submitUpload() {
					this.$refs.upload.submit();
				},
				handleRemove(file, fileList) {
					fileList.splice(file, 1);
					console.log(file, fileList);
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
					if (response.code == 0) {
						let data = response.data;
						 
						let file = {};
						file.name = data.name;
						file.url = self.$store.state.imgurlhttp + data.url;
						self.fileList[0] = file;
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
