<template>
    <div class="callMe"> 
    <img src="../../assets/img/lxwm.png" alt="" class="titleImg">
        <div class="callMe_contain">
            <div class="callMe_left">
                <h3>联系我们</h3>
                <div>招商电话：{{companyInfo.bussinessTel}}</div>
                <div>公司地址：{{companyInfo.address}}</div>
                <div>售后电话：{{companyInfo.serviceTel}}</div>
                <div>电子传真：{{companyInfo.fax}}</div>
            </div>
            <div class="callMe_right">
                <img src="@/assets/map.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            companyInfo:null
        }
    },
    mounted(){
        this.companyInfo =  this.getCompanyInfo();
        this.setMapPos();
    },
    methods:{
        getCompanyInfo(){
            return require("../../mockData/companyInfo.json");
        },
    }
}
</script>
<style>
    .callMe .titleImg{
     width: 100%;
    height: 21rem;
    }
    .callMe .callMe_contain{
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .callMe .callMe_left{
        text-align: left;
        margin-right: 8rem;
        
    }
    .callMe .callMe_left h3{
        font-size: 1.5rem;
    }
    .callMe .callMe_left div{
        margin: 10px 0
    }
    .callMe .callMe_right{
        border: 1px solid #cccccc;
        margin-bottom: 3rem;
    }
</style>