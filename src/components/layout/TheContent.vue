<template>
    <div class="contents">
        <section id="section-0">
            <TheHomepage />
        </section>
        <section id="section-1">
            <TheAbout />
        </section>
        <section id="section-z">
            <TheAboutTeam />
        </section>
        <section id="section-2">
            <TheService />
        </section>
        <section id="section-z">
            <TheService2 />
        </section>
        <section id="section-3">
            <TheForm />
        </section>
        <TheFooter></TheFooter>
    </div>
</template>

<script>
import TheHomepage from './TheHomepage.vue';
import TheAbout from './TheAbout.vue';
import TheAboutTeam from "./TheAboutTeam.vue";
import TheService from './TheService.vue';
import TheService2 from './TheService2.vue';
import TheForm from './TheForm.vue';
import TheFooter from './TheFooter.vue';

export default {
    name: 'TheContent',
    components: {
        TheHomepage,
        TheAbout,
        TheAboutTeam, 
        TheService,
        TheService2,
        TheForm,
        TheFooter
    }
}
</script>

<style scoped>
.contents>section {
    min-height: 100vh;
    display: flex;
    justify-content: center;
}

.contents-80 {
    width: 1400px;
}
</style>