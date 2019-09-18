<template>
<div class="footer">
    <router-link to="/" >
        <div class="el-icon-eleme"></div>
        <span>外卖</span>
    </router-link>

    <a>
        <div class="el-icon-view"></div>
        <span>搜索</span>
    </a>
    <a>
        <div class="el-icon-document"></div>
        <span>订单</span>
    </a>
    <router-link to="/zhuce">
        <div class="el-icon-user"></div>
        <span>我的</span>
    </router-link>
</div>
</template>

<script>
import Button from 'vant/lib/button';
import 'vant/lib/button/style';
export default {
name:'footer',
components: {
    Button
},
data () {
    return {
        
    }
}
}
</script>

<style >
a{
    text-decoration: none
}
.footer{
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0px;
    z-index: 200;
    background: whitesmoke
}
.footer>a{
    display: flex;
    flex-direction: column;
    font-size: 30px;
    text-decoration: none
}
.footer>a>span{
    font-size: 20px
}
</style>