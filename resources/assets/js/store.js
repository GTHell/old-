import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'uuid';

Vue.use(Vuex);

// @STATE: return object of datas
let state = {
	items: [
		{
			id: uuid.v4(),
			name: 'shoes',
			price: 9.99,
			qty: 1,
			image: "https://dsw.scene7.com/is/image/DSWShoes/377442_001_ss_01?$pdp-image$"
		},
		{
			id: uuid.v4(),
			name: 'pant',
			qty: 1,
			price: 9.99,
			image: "https://images.thenorthface.com/is/image/TheNorthFace/NF0A2TCT_254_hero?$638x745$"
		},
		{
			id: uuid.v4(),
			name: 'shirt',
			price: 9.99,
			qty: 1,
			image: "http://brandstore.vistaprint.in/render/undecorated/product/PVAG-0Q4K507W3K1Y/RS-K82Q06W655QY/jpeg?compression=95&width=700"
		},
		{
			id: uuid.v4(),
			name: 'watch',
			price: 9.99,
			qty: 1,
			image: "http://cdn.shopify.com/s/files/1/0377/2037/products/Mens37.Front_e0435337-82ea-4472-86aa-0e34e1b2c3e8_grande.jpg?v=1510684726"
		},
	],
	carts: [
		{
			id: uuid.v4(),
			name: 'watch',
			qty: 1,
			price: 9.99
		}
	]
};

// @GETTERS: return getters as computed
let getters = {
	items: state => state.items,
	carts: state => state.carts
};

// @MUTATIONS: return synchronous data mutation
let mutations = {
	ADD_TO_CART: (state, payload) => {
		let item = _.find(state.carts, function (i) {
			return i.id === payload.id
		});
		
		if (item) {
			item.qty++;
		} else {
			let adjustItem = payload;
			// adjustItem.qty = 1;
			Vue.set(adjustItem, 'qty', 1);
			state.carts.push(adjustItem);
			// Vue.set(state.carts.item, state.carts.indexOf(item), adjustItem);
		}
	},
	INCREMENT_TO_CART: (state, payload) => {
		// let item = _.find(state.carts, function(i){ return i.id === payload });
		let item = null;
		for (let i = 0; i < state.carts.length; i++) {
			if (state.carts[i].id === payload) {
				item = state.carts[i];
				break;
			}
		}
		
		item.qty++;
		
		console.log(item);
	},
	DECREMENT_TO_CART: (state, payload) => {
		let item = _.find(state.carts, function (i) {
			return i.id === payload
		});
		let index = state.carts.indexOf(item);
		
		item.qty--;
		
		if (item.qty < 1) {
			state.carts.splice(index, 1);
		}
	},
	DELETE_FROM_CART: (state, payload) => {
		let item = _.find(state.carts, function (i) {
			return i.id === payload
		});
		let index = state.carts.indexOf(item);
		state.carts.splice(state.carts.indexOf(item), 1);
	}
};

// @ACTIONS: return asynchronous data context commit
let actions = {
	addToCart: (context, payload) => {
		context.commit('ADD_TO_CART', payload);
	},
	incrementToCart: (context, payload) => {
		context.commit('INCREMENT_TO_CART', payload);
	},
	decrementToCart: (context, payload) => {
		context.commit('DECREMENT_TO_CART', payload);
	},
	deleteFromCart: (context, payload) => {
		context.commit('DELETE_FROM_CART', payload);
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});