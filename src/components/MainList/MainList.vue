//http://jdy.kindin.com.cn/productNewAPI/listThemes.html?RequestJson={%22searchType%22:%20%220%22}
<template>
	<ul class="main-list">
		<li v-for="(item,i) in listInfo" :key="item.themeId">
			<a>
				<img :src="item.introPic"/>
				<p>{{item.themeName}}</p>
			</a>
		</li>
	</ul>
	
	
</template>
<script type="text/javascript">
	import axios from "axios"
	
	export default {
		name:"MainList",
		props:["url"],
		data(){
			return{	
				listInfo:[]
			}
		},
//		http://jdy.kindin.com.cn/productNewAPI/listThemes.html?RequestJson={%22searchType%22:%20%220%22}
		methods:{
			getListImg(){
				axios.get(this.url+'RequestJson={%22searchType%22:%20%220%22}')
				.then((res)=>{
					console.log(res.data.result)
					this.listInfo = res.data.result;
				})
			}
		},
		mounted(){
			this.getListImg()
			
		}
	}
</script>

<style scoped lang="scss">
	.main-list{
		display:flex;
		flex-wrap: wrap;
		&>li{
			width:25%;
			text-align:center;
			padding-top:0.2rem;
			img{
				width:0.42rem;
				height:0.42rem;
			}
			p{
				
			}
		}
	}
	
	
</style>