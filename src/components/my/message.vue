<template>
<div class="message">
<Header goback='true' home='账户信息'></Header>
    <div class="m-top">
        <!-- 头像 -->
        <div class="m-one">
            <span>头像</span>
            <div>
                <input type="file" class="in" ref="inp" @change="avatarimg()"/>
                <img :src="'http://elm.cangdu.org/img/'+this.$store.state.userInfo.avatar" v-if="login"/>
                <img v-else data-v-0fc4ab7a="" src="//elm.cangdu.org/img/default.jpg" class="privateImage"/>
                <span class="el-icon-arrow-right"></span>
            </div>
        </div>
        <!-- 用户名 -->
        <div class="m-two">
            <span>用户名</span>
            <div>
                <span>5024</span>
                <span class="el-icon-arrow-right"></span>
            </div>
        </div>
        <!-- 收货地址 -->
        <div class="m-two">
            <span>收货地址</span>
            <div>
            <router-link to="/main/add">
                <span class="el-icon-arrow-right"></span>     
            </router-link> 
            </div>
        </div>
        <!-- 账号绑定 -->
        <div class="m-bind">账号绑定</div>
        <!-- 手机 -->
        <div class="m-two">
            <p class="el-icon-mobile">手机</p>
            <div>
                <span class="el-icon-arrow-right"></span>
            </div>
        </div>
        <!-- 安全设置 -->
        <div class="m-bind">安全设置</div>
        <!-- 密码登陆 -->
        <div class="m-two">
            <span>密码登陆</span>
            <div>
                <spna>修改</spna>
                <span class="el-icon-arrow-right"></span>
            </div>
        </div>
    </div>
    <!-- 退出登陆 -->
    
    <el-button type="danger" @click="tui()">退出登陆</el-button>
</div>
</template>

<script>
import axios from 'axios'
import { Dialog} from 'vant';
import Header from '@/components/header'
export default {
components: {
    Header
},
name:'message',
data() {
    return {
        userInfo:''
    }
},
mounted () {
    this.userInfo=this.$store.state.userInfo;
    this.uid=this.$store.state.userInfo.uid;
    
},
methods: {
    //退出登陆
    tui(){
        Dialog.confirm({
            title: '标题',
            message: '是否退出登陆'
            }).then(() => {
                this.$router.push({path:'/main'})
                
            }).catch(() => {
                
        });
    },
    //更换图像
    avatarimg(){
        let input=this.$refs.inp;
        console.log(input.files[0])
        //fromData 数据类型保存文件
        let data=new FormData()
        data.append('file',input.files[0])//什么类型，传具体的文件
        let headers={headers:{"Content-Type":"multipart/from-data"}}
        //修改请求头 content-type 类型
        axios.post('http://elm.cangdu.org/eus/v1/users/'+this.uid+'/avatar',data,{headers:{"Content-Type":"multipart/from-data"}}).then((res)=>{
            console.log(res)
            console.log(this.$store.state.userInfo.uid)
            if(res.data.image_path!=''){
                this.$store.commit('avatar',res.data.image_path);
                this.userInfo.avatar=res.data.image_path
            }
            
            
        })
            
        

    }
},
computed: {
    login(){
        return this.$store.state.userInfo.login;
    }
}

}
</script>

<style >
.in{
    display: block;
    
    
    left: 0;
    width: 100%;
    height: 5rem;
    position: absolute
}
.el-button--danger{
    width: 90%;
    margin: 20px;
    margin-top: 60px
    
}
.el-icon-mobile{
    color: cornflowerblue
}
.el-icon-arrow-right{
    font-size: 2rem;
    color: gainsboro
}
.message,body,html{
    margin: 0;
    padding: 0;
    width: 100%;
    background: rgb(245, 240, 240);
}
.m-top{
    padding-top: 60px;
    background: white;
    
}
.privateImage{
    width: 60px;
    height: 60px;
    border-radius:50%; 
}
.m-one{
    height:80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px
}
.m-one>div{
    display: flex;
    align-items: center;
}
.m-two{
    height: 50px;
    border-top:1px solid gainsboro;
    display: flex;
    justify-content: space-between;
    align-items: center 
}
.m-two>div{
    display: flex;
    align-items: center;
}
.m-bind{
    background: rgb(236, 234, 234);
    padding: 10px
}
</style>