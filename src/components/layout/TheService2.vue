<template>
    <div class="contents-80 course">
        <div id="content">
            <div class="textContent newtextContent ">
                <div id="header" class="headercourse">
                    <headerMain class="" text="Dịch vụ review"></headerMain>
                    <img src="../../assets/image/Vector.png" alt="">
                </div>
                Với dịch vụ này, chúng mình sẽ hỗ trợ bạn review các báo cáo nghiên cứu hoặc các sản phẩm UI.<br /><br />
                Giá tiền:
                <br /><br />
                <ul>
                    <li>
                        <span>100.000 VNĐ/dự án</span>
                    </li>
                    <li>
                        <span>20.000 VNĐ/giờ</span> (thời gian tính kể từ khi confirm, có link Google Meet để theo dõi)
                    </li>
                </ul>
                <div class="btn-group">
                    <buttonMain class="btn-course" src="#" text="Liên hệ ngay"></buttonMain>
                </div>
                <br />
            </div>
            <div id="frameImgs">
                <frameImg id="frameImg" img="1"></frameImg>
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
.contents-80>#content>.newtextContent {
    margin-left: 0px;
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
.headercourse2{
        display: none;
        
    }
@media (max-width: 1200px) {

    .headercourse2{
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