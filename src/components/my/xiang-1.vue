<template>
    <div id="xiang">
        <van-icon name="arrow-left tou"  @click="faB()"/>
        <div id='mohu' :style="{ 'background-image': 'url(' + baimg+ ')' }"></div>
        <div id="zhaopai">
            <div>
        <img :src="'http://elm.cangdu.org//img/'+zhao.image_path"/>
        <div>
            <h3>{{zhao.name}}</h3>
            <p>商家配送/分钟送达/{{pei}}</p>
            <p >公告：{{zhao.promotion_info}}</p>
        </div>
        <div v-if="zhao.activities">
            <p v-if="zhao.activities[0]"> {{zhao.activities[0].description}}</p>
            <p v-if="zhao.activities.length" style="float:right;margin-top:-0.5rem">{{zhao.activities.length}}个活动<van-icon name="arrow" /></p>
        </div>
            </div>
        </div>
        <div id="shangpin">
        <div>
            <p @click="faC($event)">商品</p>
            <p @click="faD($event)">评论</p>
        </div>
        
        </div>
            <div v-show="xian" id="gouwu">
            <div>
            <h3 v-for="(item,k) in liet"  :key="k"><a :href="'#fa'+k">{{item.name}}</a></h3> 
            </div>
            <div>
                <div v-for="(item,k) in this.liet" :key="k">
                    <h3 class="h">{{item.name}}</h3>
                    <div v-for="(val,key) in item.foods" :key='key'>
                        <img :src="'http://elm.cangdu.org//img/'+val.image_path"/>
                        <div style="width:100%" id='jia'>
                            <h3 :id="'fa'+k">{{val.name}}</h3>
                            <p>{{val.tips}}</p>
                            <p style="color:red">￥{{val.satisfy_rate}}
                                <button style="float:right;border:0px;background:#3190E8;border-radius:0.5rem" @click="fBa(val,$event)">+</button></p>
                            <span id="qui"></span>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
        <div v-show="xian1">
            评论
        </div>
        <div id="di-1">

            <van-icon name="cart-circle x" @click="showPopup" class="sc"/>
            <div>
                <p>￥{{qiai}}<p>
                    <p>{{pei}}</p>
            </div>
            <h3 v-if="song!==0">还差￥{{song}}起送</h3>
            <h3 v-if="song==0" style='text-align:center;color:red' @click="faQ()">去结算</h3>
        
        </div>
        <van-popup
v-model="show"
position="button"
:style="{ height: 'auto',width: '100%', }"
>
<div v-for="(item,k) in this.gou" :key="k">
    
<p>{{item.name}}<span>{{item.qian}}</span>
<van-stepper :value='item.num' />
</p>
</div>
</van-popup>

    </div>
</template>
<script>
import axios from 'axios'
import the from './theBall/theBall'
import './theball/theBall.css'
export default {
    
    data(){
        return{
        liet:[],
        zhao:[],
        baimg:'',
        pei:'',
        xian:true,
        xian1:false,
            activeId: 1,
    mainActiveIndex: 0,
    qiai:0.00,
    song:20,
    gou:[],
    show: false
        }
    },
    methods:{
         showPopup() {
      this.show = true;
    },
       faA(){
        console.log(this.$route.query.id)
        var x=this.$route.query.id
        this.zhao=x  
        axios.get(`http://elm.cangdu.org/shopping/v2/menu?restaurant_id=`+x.id).then((e)=>{
            this.liet=e.data;
            console.log(this.liet)
        
        })
        //   console.log(this.zhao) 
    this.baimg='http://elm.cangdu.org//img/'+this.zhao.image_path;
    //  this.pei=this.zhao.piecewise_agent_fee.tips;
    
    },
    faB(){
        this.$router.go(-1)
    },
    faC(e){
        e.target.style.color='red'
        this.xian=true
        this.xian1=false;
    },
        faD(e){
        e.target.style.color='red';
        this.xian=false;
           this.xian1=true;
           axios.get(`http://elm.cangdu.org/ugc/v2/restaurants/3325/ratings?has_content=true&offset=0&limit=10&tag_name=`).then((e)=>{
               console.log(e)
           })
       },
       fBa(w,e){
        var obj={name:w.name,qian:w.satisfy_rate,num:1}    
        var obj1=this.gou.findIndex((e)=>{
        return e.name==w.name
        })
        console.log(obj1)
        if(obj1==-1){
        this.gou.unshift(obj)
        }else{
            this.gou[obj1].num++
        }
        
                    this.qiai=0;
                    for(var i in this.gou){
                    this.qiai+=this.gou[i].qian*this.gou[i].num
                        
                    }
                        this.song=20;
                        this.song=this.song-this.qiai;
                        if(this.song<0){
                            this.song=0;
                            console.log(this.song)
                        }
                    
       },
       //去结算
        faQ(){
            this.$router.push({path:'/my/indent'})
        }
    },
    mounted(){
    this.faA()
    
    

    }
}
</script>
<style scope>
.h{
    height: 3rem;
}
#xiang,html,body{
    margin: 0;
    padding: 0;
    width: 100% ;
}
#fab{
    position: fixed;
    left: 8rem;
    top: -1rem;
    border:0px;
    display: block ;
    background:#3190E8;
    border-radius:0.5rem;
    animation:mymove 2s infinite;
     /* animation-iteration-count:1;     */

}
@keyframes mymove /* Safari 和 Chrome */
{

0% {top: 30%;left: 83%; background:yellow; width:1rem;height: 1rem;line-height: 300px;}
100%   {top:100%;left: 5%; background:red; width:0.5rem;height: 0.5rem;}
/* 0%{display: nono;} */
}
#di-1>div{
    width: 12rem;
    height: 100%;
    margin-left: 3rem;
}
.x{
    font-size: 2rem;
    position: absolute;
    top:-1rem;
    left: 0.5rem;
    background: #3D3D3F;
    border-radius: 1rem;
}
#di-1{
    width: 100%;
    height: 2.5rem;
    position: fixed;
    bottom: 0;
    background: #3D3D3F;
    color:#fff;
    z-index: 3;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

