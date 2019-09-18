import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import City from '@/components/city'
import Zhuce from '@/components/zc'
import Deng from '@/components/deng'
import Main from '@/components/main'
import Message from '@/components/my/message'
import Add from '@/components/my/add'
import Address from '@/components/my/address'
import Search from '@/components/my/search' 
import xiang from '@/components/my/Xiang-1'
import Indent from '@/components/my/indent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: Zhuce
    },
    {
      path: '/deng',
      name: 'deng',
      component: Deng
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
    },
    {//账户信息
      path: '/main/message',
      name: 'message',
      component:Message
    },
    //编辑地址
    {
    path: '/main/add',
    name: 'add',
    component:Add
    },
    //新增地址
    {
      path: '/main/address',
      name: 'address',
      component:Address
      },
      //搜索地址
    {
      path: '/main/search',
      name: 'search',
      component:Search
      },
      {
        path: '/xiang',
        name: 'xiang',
        component:xiang
      },//确认订单页
        {
          path: '/my/indent',
          name: 'indent',
          component:Indent
        },

  ]
})
