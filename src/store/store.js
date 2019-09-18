import Vue from 'vue'
import Vuex from 'vuex'
import VuePersist from 'vuex-persist'
import index from './index.js'
const vuexLocal =new VuePersist({
    storage: window.localStorage
})
Vue.use(Vuex);
export default  new Vuex.Store({
    plugins:[vuexLocal.plugin],
    modules:{
        index:index
    }
})