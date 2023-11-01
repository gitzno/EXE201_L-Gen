<template>
  <div>
    <LayoutMain/>
  </div>
</template>

<script>
//import here with link ./styles/app.css
import "./components/styles/app.css";
import LayoutMain from "./components/layout/TheMainLayout.vue";
export default {
  name: "App",
  components: {
    LayoutMain,
  },
};
</script>

<style>
@font-face {
    font-family: Figma-font;
    src: url(./assets/font/WhyteInktrap-Medium.ttf);
}

@font-face {
    font-family: Montserrat;
    src: url(./assets/font/Montserrat-400.ttf);
}

@font-face {
    font-family: Montserrat_500;
    src: url(./assets/font/Montserrat-500.ttf);
}

@font-face {
    font-family: Montserrat_600;
    src: url(./assets/font/Montserrat-600.ttf);
}

@font-face {
    font-family: Montserrat_700;
    src: url(./assets/font/Montserrat-700.ttf);
}

#app {
  font-family: Montserrat_600;
  font-size: 1vw;
}


</style>
