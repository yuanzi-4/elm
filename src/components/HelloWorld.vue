<template>
  <div class="hello">
  <Header Title="true"></Header>
  <div class="tijiao">
    <el-input  placeholder="输入学校，商务楼，地址" v-model="input"></el-input>
  <el-button type="primary" @click="push">提交</el-button>
  </div>
  <div class="sou">搜索内容</div>
<router-link to='/'>
  <div class="city" v-for="(item,k) in arr" :key="k" @click="dian(item)">
    <h2>{{item.name}}</h2>
    <span>{{item.address}}</span>
  </div>
</router-link>
  <div class="clear">
<el-button @click="clear">清楚所有</el-button>
</div> 
  </div>
</template>

<script>
import Header from '@/components/header'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      input:'',
      hot:'',
      list:'',
      arr:[]
    }
  },
  components: {
    Header
  },
  mounted() {
    
    var list=JSON.parse(localStorage.getItem('seek'))||[]
    this.arr=list


},
methods: {
push(){
  axios.get('http://elm.cangdu.org/v1/pois?type=search&city_id='+`${this.$route.query.id}`+'&keyword='+`${this.input}`).then((res)=>{
    console.log(res)
    this.arr=res.data
    
  })
},
dian(item){
  var arr=JSON.parse(localStorage.getItem('seek'))||[]     
    var obj={name:item.name,address:item.address}
    let i=arr.findIndex(it=>{
      return item.name==it.name
    })
    if(i==-1){
      arr.unshift(obj)
    }else{
      return false
    }
    localStorage.setItem('seek',JSON.stringify(arr))
},
//清楚所有
clear(k){
  this.arr.splice(k);
    localStorage.setItem('seek',JSON.stringify(this.arr))

}

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.hello,body,html{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #f4eff2;
}
.tijiao{
height: 140px;
background: white;
display: flex;
flex-direction: column;
justify-content:space-around;
padding-top: 50px

}
.sou{
  height: 29px;
  background: #f5f5f5;
  margin-top: 5px;
  
}
.city{
  height: 110px;
  background: white;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center
}
.clear{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around
}
a{
  text-decoration: none
}
</style>
