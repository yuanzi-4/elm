<template>
<div class="shop">
<div class="head">
<span>商品</span>
<span>评价</span>
</div>
    <div class="down">
        <div class="left">
            <div v-for="(item,k) in list" :key="k">{{item.name}}</div>
        </div>
        <div class="right">
            <div v-for="(item,k) in str" :key="k">
                <img :src="image_path"/>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import { TreeSelect } from 'vant';
import axios from 'axios'
export default {
name:'shop',
data () {
    return {
        list:{},
        str:{}
    }
        
},
mounted () {
    axios.get('http://elm.cangdu.org/shopping/v2/menu?restaurant_id=1').then((res)=>{
        console.log(res)
        this.list=res.data;
        this.str=res.data.foods;
        console.log(str)
    })
}

}
</script>

<style>
.shop,body,html{
    margin: 0;
    padding: 0;
    width: 100%;
}
.head{
    height: 2.5rem;
    border: 1px solid gainsboro;
    display: flex;
    justify-content: space-around;
    align-items: center
}
.down{
    display: flex;
}
.left>div{
    height: 2.875rem;
    width: 5rem;
    border: 1px solid gainsboro;
    overflow: hidden
}
</style>