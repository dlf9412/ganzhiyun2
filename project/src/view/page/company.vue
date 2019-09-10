<template>
  <div class="company">
    <img
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567346890962&di=4d81bf7f4dc2249e3f6da290c2c9b149&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F11531599e1b645c722c8d3220f8e64f66d485edd19aba-OCWxd4_fw658"
      alt="">
    <div class="contain_1">
      <div class="left">
        公司简介
      </div>
      <div class="right">
        <p>
          广州赣之韵科技有限公司，是一家专业从事便携式汽车驾驶训练机的研发、生产、销售于一体的公司。本公司先后投入巨资研发“智能学车”便携式汽车驾驶训练机。该机的方向盘、油门、离合、刹车、档位、仪表、操作方法等与真车基本一直，具有真车的全部感受，为全球首创产品。以绝对的优势成为便携式汽车驾驶训练机行业的领袖。
        </p>
        <p>
          刘教练便携式汽车驾驶训练机已获得18项国家专利，在市场具有先发优势，这在行业内是仅有的一家，优势无可比拟。产品主要面向汽车驾驶培训市场和家庭游戏机娱乐市场，具有非常广阔的市场空间。
        </p>
        <p>
          刘教练按照国家新教规同步推出的软、硬一体产品，是全国最早也是唯一一家同步更新的企业，本公司专业的软硬件研发队伍和具有远见及实战经验的营销队伍，是公司不断发展壮大的重要基石。成为目前国内最前沿的新一代技术代表，奠定了在同行业中的绝对竞争优势。
        </p>
        <p>
          营销中心坐落在美丽的南国之都--广州。通过公司不断的努力，强大的生产基地拥有超过5000平方米的生产车间，拥有最成熟、最核心的生产技术，国内外市场全部打开，目前“刘教练”品牌从2013年1月1日起至2014年10月份全国代理商数量超过1700家，国外市场远销日本、欧洲、美洲、非洲等地。
        </p>
      </div>
    </div>
    <div class="contain_2">
        <div class="title">
            企业实力
        </div>
        <div class="contain_2_contain">
            <div v-for="(item,index) in containData" :key="index" class="contain_2_wrap">
                <div class="msgTitle">{{item.title}}</div>
                <div class="msgContain" v-html="item.contain"></div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
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
    }
}
</script>
<style>
  .company {}

  .company img {
    width: 100%;
    height: 18vw;
  }

  .company .contain_1 {
    padding:30px 10% 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }

  .company .contain_1 .left {
    width: 20%;
    font-size: 4rem;
    height: 100%;
    display: flex;
    align-items: center;
    margin: auto;
  }
  .company .contain_1 .right{
      width: 80%;
      text-align: left;
      text-indent: 2rem;
  }
.company .contain_2 {
    width: 100%;
    padding:30px 10% 20px;
    box-sizing: border-box;
}
.company .contain_2 .title{
    font-size: 2.5rem;
    color: #f37237;
    font-weight: bold;
    margin-bottom: 10px;
}
.company .contain_2 .contain_2_contain{
    display: flex;
    justify-content: flex-start;
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
</style>
