<template>
	<div class="container">
		<div class="row mt-3">
			<button class="btn btn-dark btn-block" @click="toRoute('/showcase/shopping-cart/cart')">Cart</button>
		</div>
		<div class="row mt-1">
			<div class="item col-md-4 col-xs-12" v-for="item in items" :key="item.id">
				<!--<div class="row my-2">-->
					<div class="card my-2">
						<div class="product--image">
							<img :src="item.image" class="image card-img-top">
						</div>
						<div class="card-body" style="padding: 14px;">
							<h4 class="card-title">{{ item.name }}</h4>
							<p class="card-text">This is example an example item and I'm looking to improving it.</p>
							<p>{{ item.price | currency}} / Unit</p>
							<button type="text" @click="addToCart(item)" class="btn btn-block btn-dark">Add To Cart</button>
						</div>
					</div>
				<!--</div>-->
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	
	export default {
		name: "ShoppingCart",
		methods: {
			addToCart: function (item) {
				this.$store.dispatch('addToCart', item);
			},
			toRoute: function (path) {
				this.$router.push(path);
			}
		}
		,
		computed: {
			...mapGetters(
				['items']
			)
		},
		filters: {
			currency: function (value) {
				return 'US $'.concat(value.toFixed(2));
			}
		}
	}
</script>

<style scoped lang="scss">
	.product--image {
		overflow: hidden;
	}
	
	.product--image img {
		display: block;
		width: 300px;
		height: 300px;
		object-fit: contain;
		align-self: center;
		margin-left: 50%;
		transform: translateX(-50%);
	}
	/*.time {*/
	/*font-size: 13px;*/
	/*color: #999;*/
	/*}*/
	
	/*.bottom {*/
	/*margin-top: 13px;*/
	/*line-height: 12px;*/
	/*}*/
	
	/*.button {*/
	/*padding: 0;*/
	/*float: right;*/
	/*}*/
	
	/*.image {*/
	/*!*width: 100%;*!*/
	/*!*display: block;*!*/
	/*}*/
	
	/*.clearfix:before,*/
	/*.clearfix:after {*/
	/*display: table;*/
	/*content: "";*/
	/*}*/
	
	/*.clearfix:after {*/
	/*clear: both*/
	/*}*/
	
	/*.item img {*/
	/*width: 300px;*/
	/*height: 300px;*/
	/*object-fit: contain;*/
	/*align-self: center;*/
	/*margin-left: 50%;*/
	/*transform: translateX(-50%);*/
	/*}*/
</style>