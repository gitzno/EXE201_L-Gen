<template>
    <div class="newDiv" style="width: 100%; display: flex; justify-content: center;">
        <div class="bg-img">
            <img src="../../assets/image/contact.png" alt="">
        </div>
        <div class="contents-80 course" style="">
            <div id="content" style="z-index: 1;">
                <div class="textContent newtextContent ">
                    <div id="header" class="headercourse">
                        <headerMain class="" text="Liên lạc ngay"></headerMain>
                        <img src="../../assets/image/Vector.png" alt="">
                    </div>
                    <formSendMail></formSendMail>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import headerMain from "../base/headerMain.vue";
import formSendMail from "../base/formService.vue";
export default {
    components: {
        headerMain,
        formSendMail,

    },
};
</script>
  
<style scoped>
.contents-80 {
    width: 1400px;
}
.bg-img {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
}

.bg-img>img {
    /* background-color: #4CAF50; */
    width: 2000px;
}

.container {
    display: block;
    margin: auto;
    text-align: center;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    width: 50%;
}

label {
    float: left;
}

input[type=text],
[type=email],
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

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
}</style>