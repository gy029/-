<template>
	<div class="vacation">
		<div class="vacation-left">
			<p class="vacation-left-message">限时抢购 最低7折起</p>
			<p class="vacation-left-subname aa">秒杀根本停不下来</p>
			<img src="../../assets/3.png"/>
		</div>
		<div class="vacation-right">
			<div class="vacation-right-homeplay bb">
				<div class="left">
					<p class="vacation-left-message">国内度假</p>
					<p class="vacation-left-subname aa">精选国内度假地</p>
				</div>
				<img src="../../assets/1.png"/>
			</div>
			<div class="vacation-right-overseaplay bb">
				<div class="left">
					<p class="vacation-left-message">国外度假</p>
					<p class="vacation-left-subname aa">海岛沙滩度假地</p>
				</div>				
				<img src="../../assets/2.png"/>
			</div>
		</div>
		
	</div>
	
</template>
<script scoped lang="scss">
	export default {
		name:"Vacation"
	}
</script>

<style scoped lang="scss">
	.vacation{
		display:flex;
		width:100%;
		
		border-top:1px solid lightgray;
		border-bottom:1px solid lightgray;
		margin-top:0.12rem;
		&>div{
			width:50%;
			padding:0.1rem 0.17rem;
			box-sizing: border-box;
			.aa{
				color:darkgray;
				font-size:0.1rem
			}
		}
		.vacation-left{
			height:1.6rem;
			border-right:1px solid lightgray;
			img{
				width:1.55rem;
				height:0.71rem;
				padding-top:0.15rem
			}
			
		}
		.vacation-right{
			.bb{
				width:100%;
				height:0.6rem;
				display:flex;
				margin-bottom:0.1rem;
				
				box-sizing:border-box;
				img{
					width:0.7rem;
					height:0.58rem;
				}
				
			}
			.vacation-right-homeplay{
				border-bottom:1px solid lightgray;
			}
		}
		
	}
	
	
	
</style>