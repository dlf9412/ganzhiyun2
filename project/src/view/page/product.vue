<template>
    <div class="product">
         <img
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567346890962&di=4d81bf7f4dc2249e3f6da290c2c9b149&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F11531599e1b645c722c8d3220f8e64f66d485edd19aba-OCWxd4_fw658"
      alt="" class="titleImg">
      <div class="contain" v-if="choseIndexProduct==-1">
          <div class="productTitle">产品中心</div>
          <div class="show1Product">
              <div v-for="(item,index) in productList" :key="index" :class="index%2==0?'leftshowProduct':'rightshowProduct'" @click="showDetail(index)">
                <div class="productImgbox" v-if="index%2==0">
                    <img :src="item.img" alt="" >
                </div>
                <div class="productMsgBox">
                    <div class="productMsgTitle">{{item.title}}</div>
                    <div>{{item.msg}}</div>
                </div>
                 <div class="productImgbox" v-if="index%2!==0">
                    <img :src="item.img" alt="" >
                </div>
                
              </div>
             
          </div>
          
      </div>
      <div class="contain" v-if="choseIndexProduct!==-1">
          <div class="show2Product">

              这是内容部分
              <div @click="returnList">返回</div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            choseIndexProduct:-1,
            productList:[{
                img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567860294838&di=b58012275410074324e11e5ea5bbe3f0&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg',
                title:'简易练手驾驶模拟器',
                msg:'这是一条内容'
            },{
                img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567860294838&di=b58012275410074324e11e5ea5bbe3f0&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg',
                title:'简易练手驾驶模拟器',
                msg:'这是一条内容'
            },{
                img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567860294838&di=b58012275410074324e11e5ea5bbe3f0&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg',
                title:'简易练手驾驶模拟器',
                msg:'这是一条内容'
            }]
        }
    },
    methods:{
        showDetail(index){
            this.choseIndexProduct=index;
        },
        returnList(){
            this.choseIndexProduct=-1;
        }
    }
}
</script>
<style >
    .product .titleImg {
    width: 100%;
    height: 30vw;
  }
  .product .contain{
      padding: 2rem 10% 2rem;
  }
  .product .contain .productTitle{
      font-size: 1.8rem;
  }
  .product .show1Product{
      margin: 2rem 0;
      width: 100%;
      
  }
  .product .show1Product img{
      width:25rem;
      height: 15.5rem;
  }
  .product .productImgbox{
      width:45%;
  }
  .product .productMsgBox{
      width: 45%;
  }
  .product .leftshowProduct{
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      text-align: left;
      align-items: center;
      box-sizing: border-box;
      widows: 100%;
      cursor: pointer;
  }
  .product .rightshowProduct{
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      
      align-items: center;
      text-align: right;
      box-sizing: border-box;
       widows: 100%;
        cursor: pointer;

  }
  .product .leftshowProduct  .productImgbox{
      text-align: right;
      
      
  }
   .product .rightshowProduct  .productImgbox{
      text-align: left;  
      
  }
 
  .product .productMsgTitle{
      margin: 2rem 0;
      color: orange;
  }
 
</style>