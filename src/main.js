// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "../vuex/store"
//引入mint-ui
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI)
//引入字体图标
import "vue-awesome/icons"//字体图标
import Icon from "vue-awesome/components/Icon"
Vue.component("icon",Icon)
//引入动画
import "animate.css"
//引入轮播图
import "swiper/dist/css/swiper.min.css"
Vue.config.productionTip = false//去掉生产提示

/* eslint-disable no-new */
new Vue({//根实例
  el: '#app',
  router,
  store,
  template: '<App/>',// 根实例的模板变成了根组件，所以这时，根实例ヘ根组件合二为一
  components: { App }
})

