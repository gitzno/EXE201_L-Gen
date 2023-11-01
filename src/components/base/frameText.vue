<template>
    <div class="frameText">
        {{ text }}
        <div class="square top left"></div>
        <div class="square top right"></div>
        <div class="square bottom right"></div>
        <div class="square bottom left"></div>

    </div>
</template>

<script>
export default {
    props: ["text"],
    components: {

    }
}
</script>

<style scoped>
.frameText {
    padding: 10px 0;
}

@media (min-width: 1000px) {
    .frameText {
        border: 4px solid #7B61FF;
        background-color: rgba(199, 185, 255, 0.30);
        padding: 10px;
        position: relative;
        font-size: calc(40px + (100 - 40) * ((100vw - 300px) / (1800 - 300)));
    }


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
        border: 5px solid #7B61FF;
        background: #FFF;
        width: 0.1em;
        height: 0.1em;
    }
}
</style>