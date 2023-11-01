<template>
    <div class="contents-80">
        <div id="header">
            <headerMain class="" text="Về thành viên"></headerMain>
            <img src="../../assets/image/Vector.png" alt="">
        </div>
        <div id="content-Member">
            <div id="frameImgs-Member">
                <frameImg id="frameImg" img="2"></frameImg>
                <div class="member-text">
                    <div class="name">Cấn Nguyễn Bảo Châu</div>
                    <div class="role">Leader</div>
                </div>
            </div>
            <div id="frameImgs-Member">
                <frameImg id="frameImg" img="2"></frameImg>
                <div class="member-text">
                    <div class="name">Cấn Nguyễn Bảo Châu</div>
                    <div class="role">Leader</div>
                </div>
            </div>
            <div id="frameImgs-Member">
                <frameImg id="frameImg" img="2"></frameImg>
                <div class="member-text">
                    <div class="name">Cấn Nguyễn Bảo Châu</div>
                    <div class="role">Leader</div>
                </div>
            </div>
            <div id="frameImgs-Member">
                <frameImg id="frameImg" img="2"></frameImg>
                <div class="member-text">
                    <div class="name">Cấn Nguyễn Bảo Châu</div>
                    <div class="role">Leader</div>
                </div>
            </div>
            <div id="frameImgs-Member">
                <frameImg id="frameImg" img="2"></frameImg>
                <div class="member-text">
                    <div class="name">Cấn Nguyễn Bảo Châu</div>
                    <div class="role">Leader</div>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
import headerMain from "../base/headerMain.vue";
import frameImg from "../base/franeImg.vue"
export default {
    components: {
        headerMain,
        frameImg

    },
};
</script>
  
<style scoped>
.contents-80 {
    display: flex;
    flex-direction: column;

}

.contents-80>#content-Member {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 67px;
    box-sizing: border-box;
    width: 100%;
}

.contents-80>#content-Member>#frameImgs-Member {
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 50px;
}

.contents-80>#content-Member>#frameImgs-Member>.member-text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
}

.contents-80>#content-Member>#frameImgs-Member>.member-text>.name {
    font-size: calc(20px + (28 - 20) * ((100vw - 300px) / (1800 - 300)));
    margin-top: 40px;
}

.contents-80>#content-Member>#frameImgs-Member>.member-text>.role {
    font-size: calc(12px + (24 - 12) * ((100vw - 300px) / (1800 - 300)));
    font-family: Montserrat;
    margin: 10px;
}



.contents-80>#header {
    display: flex;
    align-items: center;
    font-size: calc(70px + (100 - 70) * ((100vw - 300px) / (1800 - 300)));
    width: 100%;
    margin-top: 124px;
}

.contents-80>#header>img {
    height: 50%;
}
@media (max-width: 550px){
    .contents-80>#content-Member>#frameImgs-Member{
        margin: 0;
        box-sizing: border-box;
        width: 80%;
        
    }

}
@media (max-width: 1200px) {
    .contents-80>#header {
        display: flex;
        justify-content: center;
    }

    .contents-80>#content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
    }

    .contents-80>#content>.textContent {
        width: 80%;
        font-family: Montserrat_500;
        margin-left: 0px;
    }

    .contents-80>#content>#frameImgs {
        width: 50%;
        margin: 50px 0px;
    }
}</style>