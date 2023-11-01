<template>
  <div class="navbar">
    <div class="mini-nav">
      <hamburgerButton @click="show = !show" class="buttonHam" />
      <div class="logo-nav">
        <img src="../../assets/image/logoL.png" alt="" />
      </div>
    </div>
    <Transition>
      <ul id="menu" v-if="(!show || showRes)">
        <li v-for="(item) in list" :key="item.id">
          <a v-bind:class="{ active: item.isActive == true }" v-bind:href="item.linkId">{{ item.text }}</a>
        </li>
        <!-- <nav-item v-for="item in list" :text="item.text" :linkId="item.linkId" :isActive="item.isActive"
          key="item.id"></nav-item>\ -->
        <!-- <li><a v-bind:class="{ active: arrayHover == 0 }" href="#section-1">Trang chủ</a></li>
        <li><a v-bind:class="{ active: arrayHover == 1 }" href="#section-2">Giới thiệu</a></li>
        <li><a v-bind:class="{ active: arrayHover == 2 }" href="#section-3">Thông tin dịch vụ</a></li>
        <li><a v-bind:class="{ active: arrayHover == 3 }" href="#section-4">Liên Hệ </a></li> -->
      </ul>
    </Transition>
  </div>
</template>
<script setup>
import { ref } from "vue";
const show = ref(true);
/* eslint-disable */

const list = ref([{
  id: 0,
  linkId: '#section-0',
  text: 'Trang Chủ',
  isActive: true
},
{
  id: 1,
  linkId: '#section-1',
  text: 'Giới Thiệu',
  isActive: false
},
{
  id: 2,
  linkId: '#section-2',
  text: 'Thông Tin Dịch Vụ',
  isActive: false
},
{
  id: 3,
  linkId: '#section-3',
  text: 'Liên Hệ',
  isActive: false
}]);

</script>

<script>
import "../styles/navbar.css";
import hamburgerButton from "../base/hamburger.vue";
export default {
  name: "TheNavbar",
  components: {
    hamburgerButton,
  },
  data() {
    return {
      showRes: window.innerWidth > 1000,
      contentsz: [],
    };
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onResize() {
      this.showRes = window.innerWidth > 1000;

    },
  },
};
</script>

<style scoped>
.navbar>ul {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
}

.navbar>ul>li {
  margin: 40px;
  gap: 80px;
}

.navbar>ul>li>a:hover,
.active {
  transition: 0.2s;
  color: rgba(85, 81, 255, 1);
}


a {
  transition: 1s;
  color: black;
  text-decoration: none;
}

.navbar {
  z-index: 9999;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  min-height: 124px;
  width: 100%;
  font-size: 24px;
  overflow: hidden;
}

.logo-navbar {
  display: none;
}

.logo-nav>img {
  width: 100%;
  height: 100%;
}

.navbar>button {
  display: none;
}

.mini-nav {
  display: none;
}

@media (max-width: 1000px) {

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {

    opacity: 0;
  }

  .menubig {
    display: none;
  }

  .navbar>.mini-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 30px;
    width: 100%;
    height: 60px;
  }

  .buttonHam {
    position: absolute;
    left: 30px;
    scale: 0.5;
  }

  .logo-nav {
    height: 1.7em;
    width: 1.7em;
    background-color: black;
    border-radius: 100%;
  }

  .navbar {
    display: flex;
    flex-direction: column;
    min-height: 60px;
  }

  #menu {}

  .navbar>ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: start;
    height: 100vh;
  }

  .logo-navbar {
    display: flex;
  }
}

@media (max-width: 500px) {
  .navbar>ul>li {
    font-size: 16px;
    margin: 20px;
  }

  .navbar>ul {
    margin-top: 10px;
  }
}
</style>