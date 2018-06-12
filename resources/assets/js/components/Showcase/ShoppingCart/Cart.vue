<template>
    <div>
        <el-container>
            <el-main>
                <h1>Hello </h1>
                <el-button @click="back">Back</el-button>
                <el-row gutter="10">
                    <el-col :xs="8" :sm="8" :md="8" :lg="9" :xl="11">
                        <div class="grid-content">
                            <el-table
                                    :data="tableData6"
                                    border
                                    show-summary
                                    style="width: 100%">
                                <el-table-column
                                        prop="id"
                                        label="ID"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="name"
                                        label="Name">
                                </el-table-column>
                                <el-table-column
                                        prop="amount1"
                                        sortable
                                        label="Amount 1">
                                </el-table-column>
                                <el-table-column
                                        prop="amount2"
                                        sortable
                                        label="Amount 2">
                                </el-table-column>
                                <el-table-column
                                        prop="amount3"
                                        sortable
                                        label="Amount 3">
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-col>
                    <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1">
                        <div class="grid-content">
                            <h3>right side</h3>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        data() {
            return {
                tableData6: [{
                    id: '12987122',
                    name: 'Tom',
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10
                }, {
                    id: '12987123',
                    name: 'Tom',
                    amount1: '165',
                    amount2: '4.43',
                    amount3: 12
                }, {
                    id: '12987124',
                    name: 'Tom',
                    amount1: '324',
                    amount2: '1.9',
                    amount3: 9
                }, {
                    id: '12987125',
                    name: 'Tom',
                    amount1: '621',
                    amount2: '2.2',
                    amount3: 17
                }, {
                    id: '12987126',
                    name: 'Tom',
                    amount1: '539',
                    amount2: '4.1',
                    amount3: 15
                }]
            };
        },
        methods: {
            back: function (){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>