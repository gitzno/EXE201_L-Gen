<template>
    <div id="textButton" :style="style">
        <a v-if="src" v-bind:href="src">
            {{ text }}
        </a>
        <div v-if="!src">
            {{ text }}
        </div>
    </div>
</template>

<script>
export default {

    name: "buttonMain",
    props: ["text", "src", "color"],
    computed: {
        style() {
            return this.color;
        }
    },
}
</script>

<style scoped>
#textButton {

    border-radius: 60px;
    border: 3px solid #000;
    background: #FFC700;
    box-shadow: 3px 6px 0px 0px #000;
    padding: 24px 26px;
    text-decoration: none;
}

#textButton>a,
#textButton>div {
    font-size: calc(13px + (20 - 13) * ((100vw - 300px) / (1800 - 300)));
    font-family: Montserrat_600;
    text-decoration: none;
}

#textButton>a {
    color: black;
}

@media (max-width: 750px) {
    #textButton>a {
        padding: 12px 13px;
    }
}
</style>