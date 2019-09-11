<template>
    <div class="callMe"> 
        <img
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567346890962&di=4d81bf7f4dc2249e3f6da290c2c9b149&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F11531599e1b645c722c8d3220f8e64f66d485edd19aba-OCWxd4_fw658"
      alt="" class="titleImg">
        <div class="callMe_contain">
            <div class="callMe_left">
                <h3>联系我们</h3>
                <div>招商电话:400-1818-168</div>
                <div>公司地址:广州市番禺区大龙街水坑</div>
                <div>售后电话:400-1818-168</div>
                <div>电子传真:400-1818-168</div>
            </div>
            <div class="callMe_right">
                <img src="@/assets/map.png" alt="">
            </div>
        </div>
    </div>
</template>

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