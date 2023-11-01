<template>
    <div class="contents-80 course">
        <div id="content">
            <div class="textContent headercourse2">
                <div id="header" class="headercourse">
                    <headerMain class="" text="Khóa học"></headerMain>
                    <img src="../../assets/image/Vector.png" alt="">
                </div>
            </div>
            <div id="frameImgs">
                <frameImg id="frameImg" img="i6" pointer="0"></frameImg>
            </div>
            <div class="textContent ">
                <div id="header" class="headercourse  headercourse3">
                    <headerMain class="" text="Khóa học"></headerMain>
                    <img src="../../assets/image/Vector.png" alt="">
                </div>
                Đây là khóa học căn bản dành cho các bạn đang muốn học về cách sử dụng công cụ Figma.<br /><br />
                Giá tiền:
                <br /><br />
                <ul>
                    <li>
                        <span>50.000 VNĐ/khóa</span>
                    </li>
                    <li>
                        Phụ thu <span>20.000 VNĐ/video</span> (nếu kèm theo mentor hướng dẫn trực tiếp)
                    </li>
                </ul>
                <div class="btn-group">
                    <buttonMain  class="btn-course" color="background-color: #0FA958; color: white;"
                        text="Xem lộ trình" ></buttonMain>
                    <buttonMain class="btn-course" src="#section-3" text="Liên hệ ngay"></buttonMain>
                </div>
                <br />
            </div>
        </div>
    </div>
</template>
  
<script>
import headerMain from "../base/headerMain.vue";
import frameImg from "../base/franeImg.vue";
import buttonMain from "../base/button.vue";
export default {
    components: {
        headerMain,
        frameImg,
        buttonMain,
    },
};
</script>
  
<style scoped>
.course {
    margin-top: 100px;
}

.btn-group {
    display: flex;
    margin-top: 50px;
    font-size: 20px;
}

.btn-group>.btn-course {
    margin-right: 30px;
}

.contents-80 {
    display: flex;
    flex-direction: column;
}

.contents-80>#content {
    display: flex;
    margin-top: 67px;
}

.contents-80>#content>.textContent>ul>li>span {
    font-family: Montserrat_700;
}

.contents-80>#content>.textContent>ul>li {
    list-style: none;
}

.contents-80>#content>.textContent>ul>li:before {
    content: "  · ";
    font-size: 50px;
    vertical-align: sub;
}

.contents-80>#content>.textContent {
    width: 60%;
    margin-left: 164px;
    font-size: calc(18px + (28 - 18) * ((100vw - 300px) / (1800 - 300)));
    font-family: Montserrat_500;
    line-height: 125%;
}

.contents-80>#content>#frameImgs {
    width: 40%;
}

.textContent>#header {
    display: flex;
    align-items: center;
    font-size: calc(70px + (100 - 70) * ((100vw - 300px) / (1800 - 300)));
    width: 100%;
    margin-bottom: 50px;
}

.contents-80>#header>img {
    height: 50%;
}

.headercourse2 {
    display: none;

}

@media (max-width: 1200px) {

    .headercourse2 {
        display: block;
    }

    .headercourse {
        width: 100%;
        display: none;
        align-items: center;
        justify-content: center;
    }

    .headercourse3 {
        display: none !important;
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
}
</style>