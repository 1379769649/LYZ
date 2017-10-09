import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Index from '@/components/Index'
import Discover from '@/components/Discover'
import Order from '@/components/Order'
import Me from '@/components/Me'
import CommodityList from '@/page/CommodityList'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/Discover',
      component: Discover
    },
    {
      path: '/Order',
      component:Order
    },
    {
      path: '/Me',
      component:Me
    },
    {
      path: '/CommodityList',
      component:CommodityList
    },
    {
      path: '/Login',
      component:Login
    }
  ]
})
