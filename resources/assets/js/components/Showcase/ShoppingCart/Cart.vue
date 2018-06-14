<template>
    <div class="container main">
        <div class="row">
            <h1>Cart </h1>
            <button class="btn btn-dark btn-block" @click="back">Back</button>
        </div>
        <div class="row my-2" v-if="carts.length">
            <div class="col-md-8 col-xs-12 cart">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">ITEM</th>
                        <th scope="col">QTY</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">TOTAL</th>
                        <th scope="col">ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in carts">
                        <th scope="row">{{ item.name }}</th>
                        <td>
                            <div class="input-group">
                                <input type="number" min="1"
                                       oninput="this.value=(this.value === null) ? (1/1) : this.value;"
                                       class="form-control" :value="item.qty" aria-label="Recipient's username"
                                       aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" @click="incrementToCart(item.id)"
                                            type="button">+
                                    </button>
                                    <button class="btn btn-outline-secondary" @click="decrementToCart(item.id)"
                                            type="button">-
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.price * item.qty}}</td>
                        <td>
                            <a href="">Remove</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-4 col-xs-12">Hello 2</div>
        </div>
        <div v-else>
            <h1>Sorry, you have no items in cart</h1>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Cart",
        methods: {
            back: function () {
                this.$router.go(-1);
            },
            incrementToCart: function (id) {
                this.$store.dispatch('incrementToCart', id);
            },
            decrementToCart: function (id) {
                this.$store.dispatch('decrementToCart', id);
            },
            deleteFromCart: function (id) {
                this.$store.dispatch('deleteFromCart', id);
            }
        },
        computed: {
            ...mapGetters(['carts']),
        }
    }
</script>

<style scoped>
    .cart {
        border: 1px solid gray;
        border-radius: 2px;
    }
</style>