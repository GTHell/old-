<template>
    <div>
        <button @click="toRoute('/showcase/shopping-cart/cart')">Cart</button>
        <div class="item col-md-4" v-for="item in items" :key="item.id">
            <div class="grid-content bg-purple">
                <img :src="item.image"
                     class="image">
                <div style="padding: 14px;">
                    <span>{{ item.name }}</span>
                    <span>{{ item.price | currency}}</span>
                    <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <button type="text" @click="addToCart(item)" class="btn btn-success">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "ShoppingCart",
        data() {
            return {
                dialogVisible: false,
                currentDate: new Date()
            }
        },
        methods: {
            addToCart: function (item) {
                this.$store.dispatch('addToCart', item);
            },
            decrementToCart: function (id) {
                this.$store.dispatch('decrementToCart', id);
            },
            incrementToCart: function (id) {
                this.$store.dispatch('incrementToCart', id);
            },
            deleteFromCart: function (id) {
                this.$store.dispatch('deleteFromCart', id);
            },
            toRoute: function (path) {
                this.$router.push(path);
            }
        }
        ,
        computed: {
            ...mapGetters(
                ['items', 'carts']
            )
        },
        filters: {
            currency: function (value) {
                return '$'.concat(value.toFixed(2));
            }
        }
    }
</script>

<style>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .item img {
        width: 300px;
        height: 300px;
        object-fit: contain;
        align-self: center;
        margin-left: 50%;
        transform: translateX(-50%);
    }
</style>