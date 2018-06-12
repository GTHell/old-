<template>
    <el-dialog
            title="Cart"
            :visible.sync="dialogVisible"
            width="40%"
            :before-close="handleClose">
        <div v-for="item in carts">
            <div>
                <span class="text-success"><strong>Item:</strong> {{item.name}} ,</span>
                <span class="text-success"><strong>Price:</strong> {{item.price |
                                        currency}} ,</span>
                <span class="text-success"><strong>QTY:</strong></span> {{ item.qty }}
                <button class="btn btn-info" @click="incrementToCart(item.id)">+</button>
                <button class="btn btn-info" @click="decrementToCart(item.id)">-</button>
                <button class="btn btn-danger" @click="deleteFromCart(item.id)">X</button>
            </div>
        </div>
        <span>Total item: </span>
        <span>{{ carts.length}}</span>
        <span slot="footer" class="dialog-footer">
                                <!--<el-button @click="dialogVisible = false">Cancel</el-button>-->
            <!--<el-button type="primary" @click="dialogVisible = false">Confirm</el-button>-->
                                    <el-button type="primary" @click="dialogVisible = false">Checkout</el-button>
                              </span>
    </el-dialog>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "DialogItem",
        props: ['items', 'dialogVisible', 'carts'],
        methods:{
            incrementToCart: function () {
                this.$store.dispatch('incrementToCart');
            },
            decrementToCart: function () {
                this.$store.dispatch('decrementToCart');
            },
            deleteFromCart: function () {
                this.$store.dispatch('deleteFromCart');
            }
        },
        filters: {
            currency: function (value) {
                return '$'.concat(value.toFixed(2));
            }
        }
    }
</script>

<style scoped>

</style>