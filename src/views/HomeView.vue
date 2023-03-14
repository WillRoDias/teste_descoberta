<template>
  <header class="header">
    <Header v-if="!isMobile"/>
    <HeaderMobile v-if="isMobile"/>
  </header>
  <body class="body">
    <Content v-if="!isMobile"/>
    <ContentMobile v-if="isMobile"/>
  </body>
  <footer class="footer">
    <Footer v-if="!isMobile"/>
    <FooterMobile v-if="isMobile"/>
  </footer>
</template>

<script>
// @ is an alias to /src

import Header from "../components/Header.vue";
import HeaderMobile from "../components/mobile/HeaderMobile.vue";
import Content from "../components/desktop/Content.vue";
import ContentMobile from "../components/mobile/ContentMobile.vue";
import Footer from "../components/desktop/Footer.vue";
import FooterMobile from "../components/mobile/FooterMobile.vue";

export default {
  name: "HomeView",
  data() {
    return {
      isMobile: true
    }
  },
  created() {
    if(screen.width <= 760){
      this.isMobile = true
    }
    else {
      this.isMobile = false
    }
  },
  components: {
    Header,
    HeaderMobile,
    Content,
    ContentMobile,
    Footer,
    FooterMobile,
  },
};
</script>

<style scoped lang="scss">
@import "../styles/views/_homepage.scss";
</style>
