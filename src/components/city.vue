<template>
  <div class="city">
    <Header home='elm.me' deng='登陆/注册'></Header>
    <div class="c_c">
      <span>当前定位城市：</span>
      <span>定位不准却请在城市列表选则</span>
    </div>
    <div class="c_c">
      <h2>{{this.city}}</h2>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="c_c">热门城市</div>
    <div class="hot">
      <p v-for="(item,k) in hot" :key="k">
      <router-link :to="'/HelloWorld?id='+`${item.id}`"><span>{{item.name}}</span></router-link> 
      </p>
    </div>
    <div class='chen'>      
      <div v-for="(item,k) in cher" :key="k"  class="all">
          <div class='meng'>{{item}}按字母排序</div>  
          <div class="abc" v-for="(i,key) in all[item]" :key="key">
          {{i.name}}
          </div> 
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import axios from "axios";
export default {
  name: "city",
  data() {
    return {
      city: "",
      hot: {},
      all:{},
      cher:[]
    };
  },
  components: {
    Header
  },
  mounted() {
    //当前城市接口
    axios.get("http://elm.cangdu.org/v1/cities?type=guess").then(res => {
      this.city = res.data.name;
    });
    //热门城市接口
    axios.get("http://elm.cangdu.org/v1/cities?type=hot").then(res => {
      console.log(res);
      this.hot = res.data;
    });
    //所有城市接口
    axios.get('http://elm.cangdu.org/v1/cities?type=group').then((res)=>{
      console.log(res)
      this.all=res.data;
      this.cher=Object.keys(res.data).sort()
    })
  },computed: {
    
  },
};
</script>

<style>
.city,
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
}
.top {
  height: 70px;
  background: #3792e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top span {
  font-size: 30px;
  color: white;
}
.c_c {
  height: 60px;
  border-bottom: solid gainsboro;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.c_c h2 {
  color: #3792e5;
}
.hot{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.hot p{
  width: 100px;
  height: 100%;
}


.shen{
  width: 100%;
  height: auto;
}
.meng{
  width: 100%;
  height: 20px;
  background: gainsboro
}

.abc{
  width: 25%;
  height: 60px;
}
.all{
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap
}  
a{
  text-decoration: none;
  color: black
}
</style>