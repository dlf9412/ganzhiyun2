<template>
  <div class="cooperate">
    <img
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567346890962&di=4d81bf7f4dc2249e3f6da290c2c9b149&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F11531599e1b645c722c8d3220f8e64f66d485edd19aba-OCWxd4_fw658"
      alt="" class="titleImg">
    <div class="cooperate_contain">

      <div class="cooperate_left_menu">
        <div class="leftTitle">
          新闻动态
        </div>
        <div class="leftMsg" :class="{'leftMsgChose':leftMsgChose==1}" @click="changeType(1)"> > 市场现状
        </div>
        <div class="leftMsg" :class="{'leftMsgChose':leftMsgChose==2}" @click="changeType(2)">> 盈利模式
        </div>
        <div class="leftMsg" :class="{'leftMsgChose':leftMsgChose==3}" @click="changeType(3)">> 合作方式
        </div>
        <div class="leftMsg" :class="{'leftMsgChose':leftMsgChose==4}" @click="changeType(4)">> 合作优势
        </div>
      </div>
      <div class="cooporate_right_text">
          <p style="line-height:0; margin-bottom:15px;"><span class="--mb--rich-text" data-boldtype="0" style="font-family:Arial; font-weight:400; font-size:14px; color:rgb(16, 16, 16); font-style:normal; letter-spacing:0px; line-height:20px; text-decoration:none;">一、投资渠道</span></p>
          <p style="line-height:0; margin-bottom:15px;"><span class="--mb--rich-text" data-boldtype="0" style="font-family:Arial; font-weight:400; font-size:14px; color:rgb(16, 16, 16); font-style:normal; letter-spacing:0px; line-height:20px; text-decoration:none;">1、驾校或者驾驶培训中心</span></p>
          <p style="line-height:0; margin-bottom:15px;"><span class="--mb--rich-text" data-boldtype="0" style="font-family:Arial; font-weight:400; font-size:14px; color:rgb(16, 16, 16); font-style:normal; letter-spacing:0px; line-height:20px; text-decoration:none;">    驾驶学员最集中的地区就是这些学校和中心，几乎所有的学员都是通过驾校和培训中心参加驾驶考试。驾校和教练对学员有非常强的影响力。可以租赁模式向学员推荐，接受度高，效果很好。</span></p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        leftMsgChose: -1
      }
    },
    methods: {
      changeType(index) {
        this.leftMsgChose = index;
        // this.choseIndex=-1;
      }
    }
  }

</script>

<style>
  .cooperate .titleImg {
    width: 100%;
    height: 30vw;
  }

  .cooperate .cooperate_contain {
    width: 100%;
    padding: 30px 10% 20px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .cooperate .cooperate_left_menu {
    width: 150px;
    background: rgb(242, 242, 242);
    font-size: 0.9rem;
    text-align: left;
    height: min-content;
    margin-right: 8rem;

  }
  .cooperate .cooporate_right_text{
      text-align: left;
  }

  .cooperate .leftTitle {
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    padding: 10px 20px;
    background: rgb(232, 232, 232);
  }

  .cooperate .leftMsg {
    padding: 8px 30px;
    cursor: pointer;
  }

  .cooperate .leftMsg:hover {
    background: rgb(251, 251, 251)
  }

  .cooperate .leftMsgChose {
    background: rgb(251, 251, 251);

  }

</style>
