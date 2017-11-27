<template>
  <header id="head"> 
  	<div class="search_box">
  		<img src="../../assets/sousuo.png" alt="无法" />
  		<input type="text" placeholder="请输入目的地/主题" />
  	</div>
	
  </header>
</template>

<script>



export default {
  name: 'AppHeader'//组件拥有name属性，不设置不影响功能，d但是设置上之后，vue在查找组件的时候会更快速高效

}
</script>

<style scoped lang="scss">

	#head{
		width:100%;
		position:absolute;
		top:1.65rem;
		padding-left:0.4rem;
		box-sizing: border-box;
		z-index:999;
		.search_box{
			height:0.3rem;
			width:100%;
			position:relative;
			&>input{
				width:2.8rem;
				height:0.3rem;
				border:1px solid gray;
				border-radius:0.6rem;
				background:#fff;
				opacity:0.6;
				text-indent: 0.3rem;
			}
			img{
				width:0.22rem;
				height:0.22rem;
				position:absolute;
				right:0.7rem;
				top:0.07rem;
				z-index:999;
				color:blue;
			}
		}
	}

</style>
