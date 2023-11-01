<template>
    <div id="textButton" >
        <a href="{{ src }}" :style="style">
            {{ text }}
        </a>
    </div>
</template>

<script>
export default {
    name: "buttonMain",
    props: ["text", "src", "color"],
    computed: {
      style () {
        return this.color;
      }
    },
    components: {

    }
}
</script>

<style scoped>
#textButton {}

#textButton>a {
    
    font-size: calc(13px + (20 - 13) * ((100vw - 300px) / (1800 - 300)));
    font-family: Montserrat_600;
    color: black;
    border-radius: 60px;
    border: 3px solid #000;
    background: #FFC700;
    box-shadow: 3px 6px 0px 0px #000;
    padding: 24px 26px;
    text-decoration: none;
}

@media (max-width: 750px) {
    #textButton>a {
        padding: 12px 13px;
    }
}
</style>