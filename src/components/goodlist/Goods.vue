<template>
<div class="goodsBox">

	<ul class="goodslist">
		<li v-for="good in booksMsg" :key="good.id">
			<img :src="good.src"/>
			<div class="bookInfo">
				<p>{{good.name}}你买了吗?!</p>
				<i>￥{{good.price}}元</i>
				<s>￥{{good.prePrice}}元</s>
			</div>
			
			<button @click="addGood({goodid:good.goodid,name:good.name,price:good.price,prePrice:good.prePrice,src:good.src})">点击购买</button>
		</li>
	</ul>
</div>

</template>


<script>
import axios from "axios"
//因为在购物车要用addGood方法，方法在store，
import {mapMutations} from "vuex"
export default{
	name:"Goods",
	data(){
		return {
			booksMsg:[]
		}
	},
	methods:{
		getBooksData(){
			let that =this;
			axios.get("../../static/goodslist.json").then((res)=>{
				
				that.booksMsg = res.data;
				console.log(this.booksMsg)
			})
		},
		
		...mapMutations(["addGood"])//在store中取得的方法在methods遍历		
	},
	created(){
		this.getBooksData();
		
	}
}
</script>

<style scoped lang="scss">
	.goodsBox{
		width:100%;
		margin-bottom:0.6rem;
		.goodslist{
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
						width:0.6rem;
						height:0.3rem;
						background:orangered;
					}
			}
			
		}
	}

</style>