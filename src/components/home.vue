<template>
<div class="home">
<Header sou='true' home='北京吉利大学...' :deng='true'></Header>
<div class="lun">
    <!-- 轮播 --> 
    <el-carousel indicator-position="outside"> 
    <el-carousel-item >
    <div v-for="(item,k) in lun" :key="k" id='lun'>
        <img :src="'https://fuss10.elemecdn.com'+`${item.image_url}`" class='im'/>     
    <h3>{{item.title}}</h3>
    </div>
    </el-carousel-item>
    <el-carousel-item >
        <div v-for="(item,k) in arr" :key="k" id='lun'>
        <img :src="'https://fuss10.elemecdn.com'+`${item.image_url}`" class='im'/>     
    <h3>{{item.title}}</h3>
    </div>
    </el-carousel-item>
</el-carousel>


</div>
<div class='a'>附近商家</div>

<van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
>
<div>
<div v-for='(item,k) in shop' :key='k'  id="shop" @click="faA(item)">
<img :src="'https://elm.cangdu.org/img/'+`${item.image_path}`" class='im' />
<div class='left'>
    <div class="ming">
        <span style="background:yellow">品牌</span><span >{{item.name}}</span>
    </div>
    <div class="center">
        <span class="el-icon-star-on"></span>
        <span class="el-icon-star-on"></span>
        <span class="el-icon-star-on"></span>
        <span class="el-icon-star-on"></span>
        <span  style="color:orange">{{item.rating}}</span>
        <span>月销售{{item.recent_order_num}}单</span>
    </div>
<p>￥{{item.float_minimum_order_amount}}起送/配送费约￥{{item.float_delivery_fee}}</p>
</div>
<div class="right">
    <div class="b">
        <span style="border:solid gainsboro;color:gray">保准票</span>
    </div>
    <div class="f">
        <span style="background:#3792e5;color:white">蜂鸟专送</span>
        <span style="border:#3792e5 solid">准时达</span>
    </div>
    <div>
        {{item.distance}} 
    <span style="color:#3792e5">{{item.order_lead_time}}</span>
    
    </div>
</div>
</div>
</div>
</van-list>

<Footer> </Footer>
</div>

</template> 

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import axios from 'axios'
export default {
name:'home',
data () {
    return{
        lun:[],
        shop:[],
        arr:[],
        loading: false,
        finished: false,
        num:0

    }
},
components: {
    Header,Footer
},
mounted () {
    axios.get('http://elm.cangdu.org/v2/index_entry?geohash=39.78493,116.49476&group_type=1&flags[]=F').then((res)=>{
        
        this.lun=res.data.splice(0,8)
        this.arr=res.data
        console.log(this.arr)
    })
    axios.get('http://elm.cangdu.org/shopping/restaurants?latitude=39.78493&longitude=116.49476&offset='+`${this.num}`+'&limit=30&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=')
    .then((res)=>{
        console.log(res);
        this.shop=res.data
    })
    
    
},
methods: {
    faA(id){
        this.$router.push({name:'xiang',query:{id:id}})
    },
    onLoad() {
      // 异步更新数据
        setTimeout(() => {
            this.num=this.num+10;
            axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=39.78493&longitude=116.49476&offset='+`${this.num}`+'&limit=30&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=')
                .then((res)=>{
                console.log(res);
                if(this.shop.length<1000){
                this.shop=this.shop.concat(res.data)
                }
                })

            // 加载状态结束
            this.loading = false;

            // 数据全部加载完成
            if (this.shop.length >= 100) {
            this.finished = true;
            }
        }, 500);
        }
    }
}
</script>

<style>
.a{
    color: black;
}
.ming{
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.right{
    width:100%;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    margin-left: 3.4375rem
}
.left{
    display: flex;
    flex-direction: column;
    font-size: 12px;
}
.center{
    display: flex;
    align-items: center
}
.el-icon-star-on{
    color:orangered
}
.left>div{
    display: flex;
}
.home,body,html{
margin: 0;
padding: 0;
width: 100%;
background: gainsboro;
}
.lun{
height: 25%;
background: white;
font-size:.75rem;
padding-top: 40px
}
.el-carousel__item{
    line-height: 100%;
}
.im{
    width:70px;
    height:70px; 
    
}
#shop{
    margin-top:5px;
    background: white;
    display:flex;
}
.el-carousel__item:nth-child(2n){
    display:flex;
    flex-wrap: wrap;
    
}
.el-carousel__item:nth-child(2n+1) {
    display:flex;
    flex-wrap: wrap;
}
.el-carousel__item:nth-child(2n+1)>div{
    width:25%;
    height:50%;

}
.el-carousel__item:nth-child(2n)>div{
    width:25%;
    height:50%;

}
.a{
background:white;
}

</style>