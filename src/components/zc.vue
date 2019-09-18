<template>
    <div class="zhuce">
        <Header goback='true' home='密码登陆'></Header>
        <!-- 输入用户名 -->
        <div class="zc">
            <el-input v-model="name" placeholder="账号" :user='this.name'></el-input>
            <div class="kai">
            <el-input v-if="value" placeholder="请输入密码" v-model="pas" show-password @click="dian('show')"></el-input>
            <el-input v-else placeholder="请输入密码" v-model="pas" @click="dian('hide')"></el-input>
            <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="gray" @click="dian">
            </el-switch>
            </div>
        </div>
        <!-- 验证码 -->
        <div class="kai">
        <input type="text" style="border:none;width:70%" placeholder="验证码" v-model="captcha_code"/>
        <img :src="code"/>
        <span @click="changeImg()">换一张</span>
        </div>
        <!-- 提示 -->
        <div class="ti">
            <p>温馨提示：未注册过的账号，登陆时将自动注册</p>
            <p>注册过后的用户可凭账号密码登陆</p>
        </div>
    
        <el-button type="success" @click="change()">登陆</el-button>
    
        <router-link to='/deng'><p class="chong">重置密码？</p></router-link>



        <div>
            <button @click="di">+</button>
            <transition @before-enter='beforeEnter' @enter='enter'  @after-enter='afterEnter'> 
                <div class="ball" v-show="ball"></div>
            </transition>
            
        </div>
    </div>


</template>

<script>
import {mapMutations} from 'vuex'
import axios from 'axios'
axios.defaults.withCredentials=true;//让axios请求携带cookie
import Header from '@/components/header'
export default {
name:'zhuce',
components: {
    Header
},
data () {
    return {
        name:'',
        pas:'',
        value:true,
        num:'',
        code:'',
        captcha_code:'',
        ball:false
        
        
    }
},
methods: {
        di(){
            this.ball=true
        },
        beforeEnter(el) {

　　el.style.transform = ' translate( 100,500 )'

},

enter(el,done) {

　　el.offsetWidth;

　　el.style.transform = 'translate( 500,500 ) '             

　　el.style.transition = 'all 3s ease'

},

afterEnter(el){

　　this.ball = !this.ball;                             

} ,


    ...mapMutations([
        'userlogin'
    ]),

    dian(item){
    this.value = !(item === 'show');
    },
    change(){
        axios.post('http://elm.cangdu.org/v2/login',{
                captcha_code: this.captcha_code,
                password: this.pas,
                username: this.name,
        }).then((res)=>{
                console.log(res)
                if(res.data.status==0){
                    if(this.captcha_code!==''&&this.pas!==''&&this.name!==''){
                        this.open()
                    }
                } else{
                        this.$router.push({path:'/main'})
                        var str={
                            password: this.pas,
                            username: this.name,
                            id:res.data.id,

                        }
                        localStorage.setItem('str',JSON.stringify(str))
                        this.userlogin(str)
                        console.log(this.$store.state.userInfo)
                        this.$store.commit('str',str)
                    }
        })
    if(this.captcha_code==''&&this.pas==''&&this.name==''){
                        this.zhang();
        }

    },
    //换一张
    changeImg(){
        axios.post('http://elm.cangdu.org/v1/captchas',{}).then((res)=>{
        console.log(res)
        if(res.data.code!=''){
            this.code=res.data.code
        }
    })
    },
    open() {
        this.$alert('密码错误', '标题名称', 
        {
            confirmButtonText: '确定',
            callback: action => {
                this.$message({
                type: 'info',
                distinguishCancelAndClose:true,
                message: `action: ${ action }`
                });
            }
            });
        },
    zhang() {
        this.$alert('账号密码或验证码不能为空', 
        {
            confirmButtonText: '确定',
            callback: action => {
                this.$message({
                type: 'info',
                distinguishCancelAndClose:true,
                message: `action: ${ action }`
                });
            }
            });
        }


}, 
mounted() {
    axios.post('http://elm.cangdu.org/v1/captchas',{}).then((res)=>{
        console.log(res)
        if(res.data.code!=''){
            this.code=res.data.code
        }
    })
},
        
}
</script>

<style>
.ball{
    width: 1.25rem;
    height: 20px;
    background: blue;
    border-radius: 50%;
    margin-top: -30px
}
.zhuce,body,html{
    margin: 0;
    padding: 0;
    width: 100%;
    background: gainsboro
}
.zc{
    padding-top: 60px;
    background: white
}
.kai{
    display: flex;
    background: white;
    justify-content: space-between
    
}
.el-input__inner{
    border-right: none;

}
.huan{
    display: flex;
    flex-direction:column
}
.ti{
font-size: 14px;
color: red
}
.el-button--success{
    width: 90%;
    margin-left: 20px
}
a{
    text-decoration: none
}
.chong{
    display: flex;
    justify-content: right
}
</style>