h3{
    margin: 0;
    height: 0;
    width: 100%;
    height: 1rem;
}
#gouwu{
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    background: white;
    z-index: 1;
    top: 1rem;
}

#gouwu>div:nth-of-type(1){
    background: red;
    position: fixed;
    width: 20%;
    height: auto;
    top: 9rem;
   
}
#gouwu>div:nth-of-type(1)>h3{
    width: 6rem;
    height: 3.5rem;
    background:rgb(235, 232, 232);
    text-align: center;
    line-height: 3.5rem;
    border: 1px solid rgb(177, 174, 174);
    overflow: hidden;

    
}

#gouwu>div:nth-of-type(2){
    width: 73%;
    position: absolute;
    left: 6.2rem;
    top: 4rem;
    overflow: auto;
    z-index: 1;
    height: 30rem;
    background: white;
    border: 1px solid gainsboro
}
#gouwu>div:nth-of-type(2)>div{
    width: 100%;
    height: auto;

}
#gouwu>div:nth-of-type(2)>div>div{
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 6rem;
    border: 1px solid rgb(233, 229, 229);
}
#gouwu>div:nth-of-type(2)>div>div>img{
    width: 3rem;
    height: 3rem;
    padding: 0.2rem;
}
#shangpin>div:nth-of-type(1){
    width: 100%;
    height: 2rem;
    display: flex;
}
#shangpin>div:nth-of-type(1)>p{
    width: 50%;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;    
}
#zhaopai{
    width: 100%;
    height: 4rem;
    position: relative  ;
    color:#fff;
    z-index:100px
}
#shangpin{
    position: fixed;
    width: 100%;
    height: 2rem;
    z-index: 1000;
    top: 6rem;
    background: white;
}
#zhaopai>div>img{
    width: 2rem;
    height: 2rem;
    padding: 0.3rem;
    
}
#zhaopai>div{
    width: 100%;
    height: 17%;
    display: flex;
    flex-wrap:wrap;
    position: ;
    top: 0;
    z-index: 100;
}
#zhaopai>div>div:nth-of-type(1){
    width: 70%;
    height: 80%;
    box-sizing: border-box;
}

#zhaopai>div>div:nth-of-type(2){
    width: 100%;
    height: 20%;
    
}
#mohu{
    width: 100%;
    height: 4rem;
    background: no-repeat center top;
    background-size: 200% 200%;
    position: fixed;
    filter:blur(5px);
    opacity: 0.8;
     /* z-index: 200; */
}
.tou{
position:fixed;
left: 0.2rem;
top:0.2rem;
font-size:0.8rem;
z-index: 2;
}
#xiang{
    width: 100%;
    height: 100%;
}
.van-popup{
    bottom: 0px
}
</style>