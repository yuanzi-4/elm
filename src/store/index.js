import Vue from 'vue'
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex);

//创建vuex 实例
const store=new Vuex.Store({
    //state： vuex中的数据源，我们需要保存的数据就保存在这里，
    //可以在页面通过 this.$store.state来获取我们定义的数据；
    state:{
        userInfo:{
            login:false,
            username:'',
            id:true,
            avatar:'',//存储头像
            uid:''
        }
    },
    getters: {//类似vue的computed可以监听state的变化
        
    },
    mutations:{//修改数据
        userlogin(state,val){//修改图像
            state.userInfo=val
        },
        avatar(state,val){
            state.avatar=val
        },
        

    },
    actions:{//类似vue的methods
        
    }

})
export default store;//到处store