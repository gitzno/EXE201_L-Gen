<template>
    <div id="textHeader">
        {{ text }}
    </div>
</template>

<script>
export default {
    name: "chuChinh",
    props: ["text"],
    components: {

    }
}
</script>

<style scoped>
#textHeader {
    font-family: Figma-font;
    font-size: calc(40px + (90 - 40) * ((100vw - 300px) / (1800 - 300)));
}

</style>