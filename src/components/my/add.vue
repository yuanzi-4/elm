<template>
<div class="add">
<Header goback='true'  home='编辑地址' add='编辑'></Header>
<div class="bian">
    <span>编辑地址</span>
    <router-link to="/main/address">
    <span class="el-icon-arrow-right"></span>
    </router-link>
</div>
<div class="di" v-for="(item,k) in arr" :key="k"> 
    <div @click="tian()">
    <span>{{item.address}}</span>
    <span>{{item.phone}}</span>
    </div>
    <van-icon name="close" @click="del(item,k.id)"/>
</div>
</div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/header'
export default {
name:'add',
components: {
    Header
},
data () {
    return {
        arr:''
    }
},
mounted() {
    axios.get('http://elm.cangdu.org/v1/users/38310/addresses').then((res)=>{
        console.log(res)
        this.arr=res.data
    })
},
methods: {
    //删除
    del(item,id){
        axios.delete('http://elm.cangdu.org/v1/users/38310/addresses/'+`${item.id}`).then((res)=>{
            if(res.data.success){
                this.arr.splice(0,1);
            }
        })
    },
    tian(){
        this.$router.push({path:'/my/indent'})
    }
}
}
</script>

<style>
.add,body,html{
    margin: 0;
    padding: 0;
    width: 100%;
    background: rgb(233, 231, 231)
}
.bian{
    height: 1.875rem;
    background: white;
    padding-top: 70px;
    display: flex;
    justify-content: space-between;
    padding-left: 5px
}
.di{
    height: 3rem;
    background: white;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gainsboro;
    align-items: center
}
.di>div{
    display: flex;
    flex-direction: column
}
</style>