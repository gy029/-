<template>
  <nav class="bar bar-tab footer">
 
	  <router-link :to="{name:nav.path}" active-class="active" v-for="(nav,i) in navs" :key="nav.icon" class="tab-item external" @click="turnto">
            <span><icon :name='nav.icon'></icon></span>
            <span class="tab-label">{{nav.text}}</span>
    </router-link>
	
	</nav>
</template>

<script>

export default {
  name: 'AppFooter',//组件拥有name属性，不设置不影响功能，d但是设置上之后，vue在查找组件的时候会更快速高效
	data(){
		return{
				navs:[
					{text:"首页",icon:"home",path:"main"},
					{text:"主题",icon:"star",path:"theme"},
					{text:"列表",icon:"life-ring",path:"goods"},
					{text:"购物车",icon:"shopping-cart",path:"car"},
					{text:"发现",icon:"eraser",path:"discover"},					
					{text:"我的",icon:"address-book",path:"mine"}
				]
		
		}
	},
	methods:{
		turnto(){
			console.log(this.$route)
		}
	}
}
</script>

<style scoped lang="scss">

	.footer{
		width:100%;
		height:0.48rem;
		position:fixed;
		bottom:0px;
		border-top:2px solid #d7d7d7;
		display:flex;
		justify-content: space-around;
		background:white;
		a{
			color:gray;
			display:flex;
			flex-direction: column;
			align-items:center;
			justify-content: center;
			.icon{
				font-size:0.06rem;
				color:black;
			}
		
		}
		.active{
			color:skyblue
		}
	}
	
		
</style>
