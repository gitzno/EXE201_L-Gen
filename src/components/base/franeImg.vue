<template>
    <div class="frameImg">
        <div class="frameChild">
            <img src="../../assets/image/logoL.png" class="onlyImgHere" v-if="img == 1" />
            <img src="../../assets/image/logoL.png" v-if="img == 2" />
        </div>
        <div class="square top left"></div>
        <div class="square top right"></div>
        <div class="square bottom right"></div>
        <div class="square bottom left"></div>
        <div class="pointername bottom right" v-if="img == 2" >
            <img src="../../assets/image/1.svg" alt="">
        </div>
         <div class="pointer bottom right" v-if="img == 1" >
            <img src="../../assets/image/cursor-alt-pointer-mouse.svg" alt="">
        </div>
    </div>
</template>
<script setup>

</script >
<script>
export default {
    props: ["img"],
    components: {

    },

}
</script>

<style scoped>
.frameImg {
    box-sizing: border-box;
    margin: 10px;
    min-width: 100px;
    min-height: 100px;
    border: 4px solid var(--Black, #000);
    position: relative;
}

.frameChild {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.onlyImgHere {
    background-color: black;
    border-radius: 100%;
    
}

.frameChild>img {
    width: 100%;
    height: 100%;
}

/* .frameText {
    border: 4px solid #7B61FF;
    background-color: rgba(199, 185, 255, 0.30);
    padding: 10px;
    
}

*/

.top {
    position: absolute;
    top: -15px;
}

.left {
    position: absolute;
    left: -15px;
}

.right {
    position: absolute;
    right: -15px;
}
.bottom{
    position: absolute;
    bottom: -15px;
}
.square {
    position: absolute;
    border: 5px solid var(--Black, #000);
    background: #FFF;
    width: 15px;
    height: 15px;
}
.pointer{
    right: 27px;
    bottom: -35px;
    position: absolute;
    width: calc(35px + (50 - 35) * ((100vw - 300px) / (1800 - 300)));
    height:  calc(35px + (50 - 35) * ((100vw - 300px) / (1800 - 300)));
}
.pointername{
    right: -100px;
    bottom: -20px;
    width: calc(140px + (150 - 140) * ((100vw - 300px) / (1800 - 300)));
}
.pointer>img{
    width: 100%;
}

.pointername>img{
    width: 100%;
}
@media (max-width: 550px){
    .pointername{
        display: none;
    }

}
</style>