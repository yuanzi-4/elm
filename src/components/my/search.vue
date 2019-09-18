<template>
<div class="search">
<Header goback='true' home='搜索地址'></Header>
    <div class="sou">
        <van-field v-model="input" />
        <van-button type="info" @click="search()">确认</van-button>
    </div>
    
    <div class="list" v-for="(item,k) in arr" :key="k" @click="dian(item)">
    <b>{{item.name}}</b>
    <span>{{item.address}}</span>
    </div>
    <div class="zi">
        <span>找不到地址？</span>
        <span>请尝试输入小区、写字楼或学校名</span>
        <span>详细地址（如门牌号）可稍后输入哦</span>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/header'
export default {
components: {
    Header
},
name:'search',
data () {
    return {
        input:'',
        arr:''
    }
},
methods: {
    //搜索
    search(){
    axios.get('http://elm.cangdu.org/v1/pois?type=search&city_id='+`${this.$route.query.id}`+'&keyword='+`${this.input}`).then((res)=>{

    this.arr=res.data
    console.log(arr)
    })
    },
    dian(item){
        this.$router.push('/main/address?name='+`${item.name}`)
        
    }
}
}
</script>

<style>
.search,body,html{
    margin: 0;
    padding: 0;
    width: 100%;
    background: rgb(236, 236, 236)
}
.sou{
    background: white;
    padding-top: 60px;
    display: flex;
    align-items: center
}
.van-cell{
    background: rgb(236, 236, 236);
    margin: 10px;
    height: 40px;
    border-radius: 5px;
}
.van-button{
    width: 4.7rem;
    height: 2.3rem
}
.list{
    height: 80px;
    margin-top: 5px;
    border-bottom: 1px solid rgb(219, 219, 219);
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(150, 146, 146);
}
.zi{
    display: flex;
    flex-direction: column;
    color: rgb(201, 195, 195);
    align-items: center;
    margin-top: 12.5rem

}
</style>