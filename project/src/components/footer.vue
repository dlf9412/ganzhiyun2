<template>
    <div class="footer">
        <span>版权所有 @ 2009-2015 {{companyName}}</span>
        <span>地址：{{address}}</span>
        <span>电话：{{businessTel}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return {
            companyName:"广州赣之韵科技有限公司",
            address:"广州市番禺区大龙街水坑环村东路27号301",
            businessTel:"020-26018888"
        }
    }
}
</script>
<style >
    .footer{
        background: rgb(37, 155, 36);
        font-size: .9rem;
        color: white;
        text-align: center;
        line-height: 45px;
    }

    .footer span{
        display: inline-block;
        width: 33%;
    }
</style>