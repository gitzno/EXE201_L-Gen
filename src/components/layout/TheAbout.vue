<template>
    <div class="contents-80">
        <div id="header">
            <headerMain class="" text="Về nhóm"></headerMain>
            <img src="../../assets/image/Vector.png" alt="">
        </div>
        <div id="content">
            <div id="frameImgs">
                <frameImg id="frameImg" img="1"></frameImg>
            </div>
            <div class="textContent">
                L-Gen là nhóm gồm 5 bạn trẻ có niềm đam mê dành cho công nghệ.<br><br>
                Với mong muốn hỗ trợ các bạn đang học cách sử dụng Figma nói chung và các bạn học chuyên ngành Interaction
                design nói riêng, nhóm đã xây dựng nên một cộng đồng giúp đỡ với nguồn nhân lực vô cùng uy tín và chất
                lượng.<br><br>
                Qua các khóa học hay dịch vụ review, chúng mình hi vọng rằng các bạn sẽ có thể trở nên thành thạo công cụ
                này và đặc biệt, dành yêu thích dành cho thiết kế tương tác</div>
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

.contents-80>#content {
    display: flex;
    margin-top: 67px;
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

.contents-80>#header {
    display: flex;
    align-items: center;
    font-size: calc(70px + (100 - 70) * ((100vw - 300px) / (1800 - 300)));
    width: 100%;
    margin-top: 124px;
}
.contents-80>#header>img{
    height: 50%;
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
}
</style>