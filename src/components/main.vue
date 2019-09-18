<template>
    <div class="main">
<Header goback='true' home='我的'></Header>
        <div class="top">
        <div class="a">
        <img data-v-0fc4ab7a="" src="//elm.cangdu.org/img/default.jpg" class="privateImage"/>
        <div class="m">
            <div v-if="user==false">
            <span style="font-size:30px;font-weight: bold;">登陆注册</span></div>
            <div v-else>
            <span style="font-size:30px;font-weight: bold;" >{{name}}</span></div>
            <div >
            <span class="el-icon-mobile-phone"></span>
            <span>暂无绑定手机号</span>
            </div>
        </div>
        </div>
    <router-link to="/main/message"> <span class="el-icon-arrow-right"></span></router-link> 
        </div>
    <div class="num">
        <a>
            <span><b style="color:orange">0.00</b> 元</span>
            <span>我的余额</span>
        </a>
        <a>
            <span><b style="color:red">3</b>个</span>
            <span>我的优惠</span>
        </a>
        <a>
            <span><b style="color:green">0</b>分</span>
            <span>我的积分</span>
        </a>   
    </div>

    <div class="fen">
        <div class='ding'>
            <p class="el-icon-s-order">我的订单</p><p class="el-icon-right"></p>
        </div>
        <div class='ding'>
            <div>
            <span class="el-icon-s-cooperation"></span><span>积分商城</span>
            </div>
            <p class="el-icon-right"></p>
        </div>
        <div class='ding'>
            <div>
            <span class="el-icon-potato-strips"></span><span>饿了么会员卡</span>
            </div>
            <p class="el-icon-right"></p>
        </div>

    </div>

        <div class="fen">
        <div class='ding'>
            <div>
            <span class="el-icon-date"></span><span>服务中心</span>
            </div>
            <p class="el-icon-right"></p>
        </div>
        <div class='ding'>
            <div>
            <span class="el-icon-platform-eleme"></span><span>下载饿了么APP</span>
            </div>
            <p class="el-icon-right"></p>
        </div>

    </div>
    <Foot></Foot>
</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
</template>

<script>
import Header from '@/components/header'
import Foot from '@/components/footer'
export default {
name:'main',
components: {
    Header ,Foot
},
data () {
    return {
        user:false,
        name:''
        
    }
},
mounted() {

    if(localStorage.getItem('str')){
        this.user=true
        this.name=JSON.parse(localStorage.getItem('str')).username
        // this.name=name
    
    }

},
}
</script>

<style>
.main,body,html{
    margin: 0;
    padding: 0;
    width: 100%;
    padding-top: 60px
} 
.ding{
    height: 3.125rem;
    background: white;
    border-bottom: 1px solid rgb(184, 180, 180);
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    align-items: center
}  
.fen{
    margin-top: 10px
}
.el-icon-s-cooperation{
    color: red
}
.el-icon-potato-strips{
    color: orange;
}
.el-icon-date,.el-icon-platform-eleme{
    color: #3792e5
}
.main,body,html{
    width: 100%;
    margin: 0;
    padding: 0;
    background: whitesmoke
}
.top{
    height: 100px;
    background: #3792e5;
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.privateImage{
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    margin: 20px
}
.m{
    color: white
}
.el-icon-arrow-right{
    font-size: 30px;
    color: white;
    
}
.a{
    display: flex;
    align-items: center
}
.num{
    height: 100px;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px
}
.num>a{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.num>a>span>b:nth-of-type(1){
    font-size: 35px;
    font-weight: bolder
}

</style>