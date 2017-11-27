<template>
	<div class="car">
		<ul class="carlist">
			<li v-for="good in pureCar" :key="good.goodid">
				<img :src="good.src"/>
				<div class="bookInfo">
					<p>{{good.name}}</p>
					<i>￥{{good.price}}元</i>
					<s>￥{{good.prePrice}}元</s>
				</div>
				<button @click="reduceGood({goodid:good.goodid})"> - </button>
				<input type="text" :value="good.num"/>
				<button @click="addGood({goodid:good.goodid,name:good.name,price:good.price,prePrice:good.prePrice,src:good.src})"> + </button>
			</li>
			<li class="total"><p>总数：{{all_price.num}}  总价格：{{all_price.price}}  总共优惠：{{all_price.prePrice}}元</p></li>
		</ul>
	</div>
	
</template>
<script>
import {mapState,mapGetters,mapMutations} from "vuex"
	export default {
		name:"Car",
		data(){
			return{
				
			}
		},
		computed:{
			...mapState (["car"]),
			...mapGetters(["pureCar","all_price"])
		},
		methods:{
			...mapMutations(["addGood","reduceGood"])
		},
		mounted(){
			console.log(this.$store.getters.pureCar)
		}
		
		
		
	}
</script>
<style scoped lang="scss" >
	.car{
		width:100%;
		margin-bottom:0.6rem;
		.carlist{
			padding:0.1rem;
			&>li{
				display:flex;
				align-items:center;
				justify-content:space-between;
				margin-bottom:0.1rem;
				&>img{
					width:1rem;
					height:1rem;
					border:1px solid red;
					
				}
				.bookInfo{
					padding:0.15rem;
					p{
						margin-bottom:0.1rem;
					}
				}
				input{
						width:0.55rem;
						height:0.22rem;
						background:orangered;
					
					}
			}
			.total{
				p{text-align:right;}
			}
		}
	}

</style>