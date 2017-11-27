<template>
  <div id="app">     
		
		<router-view></router-view>
		<AppFooter></AppFooter>		
  </div>
</template>



<script>


import AppFooter from "./components/Footer/Footer"
export default {
  name: 'app',//组件拥有name属性，不设置不影响功能，d但是设置上之后，vue在查找组件的时候会更快速高效
	 components:{

    AppFooter
  }
 
 
}
</script>

<style lang="scss">

@import "./style/main.scss"




</style>
