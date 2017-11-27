<template>
	<div id="main">
		<AppHeader></AppHeader>
		<AppSwiper url="/jdy/tradeAPI/listActivity.html?"></AppSwiper>
		<MainList url="/jdy/productNewAPI/listThemes.html?"></MainList>
		<Vacation></Vacation>
		<Coupm></Coupm>
	</div>
	
	
</template>

<script>
	import AppHeader from "../../components/Header/Header"
	import AppSwiper from "../../components/AppSwiper/AppSwiper"
	import MainList from "../../components/MainList/MainList"
	import Vacation from "../../components/Vacation/Vacation"
	import Coupm from "../../components/Coupm/Coupm"
	 export default{
	 	name:"AppMain",
	 	components:{
	 		AppHeader,
	 		AppSwiper,
	 		MainList,
	 		Vacation,
	 		Coupm
	 	}
	 }
</script>

<style lang="scss">
#main{
	width:100%;
	height:100%
}

	/*#main{
		flex:1
	}*/
	
</style>