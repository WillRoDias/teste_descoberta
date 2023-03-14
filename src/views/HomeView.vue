<template>
  <header class="header">
    <Header v-if="desktopView" />
    <HeaderMobile v-if="mobileView" />
  </header>
  <body class="body">
    <Content v-if="desktopView" />
    <ContentMobile v-if="mobileView" />
  </body>
  <footer class="footer">
    <!-- <Footer /> -->
  </footer>
</template>

<script>
// @ is an alias to /src

import Header from "../components/Header.vue";
import HeaderMobile from "../components/mobile/HeaderMobile.vue";
import Content from "../components/desktop/Content.vue";
import ContentMobile from "../components/mobile/ContentMobile.vue";
import Footer from "../components/desktop/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    HeaderMobile,
    Content,
    ContentMobile,
    Footer,
  },
  data() {
    return {
      mobileView: true,
      desktopView: false,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../styles/views/_homepage.scss";
</style>
