<template>
<div class="header">
    <!-- 返回部分 -->

    <span v-if="goback" @click="$router.go(-1)"><div class="el-icon-arrow-left" ></div></span>
    
    <!-- <p v-if='Title'>普罗区阳光威尼斯区...</p>
<router-link to="/city" ><div class="el-icon-user-solid"></div></router-link>  -->
    <!-- 标题部分 -->
    <div v-if="Title">
        <span>{{hot}}</span>
    </div>
    <!-- 搜索 -->
    <router-link to='/city' v-if='sou'>
    <div class="el-icon-search"></div>
    </router-link>
    <!-- home标题 -->
    <div v-if="home">
        <span>{{home}}</span>
    </div>
    <div v-if="add">
        <span>{{add}}</span>
    </div>
    <!-- 登陆 -->
    <router-link to='/zhuce' v-if="deng">
    <router-link to="/main" v-if="this.userInfo.username!==''"><span class="el-icon-user-solid" ></span></router-link> 
    <span v-else>登陆注册</span>
    </router-link>
    
</div>
</template>
<script>
import axios from 'axios'
export default {
name:'header',
data () {
    return {
        hot:'',
        userInfo:{}
    }
},
props:['goback','Title','sou','home','deng','add'],
mounted() {
    var id=this.$route.query.id;
    axios.get("http://elm.cangdu.org/v1/cities/"+id).then((res)=> {
    this.hot=res.data.name;
    })
    //获取用户信息
    this.userInfo=this.$store.state.userInfo;
    
    
},

}
</script>

<style>
.herder,body,html{
    margin: 0;
    padding: 0;
    width: 100%;
}
.header{
    width: 100%;
    height: 60px;
    background:#3792e5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    color: white;
    position: fixed;
    z-index: 100;
    border-bottom: 1px solid whitesmoke
}
</style>