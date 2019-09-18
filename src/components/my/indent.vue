<template>
<div class="indent">
<Header goback='true' home='确认订单' :deng='true'></Header>
<div class="top">
    <div >
    <van-icon name="location-o" />
    <span>请添加一个收获地址</span>
    </div>
    <div >
    <div  v-for="(item,k) in arr" :key="k">  
    <p>{{item.address}}</p>
    <p>{{item.phone}}</p>
</div>
    </div>

     <van-icon name="arrow"  @click="dian()"/>
</div>

<div class="arrived">
    <h3>送到时间</h3>
    <div>
        <span style="color:blue">尽快送达|预计 17：12</span>
        <button>蜂鸟专送</button>
    </div>
</div>

<div class="pay">
        <span>支付方式</span>
        <span style="color:gray">在线支付 ></span>
</div>
<div class="pay">
        <span style="color:gray">红包</span>
        <span style="color:gray">暂时只在饿了么App中支持</span>
</div>

<div class="result">
    <div>效果演示</div>
    <div class="pay"><span style="color:gray">的味道且 二分</span><span style="color:gray">x2  ￥20</span></div>
    <div class="pay"><span style="color:gray">餐盒</span><span style="color:gray">￥2</span></div>
    <div class="pay"><span style="color:gray">配送费</span><span style="color:gray">￥4</span></div>
    <div class="pay"><span style="color:gray">订单￥845</span><span style="color:gray">待支付 ￥123</span></div>


</div>

<div class="list">
    <div class="pay"><span style="color:gray">订单备注</span><span style="color:gray">口味、偏好等 ></span></div>
    <div class="pay"><span style="color:gray">订单￥845</span><span style="color:gray">不需要开发票 ></span></div>

</div>

<div class="foot">
    <span>待支付 ￥123</span>
    <button>确认订单</button>
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
name:'indent',
data () {
    return {
        arr:'',
        a:true
    }
},
mounted(){
        axios.get('http://elm.cangdu.org/v1/users/38310/addresses').then((res)=>{
        console.log(res)
        this.arr=res.data;
       
    })
},

}
</script>

<style>
.indent,body,html{
    margin: 0;
    padding: 0;
    width: 100%;
    background: rgb(238, 236, 236)
}
.top{
    height: 3.5rem;
    background: white;
    padding-top: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    border-bottom: rgb(115, 157, 236) dashed;
    margin-bottom:.625rem
}
.arrived{
    height: 3.5rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-left: 3px solid rgb(47, 130, 207);
    margin-bottom:.625rem
}
.arrived>div{
    height: 4.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
}
.arrived>div>button{
    border: none;
    background: rgb(47, 130, 207);
    color: white;
}
.pay{
    display: flex;
    justify-content: space-between;
    height: 2.5rem;
    background: white;
    align-items: center;
    font-size: .875rem;
}
.result,.list{
    margin-top: .625rem;
     
}
.result>div:nth-of-type(1){
    height: 2.5rem;
    border-bottom:solid rgb(240, 233, 233); 
    background:white;
    line-height: 2.5rem;
    padding-left: 20px
}
.foot{
    width: 100%;
    height: 2.875rem;
    background: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    position: fixed;
    bottom: 0;
}
.foot>button{
    height: 100%;
    background: rgb(121, 184, 27);
    border: none
}
</style>