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
}

</style>