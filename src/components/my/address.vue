<template>
<div class="address">
<Header goback='true' home='新增地址'></Header>
    <div class="res">
    
        <van-field v-model="name" placeholder="请输入你的姓名" @focus="addname()" @blur="addn"/>
        <span v-show='s' class="style">请填写您的姓名</span>
        <van-field v-model="school" placeholder="小区/写字楼/学校等" @click="add()"/>
        <van-field v-model="address" placeholder="请填写详细送餐地址" @input="xie()" />
        <span v-show='x' class="style">请填写详细的送餐地址</span>
        <van-field v-model="phon" placeholder="请填写能够联系到您的手机号" />
        <van-field v-model="num" placeholder="备用联系电话（选填）" />
    
    </div>
    <van-button type="primary" @click="tian()">新增地址</van-button>
</div>
</template>

<script>
import { Dialog } from 'vant';
import  axios from 'axios'
import Header from '@/components/header'
export default {
name:'address',
components: {
    Header
},
data () {
    return {
        name:'',
        school:'',
        address:'',
        phon:'',
        num:'',
        s:false,
        x:false,
            
    }
},
mounted() {
    this.school=this.$route.query.name;
    console.log(this.school)
},
methods: {
    add(){
        this.$router.push({path:'/main/search'})
    },
    //新增地址
    tian(){
        axios.post('http://elm.cangdu.org/v1/users/38310/addresses',{
            address:this.address,
            address_detail:this.school,
            geohash: "31.22299,121.36025",
            phone:this.phon,
            name:this.name,
            poi_type: 0,
            sex: 1,
            tag: "公司",
            tag_type: 4,
            

        }).then((res)=>{
            console.log(res)
        if(res.data.status==1){
            this.$router.push({path:'/main/add'})
        }else{
            Dialog.alert({
                title: '标题',
                message: '地址信息错误'
                }).then(() => {
                // on close
                })
        }
        })
        
    },
    addname(){
        this.s=true;
    },
    addn(){
        this.s=false
    },
    xie(){
        this.x=true;
        if(this.address.length<5){
            this.x='地址太短了，不能辨识'
        }else{
            this.x=false
        }
    }
}
}
</script>

<style>
.address,body,html{
    margin: 0;
    padding: 0;
    width: 100%;
    background: rgb(233, 231, 231)
}
.res{
    background: white;
    padding-top: 60px
}
.van-field__control{
    background: rgb(241, 240, 240);
    height: 30px;
    margin: 0px
}
.van-button{
    width: 90%;
    margin: 20px;
}
.style{
    color: red;
    font-size: 12px;
    margin-left: 20px
}
</style>