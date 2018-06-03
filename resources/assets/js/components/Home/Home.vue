<template>
    <el-row :gutter="10" class='my-profile'>
        <el-col :span="12" class="main-profile" :xs="24" :sm="12" :md="12">
            <div class="grid-content">
                <el-row :gutter="0">
                    <el-col :span="8">
                        <div class="grid-content">
                            <div class="my-img">
                                <img src="/photos/sith.jpg" alt="" class="" >
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <div class="grid-content">
                            <p>
                                My name Oudamsith Samin. You can call me Sith. I'm a passionate web developer who have lurking around
                                teh new technology. I'm from Cambodia and currently a junior at Setec institute.
                            </p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-col>
    </el-row>
</template>

<style scoped>
    .main-profile {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .grid-content {
        padding: 20px;
    }

    @media only screen and (min-width: 992px) {
        .el-col-md-12 {
            width: 50%;
            margin-left: 25%;
        }
    }
    .my-img {
        border-radius: 50%;
        width: 120px;
        height: 120px;
        overflow: hidden;
        /*background: url('../photos/sith.jpg');*/
    }
</style>