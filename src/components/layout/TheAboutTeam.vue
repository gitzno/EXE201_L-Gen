<template>
    <div class="contents-80">
        <div id="header">
            <headerMain class="" text="Về thành viên"></headerMain>
            <img src="../../assets/image/Vector.png" alt="">
        </div>
        <div id="content-Member">
            <div id="frameImgs-Member">
                <frameImg id="frameImg" img="i1" pointer="1"></frameImg>
                <div class="member-text">
                    <div class="name">Cấn Nguyễn Bảo Châu</div>
                    <div class="role">Leader</div>
                </div>
            </div>
            <div id="frameImgs-Member">
                <frameImg id="frameImg" img="i2" pointer="2"></frameImg>
                <div class="member-text">
                    <div class="name">Vương Xuân Quân</div>
                    <div class="role">HR, customer manager</div>
                </div>
            </div>
            <div id="frameImgs-Member">
                <frameImg id="frameImg" img="i3" pointer="3"></frameImg>
                <div class="member-text">
                    <div class="name">Lương Hoài Nam</div>
                    <div class="role">Financial manager</div>
                </div>
            </div>
            <div id="frameImgs-Member">
                <frameImg id="frameImg" img="i4" pointer="4"></frameImg>
                <div class="member-text">
                    <div class="name">Nguyễn Thị Khánh Linh</div>
                    <div class="role">Expertise manager (UI)</div>
                </div>
            </div>
            <div id="frameImgs-Member">
                <frameImg id="frameImg" img="i5" pointer="5"></frameImg>
                <div class="member-text">
                    <div class="name">Trần Đức Anh</div>
                    <div class="role">Expertise manager (UX)</div>
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
    font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1800 - 300)));
    margin-top: 40px;
}

.contents-80>#content-Member>#frameImgs-Member>.member-text>.role {
    font-size: calc(12px + (20 - 12) * ((100vw - 300px) / (1800 - 300)));
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