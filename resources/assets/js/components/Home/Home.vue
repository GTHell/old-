<template>
    <el-container>
        <el-main class="main">
            <el-row :gutter="10" class='my-profile'>
                <el-col :span="6" class="main-profile" :xs="24" :sm="12" :md="12" :lg="12" :xl="4">
                    <div class="grid-content">
                        <el-row :gutter="0">
                            <el-col :span="8">
                                <div class="grid-content">
                                    <div class="my-img">
                                        <img src="/photos/sith.jpg" alt="" class="">
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="16">
                                <div class="grid-content">
                                    <p>
                                        My name Oudamsith Samin. You can call me Sith. I'm a passionate web developer
                                        who have lurking around
                                        teh new technology. I'm from Cambodia and currently a junior at Setec institute.
                                    </p>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<style scoped>
    .main-profile {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .grid-content {
        padding: 20px;
    }

    @media only screen and (min-width: 768px) {
        .el-col-md-12 {
            width: 50%;
            margin-left: 25%;
        }
    }

    .my-img {
        border-radius: 50%;
        border: 3px dashed steelblue;
        width: 160px;
        height: 160px;
        overflow: hidden;
        margin-left: 50%;
        transform: translateX(-50%);
        /*background: url('../photos/sith.jpg');*/
    }

    .my-img img{
        width: 160px;
        height: 160px;
        object-fit: cover;
    }

    .main {
        background: linear-gradient(3deg, #ceffb6 0%, #00b5d2 100%);
        height: 100vh;
    }
</style>