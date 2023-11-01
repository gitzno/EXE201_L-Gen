<template>
    <div class="frameImg">
        <div class="frameChild">
            <img src="../../assets/image/logoL.png" class="onlyImgHere" v-if="img === '0'" />
            <img src="../../assets/image/i1.png" v-if="img === 'i1'" />
            <img src="../../assets/image/i2.png" v-if="img === 'i2'" />
            <img src="../../assets/image/i3.png" v-if="img === 'i3'" />
            <img src="../../assets/image/i4.png" v-if="img === 'i4'" />
            <img src="../../assets/image/i5.png" v-if="img === 'i5'" />
            <img src="../../assets/image/course.png" v-if="img === 'i6'" />
            <img src="../../assets/image/review.png" v-if="img === 'i7'" />

        </div>
        <div class="square top left"></div>
        <div class="square top right"></div>
        <div class="square bottom right"></div>
        <div class="square bottom left"></div>
        <div class="pointer bottom right" v-if="pointer == 0">
            <img src="../../assets/image/cursor-alt-pointer-mouse.svg" alt="" v-if="pointer == '0'">

        </div>
        <div class="pointername bottom right">
            <img src="../../assets/image/1.svg" alt="" v-if="pointer == '1'">
            <img src="../../assets/image/2.svg" alt="" v-if="pointer == '2'">
            <img src="../../assets/image/3.svg" alt="" v-if="pointer == '3'">
            <img src="../../assets/image/4.svg" alt="" v-if="pointer == '4'">
            <img src="../../assets/image/5.svg" alt="" v-if="pointer == '5'">
        </div>
    </div>
</template>
<script setup>

</script >
<script>
export default {
    props: ["img", "pointer"],
    components: {

    }, methods: {
        getPhoto() {
            return this.img;
        }
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

.bottom {
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

.pointer {
    right: 27px;
    bottom: -35px;
    position: absolute;
    width: calc(35px + (50 - 35) * ((100vw - 300px) / (1800 - 300)));
    height: calc(35px + (50 - 35) * ((100vw - 300px) / (1800 - 300)));
}

.pointername {
    right: -100px;
    bottom: -20px;
    width: calc(140px + (150 - 140) * ((100vw - 300px) / (1800 - 300)));
}

.pointer>img {
    width: 100%;
}

.pointername>img {
    width: 100%;
}

@media (max-width: 550px) {
    .pointername {
        display: none;
    }

}
</style>