import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
//存放状态
const state = {
	car:{
		username:"gy",
		goods:localStorage.goods ? JSON.parse(localStorage.goods):[]
	}
}
//对状态的二次处理
const getters = {
	pureCar(state){
		return state.car.goods
	},
	all_price(state){
		let all={price:0,num:0,prePrice:0}	
		state.car.goods.forEach((item,i)=>{
			all.num +=item.num;
			all.price +=item.num*item.price;
			all.prePrice +=(item.prePrice-item.price)*item.num;
		})
		return all
	}
	
	
}
//专门更改状态
const mutation1 = {
	addGood(state,{goodid,name,price,prePrice,src}){
		let isHas = false;
		let goods = state.car.goods;
		for(var i=0;i<goods.length;i++){
			if(goods[i].goodid==goodid){
				goods[i].num++;
				isHas = true;
				break;
			}
			
		}
		if(!isHas){
				goods.push({goodid,name,price,prePrice,src,num:1})
		}
		localStorage.goods = JSON.stringify(goods)//数组转化为字符串
	}
}
const mutation2 = {
	reduceGood(state,{goodid}){
		
		let goods = state.car.goods;
		for(var j = 0;j<goods.length;j++){
			if(goods[j].goodid == goodid){
				goods[j].num--;
				if(goods[j].num==0){
					goods.splice(j,1)
				}
				break;
			}
		}
		localStorage.goods = JSON.stringify(goods)
		
	}
	
	
	
}
const mutations=Object.assign({},mutation1,mutation2)
//
const store = new Vuex.Store({
	state,getters,mutations
})

export default store