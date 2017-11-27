<template>
	<div ref="container" class="swiper-container app-swiper">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
	        	<img :src="item.listPic" alt="无" style="width:100%;height:100%" />
	        </div>	        
	    </div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination"></div>
  
	</div>
		
</template>


<script>
	import Swiper from "swiper"
	import axios from "axios"	
	

	export default {
		name:"AppSwiper",
		props:["url"],
		data:function(){
			return{
				banners:[]
			}
		},
		methods:{
			getSwiperData(){
				let that = this;
				axios.get(this.url+'RequestJson={"platform":"0",}').then((res)=>{
					//console.log(res.data)
					that.banners = res.data.result
				})
			}
		},
		created(){
			this.getSwiperData()
		},
		updated(){
			new Swiper(this.$refs.container,{
				pagination: '.swiper-pagination',
       			paginationClickable: true,
       			autoplay:true,
				loop:true
			})
		}
		
		
	}
//	methods:{
//  getBanners(){
//    let that = this
//    axios.get(this.url+'RequestJson={"platform":"0",}').then((res)=>{
//      console.log(res)
//    })
//  }
//},
//	
	 
	
	
</script>


<style scoped lang="scss">
	
	
	
</style>