import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import AppMain from "../container/AppMain/Main"
import AppTheme from "../container/AppTheme/Theme"
import AppDiscover from "../container/AppDiscover/Discover"
import AppMine from "../container/AppMine/Mine"
import AppGoods from "../container/AppGoods/AppGoods"
import AppCar from "../container/AppCar/AppCar"



var router= new Router({
   mode: 'history',//如果配置了这个，就会使用h5 historyAPI，类似于react browserHistory，默认是hash
  routes: [//路由表
    // {//每一个对象都是一个路由规则
    //   path: '/',//当路径变成...的时候
    //   name: 'Hello',//路由名字，在js中切换路由的时候可以直接用路由名来切换
    //   component: HelloWorld,//路由对应的组件
    // }
	  {
	  	path:"*",
	  	redirect:"/main"
	  },
	  {
	  	path:"/",
	  	component:AppMain,	
	  },
	  {
	  	path:"/main",
	  	component:AppMain,
	  	name:"main"
	  },
	  {
	  	path:"/theme",
	  	component:AppTheme,
	  	name:"theme"
	  },
	  {
	  	path:"/discover",
	  	component:AppDiscover,
	  	name:"discover"
	  },
	  {
	  	path:"/goods",
	  	component:AppGoods,
	  	name:"goods"
	  },
	   {
	  	path:"/car",
	  	component:AppCar,
	  	name:"car"
	  },
	  {
	  	path:"/mine",
	  	component:AppMine,
	  	name:"mine"
	  }
  
  ]
})
export default router
