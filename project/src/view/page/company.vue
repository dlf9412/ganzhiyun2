<template>
  <div class="company">
    <img src="../../assets/img/company.png" alt="">
    <div class="contain_1">
      <div class="left"></div>
      <div class="right">
        <p>{{companyDesc}}</p>
      </div>
    </div>
    <div class="splitLine"></div>
    <div class="contain_2">
        <div class="title">企业实力</div>
        <div class="contain_2_contain">
            <div v-for="(item,index) in containData" :key="index" class="contain_2_wrap">
                <div class="msgTitle">{{item.title}}</div>
                <div class="msgContain" v-html="item.contain"></div>
            </div>
        </div>
    </div>
    <div class="splitLine"></div>
    <div class="qyfc">
      <div class="title">企业风采</div>
      <div class="qyfc_container"><img src="../../assets/img/qyfc.png" alt="企业风采"/></div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
          companyDesc:null,
            containData:[{
                title:'一、运营时间最早',
                contain:'类比<span>第一家</span>研发成功、产品上市；<span>第一家</span>拥有专利证书；<span>第一家</span>拥有全国最大的驾驶模拟生产车间；<span>第一家</span>获得质量检验国家标准合格产品证书；<span>第一家</span>通过ISO9001:2008国际质量体系认证'
            },{
                title:'一、运营时间最早',
                contain:'类比<span>第一家</span>研发成功、产品上市；<span>第一家</span>拥有专利证书；<span>第一家</span>拥有全国最大的驾驶模拟生产车间；<span>第一家</span>获得质量检验国家标准合格产品证书；<span>第一家</span>通过ISO9001:2008国际质量体系认证'
            },{
                title:'一、运营时间最早',
                contain:'类比<span>第一家</span>研发成功、产品上市；<span>第一家</span>拥有专利证书；<span>第一家</span>拥有全国最大的驾驶模拟生产车间；<span>第一家</span>获得质量检验国家标准合格产品证书；<span>第一家</span>通过ISO9001:2008国际质量体系认证'
            },{
                title:'一、运营时间最早',
                contain:'类比<span>第一家</span>研发成功、产品上市；<span>第一家</span>拥有专利证书；<span>第一家</span>拥有全国最大的驾驶模拟生产车间；<span>第一家</span>获得质量检验国家标准合格产品证书；<span>第一家</span>通过ISO9001:2008国际质量体系认证'
            },{
                title:'一、运营时间最早',
                contain:'类比<span>第一家</span>研发成功、产品上市；<span>第一家</span>拥有专利证书；<span>第一家</span>拥有全国最大的驾驶模拟生产车间；<span>第一家</span>获得质量检验国家标准合格产品证书；<span>第一家</span>通过ISO9001:2008国际质量体系认证'
            },{
                title:'一、运营时间最早',
                contain:'类比<span>第一家</span>研发成功、产品上市；<span>第一家</span>拥有专利证书；<span>第一家</span>拥有全国最大的驾驶模拟生产车间；<span>第一家</span>获得质量检验国家标准合格产品证书；<span>第一家</span>通过ISO9001:2008国际质量体系认证'
            }]
        }
    },
    mounted(){
      this.companyDesc = this.getCompanyDesc();
    },
    methods:{
      getCompanyDesc(){
        const companyInfo = require("../../mockData/companyInfo.json");
        return companyInfo.desc;
      }
    
    }
}
</script>
<style>
  .title{
    font-size: 2.5rem;
    color: #f37237;
    font-weight: bold;
    margin-bottom: 10px;
}
.splitLine{
  width: 100%;
  height: 10px;
  border-bottom: 1px solid #ccc;
}
  .company img {
    width: 100%;
    height: 21rem;
  }

  .company .contain_1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .company .contain_1 .left {
    background-image: url('../../assets/img/about_icon.png');
    width: 350px;
    height: 450px;
    font-size: 3rem;
    display: flex;
    align-items: center;
    margin: auto;
  }
  .company .contain_1 .right{
      width: 750px;
      text-align: left;
      text-indent: 2rem;
      line-height: 30px;
      padding: 40px 20px;
  }
  .company .contain_1 p{
    font-size: 1.09375rem;
  }
.company .contain_2 {
    box-sizing: border-box;
    margin: 10px;
}
.company .contain_2 .contain_2_contain{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-flow: wrap;
}
.company .contain_2 .contain_2_wrap{
    width: 24%;
    background: #44878a;
    color: white;
    padding: 15px 15px 20px;
    border-radius: 5px;
    margin:10px 3%;
}
.company .contain_2 .contain_2_wrap .msgTitle{
    font-size: 1.3rem;
    color:#fefb07;
}
.company .contain_2 .contain_2_wrap .msgContain{
    font-size: 0.9rem;
    text-indent: 2rem;
    text-align: left;
}
.company .contain_2 .contain_2_wrap .msgContain span{
    color: #14e5e7;
    font-size: 1.3rem;
}

.company .qyfc{
  margin-top:10px; 
}
.company .qyfc .qyfc_container{
  width: 1160px;
  height: 420px;
}
.company .qyfc .qyfc_container img{
  width: 100%;
  height: 100%;
}
</style>
