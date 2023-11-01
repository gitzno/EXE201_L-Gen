<template>
    <div class="contents">
        <div class="bg-img">
            <img src="../../assets/image/homepage.png" alt="">
        </div>
        <headerMain style="margin-left: 20px; margin-bottom: 10px;" class="line-1 contents-Child" text="Cùng L-Gen"></headerMain>
        <div class="line-2 contents-Child">
            <headerMain style="margin-left: 10px;" class="frameTextss" text="chinh phục">
            </headerMain>
            <frame class="frameTextss" text="UI/UX"></frame>
        </div>
        <buttonMain class="btn-main" src="#" text="Khám phá thêm"></buttonMain>
    </div>
</template>
  
<script>
import headerMain from "../base/headerMain.vue";
import frame from "../base/frameText.vue";
import buttonMain from "../base/button.vue"
export default {
    components: {
        headerMain,
        frame,
        buttonMain,
    },
};
</script>
  
<style scoped>
.contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 24px;

}

.bg-img {
    top: 100px;
    z-index: -100;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bg-img>img {
    position: absolute;
    width: 2000px;
    top: -150px;
}

.btn-main {
    font-size: calc(18px + (24 - 18) * ((100vw - 300px) / (1800 - 300)));
    margin: 85px 0;
}

.contents>.contents-Child {
    margin: 10px;
}

.contents>.line-1 {
    /* font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width]))); */
    font-size: calc(30px + (70 - 30) * ((100vw - 300px) / (1800 - 300)));
}

.contents .line-2 {
    font-size: calc(50px + (100 - 50) * ((100vw - 300px) / (1800 - 300)));
    display: flex;
}

.frameTextss {
    padding: 10px;
    font-size: calc(40px + (100 - 40) * ((100vw - 300px) / (1800 - 300)));
}

@media (max-width: 750px) {
    .contents>.contents-Child {
        margin: 0px;
    }

    .line-1 {
        width: 100%;
    }
    .line-2>#textHeader{
        padding: 0px;
    }
    .contents .line-2 {
        width: 100%;
        margin: 0px;
        flex-direction: column;
    }
}</style>