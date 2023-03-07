<template>
  <!-- <button @click="openPopup(true)">popup</button> -->
  <SelectOffers v-if="selectOffers" />
  <header>
    <Header v-if="desktopView" />
    <HeaderMobile v-if="mobileView" />
  </header>
  <body>
    <Content />
  </body>
</template>

<script>
// @ is an alias to /src

import Header from "../components/Header.vue";
import HeaderMobile from "../components/mobile/HeaderMobile.vue";
import Content from "../components/desktop/Content.vue";
import SelectOffers from "../components/desktop/SelectOffers.vue";
import { ref } from 'vue';

export default {
  name: "HomeView",
  components: {
    Header,
    HeaderMobile,
    Content,
    SelectOffers,
  },
  data() {
    return {
      mobileView: false,
      desktopView: true,
      selectOffers: true,
    };
  },
  methods:{
     openPopup(param){
      this.selectOffers = param
     } 
    }
};
</script>

<style scoped lang="scss">
@import "../styles/views/_homepage.scss";
</style>
