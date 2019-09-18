<template>
<div class="deng">
<Header goback='true' home='重置密码'></Header>
    <div class="d">
        <el-input v-model="input" placeholder="账号"></el-input>
        <el-input v-model="p" placeholder="旧密码" show-password></el-input>
        <el-input v-model="pa" placeholder="请输入新密码" show-password></el-input>
        <el-input v-model="pas" placeholder="请确认密码" show-password></el-input>
        <el-input  v-model="code" placeholder="验证码"></el-input>
        <router-link to='/zhuce'>
        <el-button type="success" style="width:90%;margin:20px">确认修改</el-button>
        </router-link>
    </div>
</div>
</template>

<script>
import Header from '@/components/header'
export default {
name:'deng',
components: {
    Header
},
data () {
    return {
        input:'' ,
        p:'',
        pa:'',
        pas:'',
        code:''
    }
}
}
</script>

<style>
.deng,body,html{
    margin: 0;
    padding: 0;
    width: 100%;
    background: gainsboro;
}
.d{
    padding-top: 60px;
    width: 100%;
    background: white
}
</style>