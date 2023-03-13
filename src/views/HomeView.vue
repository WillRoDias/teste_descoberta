<template>
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

export default {
  name: "HomeView",
  components: {
    Header,
    HeaderMobile,
    Content,
  },
  data() {
    return {
      mobileView: false,
      desktopView: true,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../styles/views/_homepage.scss";
</style>
