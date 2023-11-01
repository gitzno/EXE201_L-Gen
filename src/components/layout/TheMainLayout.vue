<template>
  <div class="layout">
    <TheNavbar />
    <TheContent />
  </div>
</template>
  
  <script>
import TheNavbar from "./TheNavbar.vue";
import TheContent from "./TheContent.vue";

export default {
  name: "LayoutMain",
  components: {
    TheContent,
    TheNavbar,
  },
};
</script>
  
<style>
.layout {
  display: flex;
  flex-direction: column;
}
</style>
  