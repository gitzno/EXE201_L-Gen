<template>
    <div class="all-footer">
        <div class="footer-web-lgen">
            <div class="logoLgen">
                <div class="frame-logolgen">
                    <img src="../../assets/image/logoL.png" alt="">
                </div>
            </div>
            <div class="contact-footer">
                <ul>
                    <li class="address-logo">Đại học FPT, Khu Công nghệ cao Hòa Lạc,<br>
                        KM 29 Đại lộ Thăng Long, Hà Nội, Việt Nam.</li>
                    <li class="mail-logo">hoccunglgen@gmail.com</li>
                </ul>
            </div>
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhoccunglgen&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

        </div>
    </div>
    <div class="gitzno">@gitzno</div>
</template>

<script>


export default {
    components: {

    }
}
</script>

<style scoped>
.contact-footer>ul>li {
    font-family: Montserrat;
    font-size: 18px;
    line-height: 150%;
    margin: 10px;
}

.contact-footer>ul>.address-logo {
    list-style-image: url('../../assets/image/address.svg');
}

.contact-footer>ul>.mail-logo {
    list-style-image: url('../../assets/image/mail.svg');
}

.frame-logolgen {
    background-color: #222222;
    padding: 30px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.frame-logolgen>img {
    max-width: 100%
}

.all-footer {
    width: 100%;
    background-color: #FFC700;
    border-top: #000 3px solid;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-web-lgen {
    position: relative;
    width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 10px 50px 0px;

}

.gitzno {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #836600;
    padding: 5px 0;
    color: white;
    font-size: 10px;

}

@media (max-width: 1000px) {
    .footer-web-lgen {
        flex-direction: column;
        padding-right: 0;
    }

    .contact-footer {
        margin-top: 100px;
        width: 80%;
    }

    .fbframe {
        display: none;
    }
}
</style>