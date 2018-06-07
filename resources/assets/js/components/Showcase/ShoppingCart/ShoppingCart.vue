<template>
    <div>
        <el-container>
            <el-main>
                <el-row :gutter="20">
                    <el-col :span="24" :xs="24">
                        <div class="grid-content bg-purple">
                            <h1>Store item functionality with Single Page Application</h1>
                            <el-button type="primary" @click="dialogVisible = true" icon="el-icon-goods"
                                       circle></el-button>
                            <el-dialog
                                    title="Cart"
                                    :visible.sync="dialogVisible"
                                    width="40%"
                                    :before-close="handleClose">
                                <div v-for="item in carts">
                                    <p>
                                        <span class="text-success"><strong>Item:</strong></span> {{item.name}} ,
                                        <span class="text-success"><strong>Price:</strong></span> {{item.price | currency}},
                                        <span class="text-success"><strong>QTY:</strong></span> {{ item.qty }}
                                        <button class="btn btn-info" @click="incrementToCart(item.id)">+</button>
                                        <button class="btn btn-info" @click="decrementToCart(item.id)">-</button>
                                        <button class="btn btn-danger" @click="deleteFromCart(item.id)">X</button>
                                    </p>
                                </div>
                                <span>Total item: </span>
                                <span>{{ carts.length}}</span>
                                <span slot="footer" class="dialog-footer">
                                <!--<el-button @click="dialogVisible = false">Cancel</el-button>-->
                                    <!--<el-button type="primary" @click="dialogVisible = false">Confirm</el-button>-->
                                    <el-button type="primary" @click="dialogVisible = false">Checkout</el-button>
                              </span>
                            </el-dialog>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6" :xs="24" v-for="item in items" :key="item.id">
                        <div class="grid-content bg-purple">
                            <el-card :body-style="{ padding: '0px' }">
                                <img :src="item.image"
                                     class="image">
                                <div style="padding: 14px;">
                                    <span>{{ item.name }}</span>
                                    <span>{{ item.price | currency}}</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ currentDate }}</time>
                                        <el-button type="text" @click="addToCart(item)" class="button">Add To Cart
                                        </el-button>
                                    </div>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
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
            decrementToCart: function(id){
                this.$store.dispatch('decrementToCart', id);
            },
            incrementToCart: function(id) {
                this.$store.dispatch('incrementToCart', id);
            },
            deleteFromCart: function(id) {
                this.$store.dispatch('deleteFromCart', id);
            }
        }
        ,
        computed: {
            ...mapGetters(
                ['items', 'carts']
            )
        },
        filters: {
            currency: function(value) {
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
</style>